import { Toaster } from "sonner";
import { Header } from "./components/site/Header";
import { Hero } from "./components/site/Hero";
import { WhyChooseUs } from "./components/site/WhyChooseUs";
import { About } from "./components/site/About";
import { Services } from "./components/site/Services";
import { Consultant } from "./components/site/Consultant";
import { Testimonials } from "./components/site/Testimonials";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";
import { FloatingButtons } from "./components/site/FloatingButtons";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Services />
        <Consultant />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <Toaster position="top-center" richColors />
    </div>
  );
}
