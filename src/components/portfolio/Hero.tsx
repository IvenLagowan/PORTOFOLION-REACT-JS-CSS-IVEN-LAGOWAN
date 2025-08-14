import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-bg opacity-90" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="relative animate-float">
            <div className="w-80 h-80 rounded-full overflow-hidden glass border-4 border-accent/30 shadow-glow">
              <img
                src="/lovable-uploads/c6d56545-d10a-424f-ae34-3d4722dc5c98.png"
                alt="Iven Lagowan - UX/UI Designer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-accent/20 rounded-full blur-xl -z-10 animate-glow" />
          </div>

          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-shadow-lg">Hi, I'm</span>
                <br />
                <span className="text-gradient text-shadow-glow animate-glow">
                  Chua Lagowan
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-accent-gradient text-shadow-md font-medium">
                UX/UI Designer & Developer
              </h2>
              
              <p className="text-lg text-muted-foreground text-shadow-sm max-w-2xl">
                Crafting beautiful digital experiences with modern design principles 
                and cutting-edge technology. Specializing in React, Tailwind CSS, and 
                user-centered design.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  variant="default"
                  size="lg"
                  className="glass-hover text-shadow-sm hover-lift bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="glass glass-hover text-shadow-sm hover-lift"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="#"
                  className="p-3 glass glass-hover rounded-full hover-lift transition-colors hover:bg-accent/20"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="p-3 glass glass-hover rounded-full hover-lift transition-colors hover:bg-accent/20"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="p-3 glass glass-hover rounded-full hover-lift transition-colors hover:bg-accent/20"
                  aria-label="Email Contact"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 glass glass-hover rounded-full hover-lift"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;