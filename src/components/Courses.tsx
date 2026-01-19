import { GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

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
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-12">
                    <GraduationCap className="text-primary mr-3" size={32} />
                    <h2 className="text-3xl font-bold font-mono">Courses & Certifications</h2>
                </div>

                <div className="space-y-6">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <h3 className="text-xl font-bold font-mono text-foreground mb-2 md:mb-0">
                                    {course.name}
                                </h3>
                                <div className="flex items-center text-sm text-primary font-mono bg-primary/10 px-3 py-1 rounded-full w-fit">
                                    <Calendar size={14} className="mr-2" />
                                    {course.period}
                                </div>
                            </div>

                            <div className="space-y-2">
                                {course.learnings.map((item, i) => (
                                    <div key={i} className="flex items-start text-muted-foreground">
                                        <CheckCircle2 size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
