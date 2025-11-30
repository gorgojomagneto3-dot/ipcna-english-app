'use client';

import { Icons } from './Icons';

interface CommunicationActivityProps {
  title: string;
  description: string;
  instructions?: string[];
  tableHeaders?: string[];
  tableRows?: number;
  questions?: string[];
}

export default function CommunicationActivity({
  title,
  description,
  instructions,
  tableHeaders,
  tableRows = 3,
  questions,
}: CommunicationActivityProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-3">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          {Icons.users("w-5 h-5")} {title}
        </h3>
      </div>
      
      <div className="p-4">
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        
        {instructions && instructions.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Instrucciones:</h4>
            <ul className="space-y-1">
              {instructions.map((instruction, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span className="text-indigo-500">•</span>
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        )}

        {tableHeaders && tableHeaders.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  {tableHeaders.map((header, index) => (
                    <th key={index} className="border border-gray-200 dark:border-gray-600 px-3 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: tableRows }).map((_, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    {tableHeaders.map((_, colIndex) => (
                      <td key={colIndex} className="border border-gray-200 dark:border-gray-600 px-3 py-2 text-sm text-gray-600 dark:text-gray-400">
                        {colIndex === 0 ? `Compañero ${rowIndex + 1}` : ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {questions && questions.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Preguntas para discutir:</h4>
            <ul className="space-y-1">
              {questions.map((question, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span className="text-indigo-500 font-medium">{index + 1}.</span>
                  {question}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
