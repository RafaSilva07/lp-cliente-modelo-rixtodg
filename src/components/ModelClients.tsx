import { CheckCircle2 } from "lucide-react";

export function ModelClients() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rixto-blue">
            Clientes modelo
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Uma condição especial para quem entrar no início.
          </h2>

          <p className="mt-5 text-lg leading-8 text-rixto-muted">
            Os primeiros projetos serão tratados como cases iniciais da Rixto
            Digital. Por isso, os clientes selecionados terão acesso a uma
            condição muito abaixo do mercado, praticamente pagando apenas o custo
            de execução e estrutura.
          </p>

          <p className="mt-5 text-lg leading-8 text-rixto-muted">
            Em troca, buscamos negócios que estejam dispostos a validar o
            serviço, dar feedback e permitir que o projeto seja usado como
            exemplo de resultado e construção de presença digital.
          </p>
        </div>

        <div className="rounded-[2rem] border border-rixto-blue/20 bg-rixto-blue/10 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-white">
            Benefícios para os primeiros clientes
          </h3>

          <div className="mt-6 space-y-5">
            {[
              "Valor muito abaixo do preço praticado no mercado.",
              "Prioridade no atendimento e na construção do projeto.",
              "Possibilidade de manter descontos em próximos serviços.",
              "Chance de virar parceiro da Rixto Digital desde o início.",
              "Projeto pensado para transmitir mais profissionalismo e confiança.",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 text-rixto-blue" size={20} />
                <p className="leading-7 text-rixto-muted">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-rixto-dark/70 p-5">
            <p className="font-semibold text-white">Importante:</p>
            <p className="mt-2 leading-7 text-rixto-muted">
              Essa condição será limitada aos primeiros clientes modelo. Depois
              dessa fase, os valores tendem a seguir uma tabela mais próxima do
              mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}