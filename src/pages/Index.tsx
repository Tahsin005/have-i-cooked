import { useState, useEffect, useRef } from "react";
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
import CustomCursor from "@/components/CustomCursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [splashExiting, setSplashExiting] = useState(false);
  const splashRef = useRef<HTMLDivElement>(null);
  const splashLogoRef = useRef<HTMLImageElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  // GSAP splash screen animation
  useEffect(() => {
    if (!showSplash || !splashRef.current || !splashLogoRef.current) return;

    if (prefersReducedMotion()) {
      const timer = setTimeout(() => setShowSplash(false), 1500);
      return () => clearTimeout(timer);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setSplashExiting(true);

          // Exit animation: curtain wipe
          const exitTl = gsap.timeline({
            onComplete: () => setShowSplash(false),
          });

          exitTl
            .to(splashLogoRef.current, {
              scale: 0.8,
              opacity: 0,
              duration: 0.4,
              ease: 'power2.in',
            })
            .to(
              splashRef.current,
              {
                clipPath: 'inset(0% 0% 100% 0%)',
                duration: 0.7,
                ease: 'power3.inOut',
              },
              '-=0.1'
            );
        },
      });

      // Logo entrance: scale in with elastic
      tl.fromTo(
        splashLogoRef.current,
        {
          scale: 0.3,
          opacity: 0,
          rotation: -10,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: 'elastic.out(1, 0.5)',
        }
      );

      // Pause for branding visibility
      tl.to({}, { duration: 1.0 });
    });

    return () => ctx.revert();
  }, [showSplash]);

  // Footer animations
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (footerRef.current) {
        const footerText = footerRef.current.querySelectorAll('p');
        gsap.fromTo(
          footerText,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [showSplash]);

  if (showSplash) {
    return (
      <div
        ref={splashRef}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-3xl overflow-hidden"
        style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '3s' }} />

        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            <img
              ref={splashLogoRef}
              src={logo}
              alt="Tahsin Logo"
              className="relative w-72 h-72 md:w-[32rem] md:h-[32rem] object-contain drop-shadow-2xl"
              style={{ opacity: 0 }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent animate-in fade-in duration-1000 relative">
      <AmbientBackground />
      <CustomCursor />
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
      <footer ref={footerRef} className="py-12 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-3">
          <p className="font-display text-[14px] text-foreground/40 tracking-wide" style={{ opacity: 0 }}>
            Designed & built by <span className="text-foreground/70 font-medium">MD. Tahsin Ferdous</span>
          </p>
          <p className="font-display text-[12px] text-foreground/25 tracking-widest uppercase" style={{ opacity: 0 }}>
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
