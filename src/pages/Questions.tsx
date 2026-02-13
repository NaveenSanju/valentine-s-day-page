import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import RunawayButton from "@/components/RunawayButton";
import HeartRain from "@/components/HeartRain";
import FloatingHearts from "@/components/FloatingHearts";

const Questions = () => {
  const [step, setStep] = useState(0);
  const [heartRain, setHeartRain] = useState(false);
  const navigate = useNavigate();

  const handleYes = () => {
    setHeartRain(true);
    setTimeout(() => {
      setHeartRain(false);
      setStep((s) => s + 1);
    }, 2500);
  };

  const handleNext = () => setStep((s) => s + 1);

  const steps = [
    // Q1: Will you be my valentine?
    <div key={0} className="flex flex-col items-center gap-8">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center leading-tight">
        Will you be my valentine, <span className="text-primary">Mukki</span>? 💕
      </h2>
      <div className="flex items-center gap-6 min-h-[80px]">
        <Button
          size="lg"
          className="text-lg px-8"
          onClick={handleYes}
        >
          Yes! 🥰
        </Button>
        <RunawayButton />
      </div>
    </div>,

    // Q2: Do you love me?
    <div key={1} className="flex flex-col items-center gap-8">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center leading-tight">
        Do you love me <span className="text-primary">trueellllyyyy</span>?? 💖
      </h2>
      <div className="flex items-center gap-6 min-h-[80px]">
        <Button
          size="lg"
          className="text-lg px-8"
          onClick={handleYes}
        >
          Yes! 💗
        </Button>
        <RunawayButton />
      </div>
    </div>,

    // Q3: Favorite memory
    <div key={2} className="flex flex-col items-center gap-8 w-full max-w-md">
      <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center leading-tight">
        What's your favorite memory of us together? 🥹
      </h2>
      <Textarea
        placeholder="Write your favorite memory here..."
        className="min-h-[120px] text-base"
      />
      <Button size="lg" className="text-lg px-8" onClick={handleNext}>
        Next →
      </Button>
    </div>,

    // Q4: First thing
    <div key={3} className="flex flex-col items-center gap-8 w-full max-w-md">
      <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center leading-tight">
        What was the first thing that caught your eye about me? 😍
      </h2>
      <Textarea
        placeholder="Tell me everything..."
        className="min-h-[120px] text-base"
      />
      <Button
        size="lg"
        className="text-lg px-8"
        onClick={() => navigate("/final")}
      >
        Finish 💌
      </Button>
    </div>,
  ];

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4">
      <FloatingHearts />
      <HeartRain trigger={heartRain} />

      <main className="relative z-10 flex flex-col items-center w-full animate-fade-in-up">
        {steps[step]}
      </main>
    </div>
  );
};

export default Questions;
