import Aurora from "./Aurora";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import CursorGlow from "./components/CursorGlow";
import RotatingText from "./RotatingText";
import Writings from "./components/Writings";
import Contact from "./components/Contact";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Handle URL hash navigation
    const hash = window.location.hash;
    if (hash) {
      // If there's a hash, scroll to that section
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div>
      <CursorGlow />
      <div className="relative min-h-screen bg-[#0a0a23] text-white font-sans">
        <Aurora
          colorStops={["#112044", "#ab66ff", "#070642"]}
          blend={0.5}
          amplitude={6.0}
          speed={1}
        />
        <div className="relative z-10 flex flex-col lg:flex-row max-w-screen mx-auto px-4 lg:px-6 py-10 mt-4">
          <div className="lg:w-1/3 mb-10 lg:mb-0 lg:sticky top-10 h-fit max-h-screen overflow-y-auto">
            <Sidebar />
          </div>

          <div className="lg:w-2/3 space-y-24">

            <section id="about">
              <About />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="writings">
              <Writings />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;
