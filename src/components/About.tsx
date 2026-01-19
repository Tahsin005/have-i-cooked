import { Terminal, Database, Code, Cuboid as Cube, Music, Gamepad2, FileText, ArrowUpRight, Activity as ActivityIcon } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header - Purple Onion Style */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-2">
            <span className="text-primary">AboutMe</span>
            <span className="text-foreground">.sh</span>
          </h1>
          <div className="text-muted-foreground font-mono text-sm">
            [root@engine]:/var/log/about$ <span className="animate-pulse">_</span>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Bio Card - Spans 2 columns */}
          <div className="col-span-1 md:col-span-2 bg-card border border-border rounded p-6 relative group hover:border-primary/50 transition-colors">
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
              01
            </div>
            <div className="mb-4 text-primary">
              <Terminal size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold mb-4 font-mono"># Who is MD. Tahsin Ferdous?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a <span className="text-foreground font-semibold">Jr. Software Engineer</span> at Affpilot, focused on building clean, accessible, and maintainable web applications.
              I thrive on problem-solving and am constantly learning new things to improve my craft.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey involves working with modern tech stacks, from building robust backends with <span className="text-foreground">Python & Django</span> to creating dynamic frontends with <span className="text-foreground">React & Tailwind</span>.
            </p>
          </div>

          {/* Experience Card 1 - Affpilot */}
          <div className="bg-card border border-border rounded p-6 relative group hover:border-primary/50 transition-colors">
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              02
            </div>
            <div className="mb-4 text-primary">
              <Database size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-2 font-mono">@ Affpilot</h3>
            <p className="text-sm text-primary mb-4">Apr 2025 — Present</p>
            <p className="text-muted-foreground text-sm mb-4">
              Jr. Software Engineer
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "Django", "Golang", "PostgreSQL", "Docker", "Redis"].map(tech => (
                <span key={tech} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Card 2 - Lexaeon */}
          <div className="bg-card border border-border rounded p-6 relative group hover:border-primary/50 transition-colors">
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              03
            </div>
            <div className="mb-4 text-primary">
              <Code className="block" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-2 font-mono">@ Lexaeon</h3>
            <p className="text-sm text-primary mb-4">Oct 2024 — Nov 2024</p>
            <p className="text-muted-foreground text-sm mb-4">
              Python Developer Intern
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "Django", "DRF", "PostgreSQL"].map(tech => (
                <span key={tech} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interests Card */}
          <div className="bg-card border border-border rounded p-6 relative group hover:border-primary/50 transition-colors">
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              04
            </div>
            <div className="mb-4 text-primary">
              <Gamepad2 size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-4 font-mono"># Interests</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Cube className="mr-3 text-primary" size={20} />
                Speedcubing
              </li>
              <li className="flex items-center text-muted-foreground">
                <ActivityIcon className="mr-3 text-primary" size={20} />
                Football
              </li>
              <li className="flex items-center text-muted-foreground">
                <Music className="mr-3 text-primary" size={20} />
                Beatboxing
              </li>
            </ul>
          </div>

          {/* Resume / Connect Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-card border border-border rounded p-6 relative group hover:border-primary/50 transition-colors flex flex-col justify-between">
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              05
            </div>
            <div>
              <div className="mb-4 text-primary">
                <FileText size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-mono"># Resume</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Check out my full resume for more details on my projects and experience.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1V2CqNMnejYeKv7_vcdP1I07_Q8ip_M4a/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-bold hover:underline"
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
