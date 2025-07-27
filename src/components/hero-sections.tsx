import heroImage from "@/assets/hero-coding.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Coffee, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Code2 className="h-8 w-8 text-primary/30" />
      </div>
      <div
        className="absolute top-40 right-16 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <Zap className="h-6 w-6 text-accent-vibrant/40" />
      </div>
      <div
        className="absolute bottom-32 left-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Coffee className="h-7 w-7 text-accent/30" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">
                  💡 Transformando ideias em código
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Eu construo com{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  TypeScript
                </span>
                <br />
                para o futuro
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Desenvolvedor apaixonado por criar experiências digitais
                modernas, performáticas e elegantes. Especialista em React,
                Next.js, NodeJs, React Native e TypeScript.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">
                  Anos de experiência
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">20+</div>
                <div className="text-sm text-muted-foreground">
                  Projetos entregues
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-vibrant">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Javascript/TypeScript
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-hover transition-all duration-300 group"
                onClick={() => navigate("/projetos")}
              >
                Ver meus projetos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
              >
                Baixar CV
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-soft group">
              <img
                src={heroImage}
                alt="Workspace moderno com código TypeScript"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>

              {/* Floating Code Badge */}
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-lg border border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-mono text-foreground">
                    FullStack Developer
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-glow-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-vibrant/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
