import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "",
    initials: "SJ",
    rating: 5,
    content:
      "John delivered exceptional work on our e-commerce platform. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable. The project was delivered ahead of schedule with outstanding quality.",
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateLab",
    avatar: "",
    initials: "MC",
    rating: 5,
    content:
      "Working with John was a game-changer for our startup. He built our entire backend infrastructure from scratch and it's been running flawlessly. His expertise in scalable architecture saved us months of development time.",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, DigitalFlow",
    avatar: "",
    initials: "ER",
    rating: 5,
    content:
      "John is not just a developer, he's a problem solver. He understood our business needs and suggested improvements we hadn't even considered. The dashboard he built has become essential to our daily operations.",
  },
  {
    name: "David Kim",
    role: "Founder, AppVenture",
    avatar: "",
    initials: "DK",
    rating: 5,
    content:
      "I've worked with many developers over the years, but John stands out for his communication skills and technical excellence. He kept us informed throughout the project and the final result exceeded our expectations.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Client Testimonials
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it - here's what my clients have to say about working with me.
            </p>
            <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mt-3 sm:mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-primary" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + 0.1 * i }}
                      >
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Avatar className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-primary/20">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs sm:text-sm">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-10 sm:mt-12 md:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "5+", label: "Years Experience" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + 0.1 * index }}
                className="text-center p-4 sm:p-5 md:p-6 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
