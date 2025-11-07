import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Blogs from "@/components/Blogs";
import ProblemSolvingStats from "@/components/ProblemSolvingStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
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
          <div id="problem-solving-stats">
            <ProblemSolvingStats />
          </div>
        </div>

        <div id="blogs">
          <Blogs />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="code-block inline-block">
            <span className="syntax-comment">
              // Never believe you are good enough....
            </span>
          </div>
          <p className="mt-4 text-muted-foreground font-mono text-sm">
            © 2025 MD. Tahsin Ferdous. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
