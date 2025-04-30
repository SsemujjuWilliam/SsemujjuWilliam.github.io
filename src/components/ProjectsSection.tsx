
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ui/project-card';

const projects = [
  {
    id: 1,
    title: "Sentiment Analysis Engine",
    description: "A deep learning model that analyzes customer reviews and social media mentions to determine sentiment and extract key insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    tags: ["NLP", "TensorFlow", "Python", "BERT"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/SsemujjuWilliam/sentiment-analysis",
  },
  {
    id: 2,
    title: "Predictive Maintenance System",
    description: "Machine learning system that predicts equipment failures before they occur, using IoT sensor data and time-series analysis.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    tags: ["Time Series", "PyTorch", "IoT", "Random Forest"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/SsemujjuWilliam/predictive-maintenance",
  },
  {
    id: 3,
    title: "Computer Vision Object Detector",
    description: "Real-time object detection system using YOLOv5 to identify and track objects in video streams with high accuracy.",
    image: "https://images.unsplash.com/photo-1567361808960-dec9cb578182?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    tags: ["Computer Vision", "YOLO", "OpenCV", "CUDA"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/SsemujjuWilliam/object-detector",
  },
  {
    id: 4,
    title: "AI-Powered Recommendation Engine",
    description: "Content-based and collaborative filtering recommendation system for e-commerce products using advanced matrix factorization algorithms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    tags: ["Recommender Systems", "NumPy", "PySpark", "AWS"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/SsemujjuWilliam/recommendation-engine",
  },
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
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

  return (
    <section 
      id="projects" 
      className="section relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full filter blur-2xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container">
        <div 
          className={`max-w-3xl mx-auto text-center space-y-4 mb-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            Featured Projects
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </h2>
          <p className="text-muted-foreground">
            Showcasing my expertise in data science, machine learning, and artificial intelligence
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        <div 
          className={`text-center mt-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="relative group overflow-hidden"
          >
            <a href="https://github.com/SsemujjuWilliam" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                View More Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
