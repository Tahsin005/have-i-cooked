import { useEffect, useRef, useState, ReactNode } from "react";
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: string;
  animation?: string;
  threshold?: number;
}
const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = "delay-0", 
  animation = "animate-in fade-in slide-in-from-bottom-4 duration-1000",
  threshold = 0.1
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);
  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `${animation} ${delay} fill-mode-both` : "opacity-0 translate-y-4"}`}
    >
      {children}
    </div>
  );
};
export default ScrollReveal;
