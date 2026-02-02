import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject is too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

const Contact = () => {
  const { data } = usePortfolio();
  const { contact, hero } = data;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: contact.location,
      href: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: contact.github,
      href: `https://${contact.github}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: contact.linkedin,
      href: hero.linkedinUrl,
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
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
              Get In Touch
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-2 space-y-6 sm:space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  Let's work together
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your team. Currently open to full-time positions.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors truncate block"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-xs sm:text-sm font-medium text-foreground">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hobbies section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-3 sm:p-4 rounded-xl bg-muted/30 border border-border"
              >
                <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2">When I'm not coding</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="text-[10px] sm:text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">♟️ Chess</span>
                  <span className="text-[10px] sm:text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">🤖 Robotics</span>
                  <span className="text-[10px] sm:text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">🔓 Open Source</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 sm:py-12 text-center"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Thank you for reaching out. I'll respond shortly.
                    </p>
                  </motion.div>
                ) : (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-1.5 sm:space-y-2">
                        <label
                          htmlFor="name"
                          className="text-xs sm:text-sm font-medium text-foreground"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`text-sm ${errors.name ? "border-destructive" : ""}`}
                        />
                        {errors.name && (
                          <p className="text-xs sm:text-sm text-destructive">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <label
                          htmlFor="email"
                          className="text-xs sm:text-sm font-medium text-foreground"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`text-sm ${errors.email ? "border-destructive" : ""}`}
                        />
                        {errors.email && (
                          <p className="text-xs sm:text-sm text-destructive">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-xs sm:text-sm font-medium text-foreground"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Project Inquiry / Job Opportunity"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`text-sm ${errors.subject ? "border-destructive" : ""}`}
                      />
                      {errors.subject && (
                        <p className="text-xs sm:text-sm text-destructive">{errors.subject}</p>
                      )}
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <label
                        htmlFor="message"
                        className="text-xs sm:text-sm font-medium text-foreground"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or opportunity..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`text-sm ${errors.message ? "border-destructive" : ""}`}
                      />
                      {errors.message && (
                        <p className="text-xs sm:text-sm text-destructive">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
