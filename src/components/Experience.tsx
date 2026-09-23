import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Business Data Analyst",
    company: "QT Global Software Ltd",
    period: "July 2026 – Present",
    description: "Analyze and transform business data to generate insights and support data-driven decision-making. Develop SQL queries, reports, and dashboards to monitor KPIs and business performance, while collaborating with stakeholders to translate business needs into analytical solutions.",
    current: true,
  },
  {
    title: "Data Scientist",
    company: "Cenfri",
    period: "Sept 2025 – Dec 2025",
    description: "Cleaned, transformed, and analyzed complex datasets using Python and SQL to support evidence-based reporting and operational decision-making. Translated analytical questions into structured datasets, KPIs, and actionable insights, and contributed to reproducible analytical workflows.",
  },
  {
    title: "Data Analytics Instructor",
    company: "Blossom Academy",
    period: "Jul 2025 – Feb 2026",
    description: "Delivered practical training in Python, SQL, Excel, Power BI, and machine learning through hands-on labs and applied projects, guiding learners through data cleaning, exploratory analysis, visualization, and model development for real-world problems.",
  },
  {
    title: "Graduate Teaching Assistant",
    company: "Carnegie Mellon University Africa",
    period: "Nov 2023 – May 2025",
    description: "Supported courses in Big Data Science, Data Analytics, and Data Inference & Applied Machine Learning through labs, technical guidance, and grading, while strengthening communication of technical concepts to both technical and non-technical audiences.",
  },
  {
    title: "Data Scientist",
    company: "Rwanda Biomedical Center (RBC)",
    period: "Jul 2024 – Dec 2024",
    description: "Collaborated with healthcare stakeholders to define data requirements and analytical workflows, transforming healthcare datasets into analytics-ready formats to support monitoring, reporting, and evidence-based decision-making.",
  },
  {
    title: "Data Analyst",
    company: "Angaza Center",
    period: "May 2024 – Sept 2024",
    description: "Analyzed survey, interview, and school operational data to generate insights supporting the design of a student records management platform, producing statistical and visual insights to inform product and service improvements.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12" />

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-300 border-border/50 animate-fade-in ${
                exp.current ? 'border-l-4 border-l-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.title}
                      {exp.current && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-primary mt-1">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
