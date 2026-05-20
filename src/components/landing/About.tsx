import aboutImage from "@/assets/about-team.jpg";

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
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            Sobre a RR ENGENHARIA
          </h2>
          <p className="text-lg text-muted-foreground mb-5 text-justify leading-relaxed">
            Somos especialistas em engenharia civil, com forte atuação em toda a Região
            Metropolitana de Salvador. Nosso compromisso é entregar obras com máxima
            qualidade, alinhando excelência técnica à absoluta pontualidade.
          </p>
          <p className="text-lg text-muted-foreground text-justify leading-relaxed">
            Entendemos que cada projeto, seja uma reforma residencial, recuperação de
            fachada ou uma nova obra comercial, é um sonho ou um investimento crucial
            para nossos clientes. Por isso, baseamos nosso trabalho na confiança e
            transparência, utilizando materiais certificados e oferecendo acompanhamento
            rigoroso do início ao fim da obra.
          </p>
        </div>
      </div>
    </section>
  );
}
