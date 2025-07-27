import AboutSection from "@/components/about-sections";
import ContactSection from "@/components/contact-sections";
import HeroSection from "@/components/hero-sections";
import ProjectsSection from "@/components/projects-sections";
import SkillsSection from "@/components/skill-sections";
import { usePageTitle } from "@/hooks/use-page-title";

const Index = () => {
  usePageTitle({
    title: "Filipe Dias - Desenvolvedor Fullstack",
  });

  return (
    <div className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
