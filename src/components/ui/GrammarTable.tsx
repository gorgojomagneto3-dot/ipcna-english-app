'use client';

import { useState } from 'react';
import { Icons } from './Icons';

interface GrammarRow {
  columns: string[];
}

interface GrammarTableProps {
  title: string;
  headers: string[];
  rows: GrammarRow[];
  highlightFirst?: boolean;
}

export default function GrammarTable({ title, headers, rows, highlightFirst = true }: GrammarTableProps) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  
  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
      {/* Premium Header */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-6 py-5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-teal-400/10 rounded-full blur-xl"></div>
        
        <div className="relative flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/10">
            {Icons.academic("w-6 h-6 text-white")}
          </div>
          <div>
            <span className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">Gramática</span>
            <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
          </div>
        </div>
      </div>
      
      {/* Table with refined styling */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800 dark:to-slate-800">
              {headers.map((header, i) => (
                <th key={i} className="px-6 py-4 text-left">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {header}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700/50">
            {rows.map((row, rowIndex) => (
              <tr 
                key={rowIndex} 
                className="group transition-all duration-300"
                onMouseEnter={() => setHoveredRow(rowIndex)}
                onMouseLeave={() => setHoveredRow(null)}
                style={{
                  backgroundColor: hoveredRow === rowIndex ? 'rgba(16, 185, 129, 0.05)' : 'transparent'
                }}
              >
                {row.columns.map((cell, cellIndex) => (
                  <td 
                    key={cellIndex} 
                    className={`relative px-6 py-4 text-base ${
                      cellIndex === 0 && highlightFirst 
                        ? 'font-semibold text-emerald-600 dark:text-emerald-400' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {/* Hover indicator on first cell */}
                    {cellIndex === 0 && (
                      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-gradient-to-b from-emerald-500 to-teal-500 transition-all duration-300 ${hoveredRow === rowIndex ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
                    )}
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 opacity-50"></div>
    </div>
  );
}
