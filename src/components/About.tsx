import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12" />

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-muted-foreground text-center leading-relaxed">
              I'm a data scientist with a strong foundation in machine learning, statistical analysis, and problem solving. I've worked on several projects applying these methods to real world challenges, building predictive models, analyzing complex datasets, and turning raw information into actionable insights. I have hands on experience building dashboards and analytics ready pipelines that support better decision making.
I enjoy exploring new tools and techniques, and I'm always looking for opportunities to learn and grow. I'm drawn to challenging problems that push me to think critically and sharpen my skills.
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>

            <Card className="hover:shadow-lg transition-all duration-300 border-border/50 bg-gradient-card backdrop-blur-sm animate-fade-in">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-card-foreground">
                      Master of Science in Information Technology
                    </h4>
                    <p className="text-primary font-medium mt-1">Carnegie Mellon University</p>
                    <p className="text-muted-foreground mt-2">Concentration: Data Science</p>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground md:text-right">
                    2023 – 2025
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-border/50 bg-gradient-card backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-card-foreground">
                      Bachelor of Science in Information Technology
                    </h4>
                    <p className="text-primary font-medium mt-1">University of Rwanda</p>
                    <p className="text-muted-foreground mt-2">Concentration: Software Engineering</p>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground md:text-right">
                    2018 – 2022
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
