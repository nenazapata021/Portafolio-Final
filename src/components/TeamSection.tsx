import { ImageCarousel } from './ImageCarousel';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string; // Single image (for backwards compatibility)
  images?: string[]; // Multiple images for carousel
}

interface TeamSectionProps {
  members: TeamMember[];
}

export function TeamSection({ members }: TeamSectionProps) {
  return (
    <section id="quienes-somos" className="py-24 min-h-[800px] bg-[#FAF6F1]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-[#3D2817] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Descripcion laboral
          </h2>
          <p className="text-[#3D2817] text-lg max-w-2xl mx-auto">
            Desarrolladora de software responsable y comprometida, con enfoque en el desarrollo web full-stack. Cumplo con los plazos, cuido la calidad del codigo y trabajo con diciplina para entragr soluciones funcionales y bien estructuradas.
            Habilidades: Python, React, Angular, JavaScript, TypeScript, Next.js, PHP, HTML, CSS3, Tailwind CSS y Payload.
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-20">
          {members.map((member, index) => (
            <div 
              key={index}
className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''} card-section`}
            >
              {/* Image or Carousel */}
              <div 
                className={`${
                  index % 2 === 1 ? 'md:col-start-2' : ''
                }`}
              >
                {member.images && member.images.length > 1 ? (
                  <ImageCarousel images={member.images} alt={member.name} featured-pulse />
                ) : (
                  <div className="relative h-[400px] md:h-[500px] rounded-lg shadow-lg bg-[#FAF6F1] flex items-center justify-center">
                    <img
                      src={member.image || member.images?.[0] || ''}
                      alt={member.name}
                      className="w-full h-full object-contain rounded-lg card-section"
                    />
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div 
                className={`space-y-6 ${
                  index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''
                }`}
              >
                <div>
                  <h3 className="text-4xl md:text-5xl text-[#3D2817] card-text" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-[#C8941E] text-xl card-text" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {member.role}
                  </p>
                </div>
                <p className="text-[#3D2817] leading-relaxed text-lg card-text">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}