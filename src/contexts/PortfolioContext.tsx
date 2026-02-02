import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface HeroData {
  name: string;
  tagline: string;
  company: string;
  description: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export interface AboutData {
  bio: string[];
  languages: string[];
}

export interface Value {
  title: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Project {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  type: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface SkillsData {
  frontend: Skill[];
  backend: Skill[];
  experience: Experience[];
  education: Education[];
}

export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  rating: number;
  content: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  values: Value[];
  certifications: Certification[];
  projects: Project[];
  skills: SkillsData;
  testimonials: Testimonial[];
  stats: Stat[];
  contact: ContactInfo;
}

const defaultData: PortfolioData = {
  hero: {
    name: "Deepak Kumar",
    tagline: "🚀 Software Developer • Open to Opportunities",
    company: "86 Agency",
    description: "B.Tech in Electronics & Communication Engineering • Passionate about building responsive web applications with React, Next.js, TypeScript & Tailwind CSS",
    githubUrl: "https://github.com/dk1s",
    linkedinUrl: "https://www.linkedin.com/in/deepak-kumar-8084387128-ece",
    email: "deepakkumarplacee@gmail.com",
  },
  about: {
    bio: [
      "I'm a Software Developer at 86 Agency, where I build responsive web applications using React, Next.js, TypeScript, and Tailwind CSS. I've contributed to projects like Logyxpress, CricArabia, and Cric 11 (Fantasy).",
      "With a B.Tech in Electronics & Communication Engineering from Bihar Engineering University (7.71 CGPA), I bring a strong analytical foundation to software development. I'm proficient in state management with Redux and Zustand, and I love building CRUD applications.",
      "When I'm not coding, you'll find me contributing to open-source projects, playing chess, or exploring robotics projects. I'm always eager to learn and take on new challenges.",
    ],
    languages: ["🌐 English (Proficient)", "🇮🇳 Hindi (Native)"],
  },
  values: [
    { title: "Quick Learner", description: "Rapidly adapting to new technologies and frameworks with a strong analytical mindset." },
    { title: "Clean Code", description: "Writing maintainable, well-structured code following best practices and modern standards." },
    { title: "Problem Solver", description: "Delivering innovative solutions through technical expertise and creative thinking." },
    { title: "Goal-Oriented", description: "Focused on delivering results and exceeding expectations in every project." },
  ],
  certifications: [
    { name: "Web Development", issuer: "Internshala" },
    { name: "The Ultimate React Course 2025", issuer: "Udemy" },
    { name: "JavaScript For Beginners", issuer: "Udemy" },
    { name: "Programming With Python", issuer: "Internshala" },
    { name: "Geo-processing With Python", issuer: "ISRO (IIRS), Dehradun" },
    { name: "IT Essential & Cybersecurity", issuer: "CISCO Network Academy" },
  ],
  projects: [
    {
      title: "Logyxpress",
      description: "End-to-end logistics and delivery management platform. Built responsive interfaces with React/Next.js, integrated RESTful APIs, implemented real-time tracking, and managed complex state with Redux for seamless order management.",
      icon: "📦",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "API Integration"],
      liveUrl: "https://app.logyxps.com/",
      githubUrl: "#",
      featured: true,
      type: "Professional",
      highlights: ["Real-time tracking", "CRUD Operations", "State Management"],
    },
    {
      title: "CricArabia",
      description: "Premier cricket platform for the Arabian region. Developed responsive UI components, integrated live match APIs for real-time scores, implemented Zustand for efficient state management, and built interactive data visualizations.",
      icon: "🏏",
      tags: ["React", "TypeScript", "Tailwind CSS", "Zustand", "REST API", "Real-time Data"],
      liveUrl: "https://cricarabia.com/",
      githubUrl: "#",
      featured: true,
      type: "Professional",
      highlights: ["Live Scores", "API Integration", "Zustand State"],
    },
    {
      title: "Cric 11 (Fantasy)",
      description: "Feature-rich fantasy cricket application with team building, live scoring, and competitive leaderboards. Implemented complex state management with Redux, real-time updates via Socket.IO, and responsive mobile-first design.",
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
      description: "Dynamic event and activity booking platform. Built complete frontend with React, integrated payment APIs, implemented user authentication flows, and created intuitive booking interfaces with smooth animations.",
      icon: "🔥",
      tags: ["React", "Next.js", "TypeScript", "API Integration", "Zustand", "Tailwind CSS"],
      liveUrl: "https://app.firesetgo.com/",
      githubUrl: "#",
      featured: true,
      type: "Professional",
      highlights: ["Payment Integration", "User Auth", "Booking System"],
    },
    {
      title: "EventBooking",
      description: "Comprehensive event management and ticket booking system. Developed responsive event listings, integrated calendar APIs, built real-time seat selection, and implemented chat support via Socket.IO for customer assistance.",
      icon: "🎫",
      tags: ["React", "TypeScript", "Socket.IO", "Redux", "REST API", "Tailwind CSS"],
      liveUrl: "https://event-booking.firesetgo.com/",
      githubUrl: "#",
      featured: true,
      type: "Professional",
      highlights: ["Chat Support", "Seat Selection", "Calendar Integration"],
    },
    {
      title: "VisaNet",
      description: "Visa application and immigration services platform. Created multi-step application forms, integrated document upload APIs, built status tracking dashboard, and implemented secure data handling with form validation.",
      icon: "🌍",
      tags: ["React", "Next.js", "TypeScript", "Zustand", "API Integration", "Zod"],
      liveUrl: "https://dev-visanet.weare86.in/",
      githubUrl: "#",
      featured: true,
      type: "Professional",
      highlights: ["Multi-step Forms", "Document Upload", "Status Tracking"],
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website showcasing skills, projects, and achievements. Built with HTML, CSS, and JavaScript with smooth animations and modern design.",
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
      description: "B.Tech project: Developed an innovative Anti-sleep Alarm system with smart glasses that detects driver fatigue through eye-tracking sensors and alerts to prevent accidents on the road.",
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
      description: "Diploma project: Developed a wireless charging system enabling efficient and contactless power transfer using electromagnetic induction technology for modern smartphones.",
      icon: "🔋",
      tags: ["Electronics", "Electromagnetic Induction", "Power Transfer", "Hardware"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      type: "Academic",
      highlights: ["Wireless Power", "EM Induction", "Hardware Design"],
    },
  ],
  skills: {
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
    experience: [
      {
        title: "Software Developer",
        company: "86 Agency",
        period: "03/2025 - Present",
        description: "Building responsive web apps using React, Next.js, TypeScript, and Tailwind CSS with CRUD operations and state management (Redux, Zustand). Contributed to projects: Logyxpress, CricArabia, Cric 11 (Fantasy).",
      },
      {
        title: "Salesforce Developer Virtual Internship",
        company: "Smart Internz",
        period: "12/2023 - 01/2024",
        description: "8-week internship with hands-on Experimental Learning Program containing Bootcamps. Completed Superset certification.",
      },
      {
        title: "Industrial Training - Telecommunications",
        company: "DRM Office, Indian Railways",
        period: "09/2019 - 10/2019",
        description: "4-week industrial training in Telecommunications at the DRM Office, Katihar. Gained practical experience in railway communication systems.",
      },
    ],
    education: [
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
    ],
  },
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      initials: "SJ",
      rating: 5,
      content: "John delivered exceptional work on our e-commerce platform. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable. The project was delivered ahead of schedule with outstanding quality.",
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      initials: "MC",
      rating: 5,
      content: "Working with John was a game-changer for our startup. He built our entire backend infrastructure from scratch and it's been running flawlessly. His expertise in scalable architecture saved us months of development time.",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, DigitalFlow",
      initials: "ER",
      rating: 5,
      content: "John is not just a developer, he's a problem solver. He understood our business needs and suggested improvements we hadn't even considered. The dashboard he built has become essential to our daily operations.",
    },
    {
      name: "David Kim",
      role: "Founder, AppVenture",
      initials: "DK",
      rating: 5,
      content: "I've worked with many developers over the years, but John stands out for his communication skills and technical excellence. He kept us informed throughout the project and the final result exceeded our expectations.",
    },
  ],
  stats: [
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "99%", label: "Client Satisfaction" },
  ],
  contact: {
    email: "deepakkumarplacee@gmail.com",
    location: "Bihar, India",
    github: "github.com/dk1s",
    linkedin: "Deepak Kumar",
  },
};

const STORAGE_KEY = "portfolio_data";
const ADMIN_PASSWORD_KEY = "portfolio_admin_password";
const DEFAULT_PASSWORD = "admin123"; // User should change this

interface PortfolioContextType {
  data: PortfolioData;
  updateData: (newData: Partial<PortfolioData>) => void;
  updateSection: <K extends keyof PortfolioData>(section: K, newData: PortfolioData[K]) => void;
  resetToDefault: () => void;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  changePassword: (oldPassword: string, newPassword: string) => boolean;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...defaultData, ...JSON.parse(stored) } : defaultData;
    } catch {
      return defaultData;
    }
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("portfolio_auth") === "true";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateData = (newData: Partial<PortfolioData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const updateSection = <K extends keyof PortfolioData>(section: K, newData: PortfolioData[K]) => {
    setData((prev) => ({ ...prev, [section]: newData }));
  };

  const resetToDefault = () => {
    setData(defaultData);
    localStorage.removeItem(STORAGE_KEY);
  };

  const login = (password: string) => {
    const storedPassword = localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD;
    if (password === storedPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem("portfolio_auth", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("portfolio_auth");
  };

  const changePassword = (oldPassword: string, newPassword: string) => {
    const storedPassword = localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD;
    if (oldPassword === storedPassword) {
      localStorage.setItem(ADMIN_PASSWORD_KEY, newPassword);
      return true;
    }
    return false;
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        updateData,
        updateSection,
        resetToDefault,
        isAuthenticated,
        login,
        logout,
        changePassword,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};
