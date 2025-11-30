interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide' | 'portrait' | 'banner' | 'ultrawide';
  variant?: 'default' | 'subtle' | 'hero';
}

export default function ImageCard({ 
  src, 
  alt, 
  caption, 
  className = '',
  aspectRatio = 'video',
  variant = 'default'
}: ImageCardProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',          // 16:9
    wide: 'aspect-[21/9]',          // Ultra wide
    portrait: 'aspect-[3/4]',
    banner: 'aspect-[3/1]',         // Panoramic banner (subtle, decorative)
    ultrawide: 'aspect-[4/1]'       // Very thin banner
  };

  const variantClasses = {
    default: 'shadow-md',
    subtle: 'shadow-sm opacity-90 hover:opacity-100',
    hero: 'shadow-lg ring-1 ring-black/5'
  };

  return (
    <figure className={`overflow-hidden rounded-xl ${variantClasses[variant]} ${className}`}>
      <div className={`relative ${aspectClasses[aspectRatio]} overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
          loading="lazy"
        />
        {/* Subtle gradient overlay for banner style */}
        {(aspectRatio === 'banner' || aspectRatio === 'ultrawide') && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        )}
      </div>
      {caption && (
        <figcaption className="px-4 py-2.5 text-sm text-center text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
