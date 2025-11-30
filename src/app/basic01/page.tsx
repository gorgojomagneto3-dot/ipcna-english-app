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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-105"
            >
              {Icons.arrowLeft("w-5 h-5")}
              <span className="text-sm font-medium">Volver al Inicio</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 py-16 relative">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold border border-white/20">
              Nivel A1
            </span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium border border-white/10">
              World Link Intro
            </span>
          </div>
          
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-black mb-3 tracking-tight">
              BASIC 01
            </h1>
            <p className="text-2xl text-blue-100 font-light">
              Presentaciones • Países • Posesiones
            </p>
            <p className="text-blue-200 mt-2">
              Unidades 1-3 del libro World Link Intro
            </p>
          </div>
          
          {/* Info Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                {Icons.lightbulb("w-6 h-6")}
              </div>
              <div>
                <h3 className="font-semibold mb-1">Método Pareto</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  El 20% del contenido que te dará el 80% de los resultados. Vocabulario esencial, 
                  gramática clara y ejercicios prácticos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Units Grid */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-10">
          {units.map((unit) => (
            <div 
              key={unit.number} 
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Unit Header */}
              <div className={`bg-gradient-to-r ${unit.color} p-8 text-white relative overflow-hidden`}>
                {/* Decorative circle */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full"></div>
                
                <div className="flex items-center gap-5 relative">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                    {iconMap[unit.icon]?.("w-8 h-8")}
                  </div>
                  <div>
                    <span className="text-sm text-white/70 font-medium tracking-wide uppercase">Unidad {unit.number}</span>
                    <h2 className="text-3xl font-bold tracking-tight">{unit.title}</h2>
                    <p className="text-white/80 font-medium">{unit.titleEs}</p>
                  </div>
                </div>
              </div>

              {/* Unit Content */}
              <div className="p-8">
                {/* Objectives */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2 uppercase tracking-wide">
                    {Icons.target("w-4 h-4")} Objetivos de aprendizaje
                  </h3>
                  <div className={`${unit.colorLight} rounded-2xl p-5`}>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {unit.objectives.map((obj, index) => (
                        <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-3">
                          <span className={`${unit.colorAccent} mt-0.5 font-bold`}>✓</span>
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Lessons */}
                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2 uppercase tracking-wide">
                  {Icons.book("w-4 h-4")} Lecciones
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {unit.lessons.map((lesson) => (
                    <Link 
                      key={lesson.letter}
                      href={lesson.href}
                      className="group relative flex items-center gap-5 p-5 bg-gray-50 dark:bg-gray-700/30 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-300 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${unit.color} rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {lesson.letter}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-bold text-gray-800 dark:text-gray-200 group-hover:${unit.colorAccent} transition-colors text-lg`}>
                          {lesson.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{lesson.titleEs}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{lesson.description}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:${unit.color} transition-all duration-300`}>
                        {Icons.arrowRight("w-5 h-5 text-gray-400 group-hover:text-white transition-colors")}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiz Final Button */}
        <div className="mt-12">
          <Link 
            href="/basic01/quiz"
            className="group block w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white rounded-3xl p-8 text-center hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
            </div>
            
            <div className="flex items-center justify-center gap-4 relative">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {Icons.clipboard("w-7 h-7")}
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold">Quiz Final - B01</h3>
                <p className="text-purple-200">Evalúa tu progreso en las Unidades 1-3</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Self Evaluation */}
        <div className="mt-10 bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none p-8 border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-3">
            {Icons.checkCircle("w-7 h-7 text-green-500")} Autoevaluación B01
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Marca tu progreso en cada habilidad:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              'Puedo presentarme usando el verbo BE',
              'Puedo usar pronombres y adjetivos posesivos',
              'Puedo hacer preguntas Yes/No con BE',
              'Puedo hablar sobre países y nacionalidades',
              'Puedo describir ciudades con adjetivos',
              'Puedo usar this/that/these/those',
              'Puedo dar y responder a agradecimientos',
              'Puedo escribir sobre mis favoritos',
              'Puedo escribir una reseña de producto',
            ].map((skill, index) => (
              <label 
                key={index} 
                className="group flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 cursor-pointer transition-colors border border-transparent hover:border-green-200 dark:hover:border-green-800"
              >
                <input type="checkbox" className="w-5 h-5 text-green-500 rounded-md border-2 border-gray-300 focus:ring-green-500 focus:ring-offset-0" />
                <span className="group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">{skill}</span>
              </label>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
