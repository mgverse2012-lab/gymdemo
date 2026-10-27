import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="pt-16 pb-8 relative">
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-medium mb-4"
          >
            GET IN TOUCH
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display mb-6"
          >
            WE'RE HERE <span className="energy-text">FOR YOU</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Questions about memberships, classes or training? Send us a message
            or walk in — the first trial session is always free.
          </motion.p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Contact;
