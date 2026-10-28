// src/components/ContentRenderer.jsx
import React, { useMemo } from "react";
import { fisicaContents } from "@/contents/fisica/fisica";
import katex from "katex";
import "katex/dist/katex.min.css";

// Componente auxiliar para renderizar a fórmula matemática com segurança
function MathFormula({ math }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: true,
        throwOnError: false,
      });
    } catch (error) {
      return math;
    }
  }, [math]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className="text-base text-slate-900 dark:text-white overflow-x-auto py-1"
    />
  );
}

export function ContentRenderer({ selectedTopic }) {
  if (selectedTopic?.isIntro) {
    return <div>...</div>;
  }

  const topicData = fisicaContents[selectedTopic?.id];

  if (!topicData) {
    return (
      <div className="space-y-4">
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          Documentação
        </span>
        <h1 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
          {selectedTopic?.name}
        </h1>
        <hr className="my-4 border-slate-200 dark:border-slate-800" />
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Conteúdo detalhado sobre <strong>{selectedTopic?.name}</strong> em desenvolvimento.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Categoria e Títulos */}
      <div>
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          {topicData.category}
        </span>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
          {topicData.title}
        </h1>
        {topicData.subtitle && (
          <p className="text-base text-slate-500 dark:text-slate-400 mt-1">
            {topicData.subtitle}
          </p>
        )}
      </div>

      <hr className="border-slate-200 dark:border-slate-800" />

      {/* Renderização direta dos parágrafos de texto */}
      <div className="space-y-4">
        {topicData.content?.map((text, index) => (
          <p
            key={`content-${index}`}
            className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            {text}
          </p>
        ))}
      </div>

      {/* Renderização das fórmulas com KaTeX puro */}
      {topicData.formulas && topicData.formulas.length > 0 && (
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
            Fórmulas Principais
          </h3>
          <div className="space-y-2">
            {topicData.formulas.map((formula, index) => (
              <div
                key={`formula-${index}`}
                className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 text-center"
              >
                <MathFormula math={formula} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}