import { Code2, Database, BarChart3, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "SQL", "R"],
  },
  {
    title: "Data Visualization & BI Tools",
    icon: BarChart3,
    skills: ["Power BI", "Tableau", "Apache Superset", "Metabase", "Dashboard Development", "KPI Tracking"],
  },
  {
    title: "Databases & Data Engineering",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Data Warehousing", "Data Cleaning", "Data Transformation"],
  },
  {
    title: "Machine Learning & Analytics",
    icon: Brain,
    skills: [
      "Machine Learning",
      "Predictive Modelling",
      "Statistical Analysis",
      "Exploratory Data Analysis (EDA)",
      "Hypothesis Testing",
      "Confidence Intervals",
    ],
  },
];

const additionalSkills = [
  "Stakeholder Collaboration",
  "Data Quality Assurance",
  "Analytical Reporting",
  "Documentation",
  "Data Interpretation",
  "Presenting Findings to Non-Technical Audiences",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12" />

        <div className="max-w-6xl mx-auto">
          {/* Main Skill Categories */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-border/50 bg-gradient-card backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Skills */}
          <Card className="hover:shadow-xl transition-all duration-300 border-border/50 bg-gradient-card backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="text-center">Additional Competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {additionalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
