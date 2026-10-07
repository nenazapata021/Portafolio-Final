import { Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contacto" className="bg-[#3D2817] text-[#FAF6F1] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-4 text-[#D4A574]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contáctanos
            </h3>
            <div className="space-y-3">
              <a
                href="tel:3104064397"
                className="flex items-center gap-3 hover:text-[#D4A574] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>301 5579794</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl mb-4 text-[#D4A574]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Síguenos
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ednacastanedazapat/"
                className="w-10 h-10 bg-[#D4A574]/20 hover:bg-[#C8941E] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/edna-casta%C3%B1eda-869769417/"
                className="w-10 h-10 bg-[#D4A574]/20 hover:bg-[#C8941E] rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/edna.zapata.39"
                className="w-10 h-10 bg-[#D4A574]/20 hover:bg-[#C8941E] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D4A574]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--foreground)] text-sm">
            © 2026 Portafolio de Edna Castañeda. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}