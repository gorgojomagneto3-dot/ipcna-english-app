'use client';

import { Icons } from './Icons';

interface WritingSectionProps {
  title: string;
  model: string;
  template?: string;
  instructions?: string;
}

export default function WritingSection({ title, model, template, instructions }: WritingSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-4 py-3">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          {Icons.pencil("w-5 h-5")} {title}
        </h3>
      </div>
      
      <div className="p-4">
        {instructions && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">{instructions}</p>
        )}
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
            {Icons.document("w-4 h-4 text-violet-500")} Modelo
          </h4>
          <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4 border-l-4 border-violet-400">
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
              {model}
            </p>
          </div>
        </div>

        {template && (
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
              {Icons.pencil("w-4 h-4 text-violet-500")} Tu turno
            </h4>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border-2 border-dashed border-violet-300 dark:border-violet-600">
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {template}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
