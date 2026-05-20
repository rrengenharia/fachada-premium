import logoRR from "@/assets/logo-rr.png";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#contato", label: "Fale Conosco" },
];

export function Navbar() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
      <div className="max-w-[1200px] mx-auto px-5 h-[70px] flex items-center justify-between">
        <a href="#inicio" onClick={(e) => handleNav(e, "#inicio")} className="flex items-center gap-3">
          <img src={logoRR} alt="RR Engenharia" className="h-12 w-auto object-contain" />
        </a>

        <nav className="flex items-center gap-2 sm:gap-6">
          <div className="hidden md:flex items-center gap-7">
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
            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary-glow transition-colors"
          >
            Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
