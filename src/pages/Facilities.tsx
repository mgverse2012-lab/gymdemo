import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Dumbbell,
  Bike,
  Users,
  HeartPulse,
  Lock,
  ShowerHead,
  Coffee,
  Car,
  Wifi,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import facilityGymFloor from "@/assets/facility-gym-floor.jpg";
import facilityCardio from "@/assets/facility-cardio.jpg";
import facilityStudio from "@/assets/facility-studio.jpg";
import facilitySpa from "@/assets/facility-spa.jpg";

const facilities = [
  {
    image: facilityGymFloor,
    title: "Strength Zone",
    description:
      "A massive free-weight floor built for serious lifting — from beginners to powerlifters.",
    tags: ["Olympic lifting platforms", "Dumbbells up to 60kg", "Power racks & benches"],
  },
  {
    image: facilityCardio,
    title: "Cardio Deck",
    description:
      "State-of-the-art cardio machines with skyline views to keep you motivated mile after mile.",
    tags: ["Treadmills & ellipticals", "Air bikes & rowers", "Panoramic city views"],
  },
  {
    image: facilityStudio,
    title: "Group Class Studio",
    description:
      "An energy-charged studio hosting 30+ classes every week across all fitness levels.",
    tags: ["HIIT & Spin", "Yoga & Pilates", "30+ classes weekly"],
  },
  {
    image: facilitySpa,
    title: "Sauna & Recovery",
    description:
      "Recover like a pro with our dedicated spa zone — because rest days build muscle too.",
    tags: ["Sauna & steam room", "Massage rooms", "Recovery lounge"],
  },
];

const amenities = [
  { icon: Lock, label: "Smart Lockers" },
  { icon: ShowerHead, label: "Rain Showers" },
  { icon: Coffee, label: "Protein Café" },
  { icon: Car, label: "Free Parking" },
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Clock, label: "Open 6AM - 11PM" },
];

const schedule = [
  { day: "Monday", className: "HIIT Blast", time: "6:00 PM", trainer: "Sarah Ali" },
  { day: "Tuesday", className: "Strength 101", time: "7:00 PM", trainer: "Ahmed Khan" },
  { day: "Wednesday", className: "Spin & Core", time: "6:30 PM", trainer: "Hassan Malik" },
  { day: "Thursday", className: "Powerlifting Club", time: "8:00 PM", trainer: "Ahmed Khan" },
  { day: "Friday", className: "HIIT Blast", time: "6:00 PM", trainer: "Sarah Ali" },
  { day: "Saturday", className: "Yoga Flow", time: "8:00 AM", trainer: "Fatima Zahra" },
  { day: "Sunday", className: "Mobility & Stretch", time: "9:00 AM", trainer: "Fatima Zahra" },
];

const Facilities = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-medium mb-4"
          >
            TAKE A LOOK INSIDE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display mb-6"
          >
            WORLD-CLASS <span className="energy-text">FACILITIES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            12,000 sq.ft of training space designed for every kind of athlete —
            explore every zone of BodystationPK.
          </motion.p>
        </div>
      </section>

      {/* Facility Zones */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group hover-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    {index === 0 && <Dumbbell className="w-5 h-5 text-primary" />}
                    {index === 1 && <Bike className="w-5 h-5 text-primary" />}
                    {index === 2 && <Users className="w-5 h-5 text-primary" />}
                    {index === 3 && <HeartPulse className="w-5 h-5 text-primary" />}
                    <h3 className="text-2xl font-display">{facility.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4">{facility.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {facility.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">EVERYTHING INCLUDED</p>
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              MEMBER <span className="energy-text">AMENITIES</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every detail taken care of, so you can focus on your workout.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 flex flex-col items-center text-center gap-3 hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <amenity.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">{amenity.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">WEEKLY SCHEDULE</p>
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              CLASS <span className="energy-text">TIMETABLE</span>
            </h2>
          </div>
          <div className="glass-card max-w-4xl mx-auto overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="px-6 py-4 font-medium">Day</th>
                    <th className="px-6 py-4 font-medium">Class</th>
                    <th className="px-6 py-4 font-medium">Time</th>
                    <th className="px-6 py-4 font-medium">Trainer</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row) => (
                    <tr
                      key={row.day}
                      className="border-b border-border/50 last:border-0 hover:bg-primary/5 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium">{row.day}</td>
                      <td className="px-6 py-4 text-primary">{row.className}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.time}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.trainer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="energy-gradient border-0 glow-effect text-lg px-8 h-14 gap-2">
                Book Your Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
