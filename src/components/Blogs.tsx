import { ExternalLink, BookOpen, ArrowRight } from "lucide-react";

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
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <BookOpen className="text-primary mr-3" size={32} />
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-primary">~/</span>blogs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogsData.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 group hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {blog.description}
                </p>
              </div>

              <div className="flex items-center text-xs font-mono text-muted-foreground mt-auto">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded">
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
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono group"
          >
            <span>cd ../more_posts</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
