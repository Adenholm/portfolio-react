import { useEffect, useRef } from "react";

import background1 from "../assets/images/backgorund-layers/background-1.png";
import background2 from "../assets/images/backgorund-layers/background-2.png";
import background3 from "../assets/images/backgorund-layers/background-3.png";
import background4 from "../assets/images/backgorund-layers/background-4.png";
import background5 from "../assets/images/backgorund-layers/background-5.png";
import background6 from "../assets/images/backgorund-layers/background-6.png";

const ParallaxBg = () => {
  const backgrounds = [
    { src: background1, depth: 0.02 },
    { src: background2, depth: 0.04 },
    { src: background3, depth: 0.06 },
    { src: background4, depth: 0.08 },
    { src: background5, depth: 0.10 },
    { src: background6, depth: 0.12 },
  ];

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Track mouse position (normalized -1 to 1)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      target.current = { x, y };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth animation loop (lerp)
  useEffect(() => {
    const smoothFactor = 0.05; // lower = smoother/slower catch-up

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * smoothFactor;
      current.current.y += (target.current.y - current.current.y) * smoothFactor;

      if (containerRef.current) {
        const layers = containerRef.current.querySelectorAll<HTMLElement>(".parallax-layer");
        layers.forEach((layer, i) => {
          const depth = backgrounds[i].depth;
          const translateX = current.current.x * depth * 300; // adjust intensity
          const translateY = current.current.y * depth * 300;
          layer.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.1)`;
        });
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [backgrounds]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden z-[-1] pointer-events-none"
    >
      {backgrounds.map((bg, i) => (
        <div
          key={i}
          className="parallax-layer absolute inset-0 will-change-transform"
          style={{
            zIndex: i - 10,
          }}
        >
          <img
            src={bg.src}
            alt={`background-${i}`}
            className="h-full w-full object-cover scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default ParallaxBg;
