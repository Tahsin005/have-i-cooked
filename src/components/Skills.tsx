import GitHubCalendar from "react-github-calendar";

const Skills = () => {
  const skillsData = {
    languages: ["GoLang", "Python", "JavaScript", "TypeScript"],
    backend: [
      "Gin",
      "Gorm",
      "Django",
      "Django REST Framework",
      "Node.js",
      "Express.js",
    ],
    frontend: ["React", "Next.js", "Tailwind CSS", "HTML5/CSS3", "Redux"],
    databases: ["PostgreSQL", "MongoDB"],
    messaging: ["RabbitMQ", "Redis"],
    devops: ["Docker", "CI/CD", "Nginx", "AWS", "Linux"],
    tools: ["Git", "GitHub", "Postman", "Stripe", "SSL Commerze"],
    currentlyLearning: ["Design Patterns - LLD"],
  };

  const theme = {
    dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text text-center mb-12">
          Technical Skills
        </h2>

        <div className="code-block">
          <div className="flex items-start">
            <div className="flex-1 pl-4">
              <div className="text-base md:text-lg">
                <div>
                  <span className="syntax-keyword">const</span>{" "}
                  <span className="syntax-variable">skills</span>{" "}
                  <span className="text-foreground">=</span>{" "}
                  <span className="text-foreground">{"{"}</span>
                </div>

                {Object.entries(skillsData).map(
                  ([category, skills], categoryIndex) => (
                    <div key={category}>
                      <div className="ml-4 mt-2">
                        <span className="syntax-variable">{category}</span>
                        <span className="text-foreground">:</span>{" "}
                        <span className="text-foreground">[</span>
                      </div>
                      {skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="ml-8">
                          <span className="syntax-string">"{skill}"</span>
                          {skillIndex < skills.length - 1 && (
                            <span className="text-foreground">,</span>
                          )}
                        </div>
                      ))}
                      <div className="ml-4">
                        <span className="text-foreground">]</span>
                        {categoryIndex <
                          Object.entries(skillsData).length - 1 && (
                          <span className="text-foreground">,</span>
                        )}
                      </div>
                    </div>
                  )
                )}

                <div className="text-foreground">
                  <span>{"};"}</span>
                </div>

                <div className="mt-4">
                  <span className="syntax-comment">
                    // Always learning and growing...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;