import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Cpu, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Logyxpress",
    description:
      "Logistics and delivery management platform built with modern web technologies. Features CRUD operations, state management, and responsive design.",
    icon: "📦",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    type: "Professional",
  },
  {
    title: "CricArabia",
    description:
      "Cricket platform for the Arabian region. Built responsive interfaces with real-time data updates and intuitive user experience.",
    icon: "🏏",
    tags: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    type: "Professional",
  },
  {
    title: "Cric 11 (Fantasy)",
    description:
      "Fantasy cricket application with team building, scoring, and leaderboard features. Implemented complex state management and responsive UI.",
    icon: "🎮",
    tags: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    type: "Professional",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing skills, projects, and achievements. Built with HTML, CSS, and JavaScript.",
    icon: "🌐",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://dk1s.github.io/Portfolio/",
    githubUrl: "https://github.com/dk1s/Portfolio",
    featured: false,
    type: "Personal",
  },
  {
    title: "Anti-Sleep Alarm System for Drivers",
    description:
      "B.Tech project: Developed an Anti-sleep Alarm system with glasses that detects driver fatigue and alerts to prevent accidents.",
    icon: "👓",
    tags: ["IoT", "Electronics", "Sensors", "Safety Systems"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    type: "Academic",
  },
  {
    title: "Wireless Mobile Charging",
    description:
      "Diploma project: Developed a wireless charging system enabling efficient and contactless power transfer using electromagnetic induction.",
    icon: "🔋",
    tags: ["Electronics", "Electromagnetic Induction", "Power Transfer"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    type: "Academic",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
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
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of professional and personal projects that showcase my skills.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  {/* Project Image/Icon */}
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                      {project.icon}
                    </span>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                    
                    {/* Type badge */}
                    <div className="absolute top-3 left-3">
                      <Badge 
                        className={
                          project.type === "Professional" 
                            ? "bg-primary text-primary-foreground" 
                            : project.type === "Academic"
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {project.type}
                      </Badge>
                    </div>

                    {/* Quick links overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm">
                      {project.liveUrl !== "#" && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Live
                          </a>
                        </Button>
                      )}
                      {project.githubUrl !== "#" && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tags.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/dk1s" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
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
