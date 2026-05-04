import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Offer() {
  return (
    <section id="oferta" className="px-5 py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-rixto-blue/20 bg-gradient-to-br from-rixto-purpleLight via-rixto-purple to-rixto-dark p-6 shadow-glow md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div data-reveal="left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rixto-blue">
              Condição especial
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Entre como cliente modelo e pague muito abaixo do valor de
              mercado.
            </h2>

            <p className="mt-5 text-lg leading-8 text-rixto-muted">
              Essa fase foi criada para empresas que querem crescer sua presença
              digital e, ao mesmo tempo, aproveitar uma oportunidade de começar
              com baixo investimento.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Site para transmitir mais credibilidade",
                "Tráfego pago de acordo com seu investimento",
                "Estrutura inicial para atrair mais interessados",
                "Descontos em próximos serviços se a parceria continuar",
              ].map((item, index) => (
                <div
                  key={item}
                  data-reveal={index % 2 === 0 ? "left" : "right"}
                  style={{ transitionDelay: `${140 + index * 70}ms` }}
                  className="flex gap-3 rounded-2xl bg-white/5 p-4"
                >
                  <CheckCircle2 className="mt-1 text-rixto-blue" size={18} />
                  <span className="text-sm leading-6 text-rixto-muted">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            data-reveal="right"
            style={{ transitionDelay: "160ms" }}
            className="rounded-[1.5rem] border border-white/10 bg-rixto-dark/70 p-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Para quem essa oportunidade é ideal?
            </h3>

            <div className="mt-6 space-y-4 text-rixto-muted">
              <p>Negócios locais que querem aparecer melhor na internet.</p>
              <p>
                Empresas que dependem de indicação, mas querem atrair mais
                pessoas.
              </p>
              <p>Profissionais que precisam transmitir mais confiança online.</p>
              <p>
                Marcas que ainda não têm site ou possuem uma presença digital
                fraca.
              </p>
            </div>

            <a
              href="#contato"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rixto-blue px-7 py-4 font-semibold text-rixto-dark transition hover:bg-rixto-blueSoft"
            >
              Quero aproveitar a condição
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
