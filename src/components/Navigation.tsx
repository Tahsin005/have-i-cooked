import { useState } from "react";
import tahsinlogo from "../assets/tahsin logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="font-mono font-bold text-xl gradient-text flex items-center space-x-2">
            <span>{"<"} </span>
            <img
              src={tahsinlogo}
              alt="Tahsin Logo"
              className="h-8 w-auto inline-block"
            />
            <span>{"/>"}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-mono">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              .home()
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              .about()
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              .projects()
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              .skills()
            </button>
            <button
              onClick={() => scrollToSection("blogs")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              .blogs()
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              .contact()
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div
                className={`w-6 h-0.5 bg-current transition-transform ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-current transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-current transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4 font-mono">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                .home()
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                .about()
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                .projects()
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                .skills()
              </button>
              <button
                onClick={() => scrollToSection("blogs")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                .blogs()
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                .contact()
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
