import { Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
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
        <section className="section-shell">
            <div className="max-w-4xl mx-auto">
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
