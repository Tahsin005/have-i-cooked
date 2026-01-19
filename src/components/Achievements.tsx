import { Trophy, Award } from "lucide-react";

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
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-12">
                    <Trophy className="text-primary mr-3" size={32} />
                    <h2 className="text-3xl font-bold font-mono">Achievements</h2>
                </div>

                <div className="grid gap-4">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border p-4 rounded-lg flex items-center hover:border-primary/50 transition-colors group"
                        >
                            <div className="bg-primary/10 p-2 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                                <Award className="text-primary" size={20} />
                            </div>
                            <span className="text-lg font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                                {achievement}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
