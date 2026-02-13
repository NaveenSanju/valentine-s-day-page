import { useEffect, useMemo, useState } from "react";

const HeartRain = ({ trigger }: { trigger: boolean }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (trigger) {
      setShow(true);
      const t = setTimeout(() => setShow(false), 4000);
      return () => clearTimeout(t);
    }
  }, [trigger]);

  const hearts = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 16 + Math.random() * 28,
        delay: Math.random() * 1.5,
        duration: 1.5 + Math.random() * 2,
      })),
    []
  );

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute text-primary animate-heart-rain"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default HeartRain;
