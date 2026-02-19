export const AboutIntro = () => {
  return (
    <section className="bg-background">
      <div className="container-main h-screen flex items-center mt-10">
        <div className="max-w-4xl space-y-8">
          <p className="text-xl md:text-2xl text-muted-foreground leading-loose">
            TYN was founded after seeing the same pattern repeat across industries: not able to create real-world business impact through ecosystem-driven solutions.
          </p>

          <p className="text-xl md:text-2xl text-muted-foreground leading-loose">
            Leaders were investing in platforms, pilots, and partners — yet programs stalled between strategy decks and production systems. The problem wasn't a lack of tools or talent. It was the absence of ecosystem orchestration — the ability to align strategy, technology, partners, and execution into one operating rhythm.
          </p>

          <p className="text-xl md:text-2xl text-foreground leading-loose font-bold">
            That gap is where TYN was born.
          </p>
        </div>
      </div>
    </section>
  );
};
