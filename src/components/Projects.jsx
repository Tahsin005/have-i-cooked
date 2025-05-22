import { Github, ExternalLink } from "lucide-react";
import { projects } from "../exports/projects";

export default function Projects() {
    return (
        <section id="projects" className="relative z-0 pt-6">
            <h2 className="text-2xl block font-semibold mb-4 ps-4">Projects</h2>
            <div className="space-y-20">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative group rounded-md p-4 border border-none transition-all duration-300
                           hover:border-white/20 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-md overflow-visible z-10"
                    >
                        {project.image && (
                            <img
                                src={project.image}
                                alt={`${project.title} preview`}
                                className="w-[280px] h-auto absolute top-[-120px] left-1/2 transform -translate-x-1/2 opacity-0 scale-75
           group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-[-120px]
           transition-all duration-500 ease-in-out border-black
           pointer-events-none z-50 rounded-lg shadow-lg animate-sway"
                            />
                        )}
                        <h3 className="text-md mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-4">
                            {project.tags.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-purple-300 px-2 py-1 rounded-xl text-xs text-purple-800"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 text-gray-300 text-lg">
                            {project.sourceCode && (
                                <a
                                    href={project.sourceCode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white"
                                >
                                    <Github size={20} />
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}
