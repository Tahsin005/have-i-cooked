import { ExternalLink, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import DotGrid from '@/components/DotGrid';
import { useState, useEffect, useCallback } from 'react';
import affpilot1 from '@/assets/project-ss/affpilot-1.png'
import affpilot2 from '@/assets/project-ss/affpilot-2.png'
import country1 from '@/assets/project-ss/country-1.png'
import country2 from '@/assets/project-ss/country-2.png'
import nike1 from '@/assets/project-ss/nike-1.png'
import nike2 from '@/assets/project-ss/nike-2.png'
import sim1 from '@/assets/project-ss/sim-1.png'
import sim2 from '@/assets/project-ss/sim-2.png'
import socially1 from '@/assets/project-ss/socially-1.png'
import socially2 from '@/assets/project-ss/socially-2.png'
import ibuiltthis1 from '@/assets/project-ss/ibuiltthis-1.png'
import ibuiltthis2 from '@/assets/project-ss/ibuiltthis-2.png'
import ibuiltthis3 from '@/assets/project-ss/ibuiltthis-3.png'
import rtwd from '@/assets/project-ss/rtwd.png'
import job1 from '@/assets/project-ss/job-application-1.png'
import job2 from '@/assets/project-ss/job-application-2.png'
import ecom1 from '@/assets/project-ss/ecom-11.png'
import ecom2 from '@/assets/project-ss/ecom-12.png'
import ecom3 from '@/assets/project-ss/ecom-13.png'
import ecom4 from '@/assets/project-ss/ecom-14.png'
import ecom5 from '@/assets/project-ss/ecom-15.png'
import ecom6 from '@/assets/project-ss/ecom-16.png'
import ecom7 from '@/assets/project-ss/ecom-17.png'


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
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
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
              className="rounded-full transition-all duration-300 cursor-pointer border-0 p-0"
              style={{
                width: i === current ? '16px' : '6px',
                height: '6px',
                background: i === current ? 'var(--primary, #9231E8)' : 'rgba(255,255,255,0.35)',
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
      name: "Shoppio",
      tech: ["react", "tailwind", "express", "mongodb", "moneybag payment gateway"],
      description:
        "Shoppio is a premium, full-stack e-commerce application built with speed, scalability, and modern aesthetics in mind. It features a robust administration dashboard, a seamless customer shopping experience, and secure payment integrations.",
      images: [ecom1, ecom2, ecom3, ecom4, ecom5, ecom6, ecom7]
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
      name: "Smart Inventory & Order Management",
      tech: ["react", "express", "postgresql", "prisma"],
      description:
        "A full-stack inventory and order management system designed for efficient tracking of products, categories, stock movements, and customer orders. Built with React for the frontend and Express/Prisma for the backend.",
      link: "https://eap-assesment-task-five.vercel.app/",
      source: "https://github.com/Tahsin005/smart-inventory-and-order-management",
      images: [sim1, sim2]
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
      name: "World Explorer",
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

  return (
    <section className="section-shell relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <DotGrid dotSize={2} gap={24} baseColor="#9231E8" activeColor="#1E904E" proximity={180} shockRadius={280} shockStrength={6} resistance={800} returnDuration={1.5} />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {}
        <div className="mb-16 text-center">
          <div className="section-label mb-3"></div>
          <h2 className="section-title mb-4">
            <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've built and contributed to
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={`delay-${(index % 5 + 1) * 100}`}>
              <div className="glass-card glass-hover flex flex-col group rounded-xl h-full overflow-hidden">
                {/* Image Slider at the top */}
                <ProjectImageSlider images={project.images} projectName={project.name} />

                {/* Card content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display text-[18px] font-semibold leading-[1.3] text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex gap-2 shrink-0 ml-2">
                      {project.source && (
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          title="View Source Code"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="font-body text-[14px] font-normal leading-[1.7] text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="font-display text-[11px] font-medium tracking-[0.06em] px-2 py-1 rounded bg-secondary/50 text-secondary-foreground border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
