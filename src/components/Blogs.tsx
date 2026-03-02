import { ExternalLink, ArrowRight } from "lucide-react";

const Blogs = () => {
  const blogsData = [
    {
      title: "HTTP: The Parts You Actually Need to Know",
      link: "https://purpleonion.vercel.app/post/-http-the-parts-you-actually-need-to-know",
      description: "A deep dive into HTTP headers, methods, and status codes for developers.",
      date: "2024"
    },
    {
      title: "What is Handlers, Services, Repositories...",
      link: "https://purpleonion.vercel.app/post/-what-is-handlers-services-repositories-middleware-and-request-context",
      description: "Understanding the clean architecture pattern in backend development.",
      date: "2024"
    },
  ];

  return (
    <section className="section-shell">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="section-label mb-3">// 06 BLOGS</div>
          <h2 className="section-title mb-4">
            <span className="text-primary">Blogs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts and insights on software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogsData.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 group hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {blog.description}
                </p>
              </div>

              <div className="flex items-center text-xs text-muted-foreground mt-auto">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20">
                  Article
                </span>
                <span className="mx-2">•</span>
                <span>{blog.date}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://purpleonion.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>View all posts</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

