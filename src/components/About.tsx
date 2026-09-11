import { Briefcase, GraduationCap, Code, Gamepad2, Music, FileText, ArrowUpRight, Activity as ActivityIcon, Cuboid as Cube } from 'lucide-react';
import { TiltCard } from "./TiltCard";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '@/hooks/useGSAP';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (!gridRef.current) return;

      const cards = gridRef.current.querySelectorAll('.about-card');

      // Cards fly in from different directions with stagger
      const directions = [
        { x: -60, y: 40, rotation: -3 },   // bio card (from left)
        { x: 0, y: 60, rotation: 2 },       // work 1 (from below)
        { x: 60, y: 40, rotation: 3 },      // work 2 (from right)
        { x: -40, y: 60, rotation: -2 },    // interests (from left-below)
        { x: 0, y: 80, rotation: 0 },       // resume (from below)
      ];

      cards.forEach((card, i) => {
        const dir = directions[i] || { x: 0, y: 60, rotation: 0 };

        gsap.fromTo(
          card,
          {
            x: dir.x,
            y: dir.y,
            opacity: 0,
            rotation: dir.rotation,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Tech tags pop in one by one
        const tags = card.querySelectorAll('.tech-tag');
        if (tags.length > 0) {
          gsap.fromTo(
            tags,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              stagger: 0.05,
              ease: 'back.out(2)',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      // Resume card special glow pulse
      if (resumeRef.current) {
        gsap.fromTo(
          resumeRef.current.querySelector('.resume-glow'),
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            repeat: 2,
            yoyo: true,
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: resumeRef.current,
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
    <section className="section-shell relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="About"
          titleHighlight="Me"
          subtitle="Passionate about building innovative solutions and solving complex problems."
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="about-card col-span-1 md:col-span-2" style={{ opacity: 0 }}>
            <TiltCard className="h-full">
              <div className="glass-card glass-shimmer glass-hover p-8 relative group rounded-2xl h-full overflow-hidden">
                <div className="mb-6 flex items-center gap-4">
                  <div className="bg-white/5 p-3 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                    <Briefcase className="text-foreground/70" size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-[22px] font-semibold tracking-tight text-foreground/90">Who is MD. Tahsin Ferdous?</h3>
                </div>
                <div className="font-display text-[15px] font-normal leading-[1.9] text-foreground/60 space-y-4">
                  <p>
                    I am a <span className="text-foreground/90 font-medium">Full Stack Engineer</span> focused on building clean, accessible, and maintainable web applications.
                    I thrive on problem-solving and am constantly learning new things to improve my craft.
                  </p>
                  <p>
                    My journey involves working with modern tech stacks, from building robust backends with <span className="text-foreground/80">Javascript, Golang & Python</span> to creating dynamic frontends with <span className="text-foreground/80">React, Next.js & Tailwind</span>.
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>

          <div className="about-card" style={{ opacity: 0 }}>
            <TiltCard className="h-full">
              <div className="glass-card glass-shimmer glass-hover p-8 relative group rounded-2xl h-full overflow-hidden">
                <div className="mb-6">
                  <div className="bg-white/5 w-fit p-3 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors duration-300 mb-4">
                    <Code className="text-foreground/70" size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-[20px] font-semibold tracking-tight text-foreground/90">Affpilot</h3>
                  <p className="font-display text-[12px] font-medium text-foreground/40 mt-1">Apr 2025 — Feb 2026</p>
                </div>
                <p className="font-display text-[14px] text-foreground/50 mb-6">
                  Jr. Software Engineer
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Django", "Golang", "Reactjs", "PostgreSQL", "Docker", "Redis"].map(tech => (
                    <span key={tech} className="tech-tag font-display text-[12px] font-medium tracking-wide bg-white/5 text-foreground/70 px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>

          <div className="about-card" style={{ opacity: 0 }}>
            <TiltCard className="h-full">
              <div className="glass-card glass-shimmer glass-hover p-8 relative group rounded-2xl h-full overflow-hidden">
                <div className="mb-6">
                  <div className="bg-white/5 w-fit p-3 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors duration-300 mb-4">
                    <GraduationCap className="text-foreground/70" size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-[20px] font-semibold tracking-tight text-foreground/90">Lexaeon</h3>
                  <p className="font-display text-[12px] font-medium text-foreground/40 mt-1">Oct 2024 — Nov 2024</p>
                </div>
                <p className="font-display text-[14px] text-foreground/50 mb-6">
                  Python Developer Intern
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Django", "DRF", "PostgreSQL"].map(tech => (
                    <span key={tech} className="tech-tag font-display text-[12px] font-medium tracking-wide bg-white/5 text-foreground/70 px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>

          <div className="about-card" style={{ opacity: 0 }}>
            <TiltCard className="h-full">
              <div className="glass-card glass-shimmer glass-hover p-8 relative group rounded-2xl h-full overflow-hidden">
                <div className="mb-6">
                  <div className="bg-white/5 w-fit p-3 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors duration-300 mb-4">
                    <Gamepad2 className="text-foreground/70" size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-[20px] font-semibold tracking-tight text-foreground/90">Interests</h3>
                </div>
                <ul className="space-y-4 font-display text-[15px]">
                  <li className="flex items-center text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    <Cube className="mr-4 text-foreground/40" size={18} />
                    Speedcubing
                  </li>
                  <li className="flex items-center text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    <ActivityIcon className="mr-4 text-foreground/40" size={18} />
                    Football
                  </li>
                  <li className="flex items-center text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    <Music className="mr-4 text-foreground/40" size={18} />
                    Beatboxing
                  </li>
                </ul>
              </div>
            </TiltCard>
          </div>

          <div ref={resumeRef} className="about-card col-span-1 md:col-span-2 lg:col-span-1" style={{ opacity: 0 }}>
            <TiltCard className="h-full">
              <div className="glass-card glass-shimmer p-8 relative group flex flex-col justify-between rounded-2xl h-full overflow-hidden border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/50 hover:from-primary/10 hover:-translate-y-1.5 transition-all duration-500 ease-out shadow-[0_0_30px_hsl(var(--primary)/0.05)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.55),0_0_40px_hsl(var(--primary)/0.15)]">
                <div className="resume-glow absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-500 blur-xl"></div>
                <div className="relative z-10 mb-6">
                  <div className="bg-primary/10 w-fit p-3 rounded-full border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 mb-4 text-primary">
                    <FileText size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-[20px] font-semibold tracking-tight text-foreground/90 mb-4 group-hover:text-primary transition-colors duration-300">Resume</h3>
                  <p className="font-display text-foreground/50 text-[14px] mb-8 leading-relaxed">
                    Check out my full resume for more details on my projects and experience.
                  </p>
                </div>
                <a
                  href="https://drive.google.com/file/d/1v5OKvPZwllgYbNnGKYQsa92aj30r-hnD/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center justify-center font-display text-[14px] font-semibold text-primary-foreground bg-primary hover:bg-primary/90 px-6 py-3 rounded-full transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] group-hover:-translate-y-0.5"
                >
                  View Resume <ArrowUpRight className="ml-2" size={18} />
                </a>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
