import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

const RunawayButton = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const runAway = useCallback(() => {
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 200;
    setPos({ x, y });
  }, []);

  return (
    <Button
      variant="outline"
      className="relative transition-transform duration-200 border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      onMouseEnter={runAway}
      onTouchStart={runAway}
      onClick={(e) => e.preventDefault()}
    >
      No 😢
    </Button>
  );
};

export default RunawayButton;
