import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Users, Brain, Target } from "lucide-react";
import profileImage from "@/assets/deepak-profile.jpg";

const values = [
  {
    icon: Brain,
    title: "Quick Learner",
    description: "Rapidly adapting to new technologies and frameworks with a strong analytical mindset.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-structured code following best practices and modern standards.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Delivering innovative solutions through technical expertise and creative thinking.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on delivering results and exceeding expectations in every project.",
  },
];

const certifications = [
  { name: "Web Development", issuer: "Internshala" },
  { name: "The Ultimate React Course 2025", issuer: "Udemy" },
  { name: "JavaScript For Beginners", issuer: "Udemy" },
  { name: "Programming With Python", issuer: "Internshala" },
  { name: "Geo-processing With Python", issuer: "ISRO (IIRS), Dehradun" },
  { name: "IT Essential & Cybersecurity", issuer: "CISCO Network Academy" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-4 border border-primary/10 overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Deepak Kumar"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-primary font-semibold">Software Developer Trainee</span> at 86 Agency, 
                where I build responsive web applications using React, Next.js, TypeScript, and Tailwind CSS. 
                I've contributed to projects like <span className="text-foreground font-medium">Logyxpress, CricArabia, and Cric 11 (Fantasy)</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a <span className="text-foreground font-medium">B.Tech in Electronics & Communication Engineering</span> from 
                Bihar Engineering University (7.71 CGPA), I bring a strong analytical foundation to software development.
                I'm proficient in state management with Redux and Zustand, and I love building CRUD applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, 
                playing chess, or exploring robotics projects. I'm always eager to learn and 
                take on new challenges.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">🌐 English (Proficient)</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">🇮🇳 Hindi (Native)</span>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
              Certifications & Training
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                  className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg"
                >
                  <div className="text-sm font-medium text-foreground">{cert.name}</div>
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
