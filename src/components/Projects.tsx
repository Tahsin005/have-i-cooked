import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        "AffPilot is an AI-powered content automation platform for creators and agencies. I worked on backend and integrations, implementing Shopify publishing and building a centralized payment system to handle transactions across AffPilot’s suite of products.",
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
    {
      name: "Unlinked",
      tech: ["react", "express", "mongodb", "mongoose"],
      description:
        "A full-stack social networking app with user authentication, profile customization, and connection-building. Includes an interactive news feed where users can share posts and engage with others.",
      link: "https://unlinked-siot.onrender.com/",
      source: "https://github.com/Tahsin005/UnLinked",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <Folder className="text-primary mr-4" size={32} />
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-primary">~/</span>projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 flex flex-col justify-between group hover:border-primary/50 transition-all hover:shadow-glow hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
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

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
