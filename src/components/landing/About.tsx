import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const values = [
  "Equipe técnica qualificada e certificada",
  "Materiais de primeira linha e fornecedores parceiros",
  "Cumprimento rigoroso de prazos e orçamentos",
  "Atendimento personalizado em cada projeto",
];

export function About() {
  return (
    <section id="quem-somos" className="py-24 sm:py-32 bg-card/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <img
                src={aboutImage}
                alt="Profissional da nossa equipe em obra"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block p-6 rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-[var(--shadow-glow)] max-w-[200px]">
              <div className="text-4xl font-bold text-primary-foreground">15+</div>
              <div className="text-sm text-primary-foreground/80 mt-1">
                anos transformando obras em legados
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Quem Somos
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Tradição, técnica e compromisso
            </h2>

            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Somos uma empresa de construção civil e manutenção predial dedicada a
                entregar excelência em cada projeto. Nossa história foi construída sobre
                o respeito ao cliente, à equipe e ao prazo combinado.
              </p>
              <p>
                Nossa missão é proteger e valorizar o seu patrimônio com serviços de
                pintura, fachada e impermeabilização executados com rigor técnico e
                acabamento impecável.
              </p>
            </div>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
