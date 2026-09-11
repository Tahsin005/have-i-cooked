import { ExternalLink, ArrowRight, PenTool, Clock } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/hooks/useGSAP";
import SectionHeader from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  images: string[];
  tags: string[];
  published: boolean;
  createdAt: string;
  readingTime: number;
}

const POSTS_API = "https://purple-onion.vercel.app/posts";
const POST_BASE_URL = "https://purpleonion.vercel.app/post";

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function cleanTitle(raw: string): string {
  // Remove leading markdown heading symbols
  return raw.replace(/^#+\s*/, "").trim();
}

function pickRandom<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

const Blogs = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(POSTS_API)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data: Post[]) => {
        const published = data.filter((p) => p.published);
        setPosts(pickRandom(published, 4));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  // Animate blog cards after they're loaded
  useEffect(() => {
    if (loading || error || posts.length === 0 || hasAnimated.current || prefersReducedMotion()) return;

    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.blog-card');
        cards.forEach((card, i) => {
          // Alternating left/right offset
          const xOffset = i % 2 === 0 ? -40 : 40;

          gsap.fromTo(
            card,
            {
              y: 60,
              x: xOffset,
              opacity: 0,
              scale: 0.95,
            },
            {
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: i * 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // CTA button
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [loading, error, posts]);

  return (
    <section className="section-shell relative overflow-hidden border-none" id="blogs">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Blogs &"
          titleHighlight="Articles"
          subtitle="Thoughts and insights on software development."
        />

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full border border-white/5"
                style={{ minHeight: "260px", animationDelay: `${i * 80}ms` }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="skeleton w-11 h-11 rounded-full" />
                  <div className="skeleton w-5 h-5 rounded" />
                </div>

                <div className="skeleton h-5 w-4/5 mb-2" />
                <div className="skeleton h-5 w-3/5 mb-6" />

                <div className="skeleton h-3.5 w-full mb-2" />
                <div className="skeleton h-3.5 w-full mb-2" />
                <div className="skeleton h-3.5 w-2/3 mb-8" />

                <div className="flex items-center gap-3 mt-auto">
                  <div className="skeleton h-7 w-16 rounded-full" />
                  <div className="skeleton h-3 w-3 rounded-full" />
                  <div className="skeleton h-3 w-20 rounded" />
                  <div className="skeleton h-3 w-3 rounded-full" />
                  <div className="skeleton h-3 w-24 rounded" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p className="font-display text-foreground/40 text-sm tracking-wide">Could not load posts. Please try again later.</p>
          </div>
        )}

        {!loading && !error && (
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {posts.map((post, index) => (
              <div key={post.slug} className="blog-card" style={{ opacity: 0 }}>
                <TiltCard className="h-full">
                  <a
                    href={`${POST_BASE_URL}/${post.slug}`}
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
                        {cleanTitle(post.title)}
                      </h3>
                      <p className="font-display text-[14px] text-foreground/50 leading-relaxed mb-8 group-hover:text-foreground/70 transition-colors line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-[12px] font-display text-foreground/70 mt-auto z-10 relative flex-wrap" style={{ transform: "translateZ(30px)" }}>
                      <span className="bg-white/5 text-foreground/80 px-3 py-1.5 rounded-full border border-white/10 tracking-wide font-medium shadow-sm">
                        Article
                      </span>
                      <span className="text-foreground/30">•</span>
                      <span className="flex items-center gap-1.5 text-foreground/50">
                        <Clock size={12} />
                        {post.readingTime} min read
                      </span>
                      <span className="text-foreground/30">•</span>
                      <span className="tracking-wide text-foreground/50">{formatDate(post.createdAt)}</span>
                    </div>
                  </a>
                </TiltCard>
              </div>
            ))}
          </div>
        )}

        <div ref={ctaRef} className="flex justify-center" style={{ opacity: 0 }}>
          <a
            href="https://purpleonion.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-display tracking-wide text-foreground/80 font-medium hover:text-foreground transition-all duration-300 group text-[14px] px-8 py-4 glass-card rounded-full"
          >
            <span>View all posts</span>
            <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
