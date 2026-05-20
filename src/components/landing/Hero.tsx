export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="mt-[70px] min-h-[80vh] flex items-center justify-center text-center px-5 text-white relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 75, 135, 0.85), rgba(0, 115, 230, 0.75)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-tight">
          Soluções Sólidas para o seu Projeto
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Construindo o futuro com excelência técnica, segurança e pontualidade.
          A RR Engenharia transforma suas ideias em realidade.
        </p>
        <button
          onClick={scrollToContact}
          className="mt-10 inline-flex items-center px-10 py-4 rounded-md bg-white text-primary font-bold text-base hover:bg-surface-soft hover:-translate-y-0.5 transition-all shadow-lg"
        >
          Solicitar Orçamento Gratuito
        </button>
      </div>
    </section>
  );
}
