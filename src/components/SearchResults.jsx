// src/components/SearchResults.jsx
import React from 'react';
import { FileText } from 'lucide-react';
import { globalSearch } from '@/utils/searchUtils';

export function SearchResults({ searchQuery, onSelectTopic, clearSearch }) {
  // Executa a busca global com base no que foi digitado
  const results = globalSearch(searchQuery);

  // Se a barra estiver vazia, não renderiza nada
  if (!searchQuery || searchQuery.trim() === "") return null;

  return (
    <div className="absolute left-0 right-0 mt-2 max-h-96 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900 z-50 p-2 space-y-1">
      {results.length > 0 ? (
        results.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              onSelectTopic(item);
              clearSearch(); // Limpa a busca e fecha os resultados ao clicar
            }}
            className="w-full text-left flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
          >
            <FileText className="h-4 w-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  {item.name}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                {item.preview}
              </p>
            </div>
          </button>
        ))
      ) : (
        <div className="p-4 text-center text-xs text-slate-500 dark:text-slate-400">
          Nenhum conteúdo encontrado para "{searchQuery}"
        </div>
      )}
    </div>
  );
}