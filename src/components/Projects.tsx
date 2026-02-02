import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePortfolio } from "@/contexts/PortfolioContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const Projects = () => {
  const { data } = usePortfolio();
  const { projects, hero } = data;

  return (
    <section id="projects" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Professional projects showcasing React, Next.js, API integration, state management (Redux, Zustand), and real-time features with Socket.IO.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group relative"
              >
                <div className="h-full rounded-xl sm:rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Project Image/Icon */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-muted via-muted/80 to-muted/50 flex items-center justify-center relative overflow-hidden">
                    <motion.span
                      className="text-4xl sm:text-5xl md:text-6xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.icon}
                    </motion.span>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                    
                    {/* Type badge */}
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                      <Badge 
                        className={`text-xs transition-all duration-300 ${
                          project.type === "Professional" 
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                            : project.type === "Academic"
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {project.type}
                      </Badge>
                    </div>

                    {/* Quick links overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 bg-background/90 backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.liveUrl !== "#" && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <Button size="sm" variant="default" asChild className="shadow-lg text-xs sm:text-sm">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              Live Demo
                            </a>
                          </Button>
                        </motion.div>
                      )}
                      {project.githubUrl !== "#" && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.15 }}
                        >
                          <Button size="sm" variant="outline" asChild className="text-xs sm:text-sm">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              Code
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
                        {project.title}
                      </h3>
                      <motion.div
                        whileHover={{ x: 3, y: -3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                      </motion.div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights && (
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px] sm:text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge variant="secondary" className="text-[10px] sm:text-xs">
                          +{project.tags.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button variant="outline" size="lg" asChild className="group">
              <a href={hero.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
