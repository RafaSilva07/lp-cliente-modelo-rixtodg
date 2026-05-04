import { benefits } from "../data/content";

export function Benefits() {
  return (
    <section id="beneficios" className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl" data-reveal="left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rixto-blue">
            Por que isso importa?
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Hoje, quem não aparece bem na internet perde oportunidades.
          </h2>

          <p className="mt-5 text-lg leading-8 text-rixto-muted">
            Antes de chamar, comprar ou contratar, muitas pessoas pesquisam,
            comparam e observam se a empresa transmite confiança. Uma presença
            digital bem construída ajuda sua marca a ser levada mais a sério.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                data-reveal={index % 2 === 0 ? "left" : "right"}
                style={{ transitionDelay: `${120 + index * 80}ms` }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-rixto-blue/40 hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-rixto-blue/10 text-rixto-blue">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-rixto-muted">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
