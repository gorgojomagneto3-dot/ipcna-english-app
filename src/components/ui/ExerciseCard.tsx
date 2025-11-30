'use client';

import { useState } from 'react';
import { Icons } from './Icons';

interface Exercise {
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
}

interface ExerciseCardProps {
  title: string;
  instructions: string;
  exercises: Exercise[];
}

export default function ExerciseCard({ title, instructions, exercises }: ExerciseCardProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (index: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [index]: answer }));
  };

  const checkAnswers = () => {
    let correct = 0;
    exercises.forEach((ex, i) => {
      if (answers[i]?.toLowerCase().trim() === ex.correctAnswer.toLowerCase().trim()) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
  };

  const resetExercise = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const percentage = Math.round((score / exercises.length) * 100);
  const isExcellent = percentage >= 80;
  const isGood = percentage >= 60 && percentage < 80;

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
      {/* Premium Header */}
      <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-6 py-5 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="relative flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/10">
            {Icons.pencil("w-6 h-6 text-white")}
          </div>
          <div>
            <span className="text-xs font-semibold text-amber-100 uppercase tracking-wider">Ejercicio Interactivo</span>
            <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6 lg:p-8">
        {/* Instructions */}
        <div className="flex items-start gap-3 mb-8 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-200/50 dark:border-amber-700/30">
          <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-800/30 flex items-center justify-center flex-shrink-0">
            {Icons.lightbulb("w-4 h-4 text-amber-600 dark:text-amber-400")}
          </div>
          <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{instructions}</p>
        </div>
        
        {/* Exercises */}
        <div className="space-y-6">
          {exercises.map((exercise, index) => {
            const isCorrect = answers[index]?.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim();
            const hasAnswered = answers[index] !== undefined;
            
            return (
              <div 
                key={index} 
                className={`relative p-6 rounded-2xl border-2 transition-all duration-500 ${
                  showResults
                    ? isCorrect
                      ? 'border-emerald-400 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20'
                      : 'border-rose-400 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20'
                    : hasAnswered
                      ? 'border-indigo-300 bg-indigo-50/50 dark:bg-indigo-900/10 dark:border-indigo-700'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                {/* Question Number Badge */}
                <div className={`absolute -top-3 -left-3 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shadow-lg transition-all duration-300 ${
                  showResults
                    ? isCorrect
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white'
                      : 'bg-gradient-to-br from-rose-500 to-pink-600 text-white'
                    : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-600 dark:text-gray-300'
                }`}>
                  {index + 1}
                </div>

                {/* Result Icon */}
                {showResults && (
                  <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${
                    isCorrect
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-600'
                      : 'bg-gradient-to-br from-rose-500 to-pink-600'
                  }`}>
                    {isCorrect ? (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                )}
                
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-5 pl-6 leading-relaxed">
                  {exercise.question}
                </p>
                
                {exercise.options ? (
                  <div className="flex flex-wrap gap-3 pl-6">
                    {exercise.options.map((option, optIndex) => (
                      <button
                        key={optIndex}
                        onClick={() => handleAnswer(index, option)}
                        disabled={showResults}
                        className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                          answers[index] === option
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
                        } ${showResults ? 'cursor-not-allowed opacity-70' : 'cursor-pointer active:scale-95'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="pl-6">
                    <input
                      type="text"
                      value={answers[index] || ''}
                      onChange={(e) => handleAnswer(index, e.target.value)}
                      disabled={showResults}
                      placeholder="Escribe tu respuesta..."
                      className="w-full px-5 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-base focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 dark:bg-gray-700/50 dark:text-white disabled:opacity-50 transition-all duration-300 placeholder:text-gray-400"
                    />
                  </div>
                )}
                
                {showResults && !isCorrect && (
                  <div className="mt-4 pl-6 flex items-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Respuesta correcta:</span>
                    <span className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-800/30 text-emerald-700 dark:text-emerald-300 font-bold rounded-lg text-sm">
                      {exercise.correctAnswer}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Action Bar */}
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          {!showResults ? (
            <button
              onClick={checkAnswers}
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-500 flex items-center justify-center gap-3"
            >
              <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {Icons.checkCircle("w-5 h-5")}
              </span>
              Verificar Respuestas
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
              {/* Score Display */}
              <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl ${
                isExcellent 
                  ? 'bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-700/50'
                  : isGood
                    ? 'bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-700/50'
                    : 'bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20 border border-rose-200 dark:border-rose-700/50'
              }`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  isExcellent
                    ? 'bg-gradient-to-br from-emerald-500 to-teal-600'
                    : isGood
                      ? 'bg-gradient-to-br from-amber-500 to-yellow-600'
                      : 'bg-gradient-to-br from-rose-500 to-pink-600'
                }`}>
                  {isExcellent ? (
                    Icons.star("w-7 h-7 text-white")
                  ) : isGood ? (
                    Icons.checkCircle("w-7 h-7 text-white")
                  ) : (
                    Icons.target("w-7 h-7 text-white")
                  )}
                </div>
                <div>
                  <p className="text-2xl font-black text-gray-800 dark:text-white">
                    {score}/{exercises.length}
                  </p>
                  <p className={`text-sm font-medium ${
                    isExcellent
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : isGood
                        ? 'text-amber-600 dark:text-amber-400'
                        : 'text-rose-600 dark:text-rose-400'
                  }`}>
                    {isExcellent ? '¡Excelente!' : isGood ? 'Buen trabajo' : 'Sigue practicando'}
                  </p>
                </div>
              </div>
              
              <button
                onClick={resetExercise}
                className="group px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Intentar de nuevo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
