import { Trophy, Star, Target, Code, Medal, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { TiltCard } from "./TiltCard";

const Achievements = () => {
    const achievements = [
        { title: "ICPC Dhaka Regional-25 Finalist", icon: <Trophy size={24} className="text-yellow-400" /> },
        { title: "ICPC Dhaka Regional-24 Finalist", icon: <Medal size={24} className="text-yellow-400" /> },
        { title: "2000+ problem solved", icon: <Target size={24} className="text-primary" /> },
        { title: "Problem Setter for Intra-University Programming Contest", icon: <Code size={24} className="text-accent-2" /> },
        { title: "Pupil rank at Codeforces", icon: <Star size={24} className="text-blue-400" /> },
        { title: "3 Star at Codechef", icon: <Zap size={24} className="text-orange-500" /> }
    ];

    return (
        <section className="section-shell relative overflow-hidden border-none" id="achievements">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-16 text-center">
                    <div className="section-label mb-3"></div>
                    <h2 className="font-display text-[clamp(40px,8vw,80px)] font-bold tracking-tighter mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">Achievements</span>
                    </h2>
                    <p className="font-display text-[18px] md:text-[22px] text-foreground/70 max-w-2xl mx-auto">
                        Milestones and accomplishments in competitive programming.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                        <ScrollReveal key={index} delay={`delay-${(index % 3 + 1) * 100}`}>
                            <TiltCard className="h-full">
                                <div className="glass-card glass-hover p-6 rounded-2xl flex flex-col items-center justify-center text-center group h-full transition-all duration-500 min-h-[160px] relative overflow-hidden">
                                    <div className="bg-white/5 p-4 rounded-full mb-4 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 z-10" style={{ transform: 'translateZ(20px)' }}>
                                        {achievement.icon}
                                    </div>
                                    <span className="font-display text-[16px] font-medium tracking-wide text-foreground/70 group-hover:text-foreground transition-colors z-10" style={{ transform: 'translateZ(30px)' }}>
                                        {achievement.title}
                                    </span>
                                </div>
                            </TiltCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Achievements;
