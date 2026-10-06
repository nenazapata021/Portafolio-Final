interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

export function ProductCard({ image, title, description, price }: ProductCardProps) {
  return (
    <div className="bg-[#FFFBF5] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#E8DCC8] card-section">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 card-image"
        />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-2xl text-[#3D2817] card-text" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h3>
        <p className="text-[#8B7355] leading-relaxed card-text">
          {description}
        </p>
        <p className="text-[#C8941E] text-xl card-text" style={{ fontFamily: "'Playfair Display', serif" }}>
          {price}
        </p>
      </div>
    </div>
  );
}