import { Benefits } from "./components/Benefits";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ModelClients } from "./components/ModelClients";
import { Offer } from "./components/Offer";
import { Process } from "./components/Process";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <ModelClients />
        <Process />
        <Offer />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;