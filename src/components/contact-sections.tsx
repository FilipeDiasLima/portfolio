import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Coffee, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Para propostas de trabalho e parcerias",
      value: "filipdiasdelima@gmail.com",
      action: "Enviar email",
      primary: true,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Vamos nos conectar profissionalmente",
      value: "/in/filipediaslima",
      link: "https://www.linkedin.com/in/filipediaslima",
      action: "Conectar",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Veja meus projetos e contribuições",
      value: "/filipedias",
      link: "https://github.com/filipediaslima",
      action: "Seguir",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-vibrant/10 border border-accent-vibrant/20 mb-6">
            <MessageCircle className="h-4 w-4 text-accent-vibrant mr-2" />
            <span className="text-sm font-medium text-accent-vibrant">
              Vamos conversar
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pronto para{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              colaborar?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novos desafios e oportunidades. Seja um
            projeto, uma posição ou apenas um bate-papo sobre tecnologia!
          </p>
        </div>

        <div className="flex w-full items-center justify-center gap-12 mb-16">
          {/* Contact Form */}
          {/* <Card className="p-8 border-0 bg-gradient-card shadow-soft animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Send className="h-6 w-6 text-primary mr-3" />
              Envie uma mensagem
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome</label>
                  <Input
                    placeholder="Seu nome"
                    className="border-primary/20 focus:border-primary/50 transition-colors duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="border-primary/20 focus:border-primary/50 transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Assunto</label>
                <Input
                  placeholder="Sobre o que você gostaria de conversar?"
                  className="border-primary/20 focus:border-primary/50 transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Mensagem</label>
                <Textarea
                  placeholder="Conte-me mais sobre seu projeto ou ideia..."
                  className="min-h-32 border-primary/20 focus:border-primary/50 transition-colors duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-hover transition-all duration-300 group"
              >
                <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Enviar mensagem
              </Button>
            </form>
          </Card> */}

          {/* Contact Methods */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Formas de contato</h3>
              <p className="text-muted-foreground">
                Escolha a plataforma que mais se adapta ao seu estilo de
                comunicação.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card
                    key={method.title}
                    className={`p-6 border-0 bg-gradient-card hover:shadow-hover transition-all duration-300 group cursor-pointer animate-fade-in ${
                      method.primary ? "ring-2 ring-primary/20" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl ${
                            method.primary ? "bg-primary/15" : "bg-primary/10"
                          } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon
                            className={`h-6 w-6 ${
                              method.primary
                                ? "text-primary"
                                : "text-primary/70"
                            }`}
                          />
                        </div>

                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                            {method.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-1">
                            {method.description}
                          </p>
                          <p className="text-primary text-sm font-medium">
                            {method.value}
                          </p>
                        </div>
                      </div>

                      <Link
                        to={method.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                        >
                          {method.action}
                        </Button>
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Fun CTA */}
            <Card className="p-6 border-0 bg-gradient-to-r from-accent/10 to-accent-vibrant/10 text-center">
              <Coffee className="h-8 w-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-lg mb-2">
                Que tal um café virtual? ☕
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Adoro conversar sobre tecnologia, projetos e o futuro do
                desenvolvimento web.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-accent/30 hover:bg-accent/5 hover:border-accent/50"
              >
                Agendar conversa
              </Button>
            </Card>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center space-y-6 pt-12 border-t border-border/50">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">
              Vamos criar algo incrível juntos! 🚀
            </h3>
            <p className="text-muted-foreground">
              Seja você uma startup, uma empresa consolidada ou outro
              desenvolvedor, adoro colaborar em projetos que fazem a diferença.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-hover transition-all duration-300"
            >
              <Mail className="h-4 w-4 mr-2" />
              Enviar proposta
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/5 hover:border-primary/50"
            >
              <Github className="h-4 w-4 mr-2" />
              Ver no GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
