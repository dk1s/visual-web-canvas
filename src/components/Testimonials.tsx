import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Quote, Star, Briefcase, Award, Clock, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useRef } from "react";

const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };

const testimonials = [
  {
    name: "Team Lead",
    role: "86 Agency",
    avatar: "",
    initials: "TL",
    rating: 5,
    content:
      "Deepak has shown exceptional growth since joining in March 2025. His work on Logyxpress and CricArabia demonstrates strong React skills and a keen eye for responsive design. His API integration and state management expertise is impressive.",
  },
  {
    name: "Senior Developer",
    role: "86 Agency",
    avatar: "",
    initials: "SD",
    rating: 5,
    content:
      "Working with Deepak on Cric 11 Fantasy was great. He quickly grasped complex Socket.IO implementations for real-time features and chat support. His Redux state management is clean and well-organized.",
  },
  {
    name: "Project Manager",
    role: "86 Agency",
    avatar: "",
    initials: "PM",
    rating: 5,
    content:
      "Deepak delivers quality work consistently across all projects - FireSetGo, EventBooking, VisaNet. His ability to handle multiple projects while maintaining code quality shows his professionalism and dedication.",
  },
  {
    name: "Mentor",
    role: "Smart Internz (Salesforce)",
    avatar: "",
    initials: "MT",
    rating: 5,
    content:
      "During the Salesforce virtual internship, Deepak showed remarkable aptitude for learning new technologies. He completed all bootcamp modules with excellence and demonstrated strong problem-solving abilities.",
  },
];

const stats = [
  { icon: Briefcase, value: 6, suffix: "+", label: "Live Projects", decimals: 0 },
  { icon: Clock, value: 1, suffix: "+", label: "Year Experience", decimals: 0 },
  { icon: Award, value: 6, suffix: "+", label: "Certifications", decimals: 0 },
  { icon: Users, value: 7.71, suffix: "", label: "CGPA (B.Tech)", decimals: 2 },
];

const AnimatedCounter = ({ value, suffix, decimals }: { value: number; suffix: string; decimals: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => 
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, value, isInView]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden">
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
              Recommendations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Feedback from colleagues and mentors I've had the pleasure to work with.
            </p>
            <motion.div 
              className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={springTransition}
                className="group"
              >
                <div className="h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden">
                  {/* Quote Icon */}
                  <motion.div 
                    className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Quote className="h-16 w-16 text-primary" />
                  </motion.div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: 0.4 + 0.1 * i, 
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }}
                      >
                        <Star className="h-5 w-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={springTransition}
                    >
                      <Avatar className="h-12 w-12 border-2 border-primary/20">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.3 + 0.1 * index,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 10 }}
                  transition={springTransition}
                >
                  <stat.icon className="h-5 w-5 text-primary" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
