import { motion } from "framer-motion";
import { Code2, Lightbulb, Brain, Target } from "lucide-react";
import profileImage from "@/assets/deepak-profile.jpg";

const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <motion.div 
              className="w-20 h-1 bg-primary mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={springTransition}
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-4 border border-primary/10 overflow-hidden">
                  <motion.img
                    src={profileImage}
                    alt="Deepak Kumar"
                    className="w-full h-full object-cover rounded-xl"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              >
                I'm a <span className="text-primary font-semibold">Software Developer</span> at 86 Agency since March 2025, 
                where I build responsive web applications using React, Next.js, TypeScript, and Tailwind CSS. 
                I've contributed to projects like <span className="text-foreground font-medium">Logyxpress, CricArabia, FireSetGo, EventBooking, VisaNet, and Cric 11 (Fantasy)</span>.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              >
                With a <span className="text-foreground font-medium">B.Tech in Electronics & Communication Engineering</span> from 
                Bihar Engineering University (7.71 CGPA), I bring a strong analytical foundation to software development.
                I specialize in API integration, state management with Redux and Zustand, and real-time features with Socket.IO.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              >
                When I'm not coding, you'll find me contributing to open-source projects, 
                playing chess, or exploring robotics projects. I'm always eager to learn and 
                take on new challenges.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-2 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              >
                <motion.span 
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={springTransition}
                >
                  🌐 English (Proficient)
                </motion.span>
                <motion.span 
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={springTransition}
                >
                  🇮🇳 Hindi (Native)
                </motion.span>
              </motion.div>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={springTransition}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group"
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 5 }}
                  transition={springTransition}
                >
                  <value.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
              Certifications & Training
            </h3>
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={springTransition}
                  className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="text-sm font-medium text-foreground">{cert.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">By: {cert.issuer}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
