import GitHubCalendar from "react-github-calendar";
import { Code2, Server, Layout, Database, Wrench } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
const Skills = () => {
  const categories = [
    {
      title: "Languages",
      icon: <Code2 className="text-primary" size={24} />,
      skills: ["Python", "JavaScript", "GoLang", "C++", "Java", "C", "TypeScript"],
    },
    {
      title: "Backend",
      icon: <Server className="text-primary" size={24} />,
      skills: ["Django", "DRF", "Node.js", "Express.js", "Gin", "Gorm"],
    },
    {
      title: "Frontend",
      icon: <Layout className="text-primary" size={24} />,
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5/CSS3", "Redux"],
    },
    {
      title: "Databases",
      icon: <Database className="text-primary" size={24} />,
      skills: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench className="text-primary" size={24} />,
      skills: ["Docker", "CI/CD", "Nginx", "AWS", "Linux", "Git", "GitHub"],
    },
  ];
  return (
    <section className="section-shell">
      <div className="max-w-6xl mx-auto">
        {}
        <div className="mb-16 text-center">
          <div className="section-label mb-3"></div>
          <h2 className="section-title mb-4">
            <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>
        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <ScrollReveal key={index} delay={`delay-${(index % 5 + 1) * 100}`}>
            <div
              className="glass-card glass-hover p-6 rounded-xl h-full"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-2 rounded mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-display text-[11px] font-medium tracking-[0.06em] px-2 py-1 bg-secondary/50 text-secondary-foreground rounded border border-border/30 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
        {}
        <ScrollReveal delay="delay-500">
        <div className="glass-card p-8 rounded-xl bg-card/30">
          <h3 className="text-xl font-bold mb-6 text-center">
            GitHub <span className="text-primary">Contributions</span>
          </h3>
          <div className="flex justify-center overflow-x-auto pb-4">
            <GitHubCalendar
              username="tahsin005"
              colorScheme="dark"
              fontSize={12}
              blockSize={12}
              blockMargin={4}
              theme={{
                dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
            />
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
export default Skills;