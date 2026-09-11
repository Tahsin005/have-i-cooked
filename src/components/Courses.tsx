import { CheckCircle2, Calendar, Award } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/hooks/useGSAP";
import SectionHeader from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const Courses = () => {
    const gridRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        if (prefersReducedMotion()) return;

        const ctx = gsap.context(() => {
            if (!gridRef.current) return;

            const cards = gridRef.current.querySelectorAll('.course-card');
            cards.forEach((card, i) => {
                gsap.fromTo(
                    card,
                    {
                        x: -60,
                        y: 30,
                        opacity: 0,
                        scale: 0.92,
                        rotation: -3,
                    },
                    {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotation: 0,
                        duration: 0.9,
                        delay: i * 0.15,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 88%',
                            toggleActions: 'play none none none',
                        },
                    }
                );

                // Learnings items stagger in
                const items = card.querySelectorAll('.learning-item');
                gsap.fromTo(
                    items,
                    { x: -20, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 80%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="section-shell relative overflow-hidden border-none" id="courses">
            <div className="max-w-6xl mx-auto relative z-10">
                <SectionHeader
                    title="Courses &"
                    titleHighlight="Certifications"
                    subtitle="Continuous learning and professional development."
                />

                <div ref={gridRef} className={`grid grid-cols-1 ${courses.length > 1 ? 'md:grid-cols-2 lg:grid-cols-2' : 'max-w-3xl mx-auto'} gap-6`}>
                    {courses.map((course, index) => (
                        <div key={index} className="course-card" style={{ opacity: 0 }}>
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
                                            <div key={i} className="learning-item flex items-start text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300" style={{ opacity: 0 }}>
                                                <CheckCircle2 size={16} className="text-foreground/50 mt-1 mr-3 flex-shrink-0" />
                                                <span className="font-display text-[15px]">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Courses;
