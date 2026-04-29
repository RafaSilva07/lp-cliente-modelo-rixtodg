import { faqs } from "../data/content";

export function FAQ() {
  return (
    <section id="faq" className="px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rixto-blue">
            Dúvidas frequentes
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Antes de entrar como cliente modelo
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                <div className="flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-rixto-blue transition group-open:rotate-45">
                    +
                  </span>
                </div>
              </summary>

              <p className="mt-4 leading-7 text-rixto-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}