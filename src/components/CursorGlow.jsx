import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 h-32 w-32 rounded-full bg-purple-500 opacity-30 blur-2xl transition-transform duration-200 ease-in"
      style={{
        transform: `translate(${position.x - 64}px, ${position.y - 64}px)`,
      }}
    />
  );
}
