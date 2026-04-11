import { useState } from "react";
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
  return (
    <div className="min-h-screen bg-background">
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
