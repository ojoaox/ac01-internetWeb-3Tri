import React, { useState } from "react";
import Project1 from "./Project1/Project1.jsx";
import Project2 from "./Project2/Project2.jsx";
import Detalhes from "./Detalhes/Detalhes.jsx";

export default function App() {
    const [page, setPage] = useState("Detalhes");

    return (
        <div className="h-screen w-screen">
            <div className="absolute top-0 left-0 w-full flex justify-center gap-4 p-4 bg-zinc-600 text-white z-50">
                <button
                    onClick={() => setPage("Detalhes")}
                    className={`px-4 py-2 rounded ${page === "Detalhes" ? "bg-sky-600" : "bg-gray-400 hover:bg-gray-500 transition-all duration-400"}`}
                >
                    Detalhes
                </button>
                <button
                    onClick={() => setPage("Project1")}
                    className={`px-4 py-2 rounded ${page === "Project1" ? "bg-sky-600" : "bg-gray-400 hover:bg-gray-500 transition-all duration-400"}`}
                >
                    Largada
                </button>
                <button
                    onClick={() => setPage("Project2")}
                    className={`px-4 py-2 rounded ${page === "Project2" ? "bg-sky-600" : "bg-gray-400 hover:bg-gray-500 transition-all duration-400"}`}
                >
                    Reflexo
                </button>
            </div>

            {page === "Detalhes" && <Detalhes />}
            {page === "Project1" && <Project1 />}
            {page === "Project2" && <Project2 />}
        </div>
    );
}



