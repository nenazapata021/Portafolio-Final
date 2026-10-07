import { useState, useEffect } from 'react';
import logoImage from '../assets/Foto.jpg';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FFFBF5] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')} className="h-16 w-16">
            <img src={logoImage} alt="Delicias del Rosario" className="h-full w-full object-contain" />
          </button>

          {/* Menu Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('historia')}
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Descripción personal
            </button>
            <button
              onClick={() => scrollToSection('catalogo')}
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}