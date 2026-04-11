import { Github, Linkedin, Mail, MapPin, ArrowRight, Code, Sparkles, Cpu } from 'lucide-react';
import tahsinLogo from '@/assets/tahsin-logo.png';
import tahsinPhoto from '@/assets/hero-image.png';
import DotGrid from '@/components/DotGrid';
const Hero = () => {
    return (
        <section className="section-shell min-h-screen flex items-center justify-center pt-24 md:pt-28 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
                <DotGrid
                    dotSize={2}
                    gap={24}
                    baseColor="#9231E8"
                    activeColor="#1E904E"
                    proximity={180}
                    shockRadius={280}
                    shockStrength={6}
                    resistance={800}
                    returnDuration={1.5}
                />
            </div>
            <div className="w-full max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
                    <div className="glass-card glass-hover p-8 md:p-12 flex flex-col justify-between rounded-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
                        <div>
                            <div className="hero-tag mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300 fill-mode-both">
                                <span className="inline-block w-8 h-px bg-primary"></span>
                                Engineering Portfolio
                            </div>
                             <h1 className="font-display text-[clamp(44px,8vw,64px)] font-bold tracking-[-0.02em] leading-[1.05] mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
                                MD. Tahsin<br />Ferdous
                            </h1>
                            <p className="font-display text-[18px] font-normal tracking-[0.01em] text-primary mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-700 fill-mode-both">
                                Full Stack Engineer
                            </p>
                            <p className="font-body text-[15px] font-normal italic leading-[1.7] text-muted-foreground max-w-lg animate-in fade-in slide-in-from-bottom-2 duration-700 delay-1000 fill-mode-both">
                                Building scalable backend systems and crafting modern, accessible user experiences with precision.
                            </p>
                        </div>
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                            >
                                View Projects
                                <ArrowRight size={16} />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 border border-border/70 text-foreground px-4 py-2 rounded-full text-sm font-semibold hover:border-primary/60 hover:text-primary transition-colors"
                            >
                                Let’s Talk
                            </a>
                        </div>
                        <div className="mt-8 flex items-center gap-4 flex-wrap">
                            <a
                                href="https://github.com/tahsin005"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
                            >
                                <Github size={18} className="group-hover:scale-110 transition-transform" />
                                <span className="text-sm">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-tahsin-ferdous/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
                            >
                                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                                <span className="text-sm">LinkedIn</span>
                            </a>
                            <a
                                href="mailto:tahsin.ferdous3546@gmail.com"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
                            >
                                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                                <span className="text-sm">Email</span>
                            </a>
                        </div>

                        <div className="mt-6 pt-6 border-t border-border/40 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-1000 fill-mode-both">
                            <div className="flex flex-wrap gap-x-12 gap-y-6 items-center">
                                <div className="flex items-center gap-3 group/status">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover/status:border-primary/40 transition-all duration-300">
                                        <MapPin size={16} className="text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-[0.1em] font-bold opacity-40">Location</span>
                                        <span className="text-sm font-medium">Dhaka, Bangladesh</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 group/status">
                                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover/status:border-green-500/40 transition-all duration-300">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-[0.1em] font-bold opacity-40 text-green-500/70">Availability</span>
                                        <span className="text-sm font-medium text-green-400">Available for innovative projects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="glass-panel glass-hover p-8 md:p-10 flex flex-col items-center justify-center text-center rounded-2xl animate-in fade-in slide-in-from-right-8 duration-1000 group">
                            <div className="mb-6 relative">
                                {/* Decorative Glow Background */}
                                <div className="absolute -inset-10 bg-primary/10 blur-[80px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>
                                <div className="absolute -inset-4 bg-accent-2/5 blur-[40px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 delay-100 pointer-events-none"></div>

                                {/* Floating Badges */}
                                <div className="absolute -top-4 -right-8 z-20 animate-float delay-100">
                                    <div className="glass-card px-4 py-2 rounded-xl flex items-center gap-2 text-[10px] font-display font-bold tracking-widest uppercase border-primary/40 shadow-xl shadow-primary/10 scale-90 md:scale-100">
                                        <Code size={14} className="text-primary" />
                                        Full Stack
                                    </div>
                                </div>
                                
                                <div className="absolute top-1/2 -left-12 -translate-y-1/2 z-20 animate-float delay-500">
                                    <div className="glass-card px-4 py-2 rounded-xl flex items-center gap-2 text-[10px] font-display font-bold tracking-widest uppercase border-accent-2/40 shadow-xl shadow-accent-2/10 scale-90 md:scale-100">
                                        <Sparkles size={14} className="text-accent-2" />
                                        Problem Solver
                                    </div>
                                </div>
                                
                                <div className="absolute -bottom-4 -right-10 z-20 animate-float delay-300">
                                    <div className="glass-card px-4 py-2 rounded-xl flex items-center gap-2 text-[10px] font-display font-bold tracking-widest uppercase border-accent-3/40 shadow-xl shadow-accent-3/10 scale-90 md:scale-100">
                                        <Cpu size={14} className="text-accent-3" />
                                        Architecture
                                    </div>
                                </div>

                                <div className="w-52 h-52 md:w-60 md:h-60 rounded-3xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 p-8 shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-all duration-700 group-hover:border-primary/30 relative overflow-hidden">
                                     {/* Inner glow effect on hover */}
                                     <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-2/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                    <img
                                        src={tahsinPhoto}
                                        alt="MTF Logo"
                                        className="w-full h-full object-contain brightness-110 drop-shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-[11px] font-display uppercase tracking-[0.3em] bg-secondary/80 text-primary border border-border/70 mt-4">
                                Portfolio 2026
                            </span>
                        </div>

                        <div className="glass-card glass-hover p-6 md:p-8 flex flex-col justify-between rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
                            <p className="font-body text-[15px] font-normal leading-[1.7] text-muted-foreground mb-6">
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
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
