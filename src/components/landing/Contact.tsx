import { Phone, MapPin, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const info = [
  { icon: Phone, label: "Telefone", value: "(71) 98428-9200", href: "tel:+5571984289200" },
  { icon: MapPin, label: "Localização", value: "Salvador - BA\n[Endereço completo]" },
  { icon: Mail, label: "E-mail", value: "contato@empresa.com", href: "mailto:contato@empresa.com" },
  { icon: Clock, label: "Horário de Atendimento", value: "Seg a Sex: 08h às 17h\nSábado: 08h às 12h" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contato" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Fale Conosco
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Vamos conversar sobre sua obra
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Solicite um orçamento sem compromisso. Respondemos em até 24h úteis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {info.map((item) => {
              const Content = (
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
                  <div className="w-11 h-11 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="mt-1 text-foreground font-medium whitespace-pre-line">
                      {item.value}
                    </div>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} className="block">{Content}</a>
              ) : (
                <div key={item.label}>{Content}</div>
              );
            })}

            <a
              href="https://wa.me/5571984289200"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-whatsapp text-whatsapp-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Conversar pelo WhatsApp
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] space-y-5"
          >
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Nome</label>
              <input
                required
                type="text"
                placeholder="Seu nome completo"
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">E-mail</label>
              <input
                required
                type="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Mensagem</label>
              <textarea
                required
                rows={5}
                placeholder="Conte-nos sobre o seu projeto..."
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold shadow-[var(--shadow-glow)] hover:opacity-95 transition"
            >
              {sent ? "Mensagem enviada!" : "Enviar Mensagem"}
              {!sent && <Send className="w-4 h-4" />}
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-24 border-t border-border pt-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Construtora. Todos os direitos reservados.
        </div>
      </footer>
    </section>
  );
}
