
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8')] bg-cover bg-center"></div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-xl bg-accent flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M20 17.58A5 5 0 0 1 18.81 19"></path>
                  <path d="M15 17.87a9 9 0 0 1-10.24.7"></path>
                  <path d="M15.54 15.63a14.29 14.29 0 0 1-11.25 1.16"></path>
                  <path d="M16 13a18 18 0 0 1-14 0"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-bold">Data Scientist & AI Engineer</h3>
            <p className="text-muted-foreground">
              I'm a passionate data scientist with expertise in machine learning, deep learning, and data analytics. With 5+ years of experience translating complex data into actionable insights, I help businesses make data-driven decisions through AI-powered solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Education</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>MSc in Data Science, Stanford University</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>BSc in Computer Science, MIT</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Experience</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Machine Learning Engineer, Google</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Data Scientist, Tesla</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="outline">
                <a href="#contact">Hire Me</a>
              </Button>
              <Button asChild variant="ghost">
                <a href="/resume.pdf" download>Download Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
