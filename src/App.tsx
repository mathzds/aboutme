import { useState, useEffect } from "react";
import FlickeringGrid from "./components/magicui/flickering-grid";
import MyDock from "./components/dock";
import Stack from "./components/stack";
import Cards from "./components/cards";

export default function Home() {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <FlickeringGrid
        className="z-0 fixed inset-0 w-full h-full"
        squareSize={2}
        gridGap={10}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={1.0}
        height={windowSize.height}
        width={windowSize.width}
      />

      <div className="flex z-10 flex flex-col items-center justify-center min-h-full p-4 my-auto">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-4">
          Pedro Machado
        </h2>
        <blockquote className="mx-2 mb-6 border-l-2 pl-6 italic">
          "Na paixão pela tecnologia, meu desejo de sempre querer ir além e me
          desafiar me impulsiona continuamente a melhorar."
        </blockquote>
        <MyDock />
        <Stack />
        <div className="mt-4">
          <h1 className="text-center text-xl font-bold mb-2">Projetos</h1>
          <Cards />
        </div>
      </div>
    </div>
  );
}
