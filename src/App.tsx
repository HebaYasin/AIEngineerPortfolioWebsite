import './App.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { CareerTimelineSection } from '@/components/sections/CareerTimelineSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { useSpotlight } from '@/hooks/use-spotlight';

function App() {
  const spotlightRef = useSpotlight();

  return (
    <div ref={spotlightRef} className="min-h-screen bg-background text-foreground spotlight">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <StatsSection />
        <FeaturedProjectsSection />
        <TechStackSection />
        <CareerTimelineSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
