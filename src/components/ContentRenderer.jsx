// src/components/ContentRenderer.jsx
import React from "react";
import { fisicaContents } from "@/contents/fisica/fisica";

function BlockRenderer({ block }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h2 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
          {block.text}
        </h2>
      );

    case "list":
      return (
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-400">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "formula":
      return (
        <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 text-center">
          <code className="text-base font-medium text-slate-900 dark:text-white">
            {block.expression}
          </code>
        </div>
      );

    case "callout":
      return (
        <div className="rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950 p-4">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            {block.text}
          </p>
        </div>
      );

    case "example":
      return (
        <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 space-y-2">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            {block.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {block.text}
          </p>
        </div>
      );

    default:
      return null;
  }
}

export function ContentRenderer({ selectedTopic }) {
  if (selectedTopic?.isIntro) {
    return <div>...</div>;
  }

  const topicData = fisicaContents[selectedTopic?.id];


    console.log("selectedTopic:", selectedTopic);
    console.log("topicData:", topicData);
    console.log("content:", topicData?.content);

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
    <div className="space-y-4">
      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
        {topicData.category}
      </span>

      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        {topicData.title}
      </h1>

      {topicData.subtitle && (
        <p className="text-base text-slate-500 dark:text-slate-400 -mt-2">
          {topicData.subtitle}
        </p>
      )}

      <hr className="my-4 border-slate-200 dark:border-slate-800" />

      <div className="space-y-4">
        {topicData.content.map((block, index) => (
          <BlockRenderer key={index} block={block} />
        ))}
      </div>
    </div>
  );
}