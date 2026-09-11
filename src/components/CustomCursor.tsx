import { useEffect, useRef, useState } from 'react';

// Rubik's Cube Face Definitions (Standard Western Color Scheme)
const FACES = [
  { name: 'front', color: '#ef4444', transform: 'rotateY(0deg) translateZ(14px)' },    // Red
  { name: 'back', color: '#f97316', transform: 'rotateY(180deg) translateZ(14px)' },  // Orange
  { name: 'right', color: '#3b82f6', transform: 'rotateY(90deg) translateZ(14px)' },   // Blue
  { name: 'left', color: '#22c55e', transform: 'rotateY(-90deg) translateZ(14px)' },  // Green
  { name: 'top', color: '#f8fafc', transform: 'rotateX(90deg) translateZ(14px)' },     // White
  { name: 'bottom', color: '#eab308', transform: 'rotateX(-90deg) translateZ(14px)' }, // Yellow
];

const CubeFace = ({
  color,
  transform,
}: {
  color: string;
  transform: string;
}) => (
  <div
    className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-[1.5px] p-[1.5px] bg-[#0c0c0e] rounded-[3px] border border-[#1c1c20]"
    style={{
      transform,
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
    }}
  >
    {Array.from({ length: 9 }).map((_, i) => (
      <span
        key={i}
        className="rounded-[1.5px]"
        style={{
          backgroundColor: color,
          boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.45), 0 0 1px rgba(0, 0, 0, 0.6)',
        }}
      />
    ))}
  </div>
);

const CustomCursor = () => {
  const cubeWrapperRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const cubePos = useRef({ x: -100, y: -100 });
  const velocity = useRef({ x: 0, y: 0 });
  const rot = useRef({ x: -22, y: 32 });
  const twist = useRef(0);
  const targetTwist = useRef(0);
  const currentScale = useRef(1);

  // Sync state into refs for requestAnimationFrame
  const isHoveringRef = useRef(false);
  const isClickingRef = useRef(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    isHoveringRef.current = isHovering;
  }, [isHovering]);

  useEffect(() => {
    isClickingRef.current = isClicking;
  }, [isClicking]);

  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

  useEffect(() => {
    // Disable custom cursor on touch devices or reduced motion
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.body.classList.add('has-custom-cursor');

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        setIsVisible(true);
        cubePos.current.x = e.clientX;
        cubePos.current.y = e.clientY;
      }

      const prevX = mousePos.current.x;
      const prevY = mousePos.current.y;
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (prevX > -50) {
        velocity.current.x = (e.clientX - prevX) * 0.35;
        velocity.current.y = (e.clientY - prevY) * 0.35;
      }
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    const onMouseDown = () => {
      setIsClicking(true);
      targetTwist.current += 90; // Snappy 90deg twist on click!
    };

    const onMouseUp = () => {
      setIsClicking(false);
    };

    const onMouseOverInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, .glass-hover, .glass-card, [tabindex], label'
      );
      setIsHovering(!!interactive);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOverInteractive, { passive: true });

    // Smooth Animation Loop
    let animId: number;
    const animate = () => {
      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      // Smooth position follow (spring / lerp)
      cubePos.current.x += (targetX - cubePos.current.x) * 0.22;
      cubePos.current.y += (targetY - cubePos.current.y) * 0.22;

      // Dampen velocity tilt
      velocity.current.x *= 0.88;
      velocity.current.y *= 0.88;

      // Base idle rotation (faster when hovering interactive elements)
      const speed = isHoveringRef.current ? 1.8 : 0.6;
      rot.current.x += speed * 0.4;
      rot.current.y += speed * 0.7;

      // Smooth twist interpolation towards target 90deg increments
      twist.current += (targetTwist.current - twist.current) * 0.18;

      // Dynamic 3D tilt calculated from mouse velocity
      const tiltX = Math.max(-28, Math.min(28, -velocity.current.y * 1.5));
      const tiltY = Math.max(-28, Math.min(28, velocity.current.x * 1.5));

      const finalRotX = rot.current.x + tiltX;
      const finalRotY = rot.current.y + tiltY + twist.current;

      // Target scale: 0.82 when clicked, 1.25 when hovering, 1.0 default
      const targetScale = isClickingRef.current ? 0.82 : isHoveringRef.current ? 1.25 : 1.0;
      currentScale.current += (targetScale - currentScale.current) * 0.2;

      // Apply transforms
      if (cubeWrapperRef.current) {
        cubeWrapperRef.current.style.transform = `translate3d(${cubePos.current.x}px, ${cubePos.current.y}px, 0) scale(${currentScale.current})`;
      }

      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(${finalRotX}deg) rotateY(${finalRotY}deg)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOverInteractive);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div
        ref={cubeWrapperRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          width: 28,
          height: 28,
          marginLeft: -14,
          marginTop: -14,
          perspective: 800,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.25s ease',
          willChange: 'transform',
          filter: isHovering
            ? 'drop-shadow(0 0 12px rgba(168, 85, 247, 0.6)) drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
            : 'drop-shadow(0 4px 10px rgba(0,0,0,0.65))',
        }}
      >
        <div
          ref={cubeRef}
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          {FACES.map((face) => (
            <CubeFace key={face.name} color={face.color} transform={face.transform} />
          ))}
        </div>
      </div>

      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden md:block"
        style={{
          width: isHovering ? 6 : 4,
          height: isHovering ? 6 : 4,
          marginLeft: isHovering ? -3 : -2,
          marginTop: isHovering ? -3 : -2,
          borderRadius: '50%',
          backgroundColor: isHovering ? '#c084fc' : '#ffffff',
          boxShadow: isHovering
            ? '0 0 10px #a855f7, 0 0 4px #ffffff'
            : '0 0 6px rgba(255, 255, 255, 0.9), 0 0 2px rgba(0, 0, 0, 0.8)',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.2s ease, height 0.2s ease, margin 0.2s ease, opacity 0.25s ease, background-color 0.2s ease',
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CustomCursor;
