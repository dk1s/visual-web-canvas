import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, MessageCircle, Database, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Logyxpress",
    description:
      "End-to-end logistics and delivery management platform. Built responsive interfaces with React/Next.js, integrated RESTful APIs, implemented real-time tracking, and managed complex state with Redux for seamless order management.",
    icon: "📦",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "API Integration"],
    liveUrl: "https://logyxpress.com",
    githubUrl: "#",
    featured: true,
    type: "Professional",
    highlights: ["Real-time tracking", "CRUD Operations", "State Management"],
  },
  {
    title: "CricArabia",
    description:
      "Premier cricket platform for the Arabian region. Developed responsive UI components, integrated live match APIs for real-time scores, implemented Zustand for efficient state management, and built interactive data visualizations.",
    icon: "🏏",
    tags: ["React", "TypeScript", "Tailwind CSS", "Zustand", "REST API", "Real-time Data"],
    liveUrl: "https://cricarabia.com",
    githubUrl: "#",
    featured: true,
    type: "Professional",
    highlights: ["Live Scores", "API Integration", "Zustand State"],
  },
  {
    title: "Cric 11 (Fantasy)",
    description:
      "Feature-rich fantasy cricket application with team building, live scoring, and competitive leaderboards. Implemented complex state management with Redux, real-time updates via Socket.IO, and responsive mobile-first design.",
    icon: "🎮",
    tags: ["React", "Next.js", "TypeScript", "Redux", "Socket.IO", "Tailwind CSS"],
    liveUrl: "https://cric11.com",
    githubUrl: "#",
    featured: true,
    type: "Professional",
    highlights: ["Socket.IO Chat", "Real-time Updates", "Redux State"],
  },
  {
    title: "FireSetGo",
    description:
      "Dynamic event and activity booking platform. Built complete frontend with React, integrated payment APIs, implemented user authentication flows, and created intuitive booking interfaces with smooth animations.",
    icon: "🔥",
    tags: ["React", "Next.js", "TypeScript", "API Integration", "Zustand", "Tailwind CSS"],
    liveUrl: "https://firesetgo.com",
    githubUrl: "#",
    featured: true,
    type: "Professional",
    highlights: ["Payment Integration", "User Auth", "Booking System"],
  },
  {
    title: "EventBooking",
    description:
      "Comprehensive event management and ticket booking system. Developed responsive event listings, integrated calendar APIs, built real-time seat selection, and implemented chat support via Socket.IO for customer assistance.",
    icon: "🎫",
    tags: ["React", "TypeScript", "Socket.IO", "Redux", "REST API", "Tailwind CSS"],
    liveUrl: "https://eventbooking.com",
    githubUrl: "#",
    featured: true,
    type: "Professional",
    highlights: ["Chat Support", "Seat Selection", "Calendar Integration"],
  },
  {
    title: "VisaNet",
    description:
      "Visa application and immigration services platform. Created multi-step application forms, integrated document upload APIs, built status tracking dashboard, and implemented secure data handling with form validation.",
    icon: "🌍",
    tags: ["React", "Next.js", "TypeScript", "Zustand", "API Integration", "Zod"],
    liveUrl: "https://visanet.com",
    githubUrl: "#",
    featured: true,
    type: "Professional",
    highlights: ["Multi-step Forms", "Document Upload", "Status Tracking"],
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing skills, projects, and achievements. Built with HTML, CSS, and JavaScript with smooth animations and modern design.",
    icon: "🌐",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://dk1s.github.io/Portfolio/",
    githubUrl: "https://github.com/dk1s/Portfolio",
    featured: false,
    type: "Personal",
    highlights: ["Responsive", "Animations", "Modern UI"],
  },
  {
    title: "Anti-Sleep Alarm System",
    description:
      "B.Tech project: Developed an innovative Anti-sleep Alarm system with smart glasses that detects driver fatigue through eye-tracking sensors and alerts to prevent accidents on the road.",
    icon: "👓",
    tags: ["IoT", "Electronics", "Sensors", "Safety Systems", "Arduino"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    type: "Academic",
    highlights: ["Eye Tracking", "Safety Alert", "IoT Sensors"],
  },
  {
    title: "Wireless Mobile Charging",
    description:
      "Diploma project: Developed a wireless charging system enabling efficient and contactless power transfer using electromagnetic induction technology for modern smartphones.",
    icon: "🔋",
    tags: ["Electronics", "Electromagnetic Induction", "Power Transfer", "Hardware"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    type: "Academic",
    highlights: ["Wireless Power", "EM Induction", "Hardware Design"],
  },
];

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
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional projects showcasing React, Next.js, API integration, state management (Redux, Zustand), and real-time features with Socket.IO.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
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
                <div className="h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Project Image/Icon */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-muted via-muted/80 to-muted/50 flex items-center justify-center relative overflow-hidden">
                    <motion.span
                      className="text-5xl md:text-6xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.icon}
                    </motion.span>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                    
                    {/* Type badge */}
                    <div className="absolute top-3 left-3">
                      <Badge 
                        className={`transition-all duration-300 ${
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
                      className="absolute inset-0 flex items-center justify-center gap-3 bg-background/90 backdrop-blur-sm"
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
                          <Button size="sm" variant="default" asChild className="shadow-lg">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
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
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
                        {project.title}
                      </h3>
                      <motion.div
                        whileHover={{ x: 3, y: -3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                      </motion.div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tech tags */}
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
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button variant="outline" size="lg" asChild className="group">
              <a href="https://github.com/dk1s" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
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
