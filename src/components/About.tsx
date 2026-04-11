import { Briefcase, GraduationCap, Code, Gamepad2, Music, FileText, ArrowUpRight, Activity as ActivityIcon, Cuboid as Cube } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import DotGrid from '@/components/DotGrid';
const About = () => {
  return (
    <section className="section-shell relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <DotGrid dotSize={2} gap={24} baseColor="#9231E8" activeColor="#1E904E" proximity={180} shockRadius={280} shockStrength={6} resistance={800} returnDuration={1.5} />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {}
        <div className="mb-16 text-center">
          <div className="section-label mb-3"></div>
          <h2 className="section-title mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about building innovative solutions and solving complex problems
          </p>
        </div>
        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {}
          <ScrollReveal delay="delay-100" className="col-span-1 md:col-span-2">
           <div className="glass-card glass-hover p-8 relative group rounded-xl h-full">
            <div className="mb-6">
              <Briefcase className="text-primary mb-4" size={36} strokeWidth={1.5} />
              <h3 className="font-display text-[18px] font-semibold leading-[1.3] mb-4">Who is MD. Tahsin Ferdous?</h3>
            </div>
            <p className="font-body text-[14px] font-normal leading-[1.7] text-muted-foreground mb-4">
              I am a <span className="text-foreground font-semibold">Full Stack Engineer</span> focused on building clean, accessible, and maintainable web applications.
              I thrive on problem-solving and am constantly learning new things to improve my craft.
            </p>
            <p className="font-body text-[14px] font-normal leading-[1.7] text-muted-foreground">
              My journey involves working with modern tech stacks, from building robust backends with <span className="text-foreground">Javascript, Golang & Python</span> to creating dynamic frontends with <span className="text-foreground">React, Next.js & Tailwind</span>.
            </p>
          </div>
          </ScrollReveal>
          {}
          <ScrollReveal delay="delay-200">
            <div className="glass-card glass-hover p-6 relative group rounded-xl h-full">
            <div className="mb-4">
              <Code className="text-primary" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-[18px] font-semibold leading-[1.3] mb-2">Affpilot</h3>
            <p className="font-display text-[11px] font-medium tracking-[0.06em] text-primary mb-4">Apr 2025 — Feb 2026</p>
            <p className="font-body text-[14px] font-normal leading-[1.7] text-muted-foreground mb-4">
              Jr. Software Engineer
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "Django", "Golang", "Reactjs", "PostgreSQL", "Docker", "Redis"].map(tech => (
                <span key={tech} className="font-display text-[11px] font-medium tracking-[0.06em] bg-secondary/50 text-secondary-foreground px-2 py-1 rounded border border-border/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          </ScrollReveal>
          {}
          <ScrollReveal delay="delay-300">
            <div className="glass-card glass-hover p-6 relative group rounded-xl h-full">
            <div className="mb-4">
              <GraduationCap className="text-primary" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-[18px] font-semibold leading-[1.3] mb-2">Lexaeon</h3>
            <p className="font-display text-[11px] font-medium tracking-[0.06em] text-primary mb-4">Oct 2024 — Nov 2024</p>
            <p className="font-body text-[14px] font-normal leading-[1.7] text-muted-foreground mb-4">
              Python Developer Intern
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "Django", "DRF", "PostgreSQL"].map(tech => (
                <span key={tech} className="font-display text-[11px] font-medium tracking-[0.06em] bg-secondary/50 text-secondary-foreground px-2 py-1 rounded border border-border/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          </ScrollReveal>
          {}
          <ScrollReveal delay="delay-400">
            <div className="glass-card glass-hover p-6 relative group rounded-xl h-full">
            <div className="mb-4">
              <Gamepad2 className="text-primary" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-4">Interests</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Cube className="mr-3 text-primary" size={18} />
                Speedcubing
              </li>
              <li className="flex items-center text-muted-foreground">
                <ActivityIcon className="mr-3 text-primary" size={18} />
                Football
              </li>
              <li className="flex items-center text-muted-foreground">
                <Music className="mr-3 text-primary" size={18} />
                Beatboxing
              </li>
            </ul>
          </div>
          </ScrollReveal>
          {}
          <ScrollReveal delay="delay-500" className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="glass-card glass-hover p-6 relative group flex flex-col justify-between rounded-xl h-full">
            <div>
              <div className="mb-4">
                <FileText className="text-primary" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4">Resume</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Check out my full resume for more details on my projects and experience.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1V2CqNMnejYeKv7_vcdP1I07_Q8ip_M4a/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-bold hover:underline group-hover:translate-x-1 transition-transform"
            >
              View Resume <ArrowUpRight className="ml-1" size={16} />
            </a>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
export default About;
