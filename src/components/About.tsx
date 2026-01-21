import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-documented code that stands the test of time.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly exploring new technologies and creative solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building strong relationships and working effectively in teams.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed, scalability, and exceptional user experience.",
  },
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
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 border border-primary/10">
                  <div className="w-full h-full rounded-xl bg-muted/50 flex items-center justify-center overflow-hidden">
                    <div className="text-8xl">👨‍💻</div>
                  </div>
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
                I'm a passionate Full-Stack Developer with over 5 years of experience
                building web applications that make a difference. My journey in tech
                started with a curiosity about how things work, which led me to explore
                the depths of software engineering.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I specialize in React, TypeScript, Node.js, and cloud
                technologies. I love tackling complex challenges and transforming
                ideas into polished, user-friendly products.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new frameworks,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
