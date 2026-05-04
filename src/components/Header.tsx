import logo from "../assets/logo.png";

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-rixto-dark/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a
          href="#inicio"
          aria-label="Rixto Digital"
          className="flex h-10 items-center overflow-hidden"
        >
          <img
            src={logo}
            alt="Rixto Digital"
            width="132"
            height="72"
            decoding="async"
            className="h-16 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-rixto-muted md:flex">
          <a href="#beneficios" className="transition hover:text-white">
            Benefícios
          </a>
          <a href="#servicos" className="transition hover:text-white">
            Serviços
          </a>
          <a href="#oferta" className="transition hover:text-white">
            Oferta
          </a>
          <a href="#faq" className="transition hover:text-white">
            Dúvidas
          </a>
        </nav>

        <a
          href="#contato"
          className="rounded-full bg-rixto-blue px-5 py-2 text-sm font-semibold text-rixto-dark transition hover:bg-rixto-blueSoft"
        >
          Quero participar
        </a>
      </div>
    </header>
  );
}
