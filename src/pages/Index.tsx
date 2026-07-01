import { useState, useEffect } from "react";
import logo from "@/assets/logo.gif";
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
import AmbientBackground from "@/components/AmbientBackground";
import Chatbot from "@/components/Chatbot";

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
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-3xl overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '3s' }} />

        <div className="relative z-10 flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-1000">
          <div className="relative flex items-center justify-center">
            <img 
              src={logo} 
              alt="Tahsin Logo" 
              className="relative w-72 h-72 md:w-[32rem] md:h-[32rem] object-contain animate-in zoom-in-75 duration-700 ease-out drop-shadow-2xl" 
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent animate-in fade-in duration-1000 relative">
      <AmbientBackground />
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
      <footer className="py-12 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-3">
          <p className="font-display text-[14px] text-foreground/40 tracking-wide">
            Designed & built by <span className="text-foreground/70 font-medium">MD. Tahsin Ferdous</span>
          </p>
          <p className="font-display text-[12px] text-foreground/25 tracking-widest uppercase">
            © {new Date().getFullYear()} · All rights reserved
          </p>
        </div>
      </footer>
      <ScrollToTop />
      <Chatbot />
    </div>
  );
};
export default Index;
