
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
                <img 
                  src="public/lovable-uploads/c4ac4568-42ec-4cd8-a33c-d636a3515b35.png" 
                  alt="William Ssemujju" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
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
              Business professional with a B.S. in Business Statistics from Makerere University Business School. I'm passionate about leveraging AI, ML, and Deep Learning to drive impactful business decisions, particularly within the Ugandan context. I believe in the power of technology to transform lives, especially here in Uganda.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Education</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>B.S. in Business Statistics, Makerere University Business School</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Uganda 🇺🇬</span>
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
