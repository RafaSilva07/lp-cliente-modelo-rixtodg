import { Benefits } from "./components/Benefits";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ModelClients } from "./components/ModelClients";
import { Offer } from "./components/Offer";
import { Process } from "./components/Process";
import { SectionReveal } from "./components/SectionReveal";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionReveal>
          <Benefits />
        </SectionReveal>
        <SectionReveal>
          <Services />
        </SectionReveal>
        <SectionReveal>
          <ModelClients />
        </SectionReveal>
        <SectionReveal>
          <Process />
        </SectionReveal>
        <SectionReveal>
          <Offer />
        </SectionReveal>
        <SectionReveal>
          <FAQ />
        </SectionReveal>
        <SectionReveal>
          <CTA />
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}

export default App;
