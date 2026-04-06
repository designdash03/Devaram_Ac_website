import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import OfferBanner from "@/components/OfferBanner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <OfferBanner />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <HowItWorks />
        <Services />
        <StatsCounter />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
