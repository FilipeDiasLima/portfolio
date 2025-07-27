import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Cloud, Code2, Database, Palette, Zap } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "TypeScript", level: 95 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "Vue.js", level: 40 },
      ],
    },
    {
      icon: Palette,
      title: "UI/UX & Styling",
      color: "text-accent-vibrant",
      bgColor: "bg-accent-vibrant/10",
      skills: [
        { name: "Tailwind CSS", level: 92 },
        { name: "Styled Components", level: 80 },
        { name: "Figma", level: 70 },
        { name: "Design Systems", level: 85 },
      ],
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "PostgreSQL", level: 87 },
        { name: "Prisma", level: 85 },
        { name: "REST APIs", level: 95 },
      ],
    },
    {
      icon: Cloud,
      title: "DevOps & Tools",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 60 },
        { name: "Vercel", level: 45 },
        { name: "GitHub Actions", level: 40 },
      ],
    },
  ];

  const topSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Git",
    "Figma",
    "Prisma",
    "Docker",
    "Vercel",
    "Vue.js",
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              Skills & Expertise
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Tecnologias que{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              domino
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sempre em evolução, sempre aprendendo. Essas são as ferramentas que
            uso para criar experiências digitais excepcionais.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="p-6 bg-gradient-card hover:shadow-hover transition-all duration-300 group animate-fade-in border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`h-6 w-6 ${category.color}`} />
                </div>

                <h3 className="font-semibold text-lg mb-4">{category.title}</h3>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r from-primary to-accent-vibrant transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.2}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Tech Stack Badges */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Stack principal</h3>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {topSkills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
