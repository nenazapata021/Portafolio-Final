import { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  interval?: number; // milliseconds
}

export function ImageCarousel({ images, alt, interval = 4000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg bg-[#FAF6F1]">
      {images.length > 0 && images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${alt} ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-contain ${
            index === currentIndex ? 'opacity-100' : 'opacity-0 visible'
          }`}
        />
      ))}
      
      {/* Fallback when no images or loading */}
      {images.length === 0 && (
        <div className="flex items-center justify-center h-full text-[#8B7355]">
          <p>No images available</p>
        </div>
      )}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.length > 0 && images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-[#C8941E] w-6' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}