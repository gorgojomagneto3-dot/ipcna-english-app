'use client';

import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';
import React from 'react';

const iconMap: Record<string, (className?: string) => React.ReactElement> = {
  hand: Icons.hand,
  globe: Icons.globe,
  gift: Icons.gift,
  brain: Icons.lightbulb,
  writing: Icons.writing,
  checkCircle: Icons.checkCircle,
  link: Icons.link,
};

const quizSections = [
  {
    id: 'unit1',
    title: 'Unit 1: Introductions',
    icon: 'hand',
    description: 'Presentaciones, nombres, números y verbo BE',
    questions: 23,
    color: 'from-blue-500 to-indigo-500',
    href: '/basic01/quiz/unit1',
  },
  {
    id: 'unit2',
    title: 'Unit 2: Countries',
    icon: 'globe',
    description: 'Países, nacionalidades, ciudades y adjetivos',
    questions: 23,
    color: 'from-green-500 to-teal-500',
    href: '/basic01/quiz/unit2',
  },
  {
    id: 'unit3',
    title: 'Unit 3: Possessions',
    icon: 'gift',
    description: 'Posesiones, plurales, demostrativos',
    questions: 29,
    color: 'from-pink-500 to-rose-500',
    href: '/basic01/quiz/unit3',
  },
  {
    id: 'consolidation',
    title: 'Consolidation',
    icon: 'brain',
    description: 'Accuracy Practice, Question Formulation, Exam Prep',
    questions: 42,
    color: 'from-purple-500 to-violet-500',
    href: '/basic01/quiz/consolidation',
  },
  {
    id: 'process-writing',
    title: 'Process Writing',
    icon: 'writing',
    description: 'Grammar Review, Apostrophes, Product Reviews',
    questions: 20,
    color: 'from-amber-500 to-orange-500',
    href: '/basic01/quiz/process-writing',
  },
  {
    id: 'true-false',
    title: 'True or False',
    icon: 'checkCircle',
    description: 'Evalúa si las oraciones son correctas',
    questions: 15,
    color: 'from-emerald-500 to-green-500',
    href: '/basic01/quiz/true-false',
  },
  {
    id: 'matching',
    title: 'Matching',
    icon: 'link',
    description: 'Relaciona columnas de vocabulario y gramática',
    questions: 8,
    color: 'from-cyan-500 to-blue-500',
    href: '/basic01/quiz/matching',
  },
];

export default function QuizIndexPage() {
  const totalQuestions = quizSections.reduce((acc, section) => acc + section.questions, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link 
              href="/basic01" 
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {Icons.arrowLeft("w-5 h-5")}
              <span className="text-sm font-medium">B01</span>
            </Link>
            <div className="text-center">
              <span className="text-xs text-gray-500 dark:text-gray-400">Quiz Final</span>
              <h1 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Units 1-3</h1>
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
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-center gap-3 mb-3">
            {Icons.clipboard("w-10 h-10")}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">B01 Complete Quiz</h2>
              <p className="text-purple-200">World Link Intro - Units 1-3</p>
            </div>
          </div>
          <p className="text-purple-100 mb-4">
            Elige una sección para practicar o completa todas para un repaso completo.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
              {Icons.clipboard("w-4 h-4")}
              <span>{totalQuestions} preguntas totales</span>
            </div>
            <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
              {Icons.academic("w-4 h-4")}
              <span>7 secciones</span>
            </div>
          </div>
        </div>

        {/* Quiz Sections Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {quizSections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient accent top */}
              <div className={`h-2 bg-gradient-to-r ${section.color}`}></div>
              
              <div className="p-5">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform text-white`}>
                    {iconMap[section.icon]?.("w-7 h-7")}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                      {section.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {section.questions} preguntas
                      </span>
                      <span className="text-xs text-blue-500 dark:text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Iniciar
                        {Icons.arrowRight("w-3 h-3")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Card */}
        <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-amber-200 dark:border-amber-800">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
              {Icons.lightbulb("w-6 h-6 text-amber-600 dark:text-amber-400")}
            </div>
            <div>
              <h3 className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2">
                {Icons.lightbulb("w-5 h-5")} Consejo de estudio
              </h3>
              <p className="text-sm text-amber-700 dark:text-amber-400 mt-1">
                Completa cada sección en orden para un aprendizaje progresivo. 
                Las secciones <strong>True/False</strong> y <strong>Matching</strong> son excelentes 
                para repasar después de las unidades principales.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{totalQuestions}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Preguntas</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">7</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Secciones</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">4</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Tipos de ejercicio</div>
          </div>
        </div>

        {/* Back to B01 */}
        <div className="mt-8 text-center">
          <Link
            href="/basic01"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {Icons.arrowLeft("w-4 h-4")}
            <span>Volver a B01 - BASIC 1</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
