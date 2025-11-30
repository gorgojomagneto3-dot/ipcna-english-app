'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';
import React from 'react';

export interface MatchingPair {
  left: string;
  right: string;
}

export interface QuizQuestion {
  id: number;
  section: string;
  subsection?: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  type: 'multiple' | 'text' | 'truefalse' | 'matching';
  matchingPairs?: MatchingPair[];
  matchingOptions?: string[];
}

interface QuizSectionProps {
  title: string;
  icon: string;
  description: string;
  questions: QuizQuestion[];
  backLink: string;
  backLabel: string;
  accentColor: string;
}

const iconMap: Record<string, (className?: string) => React.ReactElement> = {
  hand: Icons.hand,
  globe: Icons.globe,
  gift: Icons.gift,
  brain: Icons.lightbulb,
  writing: Icons.writing,
  checkCircle: Icons.checkCircle,
  link: Icons.link,
};

export default function QuizSection({
  title,
  icon,
  description,
  questions,
  backLink,
  backLabel,
  accentColor,
}: QuizSectionProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleMatchingAnswer = (questionId: number, leftItem: string, rightItem: string) => {
    const currentAnswer = answers[questionId] || '';
    const pairs = currentAnswer ? currentAnswer.split(',') : [];
    const filteredPairs = pairs.filter(p => !p.startsWith(leftItem + '→'));
    filteredPairs.push(`${leftItem}→${rightItem}`);
    setAnswers(prev => ({ ...prev, [questionId]: filteredPairs.join(',') }));
  };

  const getMatchingSelection = (questionId: number, leftItem: string): string | null => {
    const answer = answers[questionId] || '';
    const pairs = answer.split(',');
    const match = pairs.find(p => p.startsWith(leftItem + '→'));
    return match ? match.split('→')[1] : null;
  };

  const checkAnswers = () => {
    let correct = 0;
    questions.forEach(q => {
      const userAnswer = answers[q.id]?.toLowerCase().trim();
      const correctAnswer = q.correctAnswer.toLowerCase().trim();
      if (userAnswer === correctAnswer) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return { text: '¡Excelente!', color: 'text-green-600' };
    if (percentage >= 70) return { text: '¡Muy bien!', color: 'text-blue-600' };
    if (percentage >= 50) return { text: 'Buen intento', color: 'text-yellow-600' };
    return { text: 'Sigue practicando', color: 'text-orange-600' };
  };

  const getSubsections = () => {
    const subsections = new Set<string>();
    questions.forEach(q => {
      if (q.subsection) subsections.add(q.subsection);
    });
    return Array.from(subsections);
  };

  const getSubsectionIcon = (subsection: string) => {
    if (subsection.includes('Vocabulary')) return Icons.pencil("w-4 h-4 text-blue-500");
    if (subsection.includes('Conversation')) return Icons.chat("w-4 h-4 text-purple-500");
    if (subsection.includes('Grammar')) return Icons.academic("w-4 h-4 text-emerald-500");
    if (subsection.includes('Reading')) return Icons.book("w-4 h-4 text-amber-500");
    if (subsection.includes('Accuracy')) return Icons.target("w-4 h-4 text-red-500");
    if (subsection.includes('Question')) return Icons.questionMark("w-4 h-4 text-indigo-500");
    if (subsection.includes('Exam')) return Icons.clipboard("w-4 h-4 text-orange-500");
    if (subsection.includes('Apostrophes')) return Icons.pencil("w-4 h-4 text-pink-500");
    if (subsection.includes('Demonstratives')) return Icons.cube("w-4 h-4 text-cyan-500");
    if (subsection.includes('Product')) return Icons.star("w-4 h-4 text-yellow-500");
    if (subsection.includes('Pronouns')) return Icons.user("w-4 h-4 text-blue-500");
    if (subsection.includes('Countries')) return Icons.globe("w-4 h-4 text-green-500");
    if (subsection.includes('Languages')) return Icons.chat("w-4 h-4 text-indigo-500");
    if (subsection.includes('Possessive')) return Icons.gift("w-4 h-4 text-pink-500");
    if (subsection.includes('Adjectives')) return Icons.star("w-4 h-4 text-amber-500");
    if (subsection.includes('Opposites')) return Icons.arrowRight("w-4 h-4 text-purple-500");
    if (subsection.includes('Numbers')) return Icons.cube("w-4 h-4 text-cyan-500");
    if (subsection.includes('Answers')) return Icons.checkCircle("w-4 h-4 text-green-500");
    return Icons.clipboard("w-4 h-4 text-gray-500");
  };

  const gradientClass = `bg-gradient-to-r ${accentColor}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link 
              href={backLink}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {Icons.arrowLeft("w-5 h-5")}
              <span className="text-sm font-medium">{backLabel}</span>
            </Link>
            <div className="text-center">
              <span className="text-xs text-gray-500 dark:text-gray-400">Quiz</span>
              <h1 className="text-sm font-semibold text-gray-800 dark:text-gray-200">{title}</h1>
            </div>
            <Link 
              href="/" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {Icons.home("w-5 h-5")}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Quiz Header */}
        <div className={`${gradientClass} rounded-2xl p-6 mb-6 text-white`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-white/20 p-2 rounded-xl">{iconMap[icon]?.("w-8 h-8") || Icons.clipboard("w-8 h-8")}</span>
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          </div>
          <p className="text-white/80">{description} ({questions.length} preguntas)</p>
          
          {/* Progress bar */}
          {!showResults && (
            <div className="mt-4">
              <div className="flex justify-between text-sm text-white/80 mb-1">
                <span>Progreso: {Object.keys(answers).length} / {questions.length}</span>
                <span>{Math.round((Object.keys(answers).length / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
          
          {showResults && (
            <div className="mt-4 bg-white/10 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80">Tu puntuación:</p>
                  <p className="text-3xl font-bold">{score} / {questions.length}</p>
                  <p className="text-lg font-medium">
                    {getScoreMessage().text}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold">{Math.round((score / questions.length) * 100)}%</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Questions by Subsection */}
        {getSubsections().map(subsection => (
          <div key={subsection} className="mb-6">
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2 ml-2">
              {getSubsectionIcon(subsection)}
              {subsection}
            </h4>
            
            <div className="space-y-3">
              {questions
                .filter(q => q.subsection === subsection)
                .map(question => (
                  <div 
                    key={question.id}
                    className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border-2 transition-colors ${
                      showResults
                        ? answers[question.id]?.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim()
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                          : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : 'border-gray-100 dark:border-gray-700'
                    }`}
                  >
                    <p className="font-medium text-gray-800 dark:text-gray-200 mb-3 text-sm">
                      <span className="text-gray-400 dark:text-gray-500 mr-2">{question.id}.</span>
                      {question.question}
                    </p>
                    
                    {/* Multiple Choice */}
                    {question.type === 'multiple' && question.options && (
                      <div className="flex flex-wrap gap-2">
                        {question.options.map(option => (
                          <button
                            key={option}
                            onClick={() => handleAnswer(question.id, option)}
                            disabled={showResults}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                              answers[question.id] === option
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'
                            } ${showResults ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* True/False */}
                    {question.type === 'truefalse' && (
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleAnswer(question.id, 'True')}
                          disabled={showResults}
                          className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                            answers[question.id] === 'True'
                              ? 'bg-green-500 text-white shadow-lg scale-105'
                              : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50'
                          } ${showResults ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          {Icons.check("w-5 h-5")}
                          TRUE
                        </button>
                        <button
                          onClick={() => handleAnswer(question.id, 'False')}
                          disabled={showResults}
                          className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                            answers[question.id] === 'False'
                              ? 'bg-red-500 text-white shadow-lg scale-105'
                              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50'
                          } ${showResults ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          {Icons.x("w-5 h-5")}
                          FALSE
                        </button>
                      </div>
                    )}

                    {/* Matching */}
                    {question.type === 'matching' && question.matchingPairs && question.matchingOptions && (
                      <div className="space-y-3">
                        <div className="grid gap-2">
                          {question.matchingPairs.map((pair, idx) => {
                            const options = question.matchingOptions!;
                            return (
                              <div key={idx} className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl">
                                <div className="flex-shrink-0 w-32 md:w-48 font-medium text-gray-700 dark:text-gray-300 text-sm bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600">
                                  {pair.left}
                                </div>
                                <div className="flex-shrink-0 text-gray-400">
                                  →
                                </div>
                                <select
                                  value={getMatchingSelection(question.id, pair.left) || ''}
                                  onChange={(e) => handleMatchingAnswer(question.id, pair.left, e.target.value)}
                                  disabled={showResults}
                                  className={`flex-1 px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white disabled:opacity-50 ${
                                    showResults
                                      ? getMatchingSelection(question.id, pair.left) === pair.right
                                        ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                                        : 'border-red-500 bg-red-50 dark:bg-red-900/30'
                                      : 'border-gray-300 dark:border-gray-600'
                                  }`}
                                >
                                  <option value="">Seleccionar...</option>
                                  {options.map(opt => (
                                    <option key={opt} value={opt}>{opt}</option>
                                  ))}
                                </select>
                                {showResults && getMatchingSelection(question.id, pair.left) !== pair.right && (
                                  <span className="text-green-600 dark:text-green-400 text-xs font-medium">
                                    <span className="text-green-600">✔</span> {pair.right}
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Text Input */}
                    {question.type === 'text' && (
                      <input
                        type="text"
                        value={answers[question.id] || ''}
                        onChange={(e) => handleAnswer(question.id, e.target.value)}
                        disabled={showResults}
                        placeholder="Escribe tu respuesta..."
                        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white disabled:opacity-50"
                      />
                    )}
                    
                    {showResults && question.type !== 'matching' && answers[question.id]?.toLowerCase().trim() !== question.correctAnswer.toLowerCase().trim() && (
                      <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                        <span className="text-green-600">✔</span> Respuesta correcta: <span className="font-bold">{question.correctAnswer}</span>
                      </p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          {!showResults ? (
            <button
              onClick={checkAnswers}
              className={`px-8 py-3 ${gradientClass} text-white font-medium rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg`}
            >
              {Icons.checkCircle("w-5 h-5")}
              Verificar Respuestas
            </button>
          ) : (
            <>
              <button
                onClick={resetQuiz}
                className="px-8 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
              >
                Intentar de nuevo
              </button>
              <Link
                href={backLink}
                className={`px-8 py-3 ${gradientClass} text-white font-medium rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2`}
              >
                Volver
                {Icons.arrowRight("w-5 h-5")}
              </Link>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
