import airbnbImage from "@/assets/airbnb.png";
import balatroImage from "@/assets/balatro.png";
import ggStoreImage from "@/assets/ggstore.png";
import igniteGymImage from "@/assets/ignite-gym.png";
import manuappImage from "@/assets/manuapp.png";
import marketSpaceImage from "@/assets/marketspace.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { usePageTitle } from "@/hooks/use-page-title";
import {
  ArrowLeft,
  Briefcase,
  ExternalLink,
  Github,
  Home,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
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
      status: "Concluído",
      year: "2023-2025",
      features: [
        "Dashboards interativos em tempo real",
        "Integração com APIs REST",
        "Agendamentos e notificações",
        "Exportação de relatórios em PDF/Excel",
        "Autenticação multi-fator",
        "Modo escuro/claro",
      ],
    },
    {
      id: 2,
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
      status: "Concluído",
      year: "2025",
      features: [
        "Dashboards interativos em tempo real",
        "Integração com APIs REST",
        "Agendamentos e notificações",
        "Exportação de relatórios em PDF/Excel",
        "Autenticação multi-fator",
        "Modo escuro/claro",
      ],
    },
    {
      id: 3,
      title: "Ignite Gym",
      description:
        "Seu app para treinar na academia, programe seu treino da semana da melhor forma possível. Você personaliza o seu cronograma de treino da sua maneira e é registrado em histórico todo o seu progresso.",
      image: igniteGymImage,
      technologies: [
        "React Native",
        "Expo",
        "Native Base",
        "NodeJS",
        "Sqlite3",
        "TypeScript",
      ],
      featured: true,
      demoUrl:
        "https://www.linkedin.com/posts/filipediaslima_react-reactnative-rocketseat-activity-7025477756087844864--e0_?utm_source=share&utm_medium=member_desktop",
      githubUrl: "https://github.com/filipediaslima/ignite-gym",
      category: "Mobile App",
      status: "Concluído",
      year: "2023",
      features: [
        "Interface amigável e responsiva",
        "Registro de treinos e progresso",
        "Notificações de lembrete de treino",
        "Histórico de atividades",
      ],
    },
    {
      id: 4,
      title: "Airbnb Clone",
      description:
        "O projeto foi desenvolvido a partir de uma vídeo aula do canal Code with Antonio no Youtube, nele é ensinado a nova forma de produção com Next 13, versão que mudou muita coisa no conceito de frontend. ",
      image: airbnbImage,
      technologies: [
        "NextJs 13",
        "Prisma DB",
        "TailwindCss",
        "Next Auth",
        "Typescript",
      ],
      featured: true,
      demoUrl:
        "https://www.linkedin.com/posts/filipediaslima_react-reactjs-nextjs-activity-7064789062980636672-04Os?utm_source=share&utm_medium=member_desktop",
      githubUrl: "https://github.com/filipediaslima/airbnb",
      category: "Web App",
      status: "Concluído",
      year: "2023",
      features: [
        "Listagem de hospedagens",
        "Sistema de reservas",
        "Autenticação de usuários",
        "Interface responsiva",
      ],
    },
    {
      id: 5,
      title: "MarketSpace",
      description:
        "O app marketspace é um aplicativo mobile Android e iOS que permite você comprar novos produtos e vender os seus. Nele você conta com um perfil e sua área de produtos cadastrados, podendo desativar, editar, remover e adicionar novos produtos. Caso queira comprar um produto, você escolhe ou filtra e entra em contato com o vendedor.",
      image: marketSpaceImage,
      technologies: [
        "React Native",
        "Expo",
        "Native Base",
        "NodeJs",
        "Typescript",
      ],
      featured: true,
      demoUrl: "https://github.com/FilipeDiasLima/marketspace",
      githubUrl: "https://github.com/filipediaslima/marketspace",
      category: "Web App",
      status: "Concluído",
      year: "2023",
      features: [
        "Listagem de produtos",
        "Sistema de compras",
        "Autenticação de usuários",
        "Interface responsiva",
      ],
    },
    {
      id: 6,
      title: "GG Store",
      description:
        "Este projeto foi desenvolvido para ser uma loja online de jogos virtuais, a loja se basea na venda de keys dos jogos disponiveis. Conta com um administrado para cadastrar novos produtos com imagens e descrição e conta com um usuário comum, que será o comprador. É possível adicionar um jogo no carrinho e nos favoritos, logar na plataforma, usando cookies do navegador, um backend e um banco de dados. O código e as tecnologias do projeto estão no meu repositório do github, o link está ao final desta página.",
      image: ggStoreImage,
      technologies: [
        "React Js",
        "Node Js",
        "Sequelize",
        "PostgreSQL",
        "Typescript",
        "Docker",
      ],
      featured: true,
      demoUrl:
        "https://www.linkedin.com/posts/filipediaslima_javascript-frontend-typescript-activity-6987149814052360192-c8I_?utm_source=share&utm_medium=member_desktop",
      githubUrl: "https://github.com/filipediaslima/ggstore",
      category: "Web App",
      status: "Concluído",
      year: "2023",
      features: [
        "Exibição de jogos disponíveis",
        "Sistema de carrinho de compras",
        "Autenticação de usuários",
        "Interface responsiva",
      ],
    },
  ];

  usePageTitle({
    title: "Filipe Dias - Projetos",
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Briefcase className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm font-medium text-accent">
                Portfólio Completo
              </span>
            </div>

            <Link
              to="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao início
            </Link>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Meus{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Projetos
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma coleção dos projetos que desenvolvi, desde aplicações web
              complexas até soluções mobile inovadoras. Cada projeto representa
              um desafio único e uma oportunidade de crescimento.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 bg-gradient-card hover:shadow-hover transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Project Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="shadow-soft"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="shadow-soft"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={
                        project.status === "Concluído" ? "default" : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

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

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">
                      Principais recursos:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
          {/* CTA */}
          <div className="text-center mt-16 pt-16 border-t border-border/40">
            <h3 className="text-2xl font-bold mb-4">
              Interessado em colaborar?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Estou sempre aberto a novos desafios e oportunidades. Vamos
              conversar sobre seu próximo projeto!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-hover transition-all duration-300"
                asChild
              >
                <Link to="/#contato">
                  <Mail className="h-4 w-4 mr-2" />
                  Entrar em contato
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Voltar ao início
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
