
import { Button } from '@/components/ui/button';

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
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground">
            Showcasing my expertise in data science, machine learning, and artificial intelligence
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 right-3 z-20">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs font-medium py-1 px-2 bg-black/30 text-white rounded-full backdrop-blur-sm">
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
              
              <div className="flex gap-3 mt-auto">
                <Button asChild size="sm" variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    Code
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/SsemujjuWilliam" target="_blank" rel="noopener noreferrer">
              View More Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
