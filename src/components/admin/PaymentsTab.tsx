import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Plus, Receipt, Banknote, Wallet, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { type Payment, type Member } from "@/lib/adminData";

interface Props {
  payments: Payment[];
  members: Member[];
  onRecord: (p: Omit<Payment, "id">) => void;
}

const statusVariant: Record<Payment["status"], "default" | "secondary" | "destructive" | "outline"> = {
  Paid: "default",
  Pending: "secondary",
  Partial: "outline",
  Overdue: "destructive",
};

const PaymentsTab = ({ payments, members, onRecord }: Props) => {
  const { toast } = useToast();
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ member: "", item: "", amount: "", method: "Cash" });

  const totals = {
    paid: payments.filter((p) => p.status === "Paid").reduce((s, p) => s + p.amount, 0),
    pending: payments.filter((p) => p.status === "Pending").reduce((s, p) => s + p.amount, 0),
    overdue: payments.filter((p) => p.status === "Overdue").reduce((s, p) => s + p.amount, 0),
  };

  const handleRecord = () => {
    const amount = Number(form.amount);
    if (!form.member || !amount) {
      toast({ title: "Pick a member and enter an amount", variant: "destructive" });
      return;
    }
    onRecord({
      member: form.member,
      item: form.item.trim() || "Membership fee",
      amount,
      method: form.method as Payment["method"],
      status: "Paid",
      date: "Oct 27, 2026",
    });
    toast({ title: "Payment recorded", description: `${form.method} · PKR ${amount.toLocaleString()} for ${form.member} (demo).` });
    setForm({ member: "", item: "", amount: "", method: "Cash" });
    setAdding(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { icon: Receipt, label: "Collected (Oct)", value: `PKR ${totals.paid.toLocaleString()}` },
          { icon: Wallet, label: "Pending", value: `PKR ${totals.pending.toLocaleString()}` },
          { icon: AlertTriangle, label: "Overdue", value: `PKR ${totals.overdue.toLocaleString()}` },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="glass-card p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-2xl font-display text-foreground">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="glass-card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-display flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" /> PAYMENTS & FEES
          </h3>
          <Button className="energy-gradient border-0 gap-2" onClick={() => setAdding(true)}>
            <Plus className="w-4 h-4" /> Record Payment
          </Button>
        </div>

        <div className="overflow-x-auto rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead className="hidden md:table-cell">Item</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium text-foreground">{p.member}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground text-sm">{p.item}</TableCell>
                  <TableCell className="text-sm">
                    <span className="inline-flex items-center gap-1">
                      <Banknote className="w-3.5 h-3.5 text-muted-foreground" /> {p.method}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm font-semibold text-primary">PKR {p.amount.toLocaleString()}</TableCell>
                  <TableCell><Badge variant={statusVariant[p.status]} className="text-xs">{p.status}</Badge></TableCell>
                  <TableCell className="hidden md:table-cell text-sm text-muted-foreground">{p.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Demo mode — cash, bank transfer and card entries are sample data. No real payments are processed.
        </p>
      </div>

      <Dialog open={adding} onOpenChange={setAdding}>
        <DialogContent className="bg-card border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">RECORD PAYMENT</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label className="text-sm text-muted-foreground">Member</Label>
              <Select value={form.member} onValueChange={(v) => setForm({ ...form, member: v })}>
                <SelectTrigger className="bg-muted border-border mt-1"><SelectValue placeholder="Select member" /></SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {members.map((m) => (
                    <SelectItem key={m.id} value={m.name}>{m.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm text-muted-foreground">Item</Label>
              <Input value={form.item} onChange={(e) => setForm({ ...form, item: e.target.value })} placeholder="e.g. Gold Monthly" className="bg-muted border-border mt-1" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm text-muted-foreground">Amount (PKR)</Label>
                <Input type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} className="bg-muted border-border mt-1" />
              </div>
              <div>
                <Label className="text-sm text-muted-foreground">Method</Label>
                <Select value={form.method} onValueChange={(v) => setForm({ ...form, method: v })}>
                  <SelectTrigger className="bg-muted border-border mt-1"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {["Cash", "Bank Transfer", "Card"].map((m) => (
                      <SelectItem key={m} value={m}>{m}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAdding(false)}>Cancel</Button>
            <Button className="energy-gradient border-0" onClick={handleRecord}>Save Payment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default PaymentsTab;
