import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (demo mode)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you! Our team will contact you shortly for your free trial. 💪");
    setFormData({ name: "", phone: "", goal: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: "Gulberg III, Lahore, Pakistan",
      subtitle: "(Demo Location)",
    },
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      value: "+92 300 1234567",
      subtitle: "24/7 Support",
    },
    {
      icon: Clock,
      title: "Timings",
      value: "6 AM - 11 PM (Mon-Sat)",
      subtitle: "8 AM - 8 PM (Sunday)",
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium mb-4"
          >
            GET IN TOUCH
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display mb-4"
          >
            START YOUR <span className="energy-text">JOURNEY</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Book your free trial session today and take the first step towards a healthier you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-display mb-6">Book Free Trial</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Your Name</label>
                <Input
                  type="text"
                  placeholder="e.g. Ahmed Khan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted border-border"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="e.g. 0300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-muted border-border"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Fitness Goal</label>
                <Input
                  type="text"
                  placeholder="e.g. Lose weight, Build muscle"
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  required
                  className="bg-muted border-border"
                />
              </div>
              <Button
                type="submit"
                className="w-full energy-gradient border-0 glow-effect h-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Book Free Trial
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Or contact directly:</p>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.title}</p>
                  <p className="text-lg font-semibold">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <div className="glass-card h-48 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm">Demo Location</p>
                <p className="text-xs">Gulberg III, Lahore</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
