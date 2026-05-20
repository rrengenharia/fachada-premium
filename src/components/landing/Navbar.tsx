const links = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Quem Somos" },
];

export function Navbar() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1200px] mx-auto px-5 py-5 flex items-center justify-between">
        <a
          href="#inicio"
          onClick={(e) => handleNav(e, "#inicio")}
          className="text-2xl font-black tracking-tight text-primary"
        >
          RR <span className="text-primary-glow font-bold">ENGENHARIA</span>
        </a>

        <nav className="flex items-center">
          <div className="hidden md:flex items-center gap-7 mr-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="text-sm font-semibold text-foreground hover:text-primary-glow transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contato"
            onClick={(e) => handleNav(e, "#contato")}
            className="inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary-glow hover:scale-105 transition-all"
          >
            Solicite Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
