import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" /> by Jeannine Mukashema
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
