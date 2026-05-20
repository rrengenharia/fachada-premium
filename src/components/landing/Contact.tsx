import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
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
      <section id="contato" className="bg-primary text-white py-20 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pronto para iniciar sua obra?
          </h2>
          <p className="text-white/85 mb-10">
            Preencha o formulário abaixo e um de nossos engenheiros entrará em contato em até 24 horas.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input
              required
              type="text"
              placeholder="Seu Nome"
              className="w-full px-4 py-4 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow"
            />
            <input
              required
              type="email"
              placeholder="Seu E-mail"
              className="w-full px-4 py-4 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow"
            />
            <input
              type="tel"
              placeholder="Seu Telefone"
              className="w-full px-4 py-4 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow"
            />
            <textarea
              required
              rows={5}
              placeholder="Descreva seu projeto..."
              className="w-full px-4 py-4 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 rounded-md bg-primary-glow hover:bg-primary-deep text-white font-bold text-base transition-colors"
            >
              {sent ? "Mensagem enviada!" : "Enviar Mensagem"}
            </button>
          </form>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-sm">
            <a href="tel:+5571984289200" className="flex flex-col items-center gap-2 hover:text-white/80 transition">
              <Phone className="w-5 h-5" />
              <span>(71) 98428-9200</span>
            </a>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Rua do Alecrim, 36C - Camaçari</span>
            </div>
            <a href="mailto:contato@rrengenharia.com" className="flex flex-col items-center gap-2 hover:text-white/80 transition">
              <Mail className="w-5 h-5" />
              <span>contato@rrengenharia.com</span>
            </a>
          </div>

          <a
            href="https://wa.me/5571984289200"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-whatsapp text-whatsapp-foreground font-semibold hover:opacity-90 transition"
          >
            <MessageCircle className="w-5 h-5" />
            Fale no WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-footer text-footer-foreground text-center py-6 text-sm px-5">
        © {new Date().getFullYear()} RR Engenharia. Todos os direitos reservados. · Rua do Alecrim, 36C - Camaçari · Construindo Confiança.
      </footer>
    </>
  );
}
