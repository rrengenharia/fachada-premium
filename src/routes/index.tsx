import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { About } from "@/components/landing/About";
import { Contact } from "@/components/landing/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Construtora | Pintura, Fachada e Impermeabilização em Salvador" },
      {
        name: "description",
        content:
          "Empresa de construção civil e manutenção em Salvador-BA. Especialistas em pintura, recuperação de fachada e impermeabilização. Solicite seu orçamento.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
