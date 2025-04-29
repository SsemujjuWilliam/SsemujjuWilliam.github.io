
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import AnimatedSection from '@/components/AnimatedSection';
import PersonalStorySection from '@/components/PersonalStorySection';
import DataVisualizationSection from '@/components/DataVisualizationSection';

const Index = () => {
  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme) {
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        
        <AnimatedSection>
          <ProjectsSection />
        </AnimatedSection>
        
        <AnimatedSection>
          <DataVisualizationSection />
        </AnimatedSection>
        
        <AnimatedSection>
          <PersonalStorySection />
        </AnimatedSection>
        
        <AnimatedSection>
          <SkillsSection />
        </AnimatedSection>
        
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
