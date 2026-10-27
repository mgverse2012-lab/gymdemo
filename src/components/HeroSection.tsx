import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Gym athlete training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Fitness Assistant</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.9] mb-6"
          >
            TRANSFORM YOUR{" "}
            <span className="energy-text">BODY</span>
            <br />
            TRANSFORM YOUR{" "}
            <span className="energy-text">LIFE</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8"
          >
            Join Pakistan's most advanced fitness center with AI-powered workout plans, 
            expert trainers, and 24/7 smart assistant to guide your fitness journey.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact">
              <Button size="lg" className="energy-gradient border-0 glow-effect text-lg px-8 h-14 gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#features">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                Explore Features
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50"
          >
            <div>
              <p className="text-3xl md:text-4xl font-display text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Active Members</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Expert Trainers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display text-primary">24/7</p>
              <p className="text-sm text-muted-foreground">AI Assistant</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Demo Badge */}
      <div className="absolute top-24 right-4 z-20">
        <div className="px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs font-medium text-primary">
          Demo Version
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
