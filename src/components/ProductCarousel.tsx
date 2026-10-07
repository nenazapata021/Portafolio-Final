import { useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import evyeImage from '../assets/EVYE_con_nombre.png';
import refugioImage from '../assets/Refugio Rodante.jpg';
import frutyImage from '../assets/Fruty Fantasty.jpeg';

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  ingredients: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    image: evyeImage,
    title: 'EVYE',
    description: 'EVYE (Ecología Verde y Emocional) es una plataforma web que se une dos temas: el cuidado del medio ambiente y el bienestar emocional de las personas. Ofrece artículos y un canal de contacto, con una interfaz sencilla y pensada para todo el publico.',
    ingredients: 'Plataforma web',
    price: 'Gratis'
  },
  {
    id: 2,
    image: refugioImage,
    title: 'Refugio Rodante',
    description: 'Proyecto de refugio móvil para viajes y acampar, diseñado para ofrecer comodidad y sostenibilidad en la carretera.',
    ingredients: 'Vehículo adaptado',
    price: 'Consultar'
  },
  {
    id: 3,
    image: frutyImage,
    title: 'Fruty Fantasty',
    description: 'Una experiencia dulce y colorida con productos frutales innovadores y fantásticos.',
    ingredients: 'Frutas seleccionadas',
    price: 'Consultar'
  }
];

interface ArrowProps {
  onClick?: () => void;
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#C8941E] hover:bg-[#B07F1A] text-white rounded-full p-3 shadow-lg transition-colors"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#C8941E] hover:bg-[#B07F1A] text-white rounded-full p-3 shadow-lg transition-colors"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

export function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: 'slick-dots !bottom-8',
    customPaging: (i: number) => (
      <button
        className={`w-3 h-3 rounded-full transition-all ${
          i === currentSlide ? 'bg-[#C8941E] w-8' : 'bg-[#D4A574]'
        }`}
      />
    )
  };

  return (
    <section id="catalogo" className="py-24 bg-[#FAF6F1]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-[var(--foreground)] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Proyectos
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Descubre los proyectos que he hecho.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-4">
                <div className="bg-[#FFFBF5] rounded-lg overflow-hidden shadow-lg border border-[#E8DCC8]">
                  {/* Image - Full Width, Large */}
                  <div className="h-[500px] md:h-[600px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <a
                      href={`https://github.com/edna-casta/${product.id.toString().toLowerCase()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-[#3D2817]/40 rounded-lg px-3 py-1 text-sm inline-block"
                    >
                      Ver en GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Description Below Carousel */}
        <div className="max-w-4xl mx-auto mt-12 px-4">
          <h3
            className="text-3xl md:text-4xl text-[var(--foreground)] mb-6 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            EVYE
          </h3>

          <p className="text-[var(--muted-foreground)] leading-relaxed text-center">
            EVYE (Ecología Verde y Emocional) es una plataforma web que seune dos temas: el cuidado del medio ambiente y el bienestar emocional de las personas. Ofrece artículos y un canal de contacto, con una interfaz sencilla y pensada para todo el publico🌿💚.
            <br />
            <span className="text-[var(--primary)] font-medium">Stack: Plataforma web</span>
            <br />
            <a
              href="https://github.com/edna-casta/evye"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[var(--primary)] transition-colors"
            >
              Ver proyecto →
            </a>
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-12 px-4">
          <h3
            className="text-3xl md:text-4xl text-[var(--foreground)] mb-6 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Fruty Fantasty
          </h3>

          <p className="text-[var(--muted-foreground)] leading-relaxed text-center">
            Fruty Fantasty es una tienda dedicada a la venta de frutas frescas, seleccionadas con cuidado para llevar a tu mesa sabor, color y frescura en cada compra.
            Con un estilo alegre y cercano, su lema es "Un gustico al año no hace daño" invita a darse el gusto de disfrutar lo natural y delicioso.
            Fresas, moras y muchas otras frutas se unen en una propuesta dulce y fresca para toda la familia. 🍓🫐
            <br />
            <span className="text-[var(--primary)] font-medium">Stack: Frutas seleccionadas</span>
            <br />
            <a
              href="https://github.com/edna-casta/fruty-fantasty"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[var(--primary)] transition-colors"
            >
              Ver proyecto →
            </a>
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-12 px-4">
          <h3
            className="text-3xl md:text-4xl text-[var(--foreground)] mb-6 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Refugio Rodante
          </h3>

          <p className="text-[var(--muted-foreground)] leading-relaxed text-center">
            Refugio Rodante es una plataforma web que busca resolver la escazes y desorganizacion de paqueaderos en Medellin. 
            A traves de reservas digitales, mapas interactivos, la aplicacion mejora la experiencia del conductor y contribuye a desgestionar zonas criticas de la ciudad 🚗.
            <br />
            <span className="text-[var(--primary)] font-medium">Stack: Vehículo adaptado</span>
            <br />
            <a
              href="https://github.com/edna-casta/refugio-rodante"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[var(--primary)] transition-colors"
            >
              Ver proyecto →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}