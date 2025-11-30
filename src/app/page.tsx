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
    description: "El 20% del contenido que te dará el 80% de los resultados.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    shadowColor: "shadow-blue-500/25",
  },
  {
    icon: "video",
    title: "Videos Nativos",
    description: "Contenido real para mejorar tu comprensión auditiva.",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    shadowColor: "shadow-rose-500/25",
  },
  {
    icon: "chat",
    title: "Diálogos Reales",
    description: "Conversaciones que puedes usar desde el primer día.",
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    shadowColor: "shadow-emerald-500/25",
  },
  {
    icon: "pencil",
    title: "Práctica Activa",
    description: "Ejercicios con feedback instantáneo.",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    shadowColor: "shadow-violet-500/25",
  },
];

const stats = [
  { value: "6", label: "Lecciones", suffix: "" },
  { value: "50", label: "Ejercicios", suffix: "+" },
  { value: "3", label: "Unidades", suffix: "" },
  { value: "100", label: "Gratuito", suffix: "%" },
];

const iconMap: Record<string, (className?: string) => React.ReactElement> = {
  target: Icons.target,
  video: Icons.video,
  chat: Icons.chat,
  pencil: Icons.pencil,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-slate-950"></div>
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-indigo-600/20 to-pink-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/10 to-blue-600/10 rounded-full blur-[150px]"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Premium Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                  {Icons.academic("w-7 h-7 text-white")}
                </div>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">English</span>
                <span className="block text-[10px] text-gray-500 font-medium tracking-widest uppercase">Academy</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="/basic01"
              className="group relative px-6 py-2.5 overflow-hidden rounded-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative text-sm font-semibold text-white flex items-center gap-2">
                Empezar Gratis
                {Icons.arrowRight("w-4 h-4 group-hover:translate-x-0.5 transition-transform")}
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Ultra Premium */}
      <header className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Premium Badge with Shimmer */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-md opacity-50 group-hover:opacity-75 animate-pulse"></div>
                <div className="relative flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium text-gray-300">Curso disponible ahora</span>
                  <span className="px-2 py-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-bold text-white">GRATIS</span>
                </div>
              </div>
            </div>

            {/* Main Headline with Premium Typography */}
            <h1 className="relative mb-6">
              {/* Shadow text for depth */}
              <span className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent blur-sm select-none" aria-hidden="true">
                Aprende Inglés
              </span>
              <span className="relative block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 drop-shadow-2xl">
                  Aprende Inglés
                </span>
              </span>
              <span className="relative block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                  de Forma Efectiva
                </span>
              </span>
            </h1>

            {/* Subtitle with better contrast */}
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-12 leading-relaxed">
              Aplica la <span className="text-white font-semibold">Ley de Pareto</span>: domina el 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold"> 20% del contenido </span>
              que usarás en el <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">80% de las conversaciones</span>.
            </p>

            {/* CTA Buttons with Glassmorphism */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* Primary CTA */}
              <Link 
                href="/basic01"
                className="group relative w-full sm:w-auto"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Button */}
                <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-lg shadow-2xl shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all group-hover:scale-[1.02]">
                  <span>Comenzar Ahora</span>
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    {Icons.arrowRight("w-5 h-5 group-hover:translate-x-0.5 transition-transform")}
                  </div>
                </div>
              </Link>

              {/* Secondary CTA */}
              <a 
                href="#cursos"
                className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <span className="text-gray-300 group-hover:text-white transition-colors">Ver Cursos</span>
                {Icons.chevronDown("w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-y-0.5 transition-all")}
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-500">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-900 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-400">{String.fromCharCode(64 + i)}</span>
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">500+ estudiantes</p>
                  <p className="text-sm">ya están aprendiendo</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-800"></div>
              <div className="flex items-center gap-2">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-white font-semibold">4.9/5</span>
                <span className="text-sm">(120 reseñas)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </header>

      {/* Features Section - Premium Cards */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* Glow on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative h-full p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg ${feature.shadowColor} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {iconMap[feature.icon]?.("w-7 h-7 text-white")}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-8 lg:p-12 rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-3xl"></div>
            <div className="absolute inset-0 border border-white/10 rounded-3xl"></div>
            
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                    {stat.value}{stat.suffix}
                  </div>
                  <p className="text-gray-400 mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="relative py-24 lg:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-400">Cursos Disponibles</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
              Empieza tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Camino</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cursos estructurados basados en el libro World Link, diseñados especialmente para hispanohablantes.
            </p>
          </div>
          
          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {courses.map((course) => (
              <div key={course.id} className="relative group">
                {course.available ? (
                  <Link href={`/${course.id}`} className="block">
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${course.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    
                    {/* Card */}
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:-translate-y-2">
                      {/* Header */}
                      <div className={`relative bg-gradient-to-br ${course.color} p-8 overflow-hidden`}>
                        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                        
                        <div className="relative">
                          <div className="flex items-center justify-between mb-6">
                            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
                              Nivel {course.level}
                            </span>
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                              {Icons.book("w-6 h-6")}
                            </div>
                          </div>
                          <h3 className="text-3xl font-black mb-2">{course.title}</h3>
                          <p className="text-white/70 text-sm">{course.book} • {course.units}</p>
                        </div>
                      </div>
                      
                      {/* Body */}
                      <div className="p-8">
                        <p className="text-gray-400 mb-6">{course.description}</p>
                        
                        <ul className="space-y-3 mb-8">
                          {course.topics.map((topic, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-green-500/25">
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex items-center justify-between pt-6 border-t border-white/10">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            {Icons.book("w-4 h-4")}
                            <span>{course.lessons} lecciones + Quiz</span>
                          </div>
                          <span className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                            Empezar
                            {Icons.arrowRight("w-5 h-5")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden opacity-60">
                    {/* Coming Soon Badge */}
                    <div className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-full">
                      <span className="text-xs font-bold text-amber-400">Próximamente</span>
                    </div>
                    
                    <div className={`relative bg-gradient-to-br ${course.color} p-8`}>
                      <div className="flex items-center justify-between mb-6">
                        <span className="px-4 py-1.5 bg-white/20 rounded-full text-sm font-bold">
                          Nivel {course.level}
                        </span>
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          {Icons.book("w-6 h-6")}
                        </div>
                      </div>
                      <h3 className="text-3xl font-black mb-2">{course.title}</h3>
                      <p className="text-white/70 text-sm">{course.book} • {course.units}</p>
                    </div>
                    
                    <div className="p-8 flex flex-col items-center justify-center py-16">
                      {Icons.sparkles("w-12 h-12 text-gray-600 mb-4")}
                      <p className="text-gray-500">En desarrollo</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
            
            {/* Content */}
            <div className="relative px-8 py-16 lg:py-24 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                ¿Listo para empezar?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                Únete a cientos de estudiantes que ya están mejorando su inglés con nuestro método.
              </p>
              <Link 
                href="/basic01"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl shadow-black/25"
              >
                Comenzar Gratis
                {Icons.arrowRight("w-5 h-5")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                {Icons.academic("w-6 h-6 text-white")}
              </div>
              <span className="font-bold text-lg text-white">English Academy</span>
            </div>
            <p className="text-gray-500 text-sm text-center sm:text-right">
              Aprende inglés de manera efectiva con el método Pareto.
              <br />
              © 2025 English Academy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
