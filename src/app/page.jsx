"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/NavBar';
import { Sidebar } from '@/components/Sidebar';
import { ContentRenderer } from '@/components/ContentRenderer';

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
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex flex-1">
        <Sidebar
          isOpen={isSidebarOpen}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          searchQuery={searchQuery}
        />

        <main className="flex-1 p-8 lg:p-12 max-w-4xl">
          <ContentRenderer selectedTopic={selectedTopic} />
        </main>
      </div>
    </div>
  );
}