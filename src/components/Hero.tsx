import { ArrowRight, Terminal as TerminalIcon, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center p-4 md:p-8 pt-28 md:pt-36">
            <div className="w-full max-w-5xl">
                {/* Terminal Window Container */}
                <div className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden backdrop-blur-sm bg-opacity-95">

                    {/* Terminal Header */}
                    <div className="bg-secondary/50 border-b border-border p-3 flex items-center justify-between">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="text-muted-foreground text-xs font-mono flex items-center">
                            <TerminalIcon size={12} className="mr-2" />
                            root@tahsin: ~
                        </div>
                        <div className="w-16"></div> {/* Spacer for centering */}
                    </div>

                    {/* Terminal Content */}
                    <div className="p-8 md:p-12 lg:p-16 relative">
                        {/* Background Grid Pattern (Optional subtle texture) */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-5"></div>

                        <div className="relative z-10 space-y-8 text-center md:text-left">

                            {/* Command Input Simulation */}
                            <div className="inline-flex items-center space-x-2 text-primary/80 font-mono text-sm md:text-base mb-4 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                <span>$</span>
                                <span className="text-foreground">./init_portfolio.sh</span>
                            </div>

                            {/* Main Heading */}
                            <div className="space-y-4">
                                <p className="text-xl md:text-2xl text-muted-foreground font-mono">
                                    Hello, World! I'm
                                </p>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                                    <span className="text-foreground">MD. Tahsin</span>{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                                        Ferdous
                                    </span>
                                </h1>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-mono text-muted-foreground">
                                    &lt;<span className="text-primary">FullStackEngineer</span> /&gt;
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto md:mx-0">
                                Building scalable backend systems and crafting beautiful, accessible user experiences.
                                Focused on <span className="text-foreground font-semibold">Performance</span>, <span className="text-foreground font-semibold">Clean Code</span>, and <span className="text-foreground font-semibold">Innovation</span>.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col md:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
                                <Button
                                    size="lg"
                                    className="w-full md:w-auto text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground"
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full md:w-auto text-base font-mono border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Contact Me
                                </Button>
                            </div>

                            {/* Social Links (Optional quick access) */}
                            <div className="flex items-center gap-6 pt-8 justify-center md:justify-start text-muted-foreground">
                                <a href="https://github.com/tahsin-ferdous" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/tahsin-ferdous" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:tahsinferdous.cse@gmail.com" className="hover:text-primary transition-colors">
                                    <Mail size={24} />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
