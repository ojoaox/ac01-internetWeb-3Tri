import React, { useState, useEffect } from "react";
import Light from "../components/Light";

export default function Projeto1() {
  const [phase, setPhase] = useState("idle");
  const [activeIndex, setActiveIndex] = useState(0);

  const lights = ["bg-red-600", "bg-red-600", "bg-red-600", "bg-red-600"];

  useEffect(() => {
    let timer;
    if (phase === "countdown") {
      if (activeIndex < lights.length) {
        timer = setTimeout(() => setActiveIndex((prev) => prev + 1), 1000);
      } else {
        timer = setTimeout(() => setPhase("go"), 1000);
      }
    }
    return () => clearTimeout(timer);
  }, [phase, activeIndex, lights.length]);

  const startRace = () => {
    setActiveIndex(0);
    setPhase("countdown");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-850 text-white">
      <span className="flex flex-col items-center">
        <img className="w-25 h-25 mb-6" src="/raceFlag.png" alt="🏁" />
        <h1 className="text-3xl font-bold mb-6">Luzes de Corrida</h1>
      </span>

      <div className="flex bg-zinc-900 items-center justify-center gap-5 p-3 rounded-xl">
        {lights.map((color, index) => (
          <Light
            key={index}
            color={phase === "go" ? "bg-green-500" : color}
            active={phase === "go" || index < activeIndex}
          />
        ))}
      </div>

      {phase === "go" && <p className="text-4xl font-bold mt-6">GO!</p>}

      <button
        onClick={startRace}
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-400 rounded-lg font-semibold"
      >
        Iniciar Largada
      </button>
    </div>
  );
}
