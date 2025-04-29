
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Data Science & AI Engineer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Data-driven solutions <br />
              <span className="text-primary">for complex problems</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              I build machine learning models and data pipelines that transform raw data into actionable insights and intelligent applications.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://github.com/SsemujjuWilliam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M16 8v8"></path>
                  <path d="M12 16v4"></path>
                  <path d="M20 12V8h-4"></path>
                  <path d="M16 8a4 4 0 0 0-4-4"></path>
                  <path d="M16 12a4 4 0 0 1-4 4"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="relative lg:h-[500px] h-[400px] rounded-xl overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[85%] h-[85%] bg-background rounded-xl shadow-xl overflow-hidden flex flex-col">
                <div className="bg-muted px-4 py-2 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-center">
                  <div className="space-y-3">
                    <div className="h-6 bg-muted/50 rounded w-2/3 animate-pulse"></div>
                    <div className="h-6 bg-muted/50 rounded w-3/4 animate-pulse"></div>
                    <div className="h-6 bg-muted/50 rounded w-1/2 animate-pulse"></div>
                    <div className="mt-4">
                      <div className="h-28 bg-primary/10 rounded border border-primary/20 font-mono text-xs p-2 overflow-hidden">
                        <span className="text-primary"># Machine Learning Model</span><br/>
                        <span className="text-green-600">import</span> <span className="text-foreground">numpy as np</span><br/>
                        <span className="text-green-600">import</span> <span className="text-foreground">tensorflow as tf</span><br/><br/>
                        <span className="text-primary"># Define model architecture</span><br/>
                        <span className="text-blue-500">model</span> = <span className="text-purple-500">tf.keras.Sequential</span>([<br/>
                        <span className="ml-4 text-foreground">tf.keras.layers.Dense(128, activation='relu'),</span><br/>
                        <span className="ml-4 text-foreground">tf.keras.layers.Dense(10, activation='softmax')</span><br/>
                        ])
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
