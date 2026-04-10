import { CheckCircle2, Calendar } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import DotGrid from '@/components/DotGrid';
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
        <section className="section-shell relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
                <DotGrid dotSize={2} gap={24} baseColor="#9231E8" activeColor="#1E904E" proximity={180} shockRadius={280} shockStrength={6} resistance={800} returnDuration={1.5} />
            </div>
            <div className="max-w-4xl mx-auto relative z-10">
                {}
                <div className="mb-16 text-center">
                    <div className="section-label mb-3"></div>
                    <h2 className="section-title mb-4">
                        Courses & <span className="text-primary">Certifications</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Continuous learning and professional development
                    </p>
                </div>
                <div className="space-y-6">
                     {courses.map((course, index) => (
                        <ScrollReveal key={index} delay={`delay-${(index + 1) * 100}`}>
                        <div
                            className={`glass-card glass-hover p-6 rounded-xl h-full`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <h3 className="font-display text-[18px] font-semibold leading-[1.3] text-foreground mb-2 md:mb-0">
                                    {course.name}
                                </h3>
                                <div className="flex items-center font-display text-[11px] font-medium tracking-[0.06em] text-primary bg-primary/10 px-3 py-1 rounded-full w-fit border border-primary/20">
                                    <Calendar size={14} className="mr-2" />
                                    {course.period}
                                </div>
                            </div>
                            <div className="space-y-2 font-body text-[14px] font-normal leading-[1.6]">
                                {course.learnings.map((item, i) => (
                                    <div key={i} className="flex items-start text-muted-foreground">
                                        <CheckCircle2 size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Courses;
