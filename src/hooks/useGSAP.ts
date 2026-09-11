import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins once
gsap.registerPlugin(ScrollTrigger);

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Hook: Scroll-triggered reveal animation for a single element.
 * Fades + translates from a direction.
 */
export function useScrollReveal<T extends HTMLElement>(options?: {
  y?: number;
  x?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
  rotation?: number;
  scale?: number;
}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    const {
      y = 60,
      x = 0,
      duration = 1,
      delay = 0,
      ease = 'power3.out',
      start = 'top 85%',
      rotation = 0,
      scale = 1,
    } = options || {};

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          y,
          x,
          opacity: 0,
          rotation,
          scale,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

/**
 * Hook: Stagger reveal for multiple children.
 * Wraps a container and animates its children.
 */
export function useStaggerReveal<T extends HTMLElement>(options?: {
  y?: number;
  x?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  start?: string;
  childSelector?: string;
  rotation?: number;
  scale?: number;
}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    const {
      y = 50,
      x = 0,
      duration = 0.8,
      stagger = 0.1,
      ease = 'power3.out',
      start = 'top 85%',
      childSelector = ':scope > *',
      rotation = 0,
      scale = 1,
    } = options || {};

    const children = ref.current.querySelectorAll(childSelector);
    if (children.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        {
          y,
          x,
          opacity: 0,
          rotation,
          scale,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration,
          stagger,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

/**
 * Hook: Parallax scroll effect.
 * Moves element vertically based on scroll.
 */
export function useParallax<T extends HTMLElement>(speed: number = 0.3) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return ref;
}

/**
 * Hook: Text reveal animation with clip-path mask.
 * Words fly up from below a mask.
 */
export function useTextReveal<T extends HTMLElement>(options?: {
  duration?: number;
  stagger?: number;
  delay?: number;
  start?: string;
}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    const {
      duration = 0.8,
      stagger = 0.05,
      delay = 0,
      start = 'top 85%',
    } = options || {};

    // Split text into words
    const el = ref.current;
    const text = el.textContent || '';
    const words = text.split(/\s+/).filter(Boolean);

    el.innerHTML = '';
    el.style.overflow = 'hidden';

    words.forEach((word, i) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.overflow = 'hidden';
      wordSpan.style.verticalAlign = 'top';

      const inner = document.createElement('span');
      inner.textContent = word;
      inner.style.display = 'inline-block';
      inner.style.transform = 'translateY(110%)';
      inner.className = 'split-word';

      wordSpan.appendChild(inner);
      el.appendChild(wordSpan);

      // Add space after each word except last
      if (i < words.length - 1) {
        const space = document.createTextNode('\u00A0');
        el.appendChild(space);
      }
    });

    const ctx = gsap.context(() => {
      gsap.to(el.querySelectorAll('.split-word'), {
        y: 0,
        duration,
        stagger,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

/**
 * Hook: Horizontal scroll section.
 * Pins the container and scrolls its children horizontally.
 */
export function useHorizontalScroll<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current!.scrollWidth;
      const viewportWidth = window.innerWidth;

      gsap.to(scrollRef.current, {
        x: -(scrollWidth - viewportWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${scrollWidth - viewportWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return { containerRef, scrollRef };
}

/**
 * Utility: Create a master timeline for sequencing.
 */
export function createTimeline(options?: gsap.TimelineVars): gsap.core.Timeline {
  return gsap.timeline(options);
}

/**
 * Refresh all ScrollTrigger instances (useful after layout changes)
 */
export const refreshScrollTrigger = (): void => {
  ScrollTrigger.refresh();
};

export { gsap, ScrollTrigger };
