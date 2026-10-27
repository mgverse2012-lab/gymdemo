import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PlansSection from "@/components/PlansSection";
import TrainersSection from "@/components/TrainersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PlansSection />
      <TrainersSection />
      <ContactSection />
      <Footer />
      <AIChatbot />
    </main>
  );
};

export default Index;
