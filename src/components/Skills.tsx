import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "HTML/CSS", level: 95 },
  ],
  backend: [
    { name: "Python", level: 75 },
    { name: "SQL", level: 80 },
    { name: "Git", level: 85 },
    { name: "WordPress", level: 70 },
    { name: "Redux/Zustand", level: 80 },
    { name: "MS Office", level: 85 },
  ],
};

const experience = [
  {
    title: "Software Developer",
    company: "86 Agency",
    period: "03/2025 - Present",
    description:
      "Building responsive web apps using React, Next.js, TypeScript, and Tailwind CSS with CRUD operations and state management (Redux, Zustand). Contributed to projects: Logyxpress, CricArabia, Cric 11 (Fantasy).",
  },
  {
    title: "Salesforce Developer Virtual Internship",
    company: "Smart Internz",
    period: "12/2023 - 01/2024",
    description:
      "8-week internship with hands-on Experimental Learning Program containing Bootcamps. Completed Superset certification.",
  },
  {
    title: "Industrial Training - Telecommunications",
    company: "DRM Office, Indian Railways",
    period: "09/2019 - 10/2019",
    description:
      "4-week industrial training in Telecommunications at the DRM Office, Katihar. Gained practical experience in railway communication systems.",
  },
];

const education = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    institution: "Bihar Engineering University, Araria",
    period: "12/2021 - 08/2024",
    grade: "7.71 CGPA",
  },
  {
    degree: "Diploma in Electronics Engineering",
    institution: "State Board of Technical Education, Katihar",
    period: "09/2016 - 12/2020",
    grade: "7.88 CGPA",
  },
  {
    degree: "Matriculation",
    institution: "Central Board of Secondary Education, Purnea",
    period: "05/2015 - 05/2016",
    grade: "9.0 CGPA",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
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
              Skills & Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies I work with and my professional journey.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Frontend & Web Development
              </h3>
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Tools & Technologies
              </h3>
              {skills.backend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Experience & Education */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted border-2 border-primary" />
                    <div className="text-sm text-primary font-medium mb-1">
                      {exp.period}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h4>
                    <div className="text-muted-foreground text-sm mb-2">
                      {exp.company}
                    </div>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-primary font-medium">
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                        <Award className="h-4 w-4" />
                        {edu.grade}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <div className="text-muted-foreground text-sm">
                      {edu.institution}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
