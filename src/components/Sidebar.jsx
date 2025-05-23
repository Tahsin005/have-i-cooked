import { Github, Linkedin } from "lucide-react";
import { useState } from "react";
import RotatingText from "../RotatingText";

const Sidebar = () => {
    const [activeNav, setActiveNav] = useState("");

    const handleNavClick = (id) => {
        setActiveNav(id);
    };

    const linkClasses = (id) =>
        `block duration-75 ${activeNav === id
            ? "text-white ps-4 font-semibold"
            : "text-gray-400 hover:text-white hover:ps-4"
        }`;

    return (
        <div className="space-y-6 px-4">
            <div>
                <h1 className="text-4xl font-bold text-white">MD. Tahsin Ferdous</h1>
                <div className="text-xl mt-2 text-purple-400 flex">
                    <RotatingText
                        texts={['Full Stack Software Engineer', 'Competitive Programmer', 'Speed Cuber', 'Football Enthusiast!']}
                        mainClassName="px-2 bg-[#112044] text-[#ab66ff] overflow-hidden py-0.5 justify-center rounded-md"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={3000}
                    />
                </div>
                <p className="text-gray-500 mt-4">
                    I craft accessible, high-performance, and user-focused web applications with clean and scalable code.
                </p>
            </div>

            <div className="flex gap-4 mt-10 text-[#ab66ff]">
                <a href="https://github.com/tahsin005" target="_blank" rel="noopener noreferrer">
                    <Github />
                </a>
                <a href="https://www.linkedin.com/in/md-tahsin-ferdous/" target="_blank" rel="noopener noreferrer">
                    <Linkedin />
                </a>
            </div>

            <nav className="mt-10 space-y-2 text-md">
                <a href="#about" className={linkClasses("about")} onClick={() => handleNavClick("about")}>
                    — About
                </a>
                <a href="#experience" className={linkClasses("experience")} onClick={() => handleNavClick("experience")}>
                    — Experience
                </a>
                <a href="#projects" className={linkClasses("projects")} onClick={() => handleNavClick("projects")}>
                    — Projects
                </a>
                <a href="#writings" className={linkClasses("writings")} onClick={() => handleNavClick("writings")}>
                    — Writings
                </a>
                <a href="#contact" className={linkClasses("contact")} onClick={() => handleNavClick("contact")}>
                    — Contact
                </a>
            </nav>
        </div>
    );
};

export default Sidebar;
