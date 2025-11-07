const ProblemSolvingStats = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="code-block">
          <div className="flex items-start">
            <div className="flex-1 pl-4">
              <div className="text-base md:text-lg">
                {/* Function definition */}
                <div className="mt-4">
                  <span className="syntax-keyword">def</span>{" "}
                  <span className="syntax-function">competitive_programming</span>
                  <span className="text-foreground">():</span>
                </div>

                {/* Return statement */}
                <div className="ml-8">
                  <span className="syntax-keyword">return</span>{" "}
                  <span className="text-foreground">&#123;</span>
                </div>

                {/* Stats dictionary */}
                <div className="ml-12">
                  <span className="syntax-string">"contests"</span>:{" "}
                  <span className="text-foreground">[</span>
                </div>
                <div className="ml-16">
                  <span className="syntax-string">"ICPC Dhaka Regional 24 Onsite Contest Participant"</span>
                  <span className="text-foreground">,</span>
                </div>
                <div className="ml-16">
                  <span className="syntax-string">"Problem Setter - Interuniversity Programming Contest"</span>
                </div>
                <div className="ml-12">
                  <span className="text-foreground">],</span>
                </div>

                <div className="ml-12">
                  <span className="syntax-string">"ratings"</span>:{" "}
                  <span className="text-foreground">&#123;</span>
                </div>
                <div className="ml-16">
                  <span className="syntax-string">"Codeforces"</span>:{" "}
                  <span className="syntax-string">"Pupil"</span>,
                </div>
                <div className="ml-16">
                  <span className="syntax-string">"CodeChef"</span>:{" "}
                  <span className="syntax-string">"3-Star Coder"</span>
                </div>
                <div className="ml-12">
                  <span className="text-foreground">&#125;,</span>
                </div>

                <div className="ml-12">
                  <span className="syntax-string">"total_problems_solved"</span>:{" "}
                  <span className="syntax-number">2000</span><span className="syntax-string">+</span>
                </div>

                <div className="ml-8">
                  <span className="text-foreground">&#125;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolvingStats;