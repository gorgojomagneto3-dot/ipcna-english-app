'use client';

import { Icons } from './Icons';

interface KeyPhrase {
  english: string;
  spanish: string;
}

interface KeyPhrasesCardProps {
  title: string;
  phrases: KeyPhrase[];
}

export default function KeyPhrasesCard({ title, phrases }: KeyPhrasesCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-3">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          {Icons.lightbulb("w-5 h-5")} {title}
        </h3>
      </div>
      
      <div className="p-4">
        <div className="grid gap-2">
          {phrases.map((phrase, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
            >
              <span className="font-medium text-teal-700 dark:text-teal-400 text-sm md:text-base">
                {phrase.english}
              </span>
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                {phrase.spanish}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
