import { Award } from "lucide-react";

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
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-primary">Achievements</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Milestones and accomplishments in competitive programming
                    </p>
                </div>

                <div className="grid gap-4">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border p-4 rounded-xl flex items-center hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 group"
                        >
                            <div className="bg-primary/10 p-2 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                                <Award className="text-primary" size={20} />
                            </div>
                            <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">
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

