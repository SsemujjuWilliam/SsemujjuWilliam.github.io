
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl: string;
    githubUrl: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card group bg-card relative overflow-hidden rounded-xl border border-border p-6 transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <Image 
          src={project.image} 
          alt={project.title} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
          loading="lazy"
        />
        <div className="absolute bottom-3 left-3 right-3 z-20">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className={cn(
                  "text-xs font-medium py-1 px-2 bg-black/30 text-white rounded-full backdrop-blur-sm transition-all duration-300",
                  isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4">
        {project.description}
      </p>
      
      <div className={cn(
        "flex gap-3 mt-auto transition-all duration-300",
        isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-90"
      )}>
        <Button asChild size="sm" variant="outline" className="relative overflow-hidden group">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span className="relative z-10">Code</span>
            <span className="absolute inset-0 bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          </a>
        </Button>
        <Button asChild size="sm" className="relative overflow-hidden group">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span className="relative z-10">Live Demo</span>
            <span className="absolute inset-0 bg-accent/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          </a>
        </Button>
      </div>

      {/* Interactive hover element */}
      <div className={cn(
        "absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-full transition-all duration-500",
        isHovered ? "scale-[10] opacity-20" : "scale-100 opacity-0"
      )}></div>
    </div>
  );
};

export default ProjectCard;
