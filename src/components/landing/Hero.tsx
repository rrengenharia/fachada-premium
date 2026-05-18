import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Equipe profissional executando serviços de construção civil"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-foreground tracking-wide uppercase">
              Excelência em Construção Civil
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
            Construímos com{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              precisão
            </span>
            .
            <br />
            Mantemos com{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              cuidado
            </span>
            .
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Especialistas em pintura, recuperação de fachadas e impermeabilização.
            Entregamos durabilidade, acabamento impecável e a tranquilidade que sua obra merece.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold text-base shadow-[var(--shadow-glow)] hover:opacity-95 transition-all"
            >
              Solicite seu Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { n: "15+", l: "Anos de mercado" },
              { n: "500+", l: "Obras entregues" },
              { n: "100%", l: "Garantia" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl sm:text-4xl font-bold text-primary">{s.n}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
