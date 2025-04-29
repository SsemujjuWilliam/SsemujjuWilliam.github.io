
import { Card, CardContent } from '@/components/ui/card';

const stories = [
  {
    id: 1,
    title: "Faith & AI",
    description: "Combining my passion for preaching the word of God with AI to reach more people and create positive impact.",
    image: "public/lovable-uploads/86020f83-71dc-4fa7-8614-5da57f20d258.png",
  },
  {
    id: 2, 
    title: "Collaboration",
    description: "Working together on AI projects that solve real-world problems through teamwork and shared knowledge.",
    image: "public/lovable-uploads/7c1a9be1-6301-4239-ae0f-27d1417e23de.png",
  },
  {
    id: 3,
    title: "Academic Journey",
    description: "My education has provided the foundation for exploring the fascinating world of machine learning and artificial intelligence.",
    image: "public/lovable-uploads/f66a0f06-e110-42f1-a732-5b86dab738e1.png",
  },
  {
    id: 4,
    title: "Community",
    description: "Building networks and friendships that inspire innovative AI solutions for our communities.",
    image: "public/lovable-uploads/beca1fbc-8a21-453d-98e4-c1d2a76d6c2b.png",
  },
  {
    id: 5,
    title: "Nature & Reflection",
    description: "Finding inspiration in nature helps me develop more sustainable and human-centered AI applications.",
    image: "public/lovable-uploads/9319e020-c75e-473c-8752-82fa1d0c74e1.png",
  },
  {
    id: 6,
    title: "Early Beginnings",
    description: "My journey began at 17 with Python - the first step in a lifelong passion for coding and AI development.",
    image: "public/lovable-uploads/9e64379a-6f4e-4d6f-8a01-afbbb73d86f9.png",
  },
];

const PersonalStorySection = () => {
  return (
    <section id="personal-story" className="section bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
          <p className="text-muted-foreground">
            The personal story behind my passion for artificial intelligence and data science
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-card/80 backdrop-blur-sm">
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-xl font-bold text-white mb-1">{story.title}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">{story.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalStorySection;
