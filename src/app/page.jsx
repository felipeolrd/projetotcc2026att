"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/NavBar';
import { Sidebar } from '@/components/Sidebar';

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState({
    id: 'intro',
    name: 'Introdução ao Site',
    isIntro: true,
  });
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col">
      {/* Navbar Superior */}
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex flex-1">
        {/* Sidebar com a nova estrutura */}
        <Sidebar
          isOpen={isSidebarOpen}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          searchQuery={searchQuery}
        />

        {/* Área Principal de Conteúdo */}
        <main className="flex-1 p-8 lg:p-12 max-w-4xl">
          {selectedTopic?.isIntro ? (
            /* Conteúdo da Introdução ao Site */
            <div className="space-y-4">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Visão Geral
              </span>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Bem-vindo ao Stem Docs
              </h1>
              <hr className="my-4 border-slate-200 dark:border-slate-800" />
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                O <strong>Stem Docs</strong> é sua plataforma de documentação e consulta rápida para as disciplinas de Física, Química, Biologia e Matemática.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Utilize o menu lateral para navegar entre as áreas de ensino e acessar os materiais detalhados de cada tópico.
              </p>
            </div>
          ) : selectedTopic ? (
            /* Conteúdo dos Tópicos das Matérias */
            <div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Documentação
              </span>
              <h1 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                {selectedTopic.name}
              </h1>
              <hr className="my-4 border-slate-200 dark:border-slate-800" />
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Conteúdo detalhado sobre <strong>{selectedTopic.name}</strong>.
              </p>
            </div>
          ) : (
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
              <p className="text-xs text-slate-400 dark:text-slate-500">
                Selecione uma opção no menu lateral para visualizar o conteúdo.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}