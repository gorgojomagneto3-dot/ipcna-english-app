'use client';

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
  const speakerStyles: Record<string, { bg: string; gradient: string; avatar: string; align: string }> = {};
  const stylePalette = [
    { 
      bg: 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20',
      gradient: 'from-indigo-500 to-purple-500',
      avatar: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      align: 'items-start'
    },
    { 
      bg: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20',
      gradient: 'from-emerald-500 to-teal-500',
      avatar: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      align: 'items-end'
    },
    { 
      bg: 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20',
      gradient: 'from-amber-500 to-orange-500',
      avatar: 'bg-gradient-to-br from-amber-500 to-orange-600',
      align: 'items-start'
    },
    { 
      bg: 'bg-gradient-to-br from-rose-500/10 to-pink-500/10 dark:from-rose-500/20 dark:to-pink-500/20',
      gradient: 'from-rose-500 to-pink-500',
      avatar: 'bg-gradient-to-br from-rose-500 to-pink-600',
      align: 'items-end'
    },
  ];
  
  let styleIndex = 0;
  lines.forEach(line => {
    if (!line.isAction && !speakerStyles[line.speaker]) {
      speakerStyles[line.speaker] = stylePalette[styleIndex % stylePalette.length];
      styleIndex++;
    }
  });

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
      {/* Premium Header */}
      <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="relative flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/10">
            {Icons.chat("w-6 h-6 text-white")}
          </div>
          <div>
            <span className="text-xs font-semibold text-purple-200 uppercase tracking-wider">Conversación</span>
            <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
          </div>
        </div>
      </div>
      
      {/* Situation context */}
      {situation && (
        <div className="px-6 py-4 bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-purple-900/10 dark:to-fuchsia-900/10 border-b border-purple-100/50 dark:border-purple-800/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-800/30 flex items-center justify-center flex-shrink-0">
              {Icons.mapPin("w-4 h-4 text-purple-600 dark:text-purple-400")}
            </div>
            <p className="text-sm text-purple-700 dark:text-purple-300 italic leading-relaxed">{situation}</p>
          </div>
        </div>
      )}
      
      {/* Chat-style dialogue */}
      <div className="p-6 space-y-4 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-800/30">
        {lines.map((line, index) => {
          if (line.isAction) {
            return (
              <div key={index} className="flex justify-center py-2">
                <span className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700/50 rounded-full text-xs text-gray-500 dark:text-gray-400 italic">
                  {line.text}
                </span>
              </div>
            );
          }
          
          const style = speakerStyles[line.speaker];
          const isLeft = style.align === 'items-start';
          
          return (
            <div key={index} className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
              <div className={`flex gap-3 max-w-[85%] ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-xl ${style.avatar} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <span className="text-white font-bold text-sm">{line.speaker.charAt(0)}</span>
                </div>
                
                {/* Message bubble */}
                <div className={`${style.bg} rounded-2xl ${isLeft ? 'rounded-tl-sm' : 'rounded-tr-sm'} p-4 border border-gray-100 dark:border-gray-700/30 shadow-sm`}>
                  <p className={`text-xs font-bold bg-gradient-to-r ${style.gradient} bg-clip-text text-transparent mb-1`}>
                    {line.speaker}
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    {line.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Footer accent */}
      <div className="h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 opacity-50"></div>
    </div>
  );
}
