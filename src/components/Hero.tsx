import { Github, Linkedin, Mail, MapPin, ArrowRight, Code, Sparkles, Cpu } from 'lucide-react';
import tahsinPhoto from '@/assets/lanyard/lanyard-card.png';
import tahsinPhoto2 from '@/assets/hero-image.png';
import tahsinLogo from '@/assets/tahsin-logo-white-bg.png';
import Lanyard from '@/components/ui/Lanyard';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '@/hooks/useGSAP';

gsap.registerPlugin(ScrollTrigger);

const TypedSubtitle = () => {
    const [typedText, setTypedText] = useState("");
    const fullText = "Full Stack Engineer & Creative Developer";

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setTypedText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 45);
        return () => clearInterval(typingInterval);
    }, []);

    return <span>{typedText}</span>;
};

const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const socialsRef = useRef<HTMLDivElement>(null);
    const statusRef = useRef<HTMLDivElement>(null);
    const photoCardRef = useRef<HTMLDivElement>(null);
    const mobileCardRef = useRef<HTMLDivElement>(null);
    const badge1Ref = useRef<HTMLDivElement>(null);
    const badge2Ref = useRef<HTMLDivElement>(null);
    const badge3Ref = useRef<HTMLDivElement>(null);
    const taglineRef = useRef<HTMLSpanElement>(null);
    const descCardRef = useRef<HTMLDivElement>(null);
    const [lanyardRestX, setLanyardRestX] = useState(3.2);

    useEffect(() => {
        const updateRestX = () => {
            if (photoCardRef.current && sectionRef.current) {
                const photoRect = photoCardRef.current.getBoundingClientRect();
                const sectionRect = sectionRef.current.getBoundingClientRect();
                if (sectionRect.width > 0) {
                    const photoCenterX = photoRect.left + photoRect.width / 2;
                    const sectionCenterX = sectionRect.left + sectionRect.width / 2;
                    const pixelOffset = photoCenterX - sectionCenterX;

                    const vHeight = 2 * Math.tan((20 * Math.PI) / 360) * 25; // 8.8163
                    const vWidth = vHeight * (sectionRect.width / (sectionRect.height || window.innerHeight));
                    const worldX = (pixelOffset / (sectionRect.width / 2)) * (vWidth / 2);
                    if (!isNaN(worldX) && isFinite(worldX)) {
                        setLanyardRestX(worldX);
                    }
                }
            }
        };
        updateRestX();
        window.addEventListener('resize', updateRestX);
        const timer1 = setTimeout(updateRestX, 100);
        const timer2 = setTimeout(updateRestX, 600);
        const timer3 = setTimeout(updateRestX, 1400);
        return () => {
            window.removeEventListener('resize', updateRestX);
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    // GSAP entrance animation
    useEffect(() => {
        if (prefersReducedMotion()) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: 'power3.out' },
                delay: 0.1,
            });

            // Name split-text fly-in (hardware accelerated translateY + opacity)
            if (nameRef.current) {
                const firstNameSpan = nameRef.current.querySelector('.hero-firstname');
                const lastNameSpan = nameRef.current.querySelector('.hero-lastname');

                if (firstNameSpan) {
                    tl.fromTo(
                        firstNameSpan,
                        { y: 45, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out' },
                        0
                    );
                }
                if (lastNameSpan) {
                    tl.fromTo(
                        lastNameSpan,
                        { y: 45, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out' },
                        0.1
                    );
                }
            }

            // Subtitle
            if (subtitleRef.current) {
                tl.fromTo(
                    subtitleRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6 },
                    0.35
                );
            }

            // CTA buttons
            if (ctaRef.current) {
                const buttons = ctaRef.current.querySelectorAll('a');
                tl.fromTo(
                    buttons,
                    { y: 15, opacity: 0, scale: 0.95 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: 'back.out(1.7)' },
                    0.5
                );
            }

            // Social links
            if (socialsRef.current) {
                const links = socialsRef.current.querySelectorAll('a');
                tl.fromTo(
                    links,
                    { x: -20, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.45, stagger: 0.06 },
                    0.65
                );
            }

            // Status bar slide up
            if (statusRef.current) {
                tl.fromTo(
                    statusRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6 },
                    0.7
                );
            }

            // Photo card - smooth fade-up & subtle scale
            const cardsToAnimate = [photoCardRef.current, mobileCardRef.current].filter(Boolean);
            if (cardsToAnimate.length > 0) {
                tl.fromTo(
                    cardsToAnimate,
                    { y: 40, opacity: 0, scale: 0.96 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out' },
                    0.2
                );
            }

            // Floating badges fly in from off-screen (for mobile card)
            const badges = [badge1Ref.current, badge2Ref.current, badge3Ref.current];
            const badgeFromPositions = [
                { x: 40, y: -30, rotation: 10 },
                { x: -50, y: 15, rotation: -8 },
                { x: 35, y: 35, rotation: 12 },
            ];

            badges.forEach((badge, i) => {
                if (badge) {
                    tl.fromTo(
                        badge,
                        {
                            x: badgeFromPositions[i].x,
                            y: badgeFromPositions[i].y,
                            opacity: 0,
                            scale: 0,
                            rotation: badgeFromPositions[i].rotation,
                        },
                        {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            rotation: 0,
                            duration: 0.55,
                            ease: 'back.out(1.7)',
                        },
                        0.6 + i * 0.1
                    );
                }
            });

            // Tagline
            if (taglineRef.current) {
                tl.fromTo(
                    taglineRef.current,
                    { y: 12, opacity: 0, scale: 0.9 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' },
                    0.6
                );
            }

            // Description card
            if (descCardRef.current) {
                tl.fromTo(
                    descCardRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6 },
                    0.45
                );
            }

            // Parallax on scroll - hero content drifts up at different rates
            if (sectionRef.current) {
                const leftCard = sectionRef.current.querySelector('.hero-left-card');
                const rightCol = sectionRef.current.querySelector('.hero-right-col');

                if (leftCard) {
                    gsap.to(leftCard, {
                        yPercent: -8,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top top',
                            end: 'bottom top',
                            scrub: 1,
                        },
                    });
                }

                if (rightCol) {
                    gsap.to(rightCol, {
                        yPercent: -15,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top top',
                            end: 'bottom top',
                            scrub: 1,
                        },
                    });
                }
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="section-shell min-h-screen flex items-center justify-center pt-24 md:pt-28 relative border-none"
        >
            <div className="w-full max-w-6xl relative z-10">
                <div className="grid grid-cols-1 min-[1250px]:grid-cols-[1.1fr_0.9fr] gap-8">
                    <div className="hero-left-card glass-card glass-hover p-8 md:p-12 flex flex-col justify-between rounded-2xl relative overflow-hidden">
                        <div className="absolute -left-10 top-20 w-32 h-[1px] bg-primary/40 rotate-45"></div>
                        <div className="absolute -left-10 top-24 w-24 h-[1px] bg-accent-3/40 rotate-45"></div>

                        <div>
                            <h1
                                ref={nameRef}
                                className="font-display text-[clamp(60px,10vw,120px)] font-bold tracking-tighter leading-[0.9] mb-4"
                            >
                                <span className="hero-firstname block -mb-2 md:-mb-4 text-foreground/90 will-change-transform" style={{ opacity: 0 }}>
                                    Tahsin
                                </span>
                                <span className="hero-lastname block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/40 will-change-transform" style={{ opacity: 0 }}>
                                    Ferdous
                                </span>
                            </h1>
                            <div
                                ref={subtitleRef}
                                className="font-display text-[18px] md:text-[22px] font-medium text-foreground/80 mb-8 flex items-center gap-3"
                                style={{ opacity: 0 }}
                            >
                                <TypedSubtitle />
                            </div>
                        </div>
                        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                                style={{ opacity: 0 }}
                            >
                                View Projects
                                <ArrowRight size={16} />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 border border-border/70 text-foreground px-4 py-2 rounded-full text-sm font-semibold hover:border-primary/60 hover:text-primary transition-colors"
                                style={{ opacity: 0 }}
                            >
                                Let's Talk
                            </a>
                        </div>
                        <div ref={socialsRef} className="mt-8 flex items-center gap-4 flex-wrap">
                            <a
                                href="https://github.com/tahsin005"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
                                style={{ opacity: 0 }}
                            >
                                <Github size={18} className="group-hover:scale-110 transition-transform" />
                                <span className="text-sm">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-tahsin-ferdous/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
                                style={{ opacity: 0 }}
                            >
                                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                                <span className="text-sm">LinkedIn</span>
                            </a>
                            <a
                                href="mailto:tahsin.ferdous3546@gmail.com"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
                                style={{ opacity: 0 }}
                            >
                                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                                <span className="text-sm">Email</span>
                            </a>
                        </div>

                        <div
                            ref={statusRef}
                            className="mt-6 pt-6 border-t border-border/40"
                            style={{ opacity: 0 }}
                        >
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
                    <div className="hero-right-col flex flex-col gap-6">
                        <div
                            ref={mobileCardRef}
                            className="min-[1250px]:hidden glass-panel glass-hover p-8 md:p-10 flex flex-col items-center justify-center text-center rounded-2xl group relative"
                            style={{ opacity: 0 }}
                        >
                            <div className="mb-6 relative">
                                <div className="absolute -inset-10 bg-primary/10 blur-[80px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>
                                <div className="absolute -inset-4 bg-accent-2/5 blur-[40px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 delay-100 pointer-events-none"></div>

                                <div ref={badge1Ref} className="absolute -top-4 -right-4 md:-right-8 z-20" style={{ opacity: 0 }}>
                                    <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 text-[12px] font-display font-medium tracking-wide border-white/10 shadow-xl scale-90 md:scale-100 text-foreground/90 animate-float">
                                        <Code size={14} className="text-foreground/70" />
                                        Full Stack
                                    </div>
                                </div>

                                <div ref={badge2Ref} className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20" style={{ opacity: 0 }}>
                                    <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 text-[12px] font-display font-medium tracking-wide border-white/10 shadow-xl scale-90 md:scale-100 text-foreground/90 animate-float delay-500">
                                        <Sparkles size={14} className="text-foreground/70" />
                                        Problem Solver
                                    </div>
                                </div>

                                <div ref={badge3Ref} className="absolute -bottom-4 -right-4 md:-right-10 z-20" style={{ opacity: 0 }}>
                                    <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 text-[12px] font-display font-medium tracking-wide border-white/10 shadow-xl scale-90 md:scale-100 text-foreground/90 animate-float delay-300">
                                        <Cpu size={14} className="text-foreground/70" />
                                        Architecture
                                    </div>
                                </div>

                                <div className="w-52 h-52 md:w-60 md:h-60 rounded-3xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 p-8 shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-all duration-700 group-hover:border-primary/30 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-2/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                    <img
                                        src={tahsinPhoto2}
                                        alt="MD. Tahsin Ferdous"
                                        className="w-full h-full object-contain brightness-110 drop-shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                            <span
                                className="inline-flex items-center px-4 py-2 rounded-full text-[11px] font-display uppercase tracking-[0.3em] bg-secondary/80 text-primary border border-border/70 mt-4"
                            >
                                Am i the GOAT?
                            </span>
                        </div>

                        <div
                            ref={photoCardRef}
                            className="hidden min-[1250px]:flex flex-col items-center justify-center text-center relative py-4"
                            style={{ opacity: 0 }}
                        >
                            <div className="relative w-full flex items-center justify-center min-h-[420px] md:min-h-[460px]">
                                <div className="absolute -inset-10 bg-primary/10 blur-[80px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>
                                <div className="absolute -inset-4 bg-accent-2/5 blur-[40px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 delay-100 pointer-events-none"></div>
                            </div>
                            <span
                                ref={taglineRef}
                                className="inline-flex items-center px-4 py-2 rounded-full text-[11px] font-display tracking-[0.3em] bg-secondary/80 text-primary border border-border/70 mt-2 relative z-20"
                                style={{ opacity: 0 }}
                            >
                                Am i the GOAT?
                            </span>
                        </div>

                        <div
                            ref={descCardRef}
                            className="glass-card glass-hover p-6 md:p-8 flex flex-col justify-between rounded-2xl"
                            style={{ opacity: 0 }}
                        >
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
            <div className="hidden min-[1250px]:block absolute inset-0 w-full h-full pointer-events-none z-30 overflow-visible">
                <Lanyard
                    position={[0, 0, 25]}
                    gravity={[0, -40, 0]}
                    frontImage={tahsinPhoto}
                    backImage={tahsinLogo}
                    imageFit="cover"
                    lanyardWidth={0.8}
                    anchorPosition={[lanyardRestX, 4.4, 0]}
                    cardScale={2.1}
                    className="w-full h-full"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                />
            </div>
        </section>
    );
};
export default Hero;
