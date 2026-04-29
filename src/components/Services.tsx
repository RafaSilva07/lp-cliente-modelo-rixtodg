import { services } from "../data/content";

export function Services() {
  return (
    <section id="servicos" className="px-5 py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rixto-blue">
              O que será feito
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Site profissional + tráfego pago para gerar mais presença e
              oportunidades.
            </h2>

            <p className="mt-5 text-lg leading-8 text-rixto-muted">
              A proposta é montar uma base digital para sua empresa parecer mais
              confiável e, ao mesmo tempo, criar caminhos para atrair pessoas
              interessadas no que você oferece.
            </p>
          </div>

          <div className="grid gap-5">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-rixto-dark/60 p-6"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rixto-blue/10 text-rixto-blue">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {service.title}
                      </h3>

                      <p className="mt-2 leading-7 text-rixto-muted">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}