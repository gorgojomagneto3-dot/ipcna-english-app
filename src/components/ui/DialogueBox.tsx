'use client';

import { useState } from 'react';
import { Icons } from './Icons';

interface DialogueLine {
  speaker: string;
  text: string;
  isAction?: boolean;
}

interface DialogueBoxProps {
  title: string;
  situation?: string;
  lines: DialogueLine[];
}

export default function DialogueBox({ title, situation, lines }: DialogueBoxProps) {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);
  
  const speakerStyles: Record<string, { bg: string; gradient: string; avatar: string; align: string; shadow: string }> = {};
  const stylePalette = [
    { 
      bg: 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20',
      gradient: 'from-indigo-500 to-purple-500',
      avatar: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      align: 'items-start',
      shadow: 'shadow-indigo-500/20'
    },
    { 
      bg: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20',
      gradient: 'from-emerald-500 to-teal-500',
      avatar: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      align: 'items-end',
      shadow: 'shadow-emerald-500/20'
    },
    { 
      bg: 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20',
      gradient: 'from-amber-500 to-orange-500',
      avatar: 'bg-gradient-to-br from-amber-500 to-orange-600',
      align: 'items-start',
      shadow: 'shadow-amber-500/20'
    },
    { 
      bg: 'bg-gradient-to-br from-rose-500/10 to-pink-500/10 dark:from-rose-500/20 dark:to-pink-500/20',
      gradient: 'from-rose-500 to-pink-500',
      avatar: 'bg-gradient-to-br from-rose-500 to-pink-600',
      align: 'items-end',
      shadow: 'shadow-rose-500/20'
    },
  ];
  
  let styleIndex = 0;
  lines.forEach(line => {
    if (!line.isAction && !speakerStyles[line.speaker]) {
      speakerStyles[line.speaker] = stylePalette[styleIndex % stylePalette.length];
      styleIndex++;
    }
  });

  const speakers = Object.keys(speakerStyles);

  return (
    <div className="group bg-white dark:bg-gray-800/50 rounded-3xl shadow-premium dark:shadow-premium-dark overflow-hidden border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm transition-premium hover:shadow-premium-hover">
      {/* Premium Header with Animated Background */}
      <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-6 overflow-hidden">
        {/* Animated shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
        <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-fuchsia-400/20 rounded-full blur-xl"></div>
        
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-500">
              {Icons.chat("w-7 h-7 text-white drop-shadow-lg")}
            </div>
            <div>
              <span className="text-xs font-bold text-purple-200 uppercase tracking-widest">Conversación</span>
              <h3 className="text-xl font-black text-white tracking-tight drop-shadow-lg">{title}</h3>
            </div>
          </div>
          
          {/* Speakers avatars */}
          <div className="hidden sm:flex items-center -space-x-2">
            {speakers.slice(0, 3).map((speaker, i) => (
              <div 
                key={speaker}
                className={`w-10 h-10 rounded-xl ${speakerStyles[speaker].avatar} flex items-center justify-center border-2 border-white/30 shadow-lg`}
                style={{ zIndex: speakers.length - i }}
              >
                <span className="text-white font-bold text-sm">{speaker.charAt(0)}</span>
              </div>
            ))}
            {speakers.length > 3 && (
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center border-2 border-white/30">
                <span className="text-white text-xs font-bold">+{speakers.length - 3}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Situation context */}
      {situation && (
        <div className="px-6 py-5 bg-gradient-to-r from-purple-50 via-violet-50 to-fuchsia-50 dark:from-purple-900/20 dark:via-violet-900/20 dark:to-fuchsia-900/20 border-b border-purple-100/50 dark:border-purple-800/30">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
              {Icons.mapPin("w-5 h-5 text-white")}
            </div>
            <div>
              <span className="text-xs font-bold text-purple-500 dark:text-purple-400 uppercase tracking-widest">Situación</span>
              <p className="text-sm text-purple-700 dark:text-purple-300 font-medium leading-relaxed">{situation}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Chat-style dialogue with stagger animations */}
      <div className="p-6 lg:p-8 space-y-5 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-800/30">
        {lines.map((line, index) => {
          if (line.isAction) {
            return (
              <div 
                key={index} 
                className="flex justify-center py-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
              >
                <span className="px-5 py-2 bg-gray-100 dark:bg-gray-700/50 rounded-full text-xs text-gray-500 dark:text-gray-400 italic font-medium border border-gray-200 dark:border-gray-600/50">
                  {line.text}
                </span>
              </div>
            );
          }
          
          const style = speakerStyles[line.speaker];
          const isLeft = style.align === 'items-start';
          const isHovered = hoveredLine === index;
          
          return (
            <div 
              key={index} 
              className={`flex ${isLeft ? 'justify-start' : 'justify-end'} animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
              onMouseEnter={() => setHoveredLine(index)}
              onMouseLeave={() => setHoveredLine(null)}
            >
              <div className={`flex gap-3 max-w-[85%] ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Avatar with pulse on hover */}
                <div className={`relative w-12 h-12 rounded-xl ${style.avatar} flex items-center justify-center shadow-lg ${style.shadow} flex-shrink-0 transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                  <span className="text-white font-bold text-base">{line.speaker.charAt(0)}</span>
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></div>
                </div>
                
                {/* Message bubble with hover lift */}
                <div className={`relative ${style.bg} rounded-2xl ${isLeft ? 'rounded-tl-sm' : 'rounded-tr-sm'} p-5 border border-gray-100 dark:border-gray-700/30 shadow-sm transition-all duration-300 ${isHovered ? 'shadow-lg -translate-y-1' : ''}`}>
                  {/* Speech bubble tail */}
                  <div className={`absolute top-3 ${isLeft ? '-left-2' : '-right-2'} w-4 h-4 ${style.bg} transform rotate-45 border-l border-b border-gray-100 dark:border-gray-700/30`}></div>
                  
                  <div className="relative">
                    <p className={`text-xs font-black bg-gradient-to-r ${style.gradient} bg-clip-text text-transparent mb-1.5 uppercase tracking-wider`}>
                      {line.speaker}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                      {line.text}
                    </p>
                    
                    {/* Timestamp placeholder */}
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2 text-right font-medium">
                      Línea {index + 1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Premium Footer */}
      <div className="px-6 py-4 bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50 dark:from-gray-800 dark:via-slate-800 dark:to-gray-800 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Diálogo interactivo</span>
          </div>
        </div>
        <span className="px-3 py-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 rounded-full text-xs font-bold">
          {lines.filter(l => !l.isAction).length} líneas
        </span>
      </div>
      
      {/* Bottom gradient line */}
      <div className="h-1.5 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500"></div>
    </div>
  );
}
