import { Github, Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';
import tahsinLogo from '@/assets/tahsin logo.png';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 md:pt-24 pb-20">
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 flex flex-col justify-between hover:border-primary/30 transition-all">
                        <div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                                MD. Tahsin<br />Ferdous
                            </h1>
                            <p className="text-xl md:text-2xl text-primary font-medium mb-8">
                                Software Engineer
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

                    <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 border border-primary/20 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center hover:border-primary/30 transition-all backdrop-blur-sm">
                        <div className="mb-6">
                            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/10 p-8 shadow-lg shadow-primary/10">
                                <img
                                    src={tahsinLogo}
                                    alt="MTF Logo"
                                    className="w-full h-full object-contain brightness-110 drop-shadow-lg"
                                />
                            </div>
                        </div>
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                            # PORTFOLIO 2026
                        </span>
                    </div>

                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 flex flex-col justify-between hover:border-primary/30 transition-all">
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

                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 flex flex-col justify-between hover:border-primary/30 transition-all">
                        <div className="mb-6">
                            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
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
