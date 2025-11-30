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
  note?: string;
}

export default function GrammarTable({ title, headers, rows, highlightFirst = true, note }: GrammarTableProps) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  
  return (
    <div className="group bg-white dark:bg-gray-800/50 rounded-3xl shadow-premium dark:shadow-premium-dark overflow-hidden border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm transition-premium hover:shadow-premium-hover">
      {/* Premium Header with Animated Background */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-6 py-6 overflow-hidden">
        {/* Animated shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
        <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-teal-400/20 rounded-full blur-xl"></div>
        
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-500">
              {Icons.academic("w-7 h-7 text-white drop-shadow-lg")}
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-200 uppercase tracking-widest">Punto Gramatical</span>
              <h3 className="text-xl font-black text-white tracking-tight drop-shadow-lg">{title}</h3>
            </div>
          </div>
          
          {/* Stats badge */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-2xl font-black text-white">{rows.length}</span>
            <span className="text-xs font-semibold text-emerald-200">ejemplos</span>
          </div>
        </div>
      </div>
      
      {/* Note section if provided */}
      {note && (
        <div className="px-6 py-4 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-amber-900/20 border-b border-amber-200/50 dark:border-amber-700/30">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
              {Icons.lightbulb("w-5 h-5 text-white")}
            </div>
            <p className="text-sm text-amber-800 dark:text-amber-200 font-medium leading-relaxed pt-2">{note}</p>
          </div>
        </div>
      )}
      
      {/* Table with premium styling */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50 dark:from-gray-800 dark:via-slate-800 dark:to-gray-800">
              <th className="px-3 py-4 text-left w-12">
                <span className="text-xs font-bold text-gray-400 dark:text-gray-500">#</span>
              </th>
              {headers.map((header, i) => (
                <th key={i} className="px-5 py-4 text-left">
                  <span className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    {i === 0 && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    )}
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
                className={`group/row transition-all duration-300 cursor-pointer animate-fade-in-up`}
                style={{ 
                  animationDelay: `${rowIndex * 0.05}s`, 
                  animationFillMode: 'backwards',
                  backgroundColor: selectedRow === rowIndex 
                    ? 'rgba(16, 185, 129, 0.12)' 
                    : hoveredRow === rowIndex 
                      ? 'rgba(16, 185, 129, 0.05)' 
                      : 'transparent'
                }}
                onMouseEnter={() => setHoveredRow(rowIndex)}
                onMouseLeave={() => setHoveredRow(null)}
                onClick={() => setSelectedRow(selectedRow === rowIndex ? null : rowIndex)}
              >
                {/* Row number */}
                <td className="px-3 py-4">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    hoveredRow === rowIndex || selectedRow === rowIndex
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 scale-110'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
                  }`}>
                    {rowIndex + 1}
                  </span>
                </td>
                
                {row.columns.map((cell, cellIndex) => (
                  <td 
                    key={cellIndex} 
                    className={`relative px-5 py-4 text-base transition-all duration-300 ${
                      cellIndex === 0 && highlightFirst 
                        ? 'font-bold text-emerald-600 dark:text-emerald-400' 
                        : 'text-gray-700 dark:text-gray-300 font-medium'
                    }`}
                  >
                    {/* Hover indicator on first cell */}
                    {cellIndex === 0 && (
                      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 rounded-r-full bg-gradient-to-b from-emerald-500 to-teal-500 transition-all duration-300 ${
                        hoveredRow === rowIndex || selectedRow === rowIndex ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                      }`}></div>
                    )}
                    
                    {/* Cell content with highlight effect */}
                    <span className={`transition-all duration-300 ${
                      cellIndex === 0 && highlightFirst && (hoveredRow === rowIndex || selectedRow === rowIndex)
                        ? 'text-emerald-700 dark:text-emerald-300'
                        : ''
                    }`}>
                      {cell}
                    </span>
                  </td>
                ))}
                
                {/* Selection indicator */}
                <td className="px-4 py-4 hidden md:table-cell">
                  {selectedRow === rowIndex && (
                    <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center animate-success-pop">
                      <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Premium Footer */}
      <div className="px-6 py-4 bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50 dark:from-gray-800 dark:via-slate-800 dark:to-gray-800 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          Haz clic en una fila para resaltarla
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{headers.length} columnas</span>
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500"></div>
    </div>
  );
}
