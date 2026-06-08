import { useState, useEffect } from "react";
import { Home, Code, FolderGit2, BookOpen, Mail, Menu, X } from "lucide-react";
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
    { label: "INTRO", id: "hero", icon: Home },
    { label: "SKILLS", id: "skills", icon: Code },
    { label: "PROJECTS", id: "projects", icon: FolderGit2 },
    { label: "BLOGS", id: "blogs", icon: BookOpen },
    { label: "CONTACT", id: "contact", icon: Mail },
  ];

  return (
    <>
      {/* Desktop Bottom Dock */}
      <nav className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 animate-in fade-in slide-in-from-bottom-12 duration-1000 hidden md:block ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-100'}`}>
        <div className="glass-card px-4 py-3 rounded-full flex items-center gap-2 border border-primary/20 hover:border-primary/50 transition-colors shadow-2xl backdrop-blur-2xl bg-background/60">
          
          <div 
            className="cursor-pointer group flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-all hover:-translate-y-2 duration-300"
            onClick={() => scrollToSection("hero")}
          >
            <img src={tahsinLogo} alt="MTF" className="h-6 w-auto object-contain brightness-110 group-hover:scale-110 transition-transform" />
          </div>
          
          <div className="w-px h-8 bg-border/50 mx-2" />
          
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative flex flex-col items-center justify-center w-12 h-12 rounded-2xl hover:bg-white/5 transition-all hover:-translate-y-3 hover:scale-110 duration-300"
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="absolute -top-12 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all bg-popover text-popover-foreground text-[10px] py-1 px-3 rounded-full font-display tracking-widest pointer-events-none border border-border whitespace-nowrap shadow-xl">
                  {item.label}
                </span>
                <div className="absolute -bottom-2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            )
          })}
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="px-6 h-16 flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img src={tahsinLogo} alt="MTF" className="h-8 w-auto object-contain brightness-110" />
          </div>
          <button
            className="text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40" onClick={() => setIsMenuOpen(false)}>
          <div className="absolute inset-0 bg-background/90 backdrop-blur-xl animate-in fade-in" />
          <div
            className="absolute top-20 left-4 right-4 glass-card p-4 space-y-2 rounded-2xl animate-in slide-in-from-top-4"
            onClick={(event) => event.stopPropagation()}
          >
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center gap-4 text-left font-display text-[13px] font-medium tracking-[0.1em] text-foreground/90 hover:text-primary transition-colors uppercase py-4 px-4 rounded-xl hover:bg-white/5"
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
