import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryBar from "@/components/CategoryBar";
import FeaturedServices from "@/components/FeaturedServices";
import HowItWorks from "@/components/HowItWorks";
import StatsCounter from "@/components/StatsCounter";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import DownloadBanner from "@/components/DownloadBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import OfferBanner from "@/components/OfferBanner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <OfferBanner />
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryBar />
        <FeaturedServices />
        <HowItWorks />
        <StatsCounter />
        <WhyUs />
        <Testimonials />
        <DownloadBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
