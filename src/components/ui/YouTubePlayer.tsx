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
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

  if (!showVideo) {
    return (
      <div 
        className="group relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/50 dark:shadow-black/50 bg-gray-900"
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
        
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}></div>
        
        {/* Vignette effect */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
        
        {/* Play Button - Premium Design */}
        <button
          onClick={() => setShowVideo(true)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group/btn"
          aria-label="Reproducir video"
        >
          {/* Outer ring animation */}
          <div className={`absolute inset-0 rounded-full bg-white/20 transition-all duration-500 ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
          
          {/* Main button */}
          <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-red-500 via-rose-500 to-red-600 flex items-center justify-center shadow-2xl shadow-red-500/50 transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            {/* Inner glow */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
            
            {/* Play icon */}
            <svg 
              className={`w-8 h-8 md:w-10 md:h-10 text-white ml-1 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`} 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          
          {/* Ripple effect on hover */}
          <div className={`absolute inset-0 rounded-full border-2 border-white/30 transition-all duration-700 ${isHovered ? 'scale-[2] opacity-0' : 'scale-100 opacity-0'}`}></div>
        </button>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between z-10">
          {/* Title and duration */}
          <div className="flex-1 mr-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 backdrop-blur-sm flex items-center justify-center border border-red-400/30">
                {Icons.video("w-4 h-4 text-red-400")}
              </div>
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Video Lesson</span>
            </div>
            <h4 className="text-white font-bold text-lg leading-tight line-clamp-2">{title}</h4>
          </div>
          
          {/* External Link */}
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white text-sm font-medium rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            YouTube
          </a>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-white/20 rounded-tl-xl"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-white/20 rounded-tr-xl"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/50 dark:shadow-black/50 bg-gray-900">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      
      {/* Close/minimize button */}
      <button
        onClick={() => setShowVideo(false)}
        className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all duration-300 z-10"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* Fallback link */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 text-sm hover:text-white flex items-center gap-2 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
          ¿Problemas? Abrir en YouTube
          {Icons.arrowRight("w-3 h-3")}
        </a>
      </div>
    </div>
  );
}
