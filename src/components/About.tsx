import { Briefcase, GraduationCap, Code, Gamepad2, Music, FileText, ArrowUpRight, Activity as ActivityIcon, Cuboid as Cube } from 'lucide-react';

const About = () => {
  return (
    <section className="section-shell">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="section-label mb-3">// 01 ABOUT</div>
          <h2 className="section-title mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about building innovative solutions and solving complex problems
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Bio Card - Spans 2 columns */}
          <div className="col-span-1 md:col-span-2 bg-card border border-border rounded-xl p-8 relative group hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
            <div className="mb-6">
              <Briefcase className="text-primary mb-4" size={36} strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-4">Who is MD. Tahsin Ferdous?</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a <span className="text-foreground font-semibold">Jr. Software Engineer</span> at Affpilot, focused on building clean, accessible, and maintainable web applications.
              I thrive on problem-solving and am constantly learning new things to improve my craft.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey involves working with modern tech stacks, from building robust backends with <span className="text-foreground">Python & Django</span> to creating dynamic frontends with <span className="text-foreground">React & Tailwind</span>.
            </p>
          </div>

          {/* Experience Card 1 - Affpilot */}
          <div className="bg-card border border-border rounded-xl p-6 relative group hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
            <div className="mb-4">
              <Code className="text-primary" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-2">Affpilot</h3>
            <p className="text-sm text-primary mb-4">Apr 2025 — Present</p>
            <p className="text-muted-foreground text-sm mb-4">
              Jr. Software Engineer
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "Django", "Golang", "PostgreSQL", "Docker", "Redis"].map(tech => (
                <span key={tech} className="bg-secondary/50 text-secondary-foreground text-xs px-2 py-1 rounded border border-border/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Card 2 - Lexaeon */}
          <div className="bg-card border border-border rounded-xl p-6 relative group hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
            <div className="mb-4">
              <GraduationCap className="text-primary" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-2">Lexaeon</h3>
            <p className="text-sm text-primary mb-4">Oct 2024 — Nov 2024</p>
            <p className="text-muted-foreground text-sm mb-4">
              Python Developer Intern
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "Django", "DRF", "PostgreSQL"].map(tech => (
                <span key={tech} className="bg-secondary/50 text-secondary-foreground text-xs px-2 py-1 rounded border border-border/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interests Card */}
          <div className="bg-card border border-border rounded-xl p-6 relative group hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
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

          {/* Resume / Connect Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/30 rounded-xl p-6 relative group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col justify-between">
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

        </div>
      </div>
    </section>
  );
};

export default About;

