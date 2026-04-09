import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 p-3 rounded-full transition-all duration-300",
        "glass-panel border border-primary/20 hover:border-primary/50",
        "shadow-lg hover:shadow-primary/20 hover:-translate-y-1",
        "group active:scale-95",
        isVisible 
          ? "opacity-100 translate-y-0 pointer-events-auto animate-in fade-in zoom-in duration-300" 
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp 
        className="text-primary group-hover:animate-bounce-short transition-colors" 
        size={24} 
        strokeWidth={2.5}
      />
    </button>
  );
};

export default ScrollToTop;
