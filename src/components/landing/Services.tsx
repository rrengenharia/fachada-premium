import { Paintbrush, Building2, Droplets, Wrench } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Pintura Geral",
    desc: "Pintura residencial e comercial de alta qualidade, com acabamento premium e materiais selecionados para máxima durabilidade.",
  },
  {
    icon: Building2,
    title: "Recuperação de Fachada",
    desc: "Restauração estrutural, reparo de trincas e limpeza profunda. Devolvemos vida e valorização ao seu imóvel.",
  },
  {
    icon: Droplets,
    title: "Impermeabilização",
    desc: "Vedação e impermeabilização avançada para telhados, paredes e estruturas, protegendo contra infiltrações.",
  },
  {
    icon: Wrench,
    title: "Serviços em Geral",
    desc: "Alvenaria, manutenção predial e reformas civis executadas por equipe técnica especializada e responsável.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Nossos Serviços
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Soluções completas para sua obra
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Atuamos em todas as frentes da construção e manutenção civil, com técnica,
            segurança e compromisso com o prazo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-[var(--shadow-card)]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-colors">
                <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
