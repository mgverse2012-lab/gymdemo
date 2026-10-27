import { motion } from "framer-motion";
import { Bot, Dumbbell, Apple, TrendingUp, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Fitness Assistant",
    description: "24/7 intelligent chatbot for instant answers, workout guidance, and personalized fitness advice.",
  },
  {
    icon: Dumbbell,
    title: "AI Workout Plans",
    description: "Custom workout routines generated based on your age, goals, and experience level.",
  },
  {
    icon: Apple,
    title: "AI Diet Plans",
    description: "Pakistani food-friendly meal plans tailored to your goals - weight loss, muscle gain, or maintenance.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "BMI calculator, body progress estimator, and realistic timeline for your fitness goals.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Certified professionals specializing in strength, cardio, yoga, and functional training.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Open from 6 AM to 11 PM with classes throughout the day to fit your schedule.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium mb-4"
          >
            WHAT WE OFFER
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display mb-4"
          >
            POWERED BY <span className="energy-text">AI</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Experience the future of fitness with our AI-powered features designed to maximize your results.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
