import GitHubCalendar from "react-github-calendar";
import { Code2, Server, Layout, Database, Wrench } from "lucide-react";

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      icon: <Code2 className="text-primary" size={24} />,
      skills: ["Python", "JavaScript", "GoLang", "C++", "Java", "C", "TypeScript"],
    },
    {
      title: "Backend",
      icon: <Server className="text-primary" size={24} />,
      skills: ["Django", "DRF", "Node.js", "Express.js", "Gin", "Gorm"],
    },
    {
      title: "Frontend",
      icon: <Layout className="text-primary" size={24} />,
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5/CSS3", "Redux"],
    },
    {
      title: "Databases",
      icon: <Database className="text-primary" size={24} />,
      skills: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench className="text-primary" size={24} />,
      skills: ["Docker", "CI/CD", "Nginx", "AWS", "Linux", "Git", "GitHub"],
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold font-mono text-center mb-12">
          <span className="text-primary">function</span> getSkills()
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-2 rounded mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold font-mono">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-2 py-1 bg-secondary text-secondary-foreground rounded border border-border/50 font-mono hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Calendar Section */}
        <div className="border border-border rounded-xl p-8 bg-card/50 backdrop-blur-sm">
          <h3 className="text-xl font-bold font-mono mb-6 flex items-center">
            <span className="mr-2 text-primary">git</span> commit --history
          </h3>
          <div className="flex justify-center overflow-x-auto pb-4">
            <GitHubCalendar
              username="tahsin005"
              colorScheme="dark"
              fontSize={12}
              blockSize={12}
              blockMargin={4}
              theme={{
                dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;