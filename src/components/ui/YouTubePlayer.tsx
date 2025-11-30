'use client';

import { useState } from 'react';
import { Icons } from './Icons';

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
}

export default function YouTubePlayer({ videoId, title = 'Video' }: YouTubePlayerProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

  const handlePlayClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowVideo(true);
      setIsLoading(false);
    }, 500);
  };

  if (!showVideo) {
    return (
      <div 
        className="group relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 dark:shadow-black/50 bg-gray-900 transition-premium hover:shadow-premium-hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Thumbnail with zoom effect */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={thumbnailUrl}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
        </div>
        
        {/* Premium Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10"></div>
        <div className={`absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-rose-900/30 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}></div>
        
        {/* Vignette effect */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]"></div>
        
        {/* Play Button - Ultra Premium Design */}
        <button
          onClick={handlePlayClick}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group/btn btn-ripple"
          aria-label="Reproducir video"
          disabled={isLoading}
        >
          {/* Pulsing outer rings */}
          <div className={`absolute inset-0 rounded-full bg-white/10 animate-ping transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} style={{ animationDuration: '1.5s' }}></div>
          <div className={`absolute -inset-4 rounded-full border-2 border-white/20 transition-all duration-500 ${isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-50'}`}></div>
          <div className={`absolute -inset-8 rounded-full border border-white/10 transition-all duration-700 ${isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-0'}`}></div>
          
          {/* Main button with gradient */}
          <div className={`relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
            isLoading
              ? 'bg-gradient-to-br from-gray-600 to-gray-700'
              : 'bg-gradient-to-br from-red-500 via-rose-500 to-red-600 shadow-red-500/50'
          } ${isHovered && !isLoading ? 'scale-110' : 'scale-100'}`}>
            {/* Glossy inner effect */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 via-white/5 to-transparent"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Icon */}
            {isLoading ? (
              <svg className="w-10 h-10 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg 
                className={`w-10 h-10 md:w-12 md:h-12 text-white ml-1.5 transition-transform duration-300 drop-shadow-lg ${isHovered ? 'scale-110' : 'scale-100'}`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </div>
        </button>

        {/* Bottom Info Bar - Premium Glass Effect */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <div className="flex items-end justify-between gap-4">
            {/* Title and metadata */}
            <div className="flex-1 mr-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/30 backdrop-blur-sm flex items-center justify-center border border-red-400/30 shadow-lg">
                  {Icons.video("w-5 h-5 text-red-400 drop-shadow")}
                </div>
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-widest block">Video Lesson</span>
                  <span className="text-[10px] text-white/50 font-medium">Haz clic para reproducir</span>
                </div>
              </div>
              <h4 className="text-white font-black text-xl leading-tight line-clamp-2 drop-shadow-lg">{title}</h4>
            </div>
            
            {/* External Link - Premium Button */}
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2.5 px-5 py-3 glass hover:bg-white/25 text-white font-semibold rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              <span className="hidden sm:inline">YouTube</span>
            </a>
          </div>
        </div>

        {/* Corner decorations - Premium frame */}
        <div className="absolute top-5 left-5 w-20 h-20 border-l-2 border-t-2 border-white/20 rounded-tl-2xl transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:border-white/40"></div>
        <div className="absolute top-5 right-5 w-20 h-20 border-r-2 border-t-2 border-white/20 rounded-tr-2xl transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:border-white/40"></div>
        <div className="absolute bottom-5 left-5 w-12 h-12 border-l-2 border-b-2 border-white/10 rounded-bl-xl hidden md:block"></div>
        <div className="absolute bottom-5 right-5 w-12 h-12 border-r-2 border-b-2 border-white/10 rounded-br-xl hidden md:block"></div>
        
        {/* Top badge */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/40 backdrop-blur-sm rounded-full border border-white/10 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-semibold text-white/70">HD</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 dark:shadow-black/50 bg-gray-900 animate-fade-in-scale">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      
      {/* Close button - Premium */}
      <button
        onClick={() => setShowVideo(false)}
        className="absolute top-5 right-5 w-12 h-12 rounded-xl glass flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 z-10 hover:scale-110 shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* Bottom gradient with fallback link */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center justify-between">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 text-sm hover:text-white flex items-center gap-2 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            ¿Problemas? Abrir en YouTube
            {Icons.arrowRight("w-4 h-4")}
          </a>
          
          <span className="text-xs text-white/50 font-medium">Presiona ESC para cerrar</span>
        </div>
      </div>
    </div>
  );
}
