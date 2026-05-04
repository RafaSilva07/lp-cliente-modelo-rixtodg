import { ArrowRight, CheckCircle2 } from "lucide-react";
import { highlights } from "../data/content";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-5 pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-rixto-blue/20 blur-3xl" />
        <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-purple-700/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-w-0">
          <div className="hero-reveal hero-reveal-left mb-6 inline-flex items-center gap-2 rounded-full border border-rixto-blue/30 bg-white/5 px-4 py-2 text-sm text-rixto-blueSoft">
            <CheckCircle2 size={16} />
            Seleção especial para os primeiros clientes modelo
          </div>

          <h1
            className="hero-reveal hero-reveal-left max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Sua empresa com mais presença, credibilidade e chances de atrair
            novos clientes.
          </h1>

          <p
            className="hero-reveal hero-reveal-left mt-6 max-w-2xl text-lg leading-8 text-rixto-muted"
            style={{ animationDelay: "160ms" }}
          >
            Estamos selecionando os primeiros clientes modelo da Rixto Digital
            para criação de sites profissionais e campanhas de tráfego pago com
            uma condição muito abaixo do valor de mercado.
          </p>

          <div
            className="hero-reveal hero-reveal-left mt-8 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-rixto-blue px-7 py-4 font-semibold text-rixto-dark shadow-glow transition hover:bg-rixto-blueSoft"
            >
              Quero ser cliente modelo
              <ArrowRight size={18} />
            </a>

            <a
              href="#oferta"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-rixto-blue/60 hover:bg-white/5"
            >
              Ver condição especial
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="hero-reveal hero-reveal-left rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  style={{ animationDelay: `${320 + index * 70}ms` }}
                >
                  <Icon className="mb-3 text-rixto-blue" size={22} />
                  <p className="text-sm leading-6 text-rixto-muted">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="hero-reveal hero-reveal-right rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur"
          style={{ animationDelay: "220ms" }}
        >
          <div className="rounded-[1.5rem] border border-rixto-blue/20 bg-rixto-dark/80 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rixto-blue">
              Oferta inicial
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Cliente modelo Rixto Digital
            </h2>

            <p className="mt-4 leading-7 text-rixto-muted">
              Uma oportunidade para empresas que querem começar ou melhorar sua
              presença digital pagando muito menos do que pagariam em um projeto
              tradicional.
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Site profissional para apresentar sua empresa",
                "Estratégia inicial de tráfego pago",
                "Condição especial abaixo do mercado",
                "Possibilidade de descontos em serviços futuros",
              ].map((text, index) => (
                <div
                  key={text}
                  className="hero-reveal hero-reveal-right flex gap-3"
                  style={{ animationDelay: `${380 + index * 65}ms` }}
                >
                  <CheckCircle2 className="mt-1 text-rixto-blue" size={18} />
                  <span className="text-rixto-muted">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-rixto-blue/10 p-5">
              <p className="text-sm text-rixto-blueSoft">
                Ideal para negócios locais, profissionais autônomos, prestadores
                de serviço e empresas que querem parecer mais profissionais na
                internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
