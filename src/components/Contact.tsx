import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram, Send, Loader2, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Get your free access key at https://web3forms.com (enter mjeannine61@gmail.com, no signup needed)
const WEB3FORMS_ACCESS_KEY = "d35062d0-93de-4415-9a6b-75a2c65b9bcc";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio message from ${formData.name}`,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Message failed to send",
        description: "Please try again, or email me directly at mjeannine61@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mjeannine61@gmail.com",
      href: "mailto:mjeannine61@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+250 784 943 000",
      href: "tel:+250784943000",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kigali, Rwanda",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mukashema-jeannine/",
      color: "#0A66C2",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/janice__rw",
      color: "#E1306C",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12" />

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg text-muted-foreground mb-12">
            I'm always interested in hearing about new opportunities, collaborations, and data science projects. Feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-gradient-card backdrop-blur-sm animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-3 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.label}</h3>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}

            {/* Social Profiles — same card style as above */}
            <Card 
              className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-gradient-card backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: '0.3s' }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Share2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-3">Social Profiles</h3>
                <div className="flex justify-center gap-2">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-border/50 hover:scale-110 transition-transform duration-300"
                      >
                        <Icon className="w-4 h-4" style={{ color: social.color }} />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 bg-gradient-card backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-2">
                Send Me a Message
              </h3>
              <p className="text-muted-foreground text-center mb-8">
                Fill in the form below to get in touch.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
