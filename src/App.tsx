import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { StorySection } from "./components/StorySection";
import { TeamSection } from "./components/TeamSection";
import { ProductCarousel } from "./components/ProductCarousel";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import heroImage from "./assets/Foto.jpg"
import storyImage from "./assets/Foto-BbkcneaZ.jpg"

export default function App() {
  // Team members data - TODO: Replace with actual photos and descriptions
  const teamMembers = [
    {
      name: "Descripcion laboral",
      role: "Desarrolladora de software",
      description:
        "Soy estudiante de Análisis y Desarrollo de Software (ADSO) en el SENA Centro Textil y de Gestión Industrial en Medellín, Colombia. Me apasiona la ingeniería de software y el desarrollo de aplicaciones web full-stack, enfocándome en crear soluciones eficientes, escalables y con código limpio.",
      images: [heroImage, storyImage],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection heroImage={heroImage} />
      <StorySection storyImage={storyImage} />
      <TeamSection members={teamMembers} />
      <ProductCarousel />
      <CTASection />
      <Footer />
    </div>
  );
}