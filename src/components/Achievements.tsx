import { Trophy, Star, Target, Code, Medal, Zap } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/hooks/useGSAP";
import SectionHeader from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    const achievements = [
        { title: "ICPC Dhaka Regional-25 Finalist", icon: <Trophy size={24} className="text-yellow-400" /> },
        { title: "ICPC Dhaka Regional-24 Finalist", icon: <Medal size={24} className="text-yellow-400" /> },
        { title: "2000+ problem solved", icon: <Target size={24} className="text-primary" /> },
        { title: "Problem Setter for Intra-University Programming Contest", icon: <Code size={24} className="text-accent-2" /> },
        { title: "Pupil rank at Codeforces", icon: <Star size={24} className="text-blue-400" /> },
        { title: "3 Star at Codechef", icon: <Zap size={24} className="text-orange-500" /> }
    ];

    useEffect(() => {
        if (prefersReducedMotion()) return;

        const ctx = gsap.context(() => {
            if (!gridRef.current) return;

            const cards = gridRef.current.querySelectorAll('.achievement-card');

            // Cards burst in with elastic scale in a wave
            cards.forEach((card, i) => {
                gsap.fromTo(
                    card,
                    {
                        scale: 0,
                        opacity: 0,
                        y: 40,
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        delay: i * 0.08,
                        ease: 'elastic.out(1, 0.6)',
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            });

            // Icons bounce after cards appear
            const icons = gridRef.current.querySelectorAll('.achievement-icon');
            icons.forEach((icon, i) => {
                gsap.fromTo(
                    icon,
                    { scale: 0, rotation: -180 },
                    {
                        scale: 1,
                        rotation: 0,
                        duration: 0.6,
                        delay: 0.3 + i * 0.08,
                        ease: 'back.out(3)',
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="section-shell relative overflow-hidden border-none" id="achievements">
            <div className="max-w-6xl mx-auto relative z-10">
                <SectionHeader
                    title="Achievements"
                    subtitle="Milestones and accomplishments in competitive programming."
                />

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="achievement-card" style={{ opacity: 0 }}>
                            <TiltCard className="h-full">
                                <div className="glass-card glass-hover p-6 rounded-2xl flex flex-col items-center justify-center text-center group h-full transition-all duration-500 min-h-[160px] relative overflow-hidden">
                                    <div className="achievement-icon bg-white/5 p-4 rounded-full mb-4 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 z-10" style={{ transform: 'translateZ(20px)' }}>
                                        {achievement.icon}
                                    </div>
                                    <span className="font-display text-[16px] font-medium tracking-wide text-foreground/70 group-hover:text-foreground transition-colors z-10" style={{ transform: 'translateZ(30px)' }}>
                                        {achievement.title}
                                    </span>
                                </div>
                            </TiltCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Achievements;
