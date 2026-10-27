import { motion } from "framer-motion";
import { Award } from "lucide-react";

const trainers = [
  {
    name: "Ahmed Khan",
    specialty: "Strength & Muscle Building",
    experience: "5 years",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Ali",
    specialty: "Weight Loss & HIIT",
    experience: "3 years",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop",
  },
  {
    name: "Hassan Malik",
    specialty: "CrossFit & Functional",
    experience: "4 years",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
  },
  {
    name: "Fatima Zahra",
    specialty: "Yoga & Wellness",
    experience: "6 years",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
  },
];

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium mb-4"
          >
            MEET THE TEAM
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display mb-4"
          >
            EXPERT <span className="energy-text">TRAINERS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Certified professionals dedicated to helping you achieve your fitness goals.
          </motion.p>
        </div>

        {/* Trainers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group hover-lift"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-display">{trainer.name}</h3>
                <p className="text-primary text-sm mb-2">{trainer.specialty}</p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Award className="w-4 h-4" />
                  <span>{trainer.experience} experience</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
