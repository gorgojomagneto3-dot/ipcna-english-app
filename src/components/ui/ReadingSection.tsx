'use client';

import { Icons } from './Icons';

interface ReadingQuestion {
  question: string;
  answer?: string;
}

interface ReadingSectionProps {
  title: string;
  text: string | string[];
  questions?: ReadingQuestion[];
  skill?: string;
}

export default function ReadingSection({ title, text, questions, skill }: ReadingSectionProps) {
  const paragraphs = Array.isArray(text) ? text : [text];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-3">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          {Icons.document("w-5 h-5")} {title}
        </h3>
        {skill && (
          <p className="text-rose-100 text-sm mt-1">Habilidad: {skill}</p>
        )}
      </div>
      
      <div className="p-4">
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4 border-l-4 border-rose-400">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-3 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        {questions && questions.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
              {Icons.questionMark("w-5 h-5 text-rose-500")} Preguntas de Comprensión
            </h4>
            <ol className="space-y-2">
              {questions.map((q, index) => (
                <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium">{index + 1}. {q.question}</span>
                  {q.answer && (
                    <details className="mt-1">
                      <summary className="text-rose-600 dark:text-rose-400 cursor-pointer text-xs">
                        Ver respuesta
                      </summary>
                      <p className="text-green-600 dark:text-green-400 mt-1 pl-4">
                        → {q.answer}
                      </p>
                    </details>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
