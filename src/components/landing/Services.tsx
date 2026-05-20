import { Building2, Home, Wrench } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Obras Comerciais",
    desc: "Construção e adequação de galpões, escritórios e lojas com foco em prazo e custo-benefício para o seu negócio.",
  },
  {
    icon: Home,
    title: "Obras Residenciais",
    desc: "Projetos residenciais de alto padrão, desde a fundação até o acabamento fino, entregando o lar dos seus sonhos.",
  },
  {
    icon: Wrench,
    title: "Reformas e Retrofit",
    desc: "Modernização de infraestruturas existentes, revitalização de fachadas e adequação às novas normas técnicas.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 px-5 bg-surface-soft text-center">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12">
          Nossos Serviços
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="bg-card rounded-lg p-10 shadow-[var(--shadow-card)] border-b-4 border-primary hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <s.icon className="w-8 h-8 text-primary-glow" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
