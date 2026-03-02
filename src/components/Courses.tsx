import { CheckCircle2, Calendar } from "lucide-react";

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
        <section className="section-shell">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="section-label mb-3">// 04 COURSES</div>
                    <h2 className="section-title mb-4">
                        Courses & <span className="text-primary">Certifications</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Continuous learning and professional development
                    </p>
                </div>

                <div className="space-y-6">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-foreground mb-2 md:mb-0">
                                    {course.name}
                                </h3>
                                <div className="flex items-center text-sm text-primary bg-primary/10 px-3 py-1 rounded-full w-fit border border-primary/20">
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

