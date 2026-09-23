import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "WASAC Project",
    organization: "WASAC Group",
    period: "Sept 2025 – Dec 2025",
    description: "Analyzed utility data to support demand forecasting, customer profiling, and billing behavior analysis, delivering operational insights for improved planning and service delivery.",
    tags: ["Exploratory Data Analysis(EDA)", "Demand Forecasting", "Predictive Modeling", "Customer Segmentation", "Python", "SQL", "Data Visualization"],
  },
  {
    title: "AD Finance Project",
    organization: "AD Finance",
    period: "Sept 2025 – Dec 2025",
    description: "Supported the development of a centralized data warehouse for microfinance institutions by defining analytical requirements, identifying KPIs, and building dashboards in Apache Superset for reporting and benchmarking.",
    tags: ["Data Warehousing", "Data Modeling", "KPI Development", "Requirements Analysis", "SQL", "Apache Superset", "Data Visualization", "Business Intelligence"],
  },
  {
    title: "Spatio-Temporal Analysis and Predictive Modeling of Urban Crime Using Big Data",
    organization: "Carnegie Mellon University Africa",
    period: "Jan 2025 – May 2025",
    description: "Built predictive models using large-scale crime data to forecast crime intensity across locations and time, applying spatio-temporal analysis and machine learning techniques.",
    tags: ["Big Data", "Data Preprocessing", "Exploratory Data Analysis", "Spatio-Temporal Analysis", "Feature Engineering", "Predictive Modeling", "Machine Learning", "Python"],
  },
  {
    title: "Medical Image Data Processing (MIDaP)",
    organization: "Rwanda Biomedical Center (RBC)",
    period: "Aug 2024 – Dec 2024",
    description: "Processed and analyzed large-scale medical imaging datasets and applied CNN-based models for automated image classification, producing analytical outputs to support healthcare decision-making.",
    tags: ["Deep Learning", "CNN", "Image Classification", "Image Preprocessing", "Computer Vision", "Python", "Machine Learning", "Healthcare AI"],
  },
  {
    title: "Student Record Management System",
    organization: "Angaza Center",
    period: "May 2024 – Sept 2024",
    description: "Analyzed survey, interview, and school operational data, cleaning and integrating multiple sources to identify patterns and inform the design of a student records management platform.",
    tags: ["Data Analysis", "Data Cleaning", "Data Integration", "Exploratory Data Analysis", "Requirements Analysis", "System Design", "Data Modeling", "Stakeholder Analysis"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12" />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-border/50 bg-gradient-card backdrop-blur-sm flex flex-col animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-primary">
                  {project.organization}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group/btn"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                      <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
