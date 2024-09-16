export default function Cards() {
  const cardsData = [
    {
      id: "1",
      title: "aboutme",
      description: "Este portfolio que você está acessando atualmente foi desenvolvido usando ts + vite + react + tailwind",
      ref: "https://github.com/mathzds/aboutme",
    },
];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="inline-flex flex-col animate-shine max-w-[350px] w-full items-center justify-center rounded-xl text-sm border border-white/10 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-5 transition-colors"
        >
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="text-xl font-semibold text-neutral-200">
              {card.title}
            </h3>
            <p className="text-sm leading-[1.5] text-neutral-400">
              {card.description}
            </p>
          </div>
          <div>
            <a href={card.ref} className="inline-flex items-center justify-center rounded-xl text-sm border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2 font-medium text-neutral-400 transition-colors">
              Link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
