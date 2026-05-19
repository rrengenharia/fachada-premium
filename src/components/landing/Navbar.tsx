import { MessageCircle } from "lucide-react";

export function Navbar() {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-lg bg-white p-1.5 flex items-center justify-center shadow-[var(--shadow-glow)]">
            <img
              src="https://images.tcdn.com.br/img/img_prod/1169339/1709241904_1.jpg"
              alt="RR Engenharia"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-foreground font-bold text-lg tracking-tight">
            RR <span className="text-primary">ENGENHARIA</span>
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
