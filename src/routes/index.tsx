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
      { title: "RR ENGENHARIA | Impermeabilização, Fachadas e Reformas em Salvador" },
      {
        name: "description",
        content:
          "Especialistas em impermeabilização, recuperação de fachadas, obras comerciais e residenciais em Salvador e Região Metropolitana. Solicite seu orçamento.",
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
