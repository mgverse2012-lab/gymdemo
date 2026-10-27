import { motion } from "framer-motion";
import { Dumbbell, UserCog, Users2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { trainers, classes } from "@/lib/adminData";

const TrainersClassesTab = () => {
  const { toast } = useToast();

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-display flex items-center gap-2">
            <UserCog className="w-5 h-5 text-primary" /> TRAINERS
          </h3>
          <Button variant="outline" className="gap-2" onClick={() => toast({ title: "Add trainer", description: "In the live version this opens a trainer profile form (demo)." })}>
            <Plus className="w-4 h-4" /> Add Trainer
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trainers.map((t) => (
            <div key={t.name} className="flex items-start gap-4 p-4 bg-muted/40 rounded-lg">
              <Avatar className="w-12 h-12 border border-primary/40">
                <AvatarFallback className="bg-primary/20 text-primary font-display text-lg">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.speciality} · {t.experience}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.schedule}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-display flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-primary" /> CLASSES
          </h3>
          <Button variant="outline" className="gap-2" onClick={() => toast({ title: "Create class", description: "In the live version this opens a class booking form (demo)." })}>
            <Plus className="w-4 h-4" /> Create Class
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((c) => (
            <div key={c.name} className="p-4 bg-muted/40 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-foreground">{c.name}</p>
                <Badge variant={c.status === "Full" ? "destructive" : "default"} className="text-xs">
                  {c.booked}/{c.capacity}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{c.slot} · {c.trainer}</p>
              <div className="flex items-center gap-2 mt-3">
                <Users2 className="w-3.5 h-3.5 text-muted-foreground" />
                <div className="h-2 rounded-full bg-muted overflow-hidden flex-1">
                  <div className="h-full energy-gradient rounded-full" style={{ width: `${(c.booked / c.capacity) * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">Demo mode — bookings are sample data.</p>
      </motion.div>
    </div>
  );
};

export default TrainersClassesTab;
