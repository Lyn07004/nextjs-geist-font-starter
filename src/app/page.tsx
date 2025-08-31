import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FinanceSection from "@/components/FinanceSection";
import ActuarialSection from "@/components/ActuarialSection";
import StrategicSection from "@/components/StrategicSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FinanceSection />
      <ActuarialSection />
      <StrategicSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
