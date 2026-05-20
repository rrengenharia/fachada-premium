import { Droplets, Building, Building2, Home } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Impermeabilização",
    desc: "Impermeabilização em Salvador e regiões metropolitanas com laudo técnico e materiais de alta performance.",
  },
  {
    icon: Building,
    title: "Recuperação e Manutenção de Fachadas",
    desc: "Laudo, reparo e manutenção de fachadas para garantir a estética e segurança estrutural do seu condomínio ou prédio.",
  },
  {
    icon: Building2,
    title: "Obras Comerciais",
    desc: "Construção e adequação de galpões, escritórios e lojas com foco em prazo e custo-benefício para o seu negócio.",
  },
  {
    icon: Home,
    title: "Obras Residenciais",
    desc: "Reformas residenciais de alto padrão, desde a fundação até o acabamento fino, entregando o lar dos seus sonhos.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 px-5 bg-surface-soft text-center">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-[2.2rem] font-bold text-primary mb-12 max-w-3xl mx-auto">
          Especialistas em Reformas em Geral, Impermeabilização e Fachadas
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)] border-b-4 border-primary-glow hover:-translate-y-2 hover:border-primary hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
