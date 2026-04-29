export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-rixto-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Rixto Digital. Presença digital que gera
          oportunidades.
        </p>

        <div className="flex gap-5">
          <a href="#inicio" className="transition hover:text-white">
            Início
          </a>
          <a href="#servicos" className="transition hover:text-white">
            Serviços
          </a>
          <a href="#contato" className="transition hover:text-white">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}