import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Coffee,
  Heart,
  Lightbulb,
  MapPin,
  Target,
  Users,
} from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Paixão pelo código",
      description:
        "Cada linha de código é escrita com cuidado e atenção aos detalhes. TypeScript não é só uma ferramenta, é minha linguagem favorita.",
    },
    {
      icon: Users,
      title: "Colaboração",
      description:
        "Acredito no poder do trabalho em equipe. As melhores soluções surgem quando diferentes perspectivas se encontram.",
    },
    {
      icon: Lightbulb,
      title: "Inovação constante",
      description:
        "Sempre em busca das melhores práticas e tecnologias emergentes. O aprendizado nunca para.",
    },
    {
      icon: Target,
      title: "Foco no resultado",
      description:
        "Código bonito é importante, mas o que realmente importa é resolver problemas reais para pessoas reais.",
    },
  ];

  const journey = [
    {
      year: "2020",
      title: "Descobrindo o JavaScript",
      description:
        "Primeira experiência com JavaScript me fez apaixonar pela linguagem e suas possibilidades.",
    },
    {
      year: "2021",
      title: "Descobrindo o TypeScript",
      description:
        "Primeira experiência com TypeScript me fez apaixonar pela tipagem estática e desenvolvimento mais seguro.",
    },
    {
      year: "2022",
      title: "Explorando o fullstack",
      description:
        "Especializei-me em React e Next.js, criando aplicações modernas e performáticas. Expandindo conhecimentos para backend com Node.js e bancos de dados modernos.",
    },
    {
      year: "2024",
      title: "Construindo o futuro",
      description:
        "Focado em criar soluções escaláveis e experiências digitais excepcionais.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Side */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Heart className="h-4 w-4 text-accent mr-2" />
                <span className="text-sm font-medium text-accent">
                  Sobre mim
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Desenvolvedor por{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  vocação
                </span>
                <br />
                FullStack por paixão
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Olá! Sou Filipe Dias, um desenvolvedor que encontrou no
                  TypeScript não apenas uma ferramenta, mas uma filosofia de
                  desenvolvimento. Acredito que código bem escrito é código que
                  conta uma história.
                </p>

                <p>
                  Nos últimos anos, tenho me dedicado a criar aplicações web
                  modernas que não só funcionam perfeitamente, mas também
                  encantam quem as usa. Cada projeto é uma oportunidade de
                  superar expectativas.
                </p>

                <p>
                  Quando não estou codando, você me encontra explorando novas
                  tecnologias, contribuindo para projetos open source ou tomando
                  um café enquanto planejo a próxima aplicação revolucionária.
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center text-primary">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="font-medium">Localização</span>
                </div>
                <p className="text-muted-foreground">Brasil (Remoto)</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-accent">
                  <Coffee className="h-5 w-5 mr-2" />
                  <span className="font-medium">Cafés por dia</span>
                </div>
                <p className="text-muted-foreground">≈ 4 xícaras ☕</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-accent-vibrant">
                  <Code2 className="h-5 w-5 mr-2" />
                  <span className="font-medium">Linguagem favorita</span>
                </div>
                <p className="text-muted-foreground">TypeScript 💙</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-primary">
                  <Target className="h-5 w-5 mr-2" />
                  <span className="font-medium">Foco atual</span>
                </div>
                <p className="text-muted-foreground">Fullstack TS</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-hover transition-all duration-300"
            >
              Vamos conversar!
            </Button>
          </div>

          {/* Values Side */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-8">
              Valores que me guiam
            </h3>

            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="p-6 border-0 bg-gradient-card hover:shadow-hover transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">{value.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Minha jornada em{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                desenvolvimento
              </span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cada ano trouxe novos desafios, aprendizados e paixões. Esta é a
              evolução da minha carreira até aqui.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((milestone, index) => (
              <Card
                key={milestone.year}
                className="p-6 text-center border-0 bg-gradient-card hover:shadow-hover transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {milestone.year}
                </div>

                <h4 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                  {milestone.title}
                </h4>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
