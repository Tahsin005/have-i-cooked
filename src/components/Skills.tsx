import GitHubCalendar from "react-github-calendar";
import { Code2, Server, Layout, Database, Wrench } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/hooks/useGSAP";
import SectionHeader from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const categoriesGridRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Skill category cards: stagger reveal with rotation
      if (categoriesGridRef.current) {
        const cards = categoriesGridRef.current.querySelectorAll('.skill-category-card');
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            {
              y: 60,
              opacity: 0,
              rotation: (i % 2 === 0 ? 3 : -3),
              scale: 0.9,
            },
            {
              y: 0,
              opacity: 1,
              rotation: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );

          // Skill tags pop in
          const tags = card.querySelectorAll('.skill-tag');
          gsap.fromTo(
            tags,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.35,
              stagger: 0.04,
              ease: 'back.out(2.5)',
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // GitHub calendar: slide in from right with mask
      if (calendarRef.current) {
        gsap.fromTo(
          calendarRef.current,
          {
            x: 80,
            opacity: 0,
            clipPath: 'inset(0% 100% 0% 0%)',
          },
          {
            x: 0,
            opacity: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: calendarRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }


    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-shell relative overflow-hidden border-none" id="skills">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Skills & Tech"
          subtitle="Technologies and tools I work with."
        />

        <div className="w-full overflow-hidden mb-24 relative py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-row flex w-[300%] animate-marquee gap-4 mb-6 hover:[animation-play-state:paused]">
            {marqueeSkills1.map((skill, i) => (
              <div key={i} className="flex-shrink-0 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-foreground/80 text-2xl md:text-4xl font-display font-bold uppercase tracking-widest whitespace-nowrap hover:bg-white/10 transition-colors cursor-default backdrop-blur-md shadow-lg">
                {skill}
              </div>
            ))}
          </div>
          <div className="marquee-row flex w-[300%] animate-marquee-reverse gap-4 hover:[animation-play-state:paused]">
            {marqueeSkills2.map((skill, i) => (
              <div key={i} className="flex-shrink-0 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-foreground/80 text-2xl md:text-4xl font-display font-bold uppercase tracking-widest whitespace-nowrap hover:bg-white/10 transition-colors cursor-default backdrop-blur-md shadow-lg">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div ref={categoriesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="skill-category-card" style={{ opacity: 0 }}>
              <div className="glass-card glass-shimmer glass-hover p-6 rounded-xl h-full">
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
                      className="skill-tag font-display text-[12px] font-medium tracking-wide bg-white/5 text-foreground/70 px-3 py-1.5 rounded-full border border-white/10"
                      style={{ opacity: 0, transform: 'scale(0)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={calendarRef} style={{ opacity: 0 }}>
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
        </div>
      </div>
    </section>
  );
};

export default Skills;