import { ChevronDown } from 'lucide-react';
import imagen1 from '../assets/Foto.jpg';

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const scrollToNext = () => {
    const nextSection = document.getElementById('historia');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Artisan Bakery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6">
        <img
          src={imagen1}
          alt="Delicias del Rosario"
          className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-full hero-section"
        />
        <h2 className="text-2xl md:text-3xl text-[#3D2817] hero-section" style={{ fontFamily: "'Playfair Display', serif" }}>
          Mi portafolio
        </h2>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white animate-bounce cursor-pointer"
      >
        <span className="text-sm tracking-wider">SCROLL DOWN</span>
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}