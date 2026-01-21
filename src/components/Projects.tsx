import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with real-time inventory, secure payments, and admin dashboard. Built for scalability and performance.",
    image: "🛒",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Project Management Tool",
    description:
      "Collaborative workspace for teams with task boards, real-time updates, and comprehensive analytics.",
    image: "📊",
    tags: ["TypeScript", "Next.js", "Prisma", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "AI Chat Assistant",
    description:
      "Intelligent conversational interface powered by machine learning with context-aware responses.",
    image: "🤖",
    tags: ["Python", "React", "OpenAI", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Real Estate Finder",
    description:
      "Property search platform with advanced filtering, map integration, and virtual tours.",
    image: "🏠",
    tags: ["Vue.js", "Firebase", "Google Maps", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
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
              A selection of projects that showcase my skills and passion for building great software.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
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
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                      {project.image}
                    </span>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Quick links overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
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
