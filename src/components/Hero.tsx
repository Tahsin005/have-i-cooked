import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 md:pt-24">
            <div className="w-full max-w-4xl text-center">
                {/* Profile Image Section */}
                <div className="flex justify-center mb-8">
                    <div className="relative group">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 p-1 backdrop-blur-sm border border-primary/30">
                            <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center overflow-hidden">
                                {/* Placeholder for profile image - you can replace with actual image */}
                                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center">
                                    <span className="text-5xl md:text-6xl font-bold text-primary">MTF</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Name and Title */}
                <div className="space-y-4 mb-6">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        <span className="text-foreground">MD. Tahsin </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary">
                            Ferdous
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-primary font-medium">
                        Software Engineer
                    </p>
                </div>

                {/* Badge Tags */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-secondary-foreground border border-border/50">
                        Full Stack Developer
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-secondary-foreground border border-border/50">
                        Problem Solver
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-secondary-foreground border border-border/50">
                        <MapPin size={12} className="mr-1" />
                        Bangladesh
                    </span>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    <a
                        href="https://github.com/tahsin-ferdous"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
                    >
                        <Github size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors hidden sm:inline">GitHub</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/tahsin-ferdous"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
                    >
                        <Linkedin size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors hidden sm:inline">LinkedIn</span>
                    </a>
                    <a
                        href="mailto:tahsinferdous.cse@gmail.com"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
                    >
                        <Mail size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">tahsinferdous.cse@gmail.com</span>
                    </a>
                </div>

                {/* Brief Description */}
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Building scalable backend systems and crafting beautiful, accessible user experiences.
                    Focused on <span className="text-foreground font-semibold">Performance</span>, <span className="text-foreground font-semibold">Clean Code</span>, and <span className="text-foreground font-semibold">Innovation</span>.
                </p>
            </div>
        </section>
    );
};

export default Hero;

