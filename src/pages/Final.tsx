import FloatingHearts from "@/components/FloatingHearts";

const Final = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4">
      {/* Extra dense hearts */}
      <FloatingHearts />
      <FloatingHearts />

      <main className="relative z-10 flex flex-col items-center text-center">
        <div className="animate-pulse-glow mb-6 text-primary text-9xl md:text-[10rem] select-none">
          ♥
        </div>
        <h1 className="animate-fade-in-up text-5xl md:text-7xl font-bold text-foreground leading-tight">
          I love you <span className="text-primary">always</span>
        </h1>
        <p
          className="animate-fade-in-up mt-6 text-xl text-muted-foreground italic"
          style={{ animationDelay: "0.4s" }}
        >
          Forever & ever, my Mukki 💕
        </p>
      </main>
    </div>
  );
};

export default Final;
