'use client';

import Link from 'next/link';
import { Icons } from './Icons';

interface LessonLayoutProps {
  unitNumber: number;
  unitTitle: string;
  lessonLetter: string;
  lessonTitle: string;
  objectives?: string[];
  headerImage?: string;
  prevLesson?: { href: string; label: string };
  nextLesson?: { href: string; label: string };
  children: React.ReactNode;
}

export default function LessonLayout({
  unitNumber,
  unitTitle,
  lessonLetter,
  lessonTitle,
  objectives,
  headerImage,
  prevLesson,
  nextLesson,
  children,
}: LessonLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 dark:from-gray-950 dark:via-slate-900 dark:to-zinc-900">
      {/* Premium Navigation Bar */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Back Button */}
            <Link 
              href="/basic01" 
              className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 group-hover:scale-105 transition-all duration-300 shadow-sm">
                {Icons.arrowLeft("w-5 h-5")}
              </div>
              <div className="hidden sm:block">
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">Curso</span>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">BASIC 01</p>
              </div>
            </Link>
            
            {/* Center - Unit Info */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full border border-indigo-200/50 dark:border-indigo-700/50">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Unit {unitNumber}
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {unitTitle}
              </h1>
            </div>
            
            {/* Home Button */}
            <Link 
              href="/" 
              className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              {Icons.home("w-5 h-5")}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Premium Hero Header */}
        <div className="relative rounded-3xl overflow-hidden mb-10">
          {/* Complex Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/30 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
          
          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.15]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative flex flex-col lg:flex-row">
            {/* Text Content */}
            <div className="flex-1 p-8 lg:p-12 text-white">
              {/* Lesson Badge */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold tracking-wide shadow-lg">
                  Lección {lessonLetter}
                </span>
                <span className="px-3 py-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-xs font-medium text-emerald-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  En progreso
                </span>
              </div>
              
              {/* Title with refined typography */}
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-2 leading-tight">
                {lessonTitle}
              </h2>
              <p className="text-indigo-200/80 text-lg font-light mb-8">
                Domina los fundamentos esenciales de este tema
              </p>
              
              {/* Objectives with premium styling */}
              {objectives && objectives.length > 0 && (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
                  <h3 className="text-sm font-bold mb-4 flex items-center gap-2 uppercase tracking-wider text-indigo-200">
                    <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                      {Icons.target("w-4 h-4")}
                    </span>
                    Objetivos de aprendizaje
                  </h3>
                  <ul className="space-y-3">
                    {objectives.map((obj, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-white/90 group">
                        <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Header Image with Premium Treatment */}
            {headerImage && (
              <div className="hidden lg:block w-80 xl:w-96 relative">
                {/* Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-600/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-800/50 to-transparent z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={headerImage} 
                  alt="" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Decorative Frame */}
                <div className="absolute top-4 right-4 bottom-4 left-4 border border-white/10 rounded-2xl z-20 pointer-events-none"></div>
              </div>
            )}
          </div>
        </div>

        {/* Content with refined spacing */}
        <div className="space-y-8">
          {children}
        </div>

        {/* Premium Navigation Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between gap-4">
            {prevLesson ? (
              <Link
                href={prevLesson.href}
                className="group flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none hover:shadow-xl hover:shadow-gray-300/50 dark:hover:bg-gray-750 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-x-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors duration-300">
                  {Icons.arrowLeft("w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400")}
                </div>
                <div className="text-left">
                  <span className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">Anterior</span>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{prevLesson.label}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {nextLesson && (
              <Link
                href={nextLesson.href}
                className="group flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 hover:translate-x-1"
              >
                <div className="text-right">
                  <span className="text-xs font-medium text-indigo-200 uppercase tracking-wider">Siguiente</span>
                  <p className="text-sm font-semibold">{nextLesson.label}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors duration-300">
                  {Icons.arrowRight("w-5 h-5")}
                </div>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
