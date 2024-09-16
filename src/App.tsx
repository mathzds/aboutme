import MyDock from "./components/dock";
import FlickeringGrid from "./components/magicui/flickering-grid";
import Stack from "./components/stack";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <FlickeringGrid
        className="z-0 fixed inset-0 w-full h-full"
        squareSize={2}
        gridGap={10}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={1.0}
        height={window.innerHeight}
        width={window.innerWidth}
      />

      <div className="flex-col relative z-10 flex items-center justify-center h-full">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Pedro Machado
        </h2>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          "Na paixão pela tecnologia, meu desejo de sempre querer ir além e me
          desafiar me impulsiona continuamente a melhorar."
        </blockquote>
        <MyDock />
        <Stack />
      </div>
    </div>
  );
}
