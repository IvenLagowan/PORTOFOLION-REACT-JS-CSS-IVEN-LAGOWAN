import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "React.js", "TypeScript", "Tailwind CSS", "Figma", "Adobe XD",
    "UI/UX Design", "Responsive Design", "JavaScript", "HTML5", "CSS3",
    "Node.js", "Git", "Photoshop", "Illustrator"
  ];

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with modern design principles."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Building responsive web applications with React, TypeScript, and Tailwind CSS."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile First Design",
      description: "Designing mobile-first experiences that work seamlessly across all devices."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, accessibility, and user experience."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient text-shadow-lg mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground text-shadow-sm max-w-3xl mx-auto">
            I'm a passionate UX/UI designer and developer with a love for creating 
            digital experiences that are both beautiful and functional. With expertise 
            in modern web technologies and design tools, I bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-shadow-md">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="glass glass-hover text-shadow-sm hover-lift px-4 py-2 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-shadow-md">Experience</h3>
            <div className="space-y-4">
              <div className="glass p-6 rounded-lg hover-lift">
                <h4 className="font-semibold text-lg text-accent">Senior UX/UI Designer</h4>
                <p className="text-muted-foreground text-sm mb-2">Creative Agency • 2022 - Present</p>
                <p className="text-sm text-shadow-sm">
                  Leading design projects for major clients, creating user-centered solutions 
                  that drive engagement and conversion.
                </p>
              </div>
              
              <div className="glass p-6 rounded-lg hover-lift">
                <h4 className="font-semibold text-lg text-accent">Frontend Developer</h4>
                <p className="text-muted-foreground text-sm mb-2">Tech Startup • 2020 - 2022</p>
                <p className="text-sm text-shadow-sm">
                  Developed responsive web applications using React and modern CSS frameworks, 
                  collaborating closely with design teams.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-3xl font-bold text-center text-shadow-lg mb-12">What I Do</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass glass-hover hover-lift p-6 text-center border-glass-border/30"
              >
                <div className="text-accent mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h4 className="font-semibold text-lg mb-3 text-shadow-sm">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm text-shadow-sm">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;