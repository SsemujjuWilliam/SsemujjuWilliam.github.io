
const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "R", "SQL", "Java"]
  },
  {
    category: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "Deep Learning"]
  },
  {
    category: "Data Processing",
    items: ["Pandas", "NumPy", "NLTK", "Matplotlib", "Seaborn"]
  },
  {
    category: "Web Development",
    items: ["Django", "Flask", "RESTful APIs", "HTML/CSS"]
  },
  {
    category: "Big Data",
    items: ["Hadoop", "Spark", "ETL Processes", "Data Pipelines"]
  },
  {
    category: "Visualization",
    items: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "PowerBI"]
  },
  {
    category: "Cloud Platforms",
    items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes"]
  },
  {
    category: "Currently Learning",
    items: ["Advanced Cloud Computing", "Blockchain", "Smart Contracts"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
          <p className="text-muted-foreground">
            My diverse skill set in data science, machine learning, and software engineering
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillCategory, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-all hover:border-primary/50"
            >
              <h3 className="font-bold text-lg mb-4 text-primary">{skillCategory.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-bold text-lg mb-3">Professional Certifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">B.S. in Business Statistics</h4>
                  <p className="text-sm text-muted-foreground">Makerere University Business School</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Machine Learning Specialization</h4>
                  <p className="text-sm text-muted-foreground">Online Certification</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Cloud Computing Fundamentals</h4>
                  <p className="text-sm text-muted-foreground">Online Certification</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
