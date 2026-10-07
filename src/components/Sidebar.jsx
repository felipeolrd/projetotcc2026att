"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, Home } from 'lucide-react';

export function Sidebar({ isOpen, selectedTopic, setSelectedTopic, searchQuery }) {
  // Estado para controlar quais seções estão abertas/fechadas
  const [openSections, setOpenSections] = useState({
    Física: true,
    Química: true,
    Biologia: true,
    Matemática: true,
  });

  // Estrutura das matérias e seus tópicos
  const menuData = [
    {
      title: 'Física',
      topics: [
        { id: 'fis-1', name: 'Cinemática e MUV' },
        { id: 'fis-2', name: 'Leis de Newton' },
        { id: 'fis-3', name: 'Trabalho e Energia' },
        { id: 'fis-4', name: 'Termodinâmica' },
        { id: 'fis-5', name: 'Óptica e Ondas' },
      ],
    },
    {
      title: 'Química',
      topics: [
        { id: 'qui-1', name: 'Tabela Periódica' },
        { id: 'qui-2', name: 'Ligações Químicas' },
        { id: 'qui-3', name: 'Estequiometria' },
        { id: 'qui-4', name: 'Termoquímica' },
        { id: 'qui-5', name: 'Química Orgânica' },
      ],
    },
    {
      title: 'Biologia',
      topics: [
        { id: 'bio-1', name: 'Citologia e Organelas' },
        { id: 'bio-2', name: 'Genética e DNA' },
        { id: 'bio-3', name: 'Ecologia e Biomas' },
        { id: 'bio-4', name: 'Evolução Biológica' },
        { id: 'bio-5', name: 'Fisiologia Humana' },
      ],
    },
    {
      title: 'Matemática',
      topics: [
        { id: 'mat-1', name: 'Cálculo Diferencial' },
        { id: 'mat-2', name: 'Álgebra Linear' },
        { id: 'mat-3', name: 'Geometria Analítica' },
        { id: 'mat-4', name: 'Estatística e Probabilidade' },
        { id: 'mat-5', name: 'Trigonometria' },
      ],
    },
  ];

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  if (!isOpen) return null;

  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 h-[calc(100vh-61px)] sticky top-[61px] overflow-y-auto p-4 transition-all duration-200">
      
      {/* 1. PRIMEIRA PARTE: Campo de Introdução ao Site (sem subgrupos) */}
      <div className="mb-2">
        <button
          onClick={() => setSelectedTopic({ id: 'intro', name: 'Introdução ao Site', isIntro: true })}
          className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
            selectedTopic?.id === 'intro'
              ? 'bg-blue-600 text-white shadow-sm dark:bg-blue-500'
              : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
          }`}
        >
          <Home className="h-4 w-4" />
          <span>Introdução ao Site</span>
        </button>
      </div>

      {/* 2. DIVISÓRIA */}
      <hr className="my-3 border-slate-200 dark:border-slate-800" />

      {/* 3. SEGUNDA PARTE: Áreas de Ensino e Matérias (com visibilidade e fonte reduzidas) */}
      <div className="space-y-1">
        <span className="block px-1 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Áreas de Ensino
        </span>

        {menuData.map((section) => {
          const filteredTopics = section.topics.filter((topic) =>
            topic.name.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (searchQuery && filteredTopics.length === 0) return null;

          const isExpanded = openSections[section.title] || searchQuery.length > 0;

          return (
            <div key={section.title} className="py-0.5">
              {/* Título da Matéria (Fonte menor e sem negrito pesado) */}
              <button
                onClick={() => toggleSection(section.title)}
                className="flex w-full items-center justify-between py-1.5 px-2 text-left text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/50"
              >
                <span>{section.title}</span>
                {isExpanded ? (
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                )}
              </button>

              {/* Tópicos com menos visibilidade */}
              {isExpanded && (
                <ul className="mt-0.5 space-y-0.5 pl-2">
                  {filteredTopics.map((topic) => {
                    const isSelected = selectedTopic?.id === topic.id;
                    return (
                      <li key={topic.id}>
                        <button
                          onClick={() => setSelectedTopic(topic)}
                          className={`flex w-full items-center gap-2 rounded-md px-2 py-1 text-[11px] font-normal transition-colors ${
                            isSelected
                              ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 font-medium'
                              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-200'
                          }`}
                        >
                          <FileText className="h-3 w-3 opacity-60" />
                          <span>{topic.name}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}