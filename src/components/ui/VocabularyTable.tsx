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
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  
  return (
    <div className="group bg-white dark:bg-gray-800/50 rounded-3xl shadow-premium dark:shadow-premium-dark overflow-hidden border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm transition-premium hover:shadow-premium-hover">
      {/* Premium Header with Animated Background */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 px-6 py-6 overflow-hidden">
        {/* Animated shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
        <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
        
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-500">
              {Icons.book("w-7 h-7 text-white drop-shadow-lg")}
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-200 uppercase tracking-widest">Vocabulario Esencial</span>
              <h3 className="text-xl font-black text-white tracking-tight drop-shadow-lg">{title}</h3>
            </div>
          </div>
          
          {/* Word count badge */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-2xl font-black text-white">{items.length}</span>
            <span className="text-xs font-semibold text-indigo-200">palabras</span>
          </div>
        </div>
      </div>
      
      {/* Table with refined styling */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50 dark:from-gray-800 dark:via-slate-800 dark:to-gray-800">
              <th className="px-3 py-4 text-left w-10">
                <span className="text-xs font-bold text-gray-400 dark:text-gray-500">#</span>
              </th>
              <th className="px-4 py-4 text-left">
                <span className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <svg className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                  English
                </span>
              </th>
              <th className="px-4 py-4 text-left">
                <span className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                  Español
                </span>
              </th>
              {showExample && (
                <th className="px-4 py-4 text-left hidden md:table-cell">
                  <span className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">Ejemplo</span>
                </th>
              )}
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700/50">
            {items.map((item, index) => (
              <tr 
                key={index} 
                className="group/row relative transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                onClick={() => setExpandedRow(expandedRow === index ? null : index)}
                style={{
                  backgroundColor: hoveredRow === index ? 'rgba(99, 102, 241, 0.05)' : expandedRow === index ? 'rgba(99, 102, 241, 0.08)' : 'transparent'
                }}
              >
                {/* Row number */}
                <td className="px-3 py-4">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    hoveredRow === index || expandedRow === index
                      ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 scale-110'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
                  }`}>
                    {index + 1}
                  </span>
                </td>
                
                {/* English word */}
                <td className="relative px-4 py-4">
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 rounded-r-full bg-gradient-to-b from-indigo-500 to-purple-500 transition-all duration-300 ${hoveredRow === index || expandedRow === index ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
                  <span className={`text-base font-bold transition-all duration-300 ${
                    hoveredRow === index || expandedRow === index
                      ? 'text-indigo-700 dark:text-indigo-300'
                      : 'text-indigo-600 dark:text-indigo-400'
                  }`}>
                    {item.english}
                  </span>
                </td>
                
                {/* Spanish translation */}
                <td className="px-4 py-4">
                  <span className="text-base text-gray-700 dark:text-gray-300 font-medium">
                    {item.spanish}
                  </span>
                </td>
                
                {/* Example (desktop) */}
                {showExample && item.example && (
                  <td className="px-4 py-4 hidden md:table-cell">
                    <span className="text-sm text-gray-500 dark:text-gray-400 italic leading-relaxed bg-gray-50 dark:bg-gray-700/30 px-3 py-1.5 rounded-lg">
                      &quot;{item.example}&quot;
                    </span>
                  </td>
                )}
                
                {/* Expand indicator */}
                <td className="px-4 py-4 md:hidden">
                  {item.example && (
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      expandedRow === index ? 'bg-indigo-100 dark:bg-indigo-900/30 rotate-180' : 'bg-gray-100 dark:bg-gray-700'
                    }`}>
                      <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Expanded example for mobile */}
        {expandedRow !== null && items[expandedRow]?.example && (
          <div className="md:hidden px-6 py-4 bg-indigo-50 dark:bg-indigo-900/20 border-t border-indigo-200 dark:border-indigo-800/50 animate-fade-in-up">
            <p className="text-sm text-indigo-700 dark:text-indigo-300 italic">
              <span className="font-bold not-italic">Ejemplo:</span> &quot;{items[expandedRow].example}&quot;
            </p>
          </div>
        )}
      </div>
      
      {/* Premium Footer with Stats */}
      <div className="px-6 py-4 bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50 dark:from-gray-800 dark:via-slate-800 dark:to-gray-800 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          Haz clic en una fila para ver más detalles
        </p>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold">
            {items.length} términos
          </span>
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
    </div>
  );
}
