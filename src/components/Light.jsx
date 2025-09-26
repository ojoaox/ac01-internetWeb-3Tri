import React from "react";

export default function Light({ color, active }) {
  return (
    <div
      className={`w-25 h-25 rounded-full m-2 border-4 border-zinc-600 transition-all duration-500 ${active ? color : "bg-zinc-600"
        }`}
    ></div>
  );
}
