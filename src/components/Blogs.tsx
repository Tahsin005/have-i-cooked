import { ExternalLink, ArrowRight, PenTool } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { TiltCard } from "./TiltCard";

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
    <section className="section-shell relative overflow-hidden border-none" id="blogs">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="section-label mb-3"></div>
          <h2 className="font-display text-[clamp(40px,8vw,80px)] font-bold tracking-tighter mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">Blogs & </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary/40">Articles</span>
          </h2>
          <p className="font-display text-[18px] md:text-[22px] text-foreground/70 max-w-2xl mx-auto">
            Thoughts and insights on software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogsData.map((blog, index) => (
            <ScrollReveal key={index} delay={`delay-${(index + 1) * 100}`}>
              <TiltCard className="h-full">
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glass-shimmer glass-hover p-8 rounded-2xl flex flex-col justify-between h-full border border-white/5 hover:border-white/15 transition-all duration-500 relative overflow-hidden group"
                >
                  
                  
                  <div className="z-10 relative">
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-white/5 p-3 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                        <PenTool size={20} className="text-foreground/70" />
                      </div>
                      <ExternalLink size={20} className="text-foreground/30 group-hover:text-foreground/70 transition-colors flex-shrink-0" />
                    </div>
                    <h3 className="font-display text-[20px] font-semibold tracking-tight text-foreground/90 group-hover:text-foreground transition-colors mb-3">
                      {blog.title}
                    </h3>
                    <p className="font-display text-[14px] text-foreground/50 leading-relaxed mb-8 group-hover:text-foreground/70 transition-colors">
                      {blog.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-[12px] font-display text-foreground/70 mt-auto z-10 relative" style={{ transform: 'translateZ(30px)' }}>
                    <span className="bg-white/5 text-foreground/80 px-3 py-1.5 rounded-full border border-white/10 tracking-wide font-medium shadow-sm">
                      Article
                    </span>
                    <span className="mx-4 text-foreground/30">•</span>
                    <span className="tracking-wide">{blog.date}</span>
                  </div>
                </a>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="flex justify-center">
          <ScrollReveal delay="delay-300">
            <a
              href="https://purpleonion.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-display tracking-wide text-foreground/80 font-medium hover:text-foreground transition-all duration-300 group text-[14px] px-8 py-4 glass-card rounded-full"
            >
              <span>View all posts</span>
              <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
