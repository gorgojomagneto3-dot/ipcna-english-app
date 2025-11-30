import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';
import React from 'react';

const units = [
  {
    number: 1,
    title: 'Introductions',
    titleEs: 'Presentaciones',
    icon: 'user',
    color: 'from-blue-500 to-blue-600',
    colorLight: 'bg-blue-50 dark:bg-blue-900/20',
    colorAccent: 'text-blue-600 dark:text-blue-400',
    shadowColor: 'shadow-blue-500/20',
    lessons: [
      { letter: 'A', title: 'Hi!', titleEs: '¡Hola!', href: '/basic01/unit1/lesson-a', description: 'Saludos y presentaciones básicas' },
      { letter: 'B', title: 'My Favorites', titleEs: 'Mis favoritos', href: '/basic01/unit1/lesson-b', description: 'Hablar sobre gustos y preferencias' },
    ],
    objectives: [
      'Saludar y presentarte usando pronombres personales y verbo BE',
      'Hacer y responder preguntas sobre ti mismo y otras personas',
      'Usar contracciones con BE y adjetivos posesivos',
      'Hacer preguntas Yes/No con respuestas cortas',
    ],
  },
  {
    number: 2,
    title: 'Countries',
    titleEs: 'Países',
    icon: 'globe',
    color: 'from-indigo-500 to-indigo-600',
    colorLight: 'bg-indigo-50 dark:bg-indigo-900/20',
    colorAccent: 'text-indigo-600 dark:text-indigo-400',
    shadowColor: 'shadow-indigo-500/20',
    lessons: [
      { letter: 'A', title: 'Around the World', titleEs: 'Alrededor del mundo', href: '/basic01/unit2/lesson-a', description: 'Países, nacionalidades y ubicaciones' },
      { letter: 'B', title: 'It\'s a Big City', titleEs: 'Es una gran ciudad', href: '/basic01/unit2/lesson-b', description: 'Describir ciudades y lugares' },
    ],
    objectives: [
      'Hablar sobre países, nacionalidades y ubicación',
      'Hacer y responder preguntas con WHO y WHERE',
      'Describir lugares y ciudades usando adjetivos',
      'Escribir descripciones de lugares favoritos',
    ],
  },
  {
    number: 3,
    title: 'Possessions',
    titleEs: 'Posesiones',
    icon: 'gift',
    color: 'from-violet-500 to-violet-600',
    colorLight: 'bg-violet-50 dark:bg-violet-900/20',
    colorAccent: 'text-violet-600 dark:text-violet-400',
    shadowColor: 'shadow-violet-500/20',
    lessons: [
      { letter: 'A', title: 'Gifts', titleEs: 'Regalos', href: '/basic01/unit3/lesson-a', description: 'Objetos personales y regalos' },
      { letter: 'B', title: 'Important Items', titleEs: 'Artículos importantes', href: '/basic01/unit3/lesson-b', description: 'Describir y valorar objetos' },
    ],
    objectives: [
      'Dar y responder a agradecimientos',
      'Usar demostrativos (this/that/these/those)',
      'Formar sustantivos plurales correctamente',
      'Describir artículos personales con adjetivos',
    ],
  },
];

const iconMap: Record<string, (className?: string) => React.ReactElement> = {
  user: Icons.user,
  globe: Icons.globe,
  gift: Icons.gift,
};

export default function Basic01Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Premium Header with Glassmorphism */}
      <header className="glass-light dark:glass-dark sticky top-0 z-50 border-b border-white/20 dark:border-gray-700/50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-premium"
            >
              <span className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:scale-110 transition-all duration-300">
                {Icons.arrowLeft("w-5 h-5")}
              </span>
              <span className="text-sm font-semibold hidden sm:block">Volver al Inicio</span>
            </Link>
            
            {/* Progress Indicator */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">3 Unidades</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Premium Effects */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white relative overflow-hidden">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-400/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-indigo-400/20 rounded-full blur-[80px] animate-pulse-glow"></div>
        </div>
        
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-5xl mx-auto px-6 py-20 relative">
          {/* Floating badges */}
          <div className="flex flex-wrap items-center gap-3 mb-8 animate-fade-in-up">
            <span className="glass px-5 py-2 rounded-full text-sm font-bold tracking-wide border border-white/30 shadow-lg">
              Nivel A1
            </span>
            <span className="glass px-5 py-2 rounded-full text-sm font-semibold border border-white/20">
              World Link Intro
            </span>
            <span className="glass px-5 py-2 rounded-full text-sm font-semibold border border-white/20 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ~40 horas
            </span>
          </div>
          
          {/* Title with text gradient */}
          <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-blue-200 text-sm font-bold uppercase tracking-[0.2em] mb-2 block">Curso Completo</span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter drop-shadow-2xl">
              BASIC 01
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 font-light tracking-wide">
              Presentaciones • Países • Posesiones
            </p>
          </div>
          
          {/* Premium Info Card with glass effect */}
          <div className="glass rounded-3xl p-8 border border-white/20 max-w-2xl shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30 animate-bounce-soft">
                {Icons.lightbulb("w-8 h-8 text-white drop-shadow-lg")}
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Método Pareto 80/20</h3>
                <p className="text-blue-100 leading-relaxed">
                  El 20% del contenido que te dará el 80% de los resultados. Vocabulario esencial, 
                  gramática clara y ejercicios prácticos diseñados para un aprendizaje efectivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Units Grid with Stagger Animations */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {units.map((unit, unitIndex) => (
            <div 
              key={unit.number} 
              className="group bg-white dark:bg-gray-800/80 rounded-3xl shadow-premium dark:shadow-premium-dark overflow-hidden border border-gray-100 dark:border-gray-700/50 hover:shadow-premium-hover transition-premium hover-lift animate-fade-in-up backdrop-blur-sm"
              style={{ animationDelay: `${unitIndex * 0.15}s`, animationFillMode: 'backwards' }}
            >
              {/* Unit Header with Enhanced Gradient */}
              <div className={`bg-gradient-to-r ${unit.color} p-8 text-white relative overflow-hidden`}>
                {/* Animated decorative elements */}
                <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse-glow"></div>
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/5 rounded-full blur-lg"></div>
                <div className="absolute left-1/2 top-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                
                <div className="flex items-center gap-6 relative">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {iconMap[unit.icon]?.("w-10 h-10 drop-shadow-lg")}
                  </div>
                  <div>
                    <span className="text-xs text-white/60 font-bold tracking-[0.2em] uppercase">Unidad {unit.number}</span>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight drop-shadow-lg">{unit.title}</h2>
                    <p className="text-white/80 font-medium text-lg">{unit.titleEs}</p>
                  </div>
                  
                  {/* Unit number badge */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 hidden lg:flex">
                    <span className="text-5xl font-black text-white/50">{unit.number}</span>
                  </div>
                </div>
              </div>

              {/* Unit Content */}
              <div className="p-8 lg:p-10">
                {/* Objectives with animated checkmarks */}
                <div className="mb-10">
                  <h3 className="text-xs font-black text-gray-500 dark:text-gray-400 mb-5 flex items-center gap-3 uppercase tracking-[0.15em]">
                    <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${unit.color} flex items-center justify-center`}>
                      {Icons.target("w-4 h-4 text-white")}
                    </span>
                    Objetivos de aprendizaje
                  </h3>
                  <div className={`${unit.colorLight} rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50`}>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {unit.objectives.map((obj, index) => (
                        <li 
                          key={index} 
                          className="group/item text-sm text-gray-700 dark:text-gray-300 flex items-start gap-4 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-gray-700/30 transition-all duration-300"
                        >
                          <span className={`w-6 h-6 rounded-lg bg-gradient-to-br ${unit.color} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover/item:scale-110 transition-transform`}>
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="font-medium">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Lessons with premium hover effects */}
                <h3 className="text-xs font-black text-gray-500 dark:text-gray-400 mb-5 flex items-center gap-3 uppercase tracking-[0.15em]">
                  <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${unit.color} flex items-center justify-center`}>
                    {Icons.book("w-4 h-4 text-white")}
                  </span>
                  Lecciones
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {unit.lessons.map((lesson, lessonIndex) => (
                    <Link 
                      key={lesson.letter}
                      href={lesson.href}
                      className={`group/lesson relative flex items-center gap-5 p-6 bg-gray-50 dark:bg-gray-700/30 rounded-2xl hover:bg-white dark:hover:bg-gray-700/50 transition-all duration-500 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-xl ${unit.shadowColor} hover-lift btn-ripple overflow-hidden`}
                    >
                      {/* Animated background gradient on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${unit.color} opacity-0 group-hover/lesson:opacity-5 transition-opacity duration-500`}></div>
                      
                      <div className={`relative w-16 h-16 bg-gradient-to-br ${unit.color} rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg ${unit.shadowColor} group-hover/lesson:scale-110 group-hover/lesson:rotate-6 transition-all duration-500`}>
                        {lesson.letter}
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/lesson:opacity-100 group-hover/lesson:animate-shimmer"></div>
                      </div>
                      <div className="flex-1 min-w-0 relative">
                        <h4 className="font-bold text-gray-800 dark:text-gray-200 text-lg group-hover/lesson:text-gray-900 dark:group-hover/lesson:text-white transition-colors">
                          {lesson.title}
                        </h4>
                        <p className={`text-sm ${unit.colorAccent} font-semibold`}>{lesson.titleEs}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5 font-medium">{lesson.description}</p>
                      </div>
                      <div className={`relative w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-600 flex items-center justify-center group-hover/lesson:bg-gradient-to-br ${unit.color} transition-all duration-500`}>
                        {Icons.arrowRight("w-5 h-5 text-gray-400 group-hover/lesson:text-white transition-colors duration-300")}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Quiz Final Button */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}>
          <Link 
            href="/basic01/quiz"
            className="group block w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white rounded-3xl p-10 text-center hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-500 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover-lift-lg relative overflow-hidden btn-ripple"
          >
            {/* Animated mesh gradient */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse-glow"></div>
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white rounded-full blur-2xl animate-float"></div>
              <div className="absolute top-1/2 right-0 w-24 h-24 bg-pink-300 rounded-full blur-2xl animate-pulse"></div>
            </div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            
            <div className="flex items-center justify-center gap-6 relative">
              <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 backdrop-blur-sm border border-white/20 shadow-xl">
                {Icons.clipboard("w-10 h-10 drop-shadow-lg")}
              </div>
              <div className="text-left">
                <span className="text-purple-200 text-xs font-bold uppercase tracking-[0.15em] block mb-1">Evaluación Final</span>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight drop-shadow-lg">Quiz Final - B01</h3>
                <p className="text-purple-200 font-medium mt-1">Evalúa tu progreso en las Unidades 1-3</p>
              </div>
              
              {/* Arrow indicator */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 group-hover:translate-x-2 transition-all duration-500 hidden lg:flex">
                {Icons.arrowRight("w-7 h-7")}
              </div>
            </div>
          </Link>
        </div>

        {/* Premium Self Evaluation */}
        <div className="mt-12 bg-white dark:bg-gray-800/80 rounded-3xl shadow-premium dark:shadow-premium-dark p-8 lg:p-10 border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}>
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
              {Icons.checkCircle("w-8 h-8 text-white drop-shadow-lg")}
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-800 dark:text-gray-200">
                Autoevaluación B01
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Marca tu progreso en cada habilidad
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { skill: 'Puedo presentarme usando el verbo BE', icon: 'user' },
              { skill: 'Puedo usar pronombres y adjetivos posesivos', icon: 'book' },
              { skill: 'Puedo hacer preguntas Yes/No con BE', icon: 'chat' },
              { skill: 'Puedo hablar sobre países y nacionalidades', icon: 'globe' },
              { skill: 'Puedo describir ciudades con adjetivos', icon: 'home' },
              { skill: 'Puedo usar this/that/these/those', icon: 'target' },
              { skill: 'Puedo dar y responder a agradecimientos', icon: 'heart' },
              { skill: 'Puedo escribir sobre mis favoritos', icon: 'star' },
              { skill: 'Puedo escribir una reseña de producto', icon: 'pencil' },
            ].map((item, index) => (
              <label 
                key={index} 
                className="group/check relative flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300 p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/30 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 cursor-pointer transition-all duration-300 border-2 border-transparent hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-md"
              >
                <div className="relative">
                  <input 
                    type="checkbox" 
                    className="peer sr-only" 
                  />
                  <div className="w-7 h-7 rounded-lg border-2 border-gray-300 dark:border-gray-600 peer-checked:border-emerald-500 peer-checked:bg-gradient-to-br peer-checked:from-emerald-500 peer-checked:to-teal-600 transition-all duration-300 flex items-center justify-center group-hover/check:border-emerald-400 dark:group-hover/check:border-emerald-600">
                    <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="font-medium group-hover/check:text-emerald-700 dark:group-hover/check:text-emerald-400 transition-colors flex-1">{item.skill}</span>
              </label>
            ))}
          </div>
          
          {/* Progress bar placeholder */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-gray-600 dark:text-gray-400">Progreso del curso</span>
              <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">0%</span>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-0 transition-all duration-1000"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
