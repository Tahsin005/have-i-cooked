const Blogs = () => {
  const blogsData = [
    {
      title: "DSA Before Development or Development Before DSA?",
      link: "https://medium.com/@tahsin.ferdous3546/dsa-before-development-or-development-before-dsa-c2e7ec08fcc8",
    },
    {
      title: "Big O Notation and the Climb Over Constants",
      link: "https://medium.com/@tahsin.ferdous3546/big-o-notation-and-the-climb-over-constants-7b2b84272d07",
    },
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text text-center mb-12">
          Blogs
        </h2>

        <div className="space-y-8">
          {blogsData.map((blog, index) => (
            <div key={index} className="code-block" style={{
            wordBreak: "break-all",
            overflowWrap: "break-word",
            whiteSpace: "pre-wrap",
          }}>
              <div className="flex items-start">
                <div className="flex-1 pl-4">
                  <div className="text-base md:text-lg">
                    <div>
                      <span className="syntax-keyword">class</span>{" "}
                      <span className="syntax-class">
                        {blog.title.replace(/\s+/g, "")}
                      </span>{" "}
                      <span className="text-foreground">{"{"}</span>
                    </div>

                    <div className="ml-4 mt-2">
                      <span className="syntax-keyword">public</span>
                      <span className="text-foreground">:</span>
                    </div>

                    <div className="ml-8 mt-2">
                      <span className="syntax-function">void</span>{" "}
                      <span className="syntax-variable">read</span>
                      <span className="text-foreground">() {"{"}</span>
                    </div>

                    <div className="ml-12 mt-2">
                      <span className="syntax-keyword">string</span>{" "}
                      <span className="syntax-variable">link</span>{" "}
                      <span className="text-foreground">=</span>{" "}
                      <a
                        href={blog.link}
                        className="syntax-string hover:text-primary transition-colors underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        "medium <span className="text-xl">↗</span><span>{`"`}</span>
                      </a>
                      <span className="text-foreground">;</span>
                    </div>

                    <div className="ml-8">
                      <span className="text-foreground">{"}"}</span>
                    </div>

                    <div>
                      <span className="text-foreground">{"};"}</span>
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

export default Blogs;
