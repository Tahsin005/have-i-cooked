import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import tahsinLogo from '@/assets/tahsin-logo.png';
type NavigationProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navigation = ({ isMenuOpen, setIsMenuOpen }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
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
      setIsMenuOpen(false);
    }
  };
  const menuItems = [
    { label: "INTRO", id: "hero" },
    { label: "SKILLS", id: "skills" },
    { label: "PROJECTS", id: "projects" },
    { label: "BLOGS", id: "blogs" },
    { label: "CONTACT", id: "contact" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-in fade-in slide-in-from-top-4 duration-1000 ${scrolled ? "bg-background/70 backdrop-blur-xl border-b border-white/5" : "bg-background/40 backdrop-blur-md border-b border-white/5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {}
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => scrollToSection("hero")}
        >
          <div className="bg-primary/10 p-2 rounded-lg ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all">
            <img src={tahsinLogo} alt="MTF" className="h-6 w-auto object-contain brightness-110" />
          </div>
        </div>
        {}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-display text-[13px] font-medium tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors duration-200 uppercase"
            >
              {item.label}
            </button>
          ))}
        </div>
        {}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40" onClick={() => setIsMenuOpen(false)}>
          <div className="absolute inset-0 bg-background/60 backdrop-blur-xl" />
          <div
            className="absolute top-16 left-4 right-4 glass-card p-6 space-y-2 rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-display text-[13px] font-medium tracking-[0.1em] text-foreground/90 hover:text-primary transition-colors uppercase py-2 px-2 rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
      )}
    </nav>
  );
};
export default Navigation;
