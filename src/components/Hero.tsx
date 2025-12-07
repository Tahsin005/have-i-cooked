import { useState, useEffect } from 'react';

const Hero = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center p-8 mt-12 md:mt-0">
      <div className="w-full max-w-4xl">
        <div className="code-block editor-glow">
          <div className="flex items-start">
            <div className="flex-1 pl-4">
              <div className="text-lg md:text-xl lg:text-2xl">
                {/* Comment block */}
                <div className="syntax-comment">
                  <span>/*</span>
                </div>
                <div className="syntax-comment ml-4">
                  <span>* Full Stack Developer</span>
                </div>
                <div className="syntax-comment ml-4">
                  <span>* Backend: Django, Golang, REST APIs, PostgreSQL, Redis, Docker</span>
                </div>
                <div className="syntax-comment ml-4">
                  <span>* Frontend: React, Next.js, TypeScript, Tailwind CSS</span>
                </div>
                <div className="syntax-comment ml-4">
                  <span>* Location: Dhaka, Bangladesh</span>
                </div>
                <div className="syntax-comment ml-4">
                  <span>* Passion: Problem Solving & Scalable Systems</span>
                </div>
                <div className="syntax-comment">
                  <span>*/</span>
                </div>

                {/* Developer variable */}
                <div className="mt-2">
                  <span className="syntax-keyword">const</span>{' '}
                  <span className="syntax-variable">developer</span>{' '}
                  <span className="text-foreground">=</span>{' '}
                  <span className="syntax-string">"MD. Tahsin Ferdous"</span>
                  {showCursor && <span className="cursor ml-1"></span>}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Intro section */}
        <div className="mt-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            MD. Tahsin Ferdous
          </h1>
          <p className="text-xl text-muted-foreground">
            I build clean, accessible, and maintainable web applications — focused on problem solving, scalable backend systems, and seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
