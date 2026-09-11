import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '@/hooks/useGSAP';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeaderProps {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  className?: string;
}

const SectionHeader = ({ title, titleHighlight, subtitle, className = '' }: SectionHeaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Title words fly up from clip mask
      if (titleRef.current) {
        const titleEl = titleRef.current;
        const spans = titleEl.querySelectorAll('.header-word-inner');

        if (spans.length > 0) {
          tl.fromTo(
            spans,
            { y: '110%', opacity: 0 },
            {
              y: '0%',
              opacity: 1,
              duration: 0.8,
              stagger: 0.06,
              ease: 'power3.out',
            },
            0
          );
        }
      }

      // Decorative line animates width
      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: 'power2.out' },
          0.3
        );
      }

      // Subtitle fades up
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
          0.4
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Split title into wrapped words for animation
  const renderTitle = () => {
    const fullText = titleHighlight ? `${title}|||${titleHighlight}` : title;
    const parts = fullText.split('|||');

    return parts.map((part, partIndex) => {
      const words = part.trim().split(/\s+/);
      const isHighlight = titleHighlight && partIndex === 1;

      return words.map((word, wordIndex) => (
        <span
          key={`${partIndex}-${wordIndex}`}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}
        >
          <span
            className={`header-word-inner ${
              isHighlight
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary/40'
                : 'bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50'
            }`}
            style={{ display: 'inline-block', transform: 'translateY(110%)' }}
          >
            {word}
          </span>
          {wordIndex < words.length - 1 && <>&nbsp;</>}
        </span>
      ));
    });
  };

  return (
    <div ref={containerRef} className={`mb-16 text-center ${className}`}>
      <div className="section-label mb-3"></div>
      <h2
        ref={titleRef}
        className="font-display text-[clamp(40px,8vw,80px)] font-bold tracking-tighter mb-4"
      >
        {renderTitle()}
      </h2>
      <div
        ref={lineRef}
        className="w-16 h-[2px] mx-auto mb-4 bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-center"
        style={{ transform: 'scaleX(0)' }}
      />
      <p
        ref={subtitleRef}
        className="font-display text-[18px] md:text-[22px] text-foreground/60 max-w-2xl mx-auto"
        style={{ opacity: 0 }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
