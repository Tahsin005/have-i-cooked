import { ExternalLink, Github } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '@/hooks/useGSAP';
import SectionHeader from './SectionHeader';
import affpilot1 from '@/assets/project-ss/affpilot-1.png'
import affpilot2 from '@/assets/project-ss/affpilot-2.png'
import country1 from '@/assets/project-ss/country-1.png'
import country2 from '@/assets/project-ss/country-2.png'
import nike1 from '@/assets/project-ss/nike-1.png'
import nike2 from '@/assets/project-ss/nike-2.png'
import socially1 from '@/assets/project-ss/socially-1.png'
import socially2 from '@/assets/project-ss/socially-2.png'
import ibuiltthis1 from '@/assets/project-ss/ibuiltthis-1.png'
import ibuiltthis2 from '@/assets/project-ss/ibuiltthis-2.png'
import ibuiltthis3 from '@/assets/project-ss/ibuiltthis-3.png'
import rtwd from '@/assets/project-ss/rtwd.png'
import job1 from '@/assets/project-ss/job-application-1.png'
import job2 from '@/assets/project-ss/job-application-2.png'
import storeit1 from '@/assets/project-ss/storeit-1.png'
import storeit2 from '@/assets/project-ss/storeit-2.png'
import northwind from '@/assets/project-ss/northwind.png'
import northwind1 from '@/assets/project-ss/northwind1.png'
import northwind2 from '@/assets/project-ss/northwind2.png'
import northwind3 from '@/assets/project-ss/northwind3.png'
import northwind4 from '@/assets/project-ss/northwind4.png'
import northwind5 from '@/assets/project-ss/northwind5.png'
import northwind6 from '@/assets/project-ss/northwind6.png'
import ecommerceMicroservices from '@/assets/project-ss/ecommicroservices.jpg'
import ragSearchEngine from '@/assets/project-ss/rag.png'

gsap.registerPlugin(ScrollTrigger);

interface ProjectImageSliderProps {
  images: string[];
  projectName: string;
}

const ProjectImageSlider = ({ images, projectName }: ProjectImageSliderProps) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [isHovered, next, images.length]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: '180px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full h-full flex-shrink-0">
            <img
              src={img}
              alt={`${projectName} screenshot ${i + 1}`}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(var(--card, 240 10% 8%)) 0%, transparent 100%)',
        }}
      />

      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300 cursor-pointer border-0 p-0 hover:scale-150"
              style={{
                width: i === current ? '20px' : '6px',
                height: '6px',
                background: i === current ? 'var(--primary, #9231E8)' : 'rgba(255,255,255,0.5)',
              }}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const mainGridRef = useRef<HTMLDivElement>(null);
  const funGridRef = useRef<HTMLDivElement>(null);
  const openSourceGridRef = useRef<HTMLDivElement>(null);
  const funHeaderRef = useRef<HTMLDivElement>(null);
  const osHeaderRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      name: "Socially",
      tech: ["nextjs", "tailwindcss", "postgresql", "prisma", "typescript"],
      description:
        "A full-stack social media platform built with Next.js App Router, TypeScript, PostgreSQL, and Prisma ORM. Features include Google authentication (Clerk), profile management, follow/unfollow system, media posts, real-time notifications, and secure API routes with JWT.",
      link: "https://socially-orcin.vercel.app/",
      source: "https://github.com/Tahsin005/Socially",
      images: [socially1, socially2]
    },
    {
      name: "iBuiltThis",
      tech: ["nextjs", "tailwindcss", "postgresql", "clerk", "drizzle"],
      description:
        "A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback.",
      link: "https://ibuiltthis-three.vercel.app/",
      source: "https://github.com/Tahsin005/ibuiltthis",
      images: [ibuiltthis1, ibuiltthis2, ibuiltthis3]
    },
    {
      name: "AffPilot",
      tech: ["react", "tailwindcss", "django", "postgresql"],
      description:
        "AffPilot is an AI-powered content automation platform for creators and agencies. I worked on backend and integrations, implementing Shopify publishing and building a centralized payment system to handle transactions across AffPilot's suite of products.",
      link: "https://affpilot.com/",
      images: [affpilot1, affpilot2]
    },
    {
      name: "E-Commerce Microservices",
      tech: ["express", "gRPC", "redis", "rabbitmq", "docker", "node.js"],
      description:
        "A production-grade E-Commerce backend built with a Node.js microservices architecture. Features gRPC for high-performance inter-service communication, RabbitMQ for async event-driven messaging, Redis caching for low-latency responses, and a centralized API Gateway — all containerized with Docker for seamless deployment.",
      source: "https://github.com/Tahsin005/ecommerce-microservices",
      images: [ecommerceMicroservices]
    },
    {
      name: "RAG Search Engine",
      tech: ["python", "sentence-transformers", "google-genai", "nltk", "numpy", "pillow"],
      description:
        "A comprehensive Retrieval-Augmented Generation search engine implementing keyword (BM25/TF-IDF), semantic (sentence-transformers), and hybrid (Reciprocal Rank Fusion) search paradigms. Integrates Google GenAI (Gemini/Gemma) and CLIP embeddings for multimodal image-to-text queries and context-aware conversational responses with accurate source citations.",
      source: "https://github.com/Tahsin005/rag-search-engine",
      images: [ragSearchEngine]
    },
    {
      name: "Northwind",
      tech: ["react", "tailwind", "express", "postgres", "polar payment", "stream"],
      description:
        "Northwind is a high-performance, full-stack e-commerce platform designed for modern retail. It seamlessly integrates product management, secure checkout, and real-time customer support via chat and video calls, providing a premium experience for both customers and administrators.",
      link: "https://northwind-kappa.vercel.app/",
      source: "https://github.com/Tahsin005/northwind",
      images: [northwind, northwind1, northwind2, northwind3, northwind4, northwind5, northwind6]
    },
    {
      name: "StoreIt",
      tech: ["nextjs", "tailwindcss", "appwrite", "react-dropzone", "shadcn"],
      description:
        "StoreIt is a modern, full-stack cloud storage solution built with Next.js 16, TypeScript, and Appwrite. It offers a secure, intuitive platform for users to upload, manage, and share files with a premium user experience. Features include secure email-based OTP authentication, real-time upload progress, drag-and-drop file management, shareable public links, and a comprehensive dashboard for file organization and retrieval.",
      link: "https://storeit-jet.vercel.app/",
      source: "https://github.com/Tahsin005/store-it",
      images: [storeit1, storeit2]
    },
    {
      name: "Job Application Tracker",
      tech: ["nextjs", "better-auth", "mongodb", "dnd-kit"],
      description:
        "A high-performance, real-time Kanban board tailored specifically for organizing, tracking, and prioritizing your job hunting lifecycle. Built with the bleeding-edge Next.js 16 architecture, this platform allows developers and professionals to seamlessly drag-and-drop applications across custom pipelines natively.",
      link: "https://job-application-tracker-six-taupe.vercel.app/",
      source: "https://github.com/Tahsin005/job-application-tracker",
      images: [job2, job1]
    },
    {
      name: "Realtime Weather Dashboard",
      tech: ["react", "tailwindcss", "typescript", "open-weather-map-api", "zod", "tanstack-query", "leaflet"],
      description:
        "A high-performance, interactive weather dashboard that delivers real-time meteorological data, forecasts, and air quality indices. It features an interactive cartographic map with dynamic weather overlays and a responsive, beautifully crafted UI with seamless light/dark mode support.",
      link: "https://realtime-weather-dashboard-delta.vercel.app/",
      source: "https://github.com/Tahsin005/realtime-weather-dashboard",
      images: [rtwd]
    },
    {
      name: "World Atlas",
      tech: ["react", "tailwindcss", "country-rest-api"],
      description:
        "A high-performance, modern cartographic dashboard built with React and the REST Countries API. This application provides a comprehensive geographic registry with technical data modules, visual identifiers, and optimized orbital scanning (search).",
      link: "https://country-rest-api-react.vercel.app/",
      source: "https://github.com/Tahsin005/country-rest-api",
      images: [country1, country2]
    },
    {
      name: "Nike Landing Page",
      tech: ["react", "tailwindcss"],
      description:
        "A sleek, responsive e-commerce landing page inspired by Nike's branding. Built with React.js and Tailwind CSS, it showcases advanced layout techniques, reusable components, and modern UI design tailored for all screen sizes.",
      link: "https://nike-mocha-delta.vercel.app/",
      source: "https://github.com/Tahsin005/Nike-Landing-Page",
      images: [nike1, nike2]
    },
  ];

  const funProjects = [
    {
      name: "Leet-Daemon",
      description: "A scalable, LeetCode-style microservices platform for securely evaluating untrusted user code. Features three Node.js/TypeScript microservices communicating via gRPC, MongoDB persistence, BullMQ with Redis for async job queuing, and a highly secure Docker-based evaluation worker with strict CPU, memory, and network constraints.",
      source: "https://github.com/Tahsin005/leet-daemon",
      tech: ["Node.js", "TypeScript", "Docker", "gRPC", "Redis", "MongoDB"]
    },
    {
      name: "Somewhat Simple AI Agent",
      description: "A lightweight, autonomous AI agent that interprets natural language prompts to independently navigate codebases, find bugs, and execute code fixes using the Google GenAI SDK (Gemini 2.5 Flash) with a robust tool-calling architecture.",
      source: "https://github.com/Tahsin005/somewhat-simple-ai-agent",
      tech: ["Python", "Google GenAI SDK", "Gemini API"]
    },
    {
      name: "Database Backup Tool",
      description: "A command-line utility written in Go for backing up, restoring, and monitoring PostgreSQL databases",
      source: "https://github.com/Tahsin005/database-backup-tool",
      tech: ["Go", "CLI"]
    },
    {
      name: "Intersteller Omarchy Theme",
      description: "Intersteller inspired deep-space and accretion disk palette for the Omarchy ecosystem.",
      source: "https://github.com/Tahsin005/intersteller-omarchy-theme",
      tech: ["Hyprland", "CSS", "Neovim"]
    },
    {
      name: "Matrix Image Rotator",
      description: "Converts images to 2D pixel matrices and applies matrix algorithms for rotation.",
      source: "https://github.com/Tahsin005/matrix-image-rotator",
      tech: ["Go", "Algorithms"]
    },
    {
      name: "Termnote",
      description: "A high-performance, CLI-based markdown note-taking application written in Golang.",
      source: "https://github.com/Tahsin005/termnote",
      tech: ["Go", "CLI", "Markdown"]
    },
    {
      name: "Deen Daily",
      description: "React Native application providing prayer times, Qibla, and fasting schedules based on location.",
      source: "https://github.com/Tahsin005/deen-daily",
      tech: ["React Native", "Expo"]
    },
    {
      name: "MiniGit VCS",
      description: "Minimal version control system in JavaScript implementing init, add, commit, log, and diff.",
      source: "https://github.com/Tahsin005/minigit-vcs",
      tech: ["JavaScript", "CLI"]
    },
    {
      name: "Cyberdeck",
      description: "A physical-style macro deck that repurposes an Android phone into a Stream Deck for Linux desktops.",
      source: "https://github.com/Tahsin005/cyberdeck",
      tech: ["Android", "Linux", "Bash", "Waybar"]
    },
    {
      name: "Monochrome Emojis",
      description: "A tiny Next.js API that serves customizable monochrome SVG and Lucide icons on demand, built for embedding in GitHub READMEs.",
      source: "https://github.com/Tahsin005/monochrome-emojis",
      link: "https://monochrome-emojis.vercel.app/",
      tech: ["Next.js", "API", "SVG"]
    },
  ];

  const openSourceProjects = [
    {
      name: "Folderly",
      description: "A CLI based npm package for automatically organizing files into categorized folders.",
      source: "https://github.com/Tahsin005/folderly",
      tech: ["Node.js", "JavaScript", "CLI"]
    },
    {
      name: "Node Snap",
      description: "A simple and efficient CLI tool to recursively find and delete node_modules directories from your project and its subdirectories.",
      source: "https://github.com/Tahsin005/node-snap",
      tech: ["NPM", "CLI"]
    },
    {
      name: "Codeforces Stats Card",
      description: "A tool to generate your Codeforces stats card for profile README",
      source: "https://github.com/Andrew-Velox/codeforces-stats",
      tech: ["Next.js", "Codeforces"]
    }
  ];

  // GSAP grid reveals for all project sections
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Main projects grid — each card reveals individually
      if (mainGridRef.current) {
        const cards = mainGridRef.current.querySelectorAll('.project-card');
        cards.forEach((card, i) => {
          // Alternate fly-in direction based on column position (3-col grid)
          const col = i % 3;
          const fromX = col === 0 ? -50 : col === 2 ? 50 : 0;
          const fromRotation = col === 0 ? -3 : col === 2 ? 3 : 0;

          gsap.fromTo(
            card,
            {
              y: 60,
              x: fromX,
              opacity: 0,
              scale: 0.92,
              rotation: fromRotation,
            },
            {
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          );

          // Tech tags pop in with bounce
          const tags = card.querySelectorAll('.tech-tag');
          if (tags.length > 0) {
            gsap.fromTo(
              tags,
              { scale: 0, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.35,
                stagger: 0.04,
                ease: 'back.out(2.5)',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 82%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }
        });
      }

      // Fun projects stagger fly-up
      if (funGridRef.current) {
        const funCards = funGridRef.current.querySelectorAll('.fun-card');
        funCards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // Fun section header
      if (funHeaderRef.current) {
        gsap.fromTo(
          funHeaderRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: funHeaderRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Open source projects stagger fly-up
      if (openSourceGridRef.current) {
        const osCards = openSourceGridRef.current.querySelectorAll('.os-card');
        osCards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // OS section header
      if (osHeaderRef.current) {
        gsap.fromTo(
          osHeaderRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: osHeaderRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-shell relative overflow-hidden border-none" id="projects">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Projects"
          subtitle="A collection of projects I've built and contributed to."
        />

        <div ref={mainGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ opacity: 0 }}
            >
              <div className="glass-card glass-shimmer glass-hover flex flex-col group rounded-xl h-full overflow-hidden border border-white/10 transition-all duration-500">
                <ProjectImageSlider images={project.images} projectName={project.name} />

                <div className="flex flex-col flex-1 p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display text-[18px] font-semibold leading-[1.3] text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex gap-2 shrink-0 ml-2">
                      {(project as any).source && (
                        <a
                          href={(project as any).source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          title="View Source Code"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="font-body text-[14px] font-normal leading-[1.7] text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="tech-tag font-display text-[12px] font-medium tracking-wide bg-white/5 text-foreground/80 px-4 py-1.5 rounded-full border border-white/10 shadow-sm"
                        style={{ opacity: 0, transform: 'scale(0)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-shell">
        <div className="max-w-6xl mx-auto relative z-10">
          <div ref={funHeaderRef} className="mt-8 mb-16 text-center" style={{ opacity: 0 }}>
            <div className="section-label mb-3"></div>
            <h3 className="font-display text-[clamp(30px,6vw,60px)] font-bold tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">Fun & Cool </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary/40">Experiments</span>
            </h3>
            <p className="font-display text-[18px] md:text-[22px] text-foreground/70 max-w-2xl mx-auto">
              Smaller projects, CLI tools, and creative experiments I've worked on.
            </p>
          </div>

          <div ref={funGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {funProjects.map((project, index) => (
              <div key={index} className="fun-card" style={{ opacity: 0 }}>
                <div className="glass-card glass-hover p-6 rounded-2xl h-full flex flex-col group border border-white/5 transition-all duration-500 relative overflow-hidden">
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-display text-[20px] font-bold uppercase tracking-wider text-foreground transition-colors">
                        {project.name}
                      </h4>
                      <div className="flex gap-2">
                        {project.source && (
                          <a
                            href={project.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors bg-white/5 p-2 rounded-full border border-white/10"
                            title="View Source Code"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {(project as any).link && (
                          <a
                            href={(project as any).link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors bg-white/5 p-2 rounded-full border border-white/10"
                            title="Live Demo"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="font-mono text-[13px] leading-[1.6] text-muted-foreground mb-6 flex-1 transition-colors">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="font-display text-[11px] font-medium tracking-wide bg-white/5 text-foreground/80 px-3 py-1 rounded-full border border-white/10 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div ref={osHeaderRef} className="mt-20 mb-16 text-center" style={{ opacity: 0 }}>
            <div className="section-label mb-3"></div>
            <h3 className="font-display text-[clamp(30px,6vw,60px)] font-bold tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">Open </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary/40">Source</span>
            </h3>
            <p className="font-display text-[18px] md:text-[22px] text-foreground/70 max-w-2xl mx-auto">
              Open-source tools and widgets I've contributed to.
            </p>
          </div>

          <div ref={openSourceGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {openSourceProjects.map((project, index) => (
              <div key={index} className="os-card" style={{ opacity: 0 }}>
                <div className="glass-card glass-hover p-6 rounded-2xl h-full flex flex-col group border border-white/5 transition-all duration-500 relative overflow-hidden">
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-display text-[20px] font-bold uppercase tracking-wider text-foreground transition-colors">
                        {project.name}
                      </h4>
                      <div className="flex gap-2">
                        {project.source && (
                          <a
                            href={project.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors bg-white/5 p-2 rounded-full border border-white/10"
                            title="View Source Code"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {(project as any).link && (
                          <a
                            href={(project as any).link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors bg-white/5 p-2 rounded-full border border-white/10"
                            title="Live Demo"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="font-mono text-[13px] leading-[1.6] text-muted-foreground mb-6 flex-1 transition-colors">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="font-display text-[11px] font-medium tracking-wide bg-white/5 text-foreground/80 px-3 py-1 rounded-full border border-white/10 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
