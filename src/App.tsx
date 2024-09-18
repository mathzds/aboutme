import MyDock from "./components/dock";
import Stack from "./components/stack";
import Cards from "./components/cards";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
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
