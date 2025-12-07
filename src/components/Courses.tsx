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
        <section className="py-20 px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold gradient-text text-center mb-12">
                    Courses
                </h2>

                <div className="space-y-8">
                    {courses.map((course, index) => (
                        <div key={index} className="code-block">
                            <div className="flex items-start">
                                <div className="flex-1 pl-4">
                                    <div className="text-base md:text-lg">
                                        <div>
                                            <span className="syntax-keyword">class</span>{" "}
                                            <span className="syntax-function">Course</span>
                                            <span className="text-foreground">{" {"}</span>
                                        </div>

                                        <div className="ml-4 mt-2">
                                            <span className="syntax-keyword">name</span>
                                            <span className="text-foreground">: </span>
                                            <span className="syntax-string">"{course.name}"</span>
                                        </div>

                                        <div className="ml-4">
                                            <span className="syntax-keyword">period</span>
                                            <span className="text-foreground">: </span>
                                            <span className="syntax-string">"{course.period}"</span>
                                        </div>

                                        <div className="ml-4 mt-2">
                                            <span className="syntax-keyword">whatILearned</span>
                                            <span className="text-foreground">: [</span>
                                        </div>

                                        {course.learnings.map((item, i) => (
                                            <div key={i} className="ml-8">
                                                <span className="syntax-string">"{item}"</span>
                                                {i < course.learnings.length - 1 && <span className="text-foreground">,</span>}
                                            </div>
                                        ))}

                                        <div className="ml-4">
                                            <span className="text-foreground">]</span>
                                        </div>

                                        <div className="text-foreground">
                                            <span>{"}"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
