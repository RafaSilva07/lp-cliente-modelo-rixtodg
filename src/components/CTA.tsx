import { ArrowRight } from "lucide-react";

const whatsappNumber = "5564993322259";

const message = encodeURIComponent(
  "Olá! Tenho interesse em ser cliente modelo da Rixto Digital e queria entender melhor a condição especial."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

export function CTA() {
  return (
    <section id="contato" className="px-5 py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-rixto-blue/20 bg-white/[0.06] p-8 text-center shadow-glow md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rixto-blue">
          Vagas limitadas
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Quer ser um dos primeiros clientes modelo?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-rixto-muted">
          Entre em contato para avaliarmos seu negócio, entender seu objetivo e
          verificar se sua empresa se encaixa nessa fase inicial da Rixto
          Digital.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-rixto-blue px-8 py-4 font-semibold text-rixto-dark transition hover:bg-rixto-blueSoft"
        >
          Chamar no WhatsApp
          <ArrowRight size={18} />
        </a>

        <p className="mt-5 text-sm text-rixto-muted">
          Atendimento inicial direto pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}
