import { motion } from "framer-motion";
import { Code2, Lightbulb, Brain, Target } from "lucide-react";
import profileImage from "@/assets/deepak-profile.jpg";
import { usePortfolio } from "@/contexts/PortfolioContext";

const iconMap: Record<string, any> = {
  "Quick Learner": Brain,
  "Clean Code": Code2,
  "Problem Solver": Lightbulb,
  "Goal-Oriented": Target,
};

const About = () => {
  const { data } = usePortfolio();
  const { about, values, certifications } = data;

  return (
    <section id="about" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="relative max-w-sm mx-auto lg:max-w-none">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-3 sm:p-4 border border-primary/10 overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Deepak Kumar"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-20 sm:w-32 h-20 sm:h-32 bg-primary/5 rounded-full blur-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            >
              {about.bio.map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {paragraph.includes("Software Developer") ? (
                    <>
                      I'm a <span className="text-primary font-semibold">Software Developer</span> at 86 Agency, 
                      where I build responsive web applications using React, Next.js, TypeScript, and Tailwind CSS. 
                      I've contributed to projects like <span className="text-foreground font-medium">Logyxpress, CricArabia, and Cric 11 (Fantasy)</span>.
                    </>
                  ) : paragraph.includes("B.Tech") ? (
                    <>
                      With a <span className="text-foreground font-medium">B.Tech in Electronics & Communication Engineering</span> from 
                      Bihar Engineering University (7.71 CGPA), I bring a strong analytical foundation to software development.
                      I'm proficient in state management with Redux and Zustand, and I love building CRUD applications.
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
              
              <div className="flex flex-wrap gap-2 pt-2 sm:pt-4">
                {about.languages.map((lang, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
            {values.map((value, index) => {
              const IconComponent = iconMap[value.title] || Brain;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className="p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">{value.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground text-center mb-6 sm:mb-8">
              Certifications & Training
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                  className="p-3 sm:p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg"
                >
                  <div className="text-xs sm:text-sm font-medium text-foreground">{cert.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">By: {cert.issuer}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
