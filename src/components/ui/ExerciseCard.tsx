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
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});

  const handleAnswer = (index: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [index]: answer }));
    setSelectedOptions(prev => ({ ...prev, [index]: answer }));
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
    setSelectedOptions({});
    setShowResults(false);
    setScore(0);
  };

  const percentage = Math.round((score / exercises.length) * 100);
  const isExcellent = percentage >= 80;
  const isGood = percentage >= 60 && percentage < 80;

  return (
    <div className="group bg-white dark:bg-gray-800/50 rounded-3xl shadow-premium dark:shadow-premium-dark overflow-hidden border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm transition-premium hover:shadow-premium-hover">
      {/* Premium Header with Animated Background */}
      <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-6 py-6 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
        <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-rose-500/20 rounded-full blur-xl"></div>
        
        <div className="relative flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-500">
            {Icons.pencil("w-7 h-7 text-white drop-shadow-lg")}
          </div>
          <div>
            <span className="text-xs font-bold text-white/80 uppercase tracking-widest">Ejercicio Interactivo</span>
            <h3 className="text-xl font-black text-white tracking-tight drop-shadow-lg">{title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6 lg:p-8">
        {/* Instructions with Glass Effect */}
        <div className="flex items-start gap-4 mb-8 p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-200/50 dark:border-amber-700/30 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
            {Icons.lightbulb("w-5 h-5 text-white")}
          </div>
          <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed font-medium">{instructions}</p>
        </div>
        
        {/* Exercises with Stagger Animation */}
        <div className="space-y-6">
          {exercises.map((exercise, index) => {
            const isCorrect = answers[index]?.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim();
            const hasAnswered = answers[index] !== undefined;
            
            return (
              <div 
                key={index}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-500 animate-fade-in-up opacity-0`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards',
                  backgroundColor: showResults
                    ? isCorrect
                      ? 'rgba(16, 185, 129, 0.08)'
                      : 'rgba(239, 68, 68, 0.08)'
                    : hasAnswered
                      ? 'rgba(99, 102, 241, 0.05)'
                      : 'transparent',
                  borderColor: showResults
                    ? isCorrect
                      ? 'rgb(16, 185, 129)'
                      : 'rgb(239, 68, 68)'
                    : hasAnswered
                      ? 'rgb(165, 180, 252)'
                      : 'rgb(229, 231, 235)'
                }}
              >
                {/* Question Number Badge with Gradient */}
                <div className={`absolute -top-3 -left-3 w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black shadow-lg transition-all duration-500 ${
                  showResults
                    ? isCorrect
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/40'
                      : 'bg-gradient-to-br from-rose-500 to-red-600 shadow-rose-500/40'
                    : 'bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800'
                } text-white dark:text-gray-200`}>
                  {index + 1}
                </div>

                {/* Animated Result Icon */}
                {showResults && (
                  <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg animate-success-pop ${
                    isCorrect
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/40'
                      : 'bg-gradient-to-br from-rose-500 to-red-600 shadow-rose-500/40'
                  }`}>
                    {isCorrect ? (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" className="animate-checkmark" style={{ strokeDasharray: 24, strokeDashoffset: 0 }} />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                )}
                
                <p className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-5 pl-8 leading-relaxed">
                  {exercise.question}
                </p>
                
                {exercise.options ? (
                  <div className="flex flex-wrap gap-3 pl-8">
                    {exercise.options.map((option, optIndex) => {
                      const isSelected = selectedOptions[index] === option;
                      const isThisCorrect = showResults && option.toLowerCase() === exercise.correctAnswer.toLowerCase();
                      const isThisWrong = showResults && isSelected && !isThisCorrect;
                      
                      return (
                        <button
                          key={optIndex}
                          onClick={() => handleAnswer(index, option)}
                          disabled={showResults}
                          className={`relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 btn-ripple ${
                            isThisCorrect
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 scale-105'
                              : isThisWrong
                                ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/30'
                                : isSelected
                                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105 hover:shadow-md'
                          } ${showResults ? 'cursor-not-allowed' : 'cursor-pointer active:scale-95'}`}
                        >
                          {option}
                          {isThisCorrect && showResults && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="pl-8">
                    <input
                      type="text"
                      value={answers[index] || ''}
                      onChange={(e) => handleAnswer(index, e.target.value)}
                      disabled={showResults}
                      placeholder="Escribe tu respuesta..."
                      className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-base focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 dark:bg-gray-700/50 dark:text-white disabled:opacity-50 transition-all duration-300 placeholder:text-gray-400 font-medium"
                    />
                  </div>
                )}
                
                {showResults && !isCorrect && (
                  <div className="mt-4 pl-8 flex items-center gap-3 animate-fade-in-up">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Respuesta correcta:</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-800/30 dark:to-teal-800/30 text-emerald-700 dark:text-emerald-300 font-bold rounded-lg text-sm border border-emerald-200 dark:border-emerald-700/50">
                      {exercise.correctAnswer}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Premium Action Bar */}
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
          {!showResults ? (
            <button
              onClick={checkAnswers}
              className="group/btn relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-size-200 hover:bg-pos-100 text-white font-black text-lg rounded-2xl shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-500 flex items-center justify-center gap-4 btn-ripple overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity animate-shimmer"></div>
              <span className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-all duration-300">
                {Icons.checkCircle("w-6 h-6")}
              </span>
              <span className="relative">Verificar Respuestas</span>
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
              {/* Premium Score Display */}
              <div className={`flex items-center gap-5 px-8 py-5 rounded-2xl shadow-lg transition-all duration-500 animate-fade-in-scale ${
                isExcellent 
                  ? 'bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 border-2 border-emerald-300 dark:border-emerald-700/50 shadow-emerald-500/20'
                  : isGood
                    ? 'bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 border-2 border-amber-300 dark:border-amber-700/50 shadow-amber-500/20'
                    : 'bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 border-2 border-rose-300 dark:border-rose-700/50 shadow-rose-500/20'
              }`}>
                <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                  isExcellent
                    ? 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/40'
                    : isGood
                      ? 'bg-gradient-to-br from-amber-500 to-yellow-600 shadow-amber-500/40'
                      : 'bg-gradient-to-br from-rose-500 to-pink-600 shadow-rose-500/40'
                }`}>
                  {/* Animated ring */}
                  <div className="absolute inset-0 rounded-2xl border-4 border-white/30 animate-pulse"></div>
                  {isExcellent ? (
                    Icons.star("w-8 h-8 text-white drop-shadow-lg")
                  ) : isGood ? (
                    Icons.checkCircle("w-8 h-8 text-white drop-shadow-lg")
                  ) : (
                    Icons.target("w-8 h-8 text-white drop-shadow-lg")
                  )}
                </div>
                <div>
                  <p className="text-3xl font-black text-gray-800 dark:text-white">
                    {score}/{exercises.length}
                  </p>
                  <p className={`text-sm font-bold ${
                    isExcellent
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : isGood
                        ? 'text-amber-600 dark:text-amber-400'
                        : 'text-rose-600 dark:text-rose-400'
                  }`}>
                    {isExcellent ? '🎉 ¡Excelente trabajo!' : isGood ? '👍 ¡Buen trabajo!' : '💪 ¡Sigue practicando!'}
                  </p>
                </div>
              </div>
              
              <button
                onClick={resetExercise}
                className="group/btn px-8 py-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex items-center gap-3 hover:shadow-lg"
              >
                <svg className="w-5 h-5 group-hover/btn:rotate-180 transition-transform duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
