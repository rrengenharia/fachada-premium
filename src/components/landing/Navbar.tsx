import { MessageCircle, HardHat } from "lucide-react";

export function Navbar() {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-[var(--shadow-glow)]">
            <HardHat className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-foreground font-bold text-lg tracking-tight">
            Construtora<span className="text-primary">.</span>
          </span>
        </a>

        <nav className="flex items-center gap-3">
          <button
            onClick={scrollToContact}
            className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Solicite seu Orçamento
          </button>
          <a
            href="https://wa.me/5571984289200"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-whatsapp text-whatsapp-foreground hover:opacity-90 transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Fale no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
