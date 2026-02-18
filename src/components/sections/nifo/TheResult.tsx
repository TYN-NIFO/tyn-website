const positives = [
  'AI initiatives that ship.',
  'Architectures that scale.',
  'Teams that learn to operate independently.',
];

const negatives = [
  'Not pilots that never scale.',
  'Not innovation theater.',
  'Not IT projects disguised as transformation.',
];

export const TheResult = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 tracking-widest">
          THE RESULT
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-12">
          The result
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          {/* Positive outcomes */}
          <div className="space-y-6">
            {positives.map((p) => (
              <p key={p} className="text-xl font-display font-semibold text-foreground leading-snug">
                {p}
              </p>
            ))}
          </div>

          {/* Negative outcomes */}
          <div className="space-y-6">
            {negatives.map((n) => (
              <p key={n} className="text-xl text-muted-foreground line-through leading-snug">
                {n}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
