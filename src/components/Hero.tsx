import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300" />
              <img
                src={profileImg}
                alt="Jeannine Mukashema"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary-foreground shadow-glow"
                style={{ objectPosition: "center 10%" }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in-up">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
                Jeannine Mukashema
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary-foreground/90 font-light mb-6">
                Data Scientist
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
                Passionate about extracting insights from data and applying machine learning to solve real world problems and drive informed decisions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Kigali, Rwanda</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+250 784 943 000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:mjeannine61@gmail.com" className="hover:underline">
                  mjeannine61@gmail.com
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
