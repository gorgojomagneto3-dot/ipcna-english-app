import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import { images } from "@/lib/images";

const courses = [
  {
    id: "basic01",
    title: "BASIC 01",
    level: "A1",
    book: "World Link Intro",
    units: "Unidades 1-3",
    description: "Presentaciones, Países y Posesiones",
    color: "from-blue-600 to-indigo-600",
    hoverColor: "group-hover:from-blue-700 group-hover:to-indigo-700",
    lessons: 6,
    progress: 0,
    topics: [
      "Pronombres personales y verbo BE",
      "Países y nacionalidades", 
      "Demostrativos (this/that/these/those)",
    ],
    available: true,
  },
  {
    id: "basic02",
    title: "BASIC 02",
    level: "A1+",
    book: "World Link Intro",
    units: "Unidades 4-6",
    description: "Rutinas, Comida y Tiempo Libre",
    color: "from-gray-400 to-gray-500",
    hoverColor: "",
    lessons: 6,
    progress: 0,
    topics: [
      "Presente simple",
      "Vocabulario de comida",
      "Actividades de ocio",
    ],
    available: false,
  },
];

const features = [
  {
    icon: "target",
    title: "Método Pareto",
    description: "El 20% del contenido que te dará el 80% de los resultados. Sin contenido de relleno.",
    color: "bg-blue-500",
    lightColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: "video",
    title: "Videos y Audio",
    description: "Contenido multimedia para mejorar tu comprensión auditiva y pronunciación.",
    color: "bg-red-500",
    lightColor: "bg-red-100 dark:bg-red-900/30",
    textColor: "text-red-600 dark:text-red-400",
  },
  {
    icon: "chat",
    title: "Diálogos Reales",
    description: "Conversaciones prácticas que puedes usar desde el primer día.",
    color: "bg-emerald-500",
    lightColor: "bg-emerald-100 dark:bg-emerald-900/30",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: "pencil",
    title: "Ejercicios Interactivos",
    description: "Practica con feedback instantáneo y refuerza lo aprendido.",
    color: "bg-purple-500",
    lightColor: "bg-purple-100 dark:bg-purple-900/30",
    textColor: "text-purple-600 dark:text-purple-400",
  },
];

const iconMap: Record<string, (className?: string) => React.ReactElement> = {
  target: Icons.target,
  video: Icons.video,
  chat: Icons.chat,
  pencil: Icons.pencil,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                {Icons.academic("w-6 h-6 sm:w-7 sm:h-7 text-white")}
              </div>
              <span className="text-white font-bold text-lg sm:text-xl">IPCNA</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full responsive */}
      <header className="relative min-h-[70vh] sm:min-h-[60vh] lg:min-h-[65vh] flex items-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={images.studentsStudying} 
            alt="Students studying" 
            className="w-full h-full object-cover opacity-20"
            style={{ objectPosition: 'center 25%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        </div>
        
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 sm:mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Curso disponible ahora</span>
            </div>
            
            {/* Title - Responsive sizing */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Aprende Inglés
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                de Forma Efectiva
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
              Aplica la <strong className="text-white">Ley de Pareto</strong>: domina el 20% del contenido 
              que usarás en el 80% de las conversaciones reales.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/basic01"
                className="inline-flex items-center justify-center gap-3 bg-white text-indigo-600 px-6 sm:px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 hover:shadow-xl shadow-lg"
              >
                Comenzar Ahora
                {Icons.arrowRight("w-5 h-5")}
              </Link>
              <a 
                href="#cursos"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 sm:px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/20 transition-all"
              >
                Ver Cursos
                {Icons.chevronDown("w-5 h-5")}
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Features Section - Cards */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 sm:p-8 rounded-2xl bg-gray-50 dark:bg-gray-700/50 hover:bg-white dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${feature.lightColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {iconMap[feature.icon]?.(`w-7 h-7 ${feature.textColor}`)}
                </div>
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-16 sm:py-20 lg:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Cursos Disponibles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Empieza tu Camino
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Cursos estructurados basados en el libro World Link, diseñados para hispanohablantes.
            </p>
          </div>
          
          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {courses.map((course) => (
              <div key={course.id} className="relative">
                {course.available ? (
                  <Link
                    href={`/${course.id}`}
                    className={`group block bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700`}
                  >
                    {/* Card Header */}
                    <div className={`bg-gradient-to-br ${course.color} ${course.hoverColor} p-6 sm:p-8 text-white relative overflow-hidden transition-all`}>
                      {/* Decorative */}
                      <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"></div>
                      <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/5 rounded-full"></div>
                      
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold">
                            Nivel {course.level}
                          </span>
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            {Icons.book("w-6 h-6")}
                          </div>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-1">{course.title}</h3>
                        <p className="text-white/80 text-sm">{course.book} • {course.units}</p>
                      </div>
                    </div>
                    
                    {/* Card Body */}
                    <div className="p-6 sm:p-8">
                      <p className="text-gray-600 dark:text-gray-400 mb-5">
                        {course.description}
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        {course.topics.map((topic, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                            </span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center justify-between pt-5 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          {Icons.book("w-4 h-4")}
                          <span>{course.lessons} lecciones + Quiz</span>
                        </div>
                        <span className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:gap-3 transition-all">
                          Empezar
                          {Icons.arrowRight("w-5 h-5")}
                        </span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 opacity-70">
                    {/* Coming Soon Badge */}
                    <div className="absolute top-4 right-4 z-10 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Próximamente
                    </div>
                    
                    <div className={`bg-gradient-to-br ${course.color} p-6 sm:p-8 text-white relative overflow-hidden`}>
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-white/20 px-3 py-1.5 rounded-full text-sm font-semibold">
                            Nivel {course.level}
                          </span>
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            {Icons.book("w-6 h-6")}
                          </div>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-1">{course.title}</h3>
                        <p className="text-white/80 text-sm">{course.book} • {course.units}</p>
                      </div>
                    </div>
                    
                    <div className="p-6 sm:p-8">
                      <p className="text-gray-600 dark:text-gray-400 mb-5">
                        {course.description}
                      </p>
                      <div className="flex items-center justify-center py-6">
                        <div className="text-center">
                          {Icons.sparkles("w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-2")}
                          <p className="text-sm text-gray-400">En desarrollo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">6</div>
              <div className="text-indigo-200">Lecciones</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">3</div>
              <div className="text-indigo-200">Unidades</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">50+</div>
              <div className="text-indigo-200">Ejercicios</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">100%</div>
              <div className="text-indigo-200">Gratuito</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                {Icons.academic("w-6 h-6")}
              </div>
              <span className="font-bold text-xl">IPCNA English</span>
            </div>
            <p className="text-gray-400 text-sm text-center sm:text-right">
              Aprende inglés de manera efectiva con el método Pareto.
              <br className="hidden sm:block" />
              © 2024 IPCNA English App
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
