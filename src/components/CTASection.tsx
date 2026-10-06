import { MessageCircle } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#E8DCC8] to-[#D4A574]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl text-[#3D2817] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Gracias por ver mi portafolio👍.
        </h2>
        <p className="text-[#3D2817] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
           "Cada proyecto, una experiencia; cada línea de código, con propósito."
        </p>
      </div>
    </section>
  );
}