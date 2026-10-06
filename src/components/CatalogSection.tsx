import { ProductCard } from './ProductCard';

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
}

interface CatalogSectionProps {
  products: Product[];
}

export function CatalogSection({ products }: CatalogSectionProps) {
  return (
    <section id="catalogo" className="py-24 min-h-[800px] bg-[#FAF6F1]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-[#3D2817] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nuestro Catálogo
          </h2>
          <p className="text-[#8B7355] max-w-2xl mx-auto">
            Descubre nuestras creaciones artesanales, horneadas con dedicación cada día
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 card-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}