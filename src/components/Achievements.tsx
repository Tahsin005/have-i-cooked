const Achievements = () => {
    const achievements = [
        "ICPC Dhaka Regional-24 Online Contestant",
        "Problem Setter for Intra-University Programming Contest",
        "Pupil rank at Codeforces",
        "3 Star at Codechef"
    ];

    return (
        <section className="py-20 px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold gradient-text text-center mb-12">
                    Achievements
                </h2>

                <div className="code-block">
                    <div className="flex items-start">
                        <div className="flex-1 pl-4">
                            <div className="text-base md:text-lg">
                                <div>
                                    <span className="syntax-keyword">const</span>{" "}
                                    <span className="syntax-variable">achievements</span>{" "}
                                    <span className="text-foreground">= [</span>
                                </div>

                                {achievements.map((achievement, index) => (
                                    <div key={index} className="ml-4">
                                        <span className="syntax-string">"{achievement}"</span>
                                        {index < achievements.length - 1 && <span className="text-foreground">,</span>}
                                    </div>
                                ))}

                                <div className="text-foreground">
                                    <span>{"];"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
