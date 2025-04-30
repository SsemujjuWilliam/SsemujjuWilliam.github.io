
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { cn } from '@/lib/utils';

const stories = [
  {
    id: 1,
    title: "Faith & AI",
    description: "Combining my passion for preaching the word of God with AI to reach more people and create positive impact.",
    image: "/lovable-uploads/86020f83-71dc-4fa7-8614-5da57f20d258.png",
  },
  {
    id: 2, 
    title: "Collaboration",
    description: "Working together on AI projects that solve real-world problems through teamwork and shared knowledge.",
    image: "/lovable-uploads/7c1a9be1-6301-4239-ae0f-27d1417e23de.png",
  },
  {
    id: 3,
    title: "Academic Journey",
    description: "My education has provided the foundation for exploring the fascinating world of machine learning and artificial intelligence.",
    image: "/lovable-uploads/f66a0f06-e110-42f1-a732-5b86dab738e1.png",
  },
  {
    id: 4,
    title: "Community",
    description: "Building networks and friendships that inspire innovative AI solutions for our communities.",
    image: "/lovable-uploads/beca1fbc-8a21-453d-98e4-c1d2a76d6c2b.png",
  },
  {
    id: 5,
    title: "Nature & Reflection",
    description: "Finding inspiration in nature helps me develop more sustainable and human-centered AI applications.",
    image: "/lovable-uploads/9319e020-c75e-473c-8752-82fa1d0c74e1.png",
  },
  {
    id: 6,
    title: "Early Beginnings",
    description: "My journey began at 17 with Python - the first step in a lifelong passion for coding and AI development.",
    image: "/lovable-uploads/9e64379a-6f4e-4d6f-8a01-afbbb73d86f9.png",
  },
];

const PersonalStorySection = () => {
  const [activeStory, setActiveStory] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (id: number) => {
    setActiveStory(id);
  };

  const handleMouseLeave = () => {
    setActiveStory(null);
  };

  return (
    <section 
      id="personal-story" 
      className="section bg-muted/30 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full filter blur-2xl -z-10"></div>
      
      <div className="container relative z-10">
        <div 
          className={`max-w-3xl mx-auto text-center space-y-4 mb-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
          <p className="text-muted-foreground">
            The personal story behind my passion for artificial intelligence and data science
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card 
                className={`group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-card/80 backdrop-blur-sm cursor-pointer`}
                onMouseEnter={() => handleMouseEnter(story.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <Image 
                    src={story.image} 
                    alt={story.title}
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-500",
                      activeStory === story.id ? "scale-110" : "scale-100"
                    )}
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className={cn(
                      "text-xl font-bold text-white mb-1 transition-all duration-300",
                      activeStory === story.id ? "translate-y-0" : "translate-y-2"
                    )}>
                      {story.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{story.description}</p>
                  
                  {/* Interactive element that appears on hover */}
                  <div className={cn(
                    "mt-3 h-0.5 bg-primary/70 transition-all duration-300 ease-out",
                    activeStory === story.id ? "w-full" : "w-0"
                  )}></div>
                </CardContent>

                {/* Decorative corner element */}
                <div className={cn(
                  "absolute -bottom-12 -right-12 w-24 h-24 bg-primary/10 rounded-full transition-all duration-500",
                  activeStory === story.id ? "scale-100 opacity-100" : "scale-0 opacity-0"
                )}></div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalStorySection;
