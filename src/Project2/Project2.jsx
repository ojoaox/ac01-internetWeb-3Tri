import React, { useState, useEffect } from "react";
import Light from "../components/Light";

export default function Projeto2() {
  const [phase, setPhase] = useState("idle");
  const [activeIndex, setActiveIndex] = useState(0);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ player1: 0, player2: 0 });

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

  const startGame = () => {
    setActiveIndex(0);
    setPhase("countdown");
    setWinner(null);
  };

  const handleClick = (player) => {
    if (phase === "go" && !winner) {
      setWinner(player);
      setScore((prev) => ({
        ...prev,
        [player]: prev[player] + 1,
      }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-850 text-white">
      <span className="flex flex-col items-center">
        <img className="w-25 h-25 mb-6" src="/controle.png" alt="🎮" />
        <h1 className="text-3xl font-bold mb-6">Jogo de Reflexo</h1>
      </span>

      <div className="flex items-center justify-center gap-10 mb-6">
        <p className="text-5xl bg-red-600 py-6 px-8 font-bold rounded-xl">{score.player1}</p>
        <div className="flex bg-zinc-900 items-center justify-center gap-5 p-3 rounded-xl">
          {lights.map((color, index) => (
            <Light
              key={index}
              color={phase === "go" ? "bg-green-500" : color}
              active={phase === "go" || index < activeIndex}
            />
          ))}
        </div>
        <p className="text-5xl bg-blue-600 py-6 px-8 font-bold rounded-xl">{score.player2}</p>
      </div>

      {winner && (
        <p className="text-4xl font-bold mt-6">
          {winner === "player1" ? "🏆 Jogador 1 Venceu!" : "🏆 Jogador 2 Venceu!"}
        </p>
      )}

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => handleClick("player1")}
          className="text-xl px-7 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-semibold"
        >
          Jogador 1
        </button>
        <button
          onClick={() => handleClick("player2")}
          className="text-xl px-7 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
        >
          Jogador 2
        </button>
      </div>

      <div className="flex gap-4">
        <button
          onClick={startGame}
          className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold"
        >
          Nova Rodada
        </button>
        <button
          onClick={() => setScore({ player1: 0, player2: 0 })}
          className="mt-6 px-6 py-3 bg-zinc-500 hover:bg-zinc-600 rounded-lg font-semibold"
        >
          Reiniciar
        </button>

      </div>
    </div>
  );
}
