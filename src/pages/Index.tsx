import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import StickyNav from "@/components/StickyNav";
import NoiseOverlay from "@/components/NoiseOverlay";

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden cursor-none md:cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <StickyNav />
      <NoiseOverlay />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
};

export default Index;
