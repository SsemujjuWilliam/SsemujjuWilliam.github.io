
import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const heroElement = heroRef.current;
      const parallaxOffset = scrollPosition * 0.4;
      
      if (heroElement.querySelector('.hero-image-container')) {
        const imageContainer = heroElement.querySelector('.hero-image-container') as HTMLElement;
        imageContainer.style.transform = `translateY(${parallaxOffset * 0.2}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef} 
      id="hero" 
      className="min-h-screen flex items-center pt-16 section relative overflow-hidden"
    >
      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full bg-primary/10 animate-pulse",
              i % 3 === 0 ? "w-12 h-12" : i % 3 === 1 ? "w-24 h-24" : "w-32 h-32"
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              opacity: 0.1 + Math.random() * 0.15,
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={cn(
              "space-y-6 transition-all duration-1000 ease-out transform",
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            )}
          >
            <p className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Data Science & AI Engineer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              William Ssemujju <br />
              <span className="text-primary">AI Solutions from Uganda 🇺🇬</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Passionate Artificial Intelligence Engineer crafting impactful and innovative solutions, infused with a touch of Ugandan ingenuity. Specializing in robust and scalable machine learning solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                asChild 
                size="lg" 
                className="relative overflow-hidden group"
              >
                <a href="#projects">
                  <span className="relative z-10">View Projects</span>
                  <span className="absolute inset-0 bg-primary/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="relative overflow-hidden group"
              >
                <a href="#contact">
                  <span className="relative z-10">Contact Me</span>
                  <span className="absolute inset-0 bg-accent/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              {/* Social media links with hover animations */}
              {[
                { name: "GitHub", href: "https://github.com/SsemujjuWilliam", icon: "github" },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/william-ssemujju/", icon: "linkedin" },
                { name: "Twitter", href: "https://twitter.com/SsemujjuWilliam", icon: "twitter" },
                { name: "TikTok", href: "https://vm.tiktok.com/ZMkp17uDs/", icon: "tiktok" },
                { name: "WhatsApp", href: "https://wa.me/message/C6YVX7OIAJLVN1", icon: "whatsapp" }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110 transition-transform duration-200"
                  aria-label={social.name}
                >
                  {social.icon === "github" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  )}
                  {social.icon === "twitter" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  )}
                  {social.icon === "tiktok" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                      <path d="M16 8v8"></path>
                      <path d="M12 16v4"></path>
                      <path d="M20 12V8h-4"></path>
                      <path d="M16 8a4 4 0 0 0-4-4"></path>
                      <path d="M16 12a4 4 0 0 1-4 4"></path>
                    </svg>
                  )}
                  {social.icon === "whatsapp" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                      <path d="M9 15h6"></path>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
          
          <div 
            className={cn(
              "hero-image-container relative lg:h-[500px] h-[400px] rounded-xl overflow-hidden transition-all duration-1000 ease-out transform",
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl z-10"></div>
            <Image 
              src="https://drive.google.com/uc?export=view&id=1J0ARAXowac_nZcRSPBFcefdlFr9MWcY8" 
              alt="William Ssemujju - AI Engineer"
              className="w-full h-full object-cover rounded-xl"
              fallbackSrc="/placeholder.svg"
            />

            {/* Floating decorative elements */}
            <div className="absolute bottom-6 right-6 bg-card/80 backdrop-blur-md p-3 rounded-xl shadow-lg border border-border/50 transform rotate-3 z-20 hidden md:block animate-pulse">
              <div className="text-sm font-mono text-primary">
                <span className="text-green-600">AI</span> + <span className="text-purple-500">Innovation</span> = <span className="text-accent">Impact</span>
              </div>
            </div>

            <div className="absolute top-6 left-6 w-16 h-16 bg-card/80 backdrop-blur-md rounded-lg shadow-lg border border-border/50 flex items-center justify-center z-20 hidden md:flex">
              <div className="text-3xl animate-bounce">🇺🇬</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
