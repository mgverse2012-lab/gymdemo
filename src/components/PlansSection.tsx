import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "5,000",
    period: "/month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Full gym access",
      "Basic equipment usage",
      "Locker room access",
      "AI chatbot support",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "8,000",
    period: "/month",
    description: "Most popular choice for serious fitness enthusiasts",
    features: [
      "Everything in Basic",
      "2 personal trainer sessions/month",
      "All group classes",
      "AI workout plans",
      "Progress tracking",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "12,000",
    period: "/month",
    description: "Ultimate package for maximum results",
    features: [
      "Everything in Premium",
      "Unlimited trainer sessions",
      "Custom nutrition plan",
      "Spa & sauna access",
      "Priority class booking",
      "Guest passes (2/month)",
    ],
    popular: false,
  },
];

const PlansSection = () => {
  return (
    <section id="plans" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium mb-4"
          >
            MEMBERSHIP PLANS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display mb-4"
          >
            CHOOSE YOUR <span className="energy-text">PLAN</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Flexible membership options to match your fitness goals and budget.
          </motion.p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary glow-effect"
                  : "glass-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-xs font-medium text-primary-foreground flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-display mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-display">Rs. {plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact">
                <Button
                  className={`w-full ${
                    plan.popular ? "energy-gradient border-0" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Annual Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card">
            <Sparkles className="w-5 h-5 text-primary" />
            <span>
              <strong>Annual Plan:</strong> Rs. 50,000/year - Save 30% with all Elite benefits!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansSection;
