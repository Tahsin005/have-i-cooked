import { Briefcase, GraduationCap, Code, Gamepad2, Music, FileText, ArrowUpRight, Activity as ActivityIcon, Cuboid as Cube } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { TiltCard } from "./TiltCard";

const About = () => {
  return (
    <section className="section-shell relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="section-label mb-3"></div>
          <h2 className="font-display text-[clamp(40px,8vw,80px)] font-bold tracking-tighter mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">About </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary/40">Me</span>
          </h2>
          <p className="font-display text-[18px] md:text-[22px] text-foreground/60 max-w-2xl mx-auto">
            Passionate about building innovative solutions and solving complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main About Card */}
          <ScrollReveal delay="delay-100" className="col-span-1 md:col-span-2">
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
          </ScrollReveal>

          {/* Work Experience - Affpilot */}
          <ScrollReveal delay="delay-200">
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
                    <span key={tech} className="font-display text-[12px] font-medium tracking-wide bg-white/5 text-foreground/70 px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Internship - Lexaeon */}
          <ScrollReveal delay="delay-300">
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
                    <span key={tech} className="font-display text-[12px] font-medium tracking-wide bg-white/5 text-foreground/70 px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Interests */}
          <ScrollReveal delay="delay-400">
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
          </ScrollReveal>

          {/* Resume */}
          <ScrollReveal delay="delay-500" className="col-span-1 md:col-span-2 lg:col-span-1">
            <TiltCard className="h-full">
              <div className="glass-card glass-shimmer glass-hover p-8 relative group flex flex-col justify-between rounded-2xl h-full overflow-hidden">
                <div className="mb-6">
                  <div className="bg-white/5 w-fit p-3 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors duration-300 mb-4">
                    <FileText className="text-foreground/70" size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-[20px] font-semibold tracking-tight text-foreground/90 mb-4">Resume</h3>
                  <p className="font-display text-foreground/50 text-[14px] mb-8 leading-relaxed">
                    Check out my full resume for more details on my projects and experience.
                  </p>
                </div>
                <a
                  href="https://drive.google.com/file/d/1RM7AtJX7fXWBWjQuWxbM03gUSak7_L1k/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-display text-[14px] font-medium text-foreground/70 hover:text-foreground transition-all duration-300 group-hover:translate-x-1"
                >
                  View Resume <ArrowUpRight className="ml-2" size={18} />
                </a>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
