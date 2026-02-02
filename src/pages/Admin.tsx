import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Lock, 
  LogOut, 
  Home, 
  User, 
  Briefcase, 
  Code, 
  MessageSquare, 
  Mail,
  Save,
  RotateCcw,
  Key,
  ChevronRight,
  Check,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

const AdminLogin = ({ onLogin }: { onLogin: (password: string) => boolean }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onLogin(password)) {
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card className="border-border">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Admin Access</CardTitle>
            <CardDescription>Enter your password to manage portfolio content</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={error ? "border-destructive" : ""}
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
              </div>
              <Button type="submit" className="w-full">
                <Lock className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                onClick={() => navigate("/")}
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Default password: admin123 (change it after first login)
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

const HeroEditor = () => {
  const { data, updateSection } = usePortfolio();
  const { toast } = useToast();
  const [hero, setHero] = useState(data.hero);

  const handleSave = () => {
    updateSection("hero", hero);
    toast({ title: "Hero section updated!" });
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Name</Label>
          <Input value={hero.name} onChange={(e) => setHero({ ...hero, name: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>Company</Label>
          <Input value={hero.company} onChange={(e) => setHero({ ...hero, company: e.target.value })} />
        </div>
      </div>
      <div className="space-y-2">
        <Label>Tagline</Label>
        <Input value={hero.tagline} onChange={(e) => setHero({ ...hero, tagline: e.target.value })} />
      </div>
      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea value={hero.description} onChange={(e) => setHero({ ...hero, description: e.target.value })} rows={3} />
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label>GitHub URL</Label>
          <Input value={hero.githubUrl} onChange={(e) => setHero({ ...hero, githubUrl: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>LinkedIn URL</Label>
          <Input value={hero.linkedinUrl} onChange={(e) => setHero({ ...hero, linkedinUrl: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>Email</Label>
          <Input value={hero.email} onChange={(e) => setHero({ ...hero, email: e.target.value })} />
        </div>
      </div>
      <Button onClick={handleSave} className="w-full sm:w-auto">
        <Save className="w-4 h-4 mr-2" />
        Save Hero
      </Button>
    </div>
  );
};

const AboutEditor = () => {
  const { data, updateSection } = usePortfolio();
  const { toast } = useToast();
  const [about, setAbout] = useState(data.about);

  const handleSave = () => {
    updateSection("about", about);
    toast({ title: "About section updated!" });
  };

  return (
    <div className="space-y-4">
      {about.bio.map((paragraph, index) => (
        <div key={index} className="space-y-2">
          <Label>Bio Paragraph {index + 1}</Label>
          <Textarea
            value={paragraph}
            onChange={(e) => {
              const newBio = [...about.bio];
              newBio[index] = e.target.value;
              setAbout({ ...about, bio: newBio });
            }}
            rows={3}
          />
        </div>
      ))}
      <div className="space-y-2">
        <Label>Languages (comma separated)</Label>
        <Input
          value={about.languages.join(", ")}
          onChange={(e) => setAbout({ ...about, languages: e.target.value.split(", ").map(l => l.trim()) })}
        />
      </div>
      <Button onClick={handleSave} className="w-full sm:w-auto">
        <Save className="w-4 h-4 mr-2" />
        Save About
      </Button>
    </div>
  );
};

const ProjectsEditor = () => {
  const { data, updateSection } = usePortfolio();
  const { toast } = useToast();
  const [projects, setProjects] = useState(data.projects);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleSave = () => {
    updateSection("projects", projects);
    toast({ title: "Projects updated!" });
    setEditingIndex(null);
  };

  const updateProject = (index: number, field: string, value: any) => {
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setProjects(newProjects);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        title: "New Project",
        description: "Project description",
        icon: "🆕",
        tags: ["React"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        type: "Personal",
        highlights: ["Feature 1"],
      },
    ]);
    setEditingIndex(projects.length);
  };

  const deleteProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">{projects.length} projects</p>
        <Button onClick={addProject} size="sm">Add Project</Button>
      </div>
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div
                className="p-4 cursor-pointer flex items-center justify-between hover:bg-muted/50"
                onClick={() => setEditingIndex(editingIndex === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h4 className="font-medium text-foreground">{project.title}</h4>
                    <p className="text-xs text-muted-foreground">{project.type}</p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${editingIndex === index ? "rotate-90" : ""}`} />
              </div>
              <AnimatePresence>
                {editingIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 space-y-3 border-t">
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="space-y-1">
                          <Label className="text-xs">Title</Label>
                          <Input value={project.title} onChange={(e) => updateProject(index, "title", e.target.value)} />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Icon (emoji)</Label>
                          <Input value={project.icon} onChange={(e) => updateProject(index, "icon", e.target.value)} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Description</Label>
                        <Textarea value={project.description} onChange={(e) => updateProject(index, "description", e.target.value)} rows={2} />
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="space-y-1">
                          <Label className="text-xs">Live URL</Label>
                          <Input value={project.liveUrl} onChange={(e) => updateProject(index, "liveUrl", e.target.value)} />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">GitHub URL</Label>
                          <Input value={project.githubUrl} onChange={(e) => updateProject(index, "githubUrl", e.target.value)} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Tags (comma separated)</Label>
                        <Input
                          value={project.tags.join(", ")}
                          onChange={(e) => updateProject(index, "tags", e.target.value.split(", ").map(t => t.trim()))}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Highlights (comma separated)</Label>
                        <Input
                          value={project.highlights.join(", ")}
                          onChange={(e) => updateProject(index, "highlights", e.target.value.split(", ").map(h => h.trim()))}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="destructive" onClick={() => deleteProject(index)}>
                          <X className="w-3 h-3 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </ScrollArea>
      <Button onClick={handleSave} className="w-full sm:w-auto">
        <Save className="w-4 h-4 mr-2" />
        Save All Projects
      </Button>
    </div>
  );
};

const SkillsEditor = () => {
  const { data, updateSection } = usePortfolio();
  const { toast } = useToast();
  const [skills, setSkills] = useState(data.skills);

  const handleSave = () => {
    updateSection("skills", skills);
    toast({ title: "Skills updated!" });
  };

  const updateSkill = (category: "frontend" | "backend", index: number, field: string, value: any) => {
    const newSkills = { ...skills };
    newSkills[category][index] = { ...newSkills[category][index], [field]: value };
    setSkills(newSkills);
  };

  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium mb-3">Frontend Skills</h4>
        <div className="space-y-2">
          {skills.frontend.map((skill, index) => (
            <div key={index} className="flex gap-2 items-center">
              <Input
                value={skill.name}
                onChange={(e) => updateSkill("frontend", index, "name", e.target.value)}
                className="flex-1"
                placeholder="Skill name"
              />
              <Input
                type="number"
                min={0}
                max={100}
                value={skill.level}
                onChange={(e) => updateSkill("frontend", index, "level", parseInt(e.target.value) || 0)}
                className="w-20"
              />
              <span className="text-xs text-muted-foreground w-6">%</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-medium mb-3">Backend/Tools</h4>
        <div className="space-y-2">
          {skills.backend.map((skill, index) => (
            <div key={index} className="flex gap-2 items-center">
              <Input
                value={skill.name}
                onChange={(e) => updateSkill("backend", index, "name", e.target.value)}
                className="flex-1"
                placeholder="Skill name"
              />
              <Input
                type="number"
                min={0}
                max={100}
                value={skill.level}
                onChange={(e) => updateSkill("backend", index, "level", parseInt(e.target.value) || 0)}
                className="w-20"
              />
              <span className="text-xs text-muted-foreground w-6">%</span>
            </div>
          ))}
        </div>
      </div>
      <Button onClick={handleSave} className="w-full sm:w-auto">
        <Save className="w-4 h-4 mr-2" />
        Save Skills
      </Button>
    </div>
  );
};

const StatsEditor = () => {
  const { data, updateSection } = usePortfolio();
  const { toast } = useToast();
  const [stats, setStats] = useState(data.stats);

  const handleSave = () => {
    updateSection("stats", stats);
    toast({ title: "Stats updated!" });
  };

  const updateStat = (index: number, field: string, value: string) => {
    const newStats = [...stats];
    newStats[index] = { ...newStats[index], [field]: value };
    setStats(newStats);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4">
            <div className="space-y-2">
              <Input
                value={stat.value}
                onChange={(e) => updateStat(index, "value", e.target.value)}
                placeholder="50+"
                className="text-center text-xl font-bold"
              />
              <Input
                value={stat.label}
                onChange={(e) => updateStat(index, "label", e.target.value)}
                placeholder="Projects Completed"
                className="text-center text-sm"
              />
            </div>
          </Card>
        ))}
      </div>
      <Button onClick={handleSave} className="w-full sm:w-auto">
        <Save className="w-4 h-4 mr-2" />
        Save Stats
      </Button>
    </div>
  );
};

const ContactEditor = () => {
  const { data, updateSection } = usePortfolio();
  const { toast } = useToast();
  const [contact, setContact] = useState(data.contact);

  const handleSave = () => {
    updateSection("contact", contact);
    toast({ title: "Contact info updated!" });
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Email</Label>
          <Input value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>Location</Label>
          <Input value={contact.location} onChange={(e) => setContact({ ...contact, location: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>GitHub Username</Label>
          <Input value={contact.github} onChange={(e) => setContact({ ...contact, github: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>LinkedIn Display Name</Label>
          <Input value={contact.linkedin} onChange={(e) => setContact({ ...contact, linkedin: e.target.value })} />
        </div>
      </div>
      <Button onClick={handleSave} className="w-full sm:w-auto">
        <Save className="w-4 h-4 mr-2" />
        Save Contact
      </Button>
    </div>
  );
};

const PasswordChange = () => {
  const { changePassword } = usePortfolio();
  const { toast } = useToast();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (changePassword(oldPassword, newPassword)) {
      toast({ title: "Password changed successfully!" });
      setOldPassword("");
      setNewPassword("");
    } else {
      toast({ title: "Incorrect current password", variant: "destructive" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div className="space-y-2">
        <Label>Current Password</Label>
        <Input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label>New Password</Label>
        <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </div>
      <Button type="submit">
        <Key className="w-4 h-4 mr-2" />
        Change Password
      </Button>
    </form>
  );
};

const AdminDashboard = () => {
  const { logout, resetToDefault } = usePortfolio();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleReset = () => {
    if (confirm("Are you sure? This will reset all data to defaults.")) {
      resetToDefault();
      toast({ title: "Data reset to defaults" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <h1 className="text-lg sm:text-xl font-bold text-foreground">Admin Panel</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => navigate("/")} className="hidden sm:flex">
              <Home className="w-4 h-4 mr-2" />
              View Site
            </Button>
            <Button variant="outline" size="icon" onClick={() => navigate("/")} className="sm:hidden">
              <Home className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Tabs defaultValue="hero" className="w-full">
          <ScrollArea className="w-full pb-2">
            <TabsList className="mb-6 w-max">
              <TabsTrigger value="hero" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Hero</span>
              </TabsTrigger>
              <TabsTrigger value="about" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">About</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Projects</span>
              </TabsTrigger>
              <TabsTrigger value="skills" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Skills</span>
              </TabsTrigger>
              <TabsTrigger value="stats" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Stats</span>
              </TabsTrigger>
              <TabsTrigger value="contact" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Contact</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                <Key className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>
          </ScrollArea>

          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>Update your name, tagline, and social links</CardDescription>
              </CardHeader>
              <CardContent>
                <HeroEditor />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About Section</CardTitle>
                <CardDescription>Update your bio and personal information</CardDescription>
              </CardHeader>
              <CardContent>
                <AboutEditor />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Add, edit, or remove your projects</CardDescription>
              </CardHeader>
              <CardContent>
                <ProjectsEditor />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Experience</CardTitle>
                <CardDescription>Update your skill levels</CardDescription>
              </CardHeader>
              <CardContent>
                <SkillsEditor />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <Card>
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
                <CardDescription>Update your achievement stats</CardDescription>
              </CardHeader>
              <CardContent>
                <StatsEditor />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Update your contact details</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactEditor />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>Update your admin password</CardDescription>
                </CardHeader>
                <CardContent>
                  <PasswordChange />
                </CardContent>
              </Card>
              <Card className="border-destructive/50">
                <CardHeader>
                  <CardTitle className="text-destructive">Danger Zone</CardTitle>
                  <CardDescription>Reset all data to default values</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="destructive" onClick={handleReset}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset All Data
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

const Admin = () => {
  const { isAuthenticated, login } = usePortfolio();

  if (!isAuthenticated) {
    return <AdminLogin onLogin={login} />;
  }

  return <AdminDashboard />;
};

export default Admin;
