import { CheckCircle2, Calendar, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { TiltCard } from "./TiltCard";

const Courses = () => {
    const courses = [
        {
            name: "CS Fundamentals With Phitron",
            period: "Spring 2023 (completed)",
            learnings: [
                "Data Structures, Algorithms, and Problem Solving",
                "Object-Oriented Programming and Database Management Systems",
                "Python, C/C++, Django, and Software Engineering principles"
            ],
            certificate: "Link"
        }
    ];

    return (
        <section className="section-shell relative overflow-hidden border-none" id="courses">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-16 text-center">
                    <div className="section-label mb-3"></div>
                    <h2 className="font-display text-[clamp(40px,8vw,80px)] font-bold tracking-tighter mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">Courses &</span> <br className="md:hidden" /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary/40">Certifications</span>
                    </h2>
                    <p className="font-display text-[18px] md:text-[22px] text-foreground/70 max-w-2xl mx-auto">
                        Continuous learning and professional development.
                    </p>
                </div>
                
                <div className={`grid grid-cols-1 ${courses.length > 1 ? 'md:grid-cols-2 lg:grid-cols-2' : 'max-w-3xl mx-auto'} gap-6`}>
                     {courses.map((course, index) => (
                        <ScrollReveal key={index} delay={`delay-${(index + 1) * 100}`}>
                            <TiltCard className="h-full">
                                <div className="glass-card glass-hover p-8 rounded-2xl h-full border border-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-500 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-2/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 z-10 relative" style={{ transform: 'translateZ(20px)' }}>
                                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                                            <div className="bg-white/5 p-3 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                                                <Award size={24} className="text-foreground/80 group-hover:text-foreground" />
                                            </div>
                                            <h3 className="font-display text-[22px] font-bold tracking-wider text-foreground">
                                                {course.name}
                                            </h3>
                                        </div>
                                        <div className="flex items-center font-display text-[12px] font-medium tracking-wide text-foreground/80 bg-white/5 px-4 py-2 rounded-full w-fit border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                                            <Calendar size={14} className="mr-2 opacity-70" />
                                            {course.period}
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4 font-mono text-[14px] font-normal leading-[1.6] z-10 relative" style={{ transform: 'translateZ(30px)' }}>
                                        {course.learnings.map((item, i) => (
                                            <div key={i} className="flex items-start text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                                                <CheckCircle2 size={16} className="text-foreground/50 mt-1 mr-3 flex-shrink-0" />
                                                <span className="font-display text-[15px]">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Courses;
