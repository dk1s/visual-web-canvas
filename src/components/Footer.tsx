import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/dk1s", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:deepakkumar@email.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo/Name */}
            <div className="text-2xl font-bold text-foreground">
              Deepak<span className="text-primary">.</span>Kumar
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Made with</span>
              <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
              <span>by Deepak Kumar</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
