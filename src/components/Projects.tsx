import { ExternalLink, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import DotGrid from '@/components/DotGrid';
const Projects = () => {
  const projects = [
    {
      name: "Socially",
      tech: ["nextjs", "tailwindcss", "postgresql", "prisma", "typescript"],
      description:
        "A full-stack social media platform built with Next.js App Router, TypeScript, PostgreSQL, and Prisma ORM. Features include Google authentication (Clerk), profile management, follow/unfollow system, media posts, real-time notifications, and secure API routes with JWT.",
      link: "https://socially-orcin.vercel.app/",
      source: "https://github.com/Tahsin005/Socially",
    },
    {
      name: "Smart Inventory & Order Management",
      tech: ["react", "express", "postgresql", "prisma"],
      description:
        "A full-stack inventory and order management system designed for efficient tracking of products, categories, stock movements, and customer orders. Built with React for the frontend and Express/Prisma for the backend.",
      link: "https://eap-assesment-task-five.vercel.app/",
      source: "https://github.com/Tahsin005/smart-inventory-and-order-management",
    },
    {
      name: "SaaS Growthly",
      tech: ["react", "tailwindcss", "golang", "redis", "postgresql", "stripe"],
      description:
        "SaaS Growthly is a product of AffPilot that centralizes SaaS growth resources. The platform delivers curated YouTube channels, guest posting sites, launch platforms, and growth hacks. I contributed to designing and developing the full-stack platform, combining a modern React frontend with a scalable Golang backend.",
      link: "https://saasgrowthly.com/",
    },
    {
      name: "AffPilot",
      tech: ["react", "tailwindcss", "django", "postgresql"],
      description:
        "AffPilot is an AI-powered content automation platform for creators and agencies. I worked on backend and integrations, implementing Shopify publishing and building a centralized payment system to handle transactions across AffPilot's suite of products.",
      link: "https://affpilot.com/",
    },
    {
      name: "Nike Landing Page",
      tech: ["react", "tailwindcss"],
      description:
        "A sleek, responsive e-commerce landing page inspired by Nike's branding. Built with React.js and Tailwind CSS, it showcases advanced layout techniques, reusable components, and modern UI design tailored for all screen sizes.",
      link: "https://nike-mocha-delta.vercel.app/",
      source: "https://github.com/Tahsin005/Nike-Landing-Page",
    },
    {
      name: "Around The Flag",
      tech: ["react", "tailwindcss", "country-rest-api"],
      description:
        "An informative React.js web app that fetches and displays global country data using the REST Countries API. Users can browse, search, and filter countries to view details like population, region, and native names.",
      link: "https://country-rest-api-react.vercel.app/",
      source: "https://github.com/Tahsin005/Country-Rest-API---React",
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
            <div
              className={`glass-card glass-hover p-6 flex flex-col justify-between group rounded-xl h-full`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-[18px] font-semibold leading-[1.3] text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex gap-2">
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
                <p className="font-body text-[14px] font-normal leading-[1.7] text-muted-foreground mb-6">
                  {project.description}
                </p>
              </div>
              <div>
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
