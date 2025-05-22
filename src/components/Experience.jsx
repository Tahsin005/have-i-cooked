import { ArrowUpRight, ExternalLink } from "lucide-react";

const Experience = () => {
    const experiences = [
        {
            date: "Oct, 2024 — Oct, 2024",
            title: "Lexaeon",
            position: "Python Developer Intern",
            description:
                "Developed and optimized backend systems using Python and Django REST Framework. Utilized PostgreSQL for efficient database management.",
            tags: ["Python", "Django", "DRF", "PostgreSQL"],
            link: "https://lexaeon.com/",
        },
        {
            date: "April, 2025 — Present",
            title: "Affpilot",
            position: "Jr. Software Engineer",
            description:
                "Working with Django, Golang and REST APIs, building scalable backend systems. Focused on secure authentication and clean API design.",
            tags: ["Python", "Django", "Golang", "PostgreSQL", "Docker", "Redis"],
            link: "https://affpilot.com/",
        },
    ];

    return (
        <section id="experience" className="pt-6">
            <h2 className="text-2xl block font-semibold mb-4 ps-4">Experience</h2>
            <div className="space-y-6">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="transition-all duration-300 rounded-md p-4 border border-none hover:border-white/20
                       hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-md flex flex-col lg:flex-row"
                    >
                        <p className="text-xs text-gray-500">{exp.date}</p>
                        <div className="lg:ps-4">
                            <h3 className="text-white hover:text-[#ab66ff]">{exp.title}</h3>
                            <p className="text-gray-400 text-xs">{exp.position}</p>
                            <p className="text-md text-gray-400 mt-2">{exp.description}</p>
                            <div className="mt-2 flex gap-2 text-sm text-white flex-wrap">
                                {exp.tags.map((tag, i) => (
                                    <span key={i} className="bg-purple-300 px-2 py-1 rounded-xl text-xs text-purple-800">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-10 ps-4 text-[#ab66ff]">
                <a href="https://drive.google.com/file/d/1scYt8xhF-bvxCGc9j85ArQiIHZoXxz0B/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer" className="flex">View Full Résumé
                    <span className="ps-3"><ExternalLink /></span></a>
            </div>
        </section>
    );
};

export default Experience;
