const About = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="code-block">
          <div className="flex items-start">
            <div className="flex-1 pl-4">
              <div className="text-base md:text-lg">
                {/* Docstring */}
                <div className="syntax-comment">
                  <span>"""</span>
                </div>
                <div className="syntax-comment ml-4">
                  <span>About MD. Tahsin Ferdous - Software Engineer</span>
                </div>
                <div className="syntax-comment ml-4 mt-2">
                  <span>
                    I am a developer focused on building clean, accessible, and
                    maintainable web applications.
                  </span>
                </div>
                <div className="syntax-comment ml-4">
                  <span>I love problem solving and learning new things.</span>
                </div>
                <div className="syntax-comment ml-4 mt-2">
                  <span>
                    Outside coding, I enjoy speedcubing, football and
                    beatboxing.
                  </span>
                </div>
                <div className="syntax-comment">
                  <span>"""</span>
                </div>

                {/* Class definition */}
                <div className="mt-4">
                  <span className="syntax-keyword">class</span>{" "}
                  <span className="syntax-function">Developer</span>
                  <span className="text-foreground">:</span>
                </div>

                {/* __init__ */}
                <div className="ml-4">
                  <span className="syntax-keyword">def</span>{" "}
                  <span className="syntax-function">__init__</span>
                  <span className="text-foreground">(</span>
                  <span className="syntax-variable">self</span>
                  <span className="text-foreground">):</span>
                </div>

                <div className="ml-8">
                  <span className="syntax-variable">self</span>
                  <span className="text-foreground">.</span>
                  <span className="syntax-variable">name</span>{" "}
                  <span className="text-foreground">=</span>{" "}
                  <span className="syntax-string">"MD. Tahsin Ferdous"</span>
                </div>

                <div className="ml-8">
                  <span className="syntax-variable">self</span>
                  <span className="text-foreground">.</span>
                  <span className="syntax-variable">role</span>{" "}
                  <span className="text-foreground">=</span>{" "}
                  <span className="syntax-string">
                    "Jr. Software Engineer @ Affpilot"
                  </span>
                </div>

                <div className="ml-8">
                  <span className="syntax-variable">self</span>
                  <span className="text-foreground">.</span>
                  <span className="syntax-variable">interests</span>{" "}
                  <span className="text-foreground">=</span>{" "}
                  <span className="syntax-string">
                    "Problem Solving, Speedcubing, Football, Beatboxing"
                  </span>
                </div>

                {/* Experience */}
                <div className="ml-8 mt-4">
                  <span className="syntax-variable">self</span>
                  <span className="text-foreground">.</span>
                  <span className="syntax-variable">experience</span>{" "}
                  <span className="text-foreground">= [</span>
                </div>

                {/* Affpilot */}
                <div className="ml-12">
                  <span className="text-foreground">&#123;</span>
                </div>
                <div className="ml-16">
                  <span className="syntax-string">"company"</span>:{" "}
                  <span className="syntax-string">"Affpilot"</span>,
                </div>
                <div className="ml-16">
                  <span className="syntax-string">"role"</span>:{" "}
                  <span className="syntax-string">"Jr. Software Engineer"</span>
                  ,
                </div>
                <div className="ml-16">
                  <span className="syntax-string">"period"</span>:{" "}
                  <span className="syntax-string">"Apr 2025 — Present"</span>,
                </div>
                <div className="ml-16">
                  <span className="syntax-string">"stack"</span>:{" "}
                  <span className="syntax-string">
                    "Python, Django, Golang, REST APIs, PostgreSQL, Docker,
                    Redis"
                  </span>
                </div>
                <div className="ml-12">
                  <span className="text-foreground">&#125;</span>,
                </div>

                {/* Lexaeon */}
                <div className="ml-12">
                  <span className="text-foreground">&#123;</span>
                </div>
                <div className="ml-16">
                  <span className="syntax-string">"company"</span>:{" "}
                  <span className="syntax-string">"Lexaeon"</span>,
                </div>
                <div className="ml-16">
                  <span className="syntax-string">"role"</span>:{" "}
                  <span className="syntax-string">
                    "Python Developer Intern"
                  </span>
                  ,
                </div>
                <div className="ml-16">
                  <span className="syntax-string">"period"</span>:{" "}
                  <span className="syntax-string">"Oct 2024 — Nov 2024"</span>,
                </div>
                <div className="ml-16">
                  <span className="syntax-string">"stack"</span>:{" "}
                  <span className="syntax-string">
                    "Python, Django, DRF, PostgreSQL"
                  </span>
                </div>
                <div className="ml-12">
                  <span className="text-foreground">&#125;</span>
                </div>

                <div className="ml-8">
                  <span className="text-foreground">]</span>
                </div>

                <div className="ml-8">
                  <span className="syntax-variable">self</span>
                  <span className="text-foreground">.</span>
                  <span className="syntax-variable">resume</span>{" "}
                  <span className="text-foreground">=</span>{" "}
                  <a
                    href="https://drive.google.com/file/d/1V2CqNMnejYeKv7_vcdP1I07_Q8ip_M4a/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="syntax-string hover:underline"
                  >
                    "View My Resume <span className="text-xl">↗</span>" 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
