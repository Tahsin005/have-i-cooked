import { useState, useEffect } from "react";
import { Menu, X, Terminal, ChevronDown } from "lucide-react";
import tahsinlogo from "../assets/tahsin logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => scrollToSection("hero")}
        >
          <div className="md:w-auto">
            <img src={tahsinlogo} alt="Tahsin Logo" className="h-10 w-auto object-contain" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1 font-mono text-sm">
          <NavButton onClick={() => scrollToSection("hero")}>~/home</NavButton>
          <NavButton onClick={() => scrollToSection("about")}>/about</NavButton>
          <NavButton onClick={() => scrollToSection("projects")}>/projects</NavButton>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-4 py-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all outline-none">
              /profile <ChevronDown className="ml-1 h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-border">
              <DropdownMenuItem onClick={() => scrollToSection("skills")} className="cursor-pointer font-mono">
                skills.json
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection("courses")} className="cursor-pointer font-mono">
                courses.log
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection("achievements")} className="cursor-pointer font-mono">
                awards.txt
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavButton onClick={() => scrollToSection("blogs")}>/blog</NavButton>

          <Button
            variant="default"
            size="sm"
            className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-2xl p-6">
          <div className="flex flex-col space-y-4 font-mono">
            <MobileNavButton onClick={() => scrollToSection("hero")}>~/home</MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection("about")}>/about</MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection("projects")}>/projects</MobileNavButton>

            <div className="border-t border-border/50 my-2 pt-2">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center justify-between w-full py-2 text-lg text-foreground hover:text-primary transition-colors font-mono"
              >
                <span>/profile</span>
                <ChevronDown className={`transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`} size={20} />
              </button>

              {isProfileOpen && (
                <div className="pl-4 flex flex-col space-y-2 border-l border-primary/20 ml-2 mt-1 mb-2">
                  <MobileNavButton onClick={() => scrollToSection("skills")}>skills.json</MobileNavButton>
                  <MobileNavButton onClick={() => scrollToSection("courses")}>courses.log</MobileNavButton>
                  <MobileNavButton onClick={() => scrollToSection("achievements")}>awards.txt</MobileNavButton>
                </div>
              )}
            </div>

            <MobileNavButton onClick={() => scrollToSection("blogs")}>/blog</MobileNavButton>
            <Button
              className="w-full mt-4 bg-primary text-primary-foreground font-bold"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all text-sm font-medium"
  >
    {children}
  </button>
);

const MobileNavButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="text-left w-full py-2 text-lg text-foreground hover:text-primary transition-colors"
  >
    {children}
  </button>
);

export default Navigation;
