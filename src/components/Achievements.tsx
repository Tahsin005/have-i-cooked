import { Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import DotGrid from '@/components/DotGrid';
const Achievements = () => {
    const achievements = [
        "ICPC Dhaka Regional-25 Finalist",
        "ICPC Dhaka Regional-24 Finalist",
        "2000+ problem solved",
        "Problem Setter for Intra-University Programming Contest",
        "Pupil rank at Codeforces",
        "3 Star at Codechef"
    ];
    return (
        <section className="section-shell relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
                <DotGrid dotSize={2} gap={24} baseColor="#9231E8" activeColor="#1E904E" proximity={180} shockRadius={280} shockStrength={6} resistance={800} returnDuration={1.5} />
            </div>
            <div className="max-w-4xl mx-auto relative z-10">
                {}
                <div className="mb-16 text-center">
                    <div className="section-label mb-3"></div>
                    <h2 className="section-title mb-4">
                        <span className="text-primary">Achievements</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Milestones and accomplishments in competitive programming
                    </p>
                </div>
                <div className="grid gap-4">
                    {achievements.map((achievement, index) => (
                        <ScrollReveal key={index} delay={`delay-${(index + 1) * 100}`}>
                        <div
                            className={`glass-card glass-hover p-4 rounded-xl flex items-center group h-full`}
                        >
                            <div className="bg-primary/10 p-2 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                                <Award className="text-primary" size={20} />
                            </div>
                            <span className="font-body text-[14px] font-normal leading-[1.6] text-muted-foreground group-hover:text-foreground transition-colors">
                                {achievement}
                            </span>
                        </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Achievements;
