import { Check } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const features = [
  {
    title: "Rigor nos Prazos",
    desc: "Utilizamos metodologias avançadas de gestão de projetos para garantir que sua obra seja entregue exatamente no prazo estipulado em contrato.",
  },
  {
    title: "Qualidade Superior",
    desc: "Trabalhamos apenas com materiais certificados e fornecedores homologados, garantindo a durabilidade e segurança da estrutura.",
  },
  {
    title: "Engenharia Transparente",
    desc: "Você acompanha cada etapa da obra com relatórios semanais, cronogramas atualizados e controle financeiro rigoroso.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-20 px-5">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 w-full rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
          <img
            src={aboutImage}
            alt="Equipe RR Engenharia em obra"
            loading="lazy"
            className="w-full h-auto block"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
            Por que escolher a RR Engenharia?
          </h2>

          <div className="space-y-6">
            {features.map((f) => (
              <div key={f.title}>
                <h4 className="flex items-center gap-2 text-lg font-semibold text-primary mb-1">
                  <Check className="w-5 h-5 text-primary-glow" />
                  {f.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
