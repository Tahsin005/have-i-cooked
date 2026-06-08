import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Terminal } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
          <div className="glass-panel p-5 rounded-2xl relative">
            <Terminal className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-display font-bold text-foreground tracking-tighter mb-4">
          404
        </h1>
        
        <div className="code-block mb-10 max-w-md w-full text-left font-mono">
          <span className="syntax-keyword">const</span> <span className="syntax-variable">status</span> = <span className="syntax-number">404</span>;
          <br />
          <span className="syntax-keyword">const</span> <span className="syntax-variable">message</span> = <span className="syntax-string">"Page not found"</span>;
          <br />
          <br />
          <span className="syntax-comment">// The route you are looking for has been</span>
          <br />
          <span className="syntax-comment">// deleted, moved, or never existed.</span>
          <br />
          <br />
          <span className="syntax-function">console</span>.error(<span className="syntax-string">`Route <span className="text-accent-3">${location.pathname}</span> not found`</span>);
        </div>

        <Link 
          to="/" 
          className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary/10 px-8 font-medium text-primary border border-primary/20 transition-all hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background glass-hover"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">&larr;</span> 
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
