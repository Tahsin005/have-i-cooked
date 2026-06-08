import { useState, useEffect } from "react";
import logo from "@/assets/tahsin-logo.png";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Blogs from "@/components/Blogs";
import Courses from "@/components/Courses";
import Achievements from "@/components/Achievements";
import ScrollToTop from "@/components/ScrollToTop";
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '3s' }} />

        <div className="relative z-10 flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-1000">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 -m-12 border-[2px] border-dashed border-primary/40 rounded-full animate-[spin_8s_linear_infinite]" />
            
            <div className="absolute inset-0 -m-6 border border-primary/30 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
            
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
            
            <img 
              src={logo} 
              alt="Tahsin Logo" 
              className="relative w-40 h-40 md:w-56 md:h-56 object-contain animate-in zoom-in-75 duration-700 ease-out" 
            />
          </div>
          
          <div className="absolute -bottom-32 flex flex-col items-center gap-4">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background animate-in fade-in duration-1000">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="relative z-10">
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="courses">
          <Courses />
        </div>
        <div id="achievements">
          <Achievements />
        </div>
        <div id="blogs">
          <Blogs />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      {}
      <footer className="border-t border-border/70 py-10 relative z-10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="code-block inline-block">
            <span className="syntax-comment">
              // Never believe you are good enough
            </span>
          </div>
          <p className="mt-4 text-muted-foreground text-xs font-display tracking-[0.2em]">
            © 2026 MD. Tahsin Ferdous. All rights reserved.
          </p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
};
export default Index;
