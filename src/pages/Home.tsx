import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrainersSection from "@/components/TrainersSection";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TrainersSection />

      {/* CTA Band */}
      <section className="py-24 relative bg-card/30">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-primary font-medium mb-4">NO EXCUSES</p>
          <h2 className="text-4xl md:text-6xl font-display mb-4">
            READY TO <span className="energy-text">START?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Book your free trial session today and see why 500+ members chose
            BodystationPK as their second home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="energy-gradient border-0 glow-effect text-lg px-8 h-14 gap-2">
                Book Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/plans">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                View Membership Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
