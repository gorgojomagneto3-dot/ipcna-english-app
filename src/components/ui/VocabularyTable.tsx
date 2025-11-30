'use client';

import { useState } from 'react';
import { Icons } from './Icons';

interface VocabularyItem {
  english: string;
  spanish: string;
  example?: string;
}

interface VocabularyTableProps {
  title: string;
  items: VocabularyItem[];
  showExample?: boolean;
}

export default function VocabularyTable({ title, items, showExample = true }: VocabularyTableProps) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  
  return (
    <div className="group bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-gray-300/50 dark:hover:shadow-indigo-500/5">
      {/* Premium Header */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 px-6 py-5 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl"></div>
        
        <div className="relative flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/10">
            {Icons.book("w-6 h-6 text-white")}
          </div>
          <div>
            <span className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">Vocabulario</span>
            <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
          </div>
        </div>
      </div>
      
      {/* Table with refined styling */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800 dark:to-slate-800">
              <th className="px-6 py-4 text-left">
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">English</span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Español</span>
              </th>
              {showExample && (
                <th className="px-6 py-4 text-left hidden md:table-cell">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Ejemplo</span>
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700/50">
            {items.map((item, index) => (
              <tr 
                key={index} 
                className="group/row relative transition-all duration-300"
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                style={{
                  backgroundColor: hoveredRow === index ? 'rgba(99, 102, 241, 0.05)' : 'transparent'
                }}
              >
                {/* Hover indicator line */}
                <td className="relative px-6 py-4">
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-gradient-to-b from-indigo-500 to-purple-500 transition-all duration-300 ${hoveredRow === index ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
                  <span className="text-base font-semibold text-indigo-600 dark:text-indigo-400 group-hover/row:text-indigo-700 dark:group-hover/row:text-indigo-300 transition-colors duration-300">
                    {item.english}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-base text-gray-700 dark:text-gray-300">
                    {item.spanish}
                  </span>
                </td>
                {showExample && item.example && (
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-sm text-gray-500 dark:text-gray-400 italic leading-relaxed">
                      &quot;{item.example}&quot;
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer accent */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-50"></div>
    </div>
  );
}
