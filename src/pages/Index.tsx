import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FloatingHearts from "@/components/FloatingHearts";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4">
      <FloatingHearts />

      <main className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        {/* Big heart */}
        <div className="animate-pulse-glow mb-8 text-primary text-8xl md:text-9xl select-none">
          ♥
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Happy Valentine's Day
        </h1>

        {/* Message */}
        <p
          className="animate-fade-in-up mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md italic"
          style={{ animationDelay: "0.3s" }}
        >
          "You are my today and all of my tomorrows."
        </p>

        {/* Decorative divider */}
        <div
          className="animate-fade-in-up mt-8 flex items-center gap-3 text-primary/60"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="h-px w-12 bg-primary/30" />
          <span className="text-sm">♥</span>
          <span className="h-px w-12 bg-primary/30" />
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="animate-fade-in-up mt-10 text-lg px-10"
          style={{ animationDelay: "0.9s" }}
          onClick={() => navigate("/questions")}
        >
          I have something to ask you 💌
        </Button>
      </main>
    </div>
  );
};

export default Index;
