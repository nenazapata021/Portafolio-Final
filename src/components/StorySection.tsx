interface StorySectionProps {
  storyImage: string;
}

export function StorySection({ storyImage }: StorySectionProps) {
  return (
    <section id="historia" className="py-24 min-h-[800px] bg-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] md:h-[700px]">
            <img
              src={storyImage}
              alt="Vintage Bakery"
              className="w-full h-full object-contain rounded-lg hero-section"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl text-[#3D2817] hero-section" style={{ fontFamily: "'Playfair Display', serif" }}>
              Descripción personal
            </h2>
            <div className="space-y-4 text-[#3D2817] leading-relaxed hero-section">
              <p>
                Soy una persona cercana y sencilla que disfruta de los pequeños momentos. Le encanta ver 
                películas y series, ya sea para desconectarse del día a día o para dejarse llevar por 
                buenas historias. Pero lo que más valora es pasar tiempo con su familia, compartiendo 
                con ellos y creando recuerdos juntos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}