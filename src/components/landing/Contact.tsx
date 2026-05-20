import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <section id="contato" className="bg-primary text-white py-20 px-5">
        <div className="max-w-[600px] mx-auto bg-card text-foreground rounded-lg p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
          <h2 className="text-3xl font-bold text-primary mb-2 text-center">
            Solicite Orçamento
          </h2>
          <p className="text-muted-foreground mb-8 text-center">
            Preencha os dados abaixo de forma rápida. Nossa equipe de engenheiros entrará em contato em breve.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              required
              type="text"
              placeholder="Seu Nome Completo"
              className="w-full px-4 py-4 rounded-md border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow"
            />
            <input
              required
              type="tel"
              placeholder="Seu Telefone / WhatsApp"
              className="w-full px-4 py-4 rounded-md border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow"
            />
            <select
              required
              defaultValue=""
              className="w-full px-4 py-4 rounded-md border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow"
            >
              <option value="" disabled>Selecione o Tipo de Serviço</option>
              <option>Impermeabilização</option>
              <option>Recuperação de Fachadas</option>
              <option>Obras Comerciais</option>
              <option>Obras e Reformas Residenciais</option>
              <option>Outros Serviços</option>
            </select>
            <button
              type="submit"
              className="w-full py-4 rounded-md bg-primary-glow hover:bg-primary-deep text-white font-bold uppercase transition-colors"
            >
              {sent ? "Solicitação enviada!" : "Solicitar Orçamento Agora"}
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-footer text-footer-foreground text-center py-10 px-5">
        <div className="text-3xl font-black tracking-tight mb-3">
          <span className="text-white">RR </span>
          <span className="text-primary-glow">ENGENHARIA</span>
        </div>
        <p className="text-sm text-footer-foreground/80">
          Atendimento em Salvador e Região Metropolitana
        </p>
        <p className="mt-5 pt-5 border-t border-white/10 text-sm">
          © {new Date().getFullYear()} RR Engenharia. Todos os direitos reservados. · Construindo Confiança.
        </p>
      </footer>

      <a
        href="https://wa.me/5571984289200"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-8 right-8 w-15 h-15 p-4 rounded-full bg-whatsapp text-whatsapp-foreground shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform z-50 flex items-center justify-center"
        style={{ width: 60, height: 60 }}
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </>
  );
}
