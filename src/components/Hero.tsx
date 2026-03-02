import { Github, Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';
import tahsinLogo from '@/assets/tahsin logo.png';

const Hero = () => {
    return (
        <section className="section-shell min-h-screen flex items-center justify-center pt-24 md:pt-28">
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-card border border-border/70 rounded-2xl p-8 md:p-12 flex flex-col justify-between hover:border-primary/50 transition-all">
                        <div>
                            <div className="hero-tag mb-6">
                                <span className="inline-block w-8 h-px bg-primary"></span>
                                Engineering Portfolio
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
                                MD. Tahsin<br />Ferdous
                            </h1>
                            <p className="text-xl md:text-2xl text-primary font-medium mb-8">
                                Software Engineer
                            </p>
                            <p className="text-base md:text-lg text-muted-foreground italic max-w-md">
                                Building scalable backend systems and crafting modern, accessible user experiences with precision.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 flex-wrap">
                            <a
                                href="https://github.com/tahsin005"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Github size={18} />
                                <span className="text-sm">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-tahsin-ferdous/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Linkedin size={18} />
                                <span className="text-sm">LinkedIn</span>
                            </a>
                            <a
                                href="mailto:tahsin.ferdous3546@gmail.com"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Mail size={18} />
                                <span className="text-sm">Email</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/15 to-accent/10 border border-border/70 rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all backdrop-blur-sm">
                        <div className="mb-6">
                            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/10 p-8 shadow-lg shadow-primary/10">
                                <img
                                    src={tahsinLogo}
                                    alt="MTF Logo"
                                    className="w-full h-full object-contain brightness-110 drop-shadow-lg"
                                />
                            </div>
                        </div>
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-[11px] font-display uppercase tracking-[0.3em] bg-secondary/80 text-primary border border-border/70">
                            Portfolio 2026
                        </span>
                    </div>

                    <div className="bg-card border border-border/70 rounded-2xl p-8 md:p-12 flex flex-col justify-between hover:border-primary/50 transition-all">
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                            Building scalable backend systems and crafting beautiful, accessible user experiences. Focused on{' '}
                            <span className="text-foreground font-semibold">Performance</span>,{' '}
                            <span className="text-foreground font-semibold">Clean Code</span>, and{' '}
                            <span className="text-foreground font-semibold">Innovation</span>.
                        </p>
                        <a
                            href="#about"
                            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all group"
                        >
                            <span className="text-sm font-medium">Read more about me</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="bg-card border border-border/70 rounded-2xl p-8 md:p-12 flex flex-col justify-between hover:border-primary/50 transition-all">
                        <div className="mb-6">
                            <h3 className="section-label mb-4">
                                Core Focus
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 rounded-lg text-sm bg-secondary/50 text-secondary-foreground border border-border/30">
                                    Full Stack Developer
                                </span>
                                <span className="px-3 py-1.5 rounded-lg text-sm bg-secondary/50 text-secondary-foreground border border-border/30">
                                    Problem Solver
                                </span>
                                <span className="px-3 py-1.5 rounded-lg text-sm bg-secondary/50 text-secondary-foreground border border-border/30">
                                    System Architecture
                                </span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin size={16} className="text-primary" />
                                <span className="text-sm">Dhaka, Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-sm text-green-500">Available for work</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
