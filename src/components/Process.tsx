import { processSteps } from "../data/content";

export function Process() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rixto-blue">
            Como funciona
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Um processo simples para tirar sua presença digital do papel.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="text-4xl font-bold text-rixto-blue/70">
                {step.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-rixto-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}