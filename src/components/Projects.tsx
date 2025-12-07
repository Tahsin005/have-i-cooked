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
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text text-center mb-12">
          Featured Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="code-block" >
              <div className="flex items-start">
                <div className="flex-1 pl-4">
                  <div className="text-base md:text-lg">
                    <div>
                      <span className="syntax-keyword">func</span>{" "}
                      <span className="syntax-function">
                        {project.name.replace(/\s+/g, "")}
                      </span>
                      <span className="text-foreground">() {"{"}</span>
                    </div>
                    <div className="ml-4 mt-2">
                      <span className="syntax-keyword">var</span>{" "}
                      <span className="syntax-variable">description</span>{" "}
                      <span className="text-foreground">:=</span>{" "}
                      <span className="syntax-string">
                        "{project.description}"
                      </span>
                    </div>
                    <div className="ml-4">
                      <span className="syntax-keyword">var</span>{" "}
                      <span className="syntax-variable">techStack</span>{" "}
                      <span className="text-foreground">:=</span>{" "}
                      <span className="text-foreground">[</span>
                    </div>
                    {project.tech.map((tech, techIndex) => (
                      <div key={techIndex} className="ml-8">
                        <span className="syntax-string">"{tech}"</span>
                        {techIndex < project.tech.length - 1 && (
                          <span className="text-foreground">,</span>
                        )}
                      </div>
                    ))}
                    <div className="ml-4">
                      <span className="text-foreground">]</span>
                    </div>
                    <div className="ml-4 mt-2">
                      <span className="syntax-keyword">var</span>{" "}
                      <span className="syntax-variable">link</span>{" "}
                      <span className="text-foreground">:=</span>{" "}
                      <a
                        href={project.link}
                        className="syntax-string hover:text-primary transition-colors underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        "{project.link}"
                      </a>
                    </div>
                    {project?.source && (
                      <div className="ml-4 mt-2">
                        <span className="syntax-keyword">var</span>{" "}
                        <span className="syntax-variable">sourceCode</span>{" "}
                        <span className="text-foreground">:=</span>{" "}
                        <a
                          href={project.source}
                          className="syntax-string hover:text-primary transition-colors underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          "github <span className="text-xl">↗</span><span>{`"`}</span>
                        </a>
                      </div>
                    )}
                    <div className="ml-4 mt-2">
                      <span className="syntax-keyword">return</span>{" "}
                      <span className="syntax-variable">project</span>
                    </div>
                    <div>
                      <span className="text-foreground">{"}"}</span>
                    </div>
                  </div>
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
