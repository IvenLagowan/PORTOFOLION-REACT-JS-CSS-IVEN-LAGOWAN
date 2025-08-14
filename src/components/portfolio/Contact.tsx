import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "iven.lagowan@example.com",
      href: "mailto:iven.lagowan@example.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Jakarta, Indonesia",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient text-shadow-lg mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground text-shadow-sm max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear from you. 
            Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass glass-hover p-8 border-glass-border/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-shadow-sm">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass glass-hover border-glass-border/30 text-shadow-sm"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-shadow-sm">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass glass-hover border-glass-border/30 text-shadow-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-shadow-sm">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="glass glass-hover border-glass-border/30 text-shadow-sm"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-shadow-sm">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="glass glass-hover border-glass-border/30 text-shadow-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full glass-hover hover-lift bg-accent text-accent-foreground hover:bg-accent/90 text-shadow-sm"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-shadow-md">
                Let's Connect
              </h3>
              <p className="text-muted-foreground text-shadow-sm mb-8">
                I'm always open to discussing new opportunities, creative ideas, 
                or potential collaborations. Feel free to reach out through any 
                of the following channels.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="glass glass-hover hover-lift p-6 border-glass-border/30"
                >
                  <a
                    href={info.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="text-accent group-hover:text-accent/80 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-shadow-sm">
                        {info.label}
                      </div>
                      <div className="text-muted-foreground text-shadow-sm">
                        {info.value}
                      </div>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Availability */}
            <Card className="glass p-6 border-glass-border/30">
              <h4 className="font-semibold text-lg mb-3 text-shadow-sm">
                Current Availability
              </h4>
              <p className="text-muted-foreground text-shadow-sm">
                I'm currently available for new projects and collaborations. 
                Typical response time is within 24 hours.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">
                  Available for new projects
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;