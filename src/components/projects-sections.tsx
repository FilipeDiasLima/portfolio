import balatroImage from "@/assets/balatro.png";
import manuappImage from "@/assets/manuapp.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Rocket } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ProjectsSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "ManuApp",
      description:
        "Um SaaS para gerenciamento de manutenções para empresas. Inclui funcionalidades de agendamento, notificações e relatórios. Desenvolvido com Next.js e TypeScript.",
      image: manuappImage,
      technologies: [
        "React",
        "TypeScript",
        "Stripe",
        "PostgreSQL",
        "Chart.js",
        "Prisma",
      ],
      featured: true,
      demoUrl: "https://manuapp-admin.vercel.app",
      githubUrl: "#",
      category: "Web App",
    },
    {
      id: 1,
      title: "Balatro",
      description:
        "Um jogo de cartas online inspirado no jogo original Balatro. Misturando poker e elementos de RPG.",
      image: balatroImage,
      technologies: [
        "TypeScript",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Three.js",
      ],
      featured: true,
      demoUrl: "https://balatro-filipe.vercel.app/",
      githubUrl: "https://github.com/filipediaslima/balatro",
      category: "Web Game",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Rocket className="h-4 w-4 text-accent mr-2" />
            <span className="text-sm font-medium text-accent">
              Projetos em Destaque
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transformando{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              ideias
            </span>{" "}
            em realidade
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada projeto é uma oportunidade de criar algo excepcional. Aqui
            estão alguns dos trabalhos que mais me orgulho.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 bg-gradient-card hover:shadow-hover transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Project Links - Appear on Hover */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <Link
                    to={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="secondary"
                      className="shadow-soft"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button size="sm" variant="secondary" className="shadow-soft">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 backdrop-blur-sm"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-primary/30 hover:border-primary/60 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    to={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      className="flex-1 w-full bg-gradient-primary hover:shadow-hover transition-all duration-300"
                      size="sm"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Demo
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary/5"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Outros projetos
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {otherProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group p-6 border-0 bg-gradient-card hover:shadow-hover transition-all duration-300 animate-fade-in"
                  style={{
                    animationDelay: `${
                      (featuredProjects.length + index) * 0.1
                    }s`,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>

                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs border-primary/20"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Gostou do que viu? Vamos criar algo incrível juntos!
          </p>
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-hover transition-all duration-300"
            onClick={() => navigate("/projetos")}
          >
            Ver todos os projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
