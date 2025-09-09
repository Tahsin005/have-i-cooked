const Projects = () => {
  const projects = [
    {
      name: "Nike Landing Page",
      tech: ["react", "tailwindcss"],
      description:
        "A sleek, responsive e-commerce landing page inspired by Nike's branding. Built with React.js and Tailwind CSS, it showcases advanced layout techniques, reusable components, and modern UI design tailored for all screen sizes.",
      link: "https://nike-mocha-delta.vercel.app/",
      source: "https://github.com/Tahsin005/Nike-Landing-Page",
    },
    {
      name: "Recipe Finder",
      tech: ["html", "css", "javascript", "api"],
      description:
        "A recipe discovery platform that leverages the Meal DB API to let users search and explore recipes by name or ingredient. It features a clean UI and intuitive search for a seamless cooking inspiration experience.",
      link: "https://recipe-app-gamma-virid.vercel.app/",
      source: "https://github.com/Tahsin005/Recipe-App",
    },
    {
      name: "Around The Flag",
      tech: ["react", "tailwindcss", "country-rest-api"],
      description:
        "An informative React.js web app that fetches and displays global country data using the REST Countries API. Users can browse, search, and filter countries to view details like population, region, and native names, all within a responsive layout.",
      link: "https://country-rest-api-react.vercel.app/",
      source: "https://github.com/Tahsin005/Country-Rest-API---React",
    },
    {
      name: "Bazzar Buddy",
      tech: ["react", "tailwindcss", "django", "drf", "postgresql"],
      description:
        "A full-stack marketplace application where users can securely list, buy, sell, and manage products. It includes features like user registration, email verification, product editing/deletion, and sales tracking. Built with React and Django REST Framework, backed by PostgreSQL.",
      link: "https://bazzar-buddy.vercel.app/",
      source: "https://github.com/Tahsin005/BazzarBuddy",
    },
    {
      name: "Unlinked",
      tech: ["react", "express", "mongodb", "mongoose"],
      description:
        "A full-stack social networking app with user authentication, profile customization, and connection-building. Includes an interactive news feed where users can share posts and engage with others. Built using React, Express.js, and MongoDB.",
      link: "https://unlinked-siot.onrender.com/",
      source: "https://github.com/Tahsin005/UnLinked",
    },
    {
      name: "Socially",
      tech: ["nextjs", "tailwindcss", "postgresql", "prisma"],
      description:
        "A modern social media platform developed with Next.js and Tailwind CSS, featuring secure authentication, user feeds, post interactions, and PostgreSQL-backed data storage. Focused on performance, responsiveness, and a smooth user experience.",
      link: "https://socially-orcin.vercel.app/",
      source: "https://github.com/Tahsin005/Socially",
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
