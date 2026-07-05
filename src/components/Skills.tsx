import GitHubCalendar from "react-github-calendar";
import { Code2, Server, Layout, Database, Wrench } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      icon: <Code2 className="text-foreground/60" size={24} />,
      skills: ["Python", "JavaScript", "GoLang", "C++", "Java", "C", "TypeScript"],
    },
    {
      title: "Backend",
      icon: <Server className="text-foreground/60" size={24} />,
      skills: ["Django", "DRF", "Node.js", "Express.js", "Gin", "Gorm", "RabbitMQ", "gRPC"],
    },
    {
      title: "Frontend",
      icon: <Layout className="text-foreground/60" size={24} />,
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5/CSS3", "Redux"],
    },
    {
      title: "Databases",
      icon: <Database className="text-foreground/60" size={24} />,
      skills: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench className="text-foreground/60" size={24} />,
      skills: ["Docker", "CI/CD", "Nginx", "AWS", "Linux", "Git", "GitHub"],
    },
  ];

  const allSkills = categories.flatMap(c => c.skills);
  const marqueeSkills1 = [...allSkills, ...allSkills, ...allSkills];
  const reversedSkills = [...allSkills].reverse();
  const marqueeSkills2 = [...reversedSkills, ...reversedSkills, ...reversedSkills];

  return (
    <section className="section-shell relative overflow-hidden border-none" id="skills">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="section-label mb-3"></div>
          <h2 className="font-display text-[clamp(40px,8vw,80px)] font-bold tracking-tighter mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">Skills & Tech</span>
          </h2>
          <p className="font-display text-[18px] md:text-[22px] text-foreground/70 max-w-2xl mx-auto">
            Technologies and tools I work with.
          </p>
        </div>

        <div className="w-full overflow-hidden mb-24 relative py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-[300%] animate-marquee gap-4 mb-6 hover:[animation-play-state:paused]">
            {marqueeSkills1.map((skill, i) => (
              <div key={i} className="flex-shrink-0 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-foreground/80 text-2xl md:text-4xl font-display font-bold uppercase tracking-widest whitespace-nowrap hover:bg-white/10 transition-colors cursor-default backdrop-blur-md shadow-lg">
                {skill}
              </div>
            ))}
          </div>
          <div className="flex w-[300%] animate-marquee-reverse gap-4 hover:[animation-play-state:paused]">
            {marqueeSkills2.map((skill, i) => (
              <div key={i} className="flex-shrink-0 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-foreground/80 text-2xl md:text-4xl font-display font-bold uppercase tracking-widest whitespace-nowrap hover:bg-white/10 transition-colors cursor-default backdrop-blur-md shadow-lg">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <ScrollReveal key={index} delay={`delay-${(index % 5 + 1) * 100}`}>
              <div
                className="glass-card glass-shimmer glass-hover p-6 rounded-xl h-full"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-white/5 p-3 rounded-xl mr-4 border border-white/10 group-hover:bg-white/10 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-[18px] font-display font-semibold tracking-tight text-foreground/90">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-display text-[12px] font-medium tracking-wide bg-white/5 text-foreground/70 px-3 py-1.5 rounded-full border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay="delay-500">
          <div className="glass-card glass-shimmer p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <h3 className="text-[22px] font-display font-semibold mb-8 text-center tracking-tight text-foreground/80">
              GitHub <span className="text-foreground/90">Contributions</span>
            </h3>
            <div className="flex justify-center overflow-x-auto pb-4 relative z-10">
              <GitHubCalendar
                username="tahsin005"
                colorScheme="dark"
                fontSize={12}
                blockSize={14}
                blockMargin={5}
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