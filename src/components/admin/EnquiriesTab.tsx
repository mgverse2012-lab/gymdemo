import { motion } from "framer-motion";
import { MessageSquare, Phone, WhatsApp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { type Enquiry, whatsappLink } from "@/lib/adminData";

interface Props {
  enquiries: Enquiry[];
  onStatusChange: (name: string, status: Enquiry["status"]) => void;
}

const statusVariant: Record<Enquiry["status"], "destructive" | "default" | "secondary"> = {
  Hot: "destructive",
  Warm: "default",
  Cold: "secondary",
};

const EnquiriesTab = ({ enquiries, onStatusChange }: Props) => {
  const { toast } = useToast();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6"
    >
      <div className="mb-6">
        <h3 className="text-xl font-display flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary" /> ENQUIRIES & TRIAL BOOKINGS
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Website enquiries and free-trial requests, with AI-classified lead status.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {enquiries.map((e) => (
          <div key={e.name} className="p-4 bg-muted/40 rounded-lg">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <p className="font-medium text-foreground">{e.name}</p>
                <p className="text-xs text-muted-foreground">{e.interest} · {e.contact}</p>
              </div>
              <Badge variant={statusVariant[e.status]} className="text-xs">{e.status} Lead</Badge>
            </div>
            <p className="text-xs text-muted-foreground mb-3">{e.note} · {e.date}</p>
            <div className="flex flex-wrap items-center gap-2">
              <Select value={e.status} onValueChange={(v) => { onStatusChange(e.name, v as Enquiry["status"]); toast({ title: "Lead updated", description: `${e.name} marked as ${v} (demo).` }); }}>
                <SelectTrigger className="h-8 bg-muted border-border text-xs w-32"><SelectValue /></SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {(["Hot", "Warm", "Cold"] as const).map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <a href={whatsappLink(e.contact)} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <WhatsApp className="w-3.5 h-3.5" /> WhatsApp
                </Button>
              </a>
              <Button variant="ghost" size="sm" className="h-8 gap-1" onClick={() => toast({ title: "Follow-up logged", description: `Follow-up noted for ${e.name} (demo).` })}>
                <Phone className="w-3.5 h-3.5" /> Log follow-up
              </Button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default EnquiriesTab;
