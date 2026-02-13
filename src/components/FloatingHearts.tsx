import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 14 + Math.random() * 24,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 10,
      opacity: 0.3 + Math.random() * 0.5,
    })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-heart text-primary"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
