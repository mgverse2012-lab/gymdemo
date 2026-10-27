import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Search, Plus, Eye, RefreshCw, CreditCard, Calendar, Phone, Mail } from "lucide-react";
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
import {
  type Member, type Payment, type AttendanceRecord, type MemberStatus,
} from "@/lib/adminData";

interface Props {
  members: Member[];
  payments: Payment[];
  attendance: AttendanceRecord[];
  onAddMember: (m: Omit<Member, "id">) => void;
  onRenew: (id: string) => void;
  onRecordFee: (id: string) => void;
}

const statusVariant: Record<MemberStatus, "default" | "secondary" | "destructive"> = {
  Active: "default",
  Pending: "secondary",
  Expired: "destructive",
};

const MembersTab = ({ members, payments, attendance, onAddMember, onRenew, onRecordFee }: Props) => {
  const { toast } = useToast();
  const [query, setQuery] = useState("");
  const [viewing, setViewing] = useState<Member | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", plan: "Gold Monthly" });

  const filtered = members.filter(
    (m) =>
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.phone.replace(/\s/g, "").includes(query.replace(/\s/g, "")) ||
      m.plan.toLowerCase().includes(query.toLowerCase())
  );

  const handleAdd = () => {
    if (!form.name.trim()) {
      toast({ title: "Name is required", variant: "destructive" });
      return;
    }
    onAddMember({
      name: form.name.trim(),
      phone: form.phone.trim() || "—",
      email: form.email.trim() || "—",
      plan: form.plan,
      status: "Pending",
      joined: "Oct 27, 2026",
      expiry: "Nov 27, 2026",
      feesPaid: 0,
      feesDue: form.plan === "Gold Monthly" ? 8500 : 6500,
    });
    toast({ title: "Member added", description: `${form.name} was added as a pending member (demo).` });
    setForm({ name: "", phone: "", email: "", plan: "Gold Monthly" });
    setAdding(false);
  };

  const memberPayments = payments.filter((p) => p.member === viewing?.name);
  const memberAttendance = attendance.filter((a) => a.member === viewing?.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-display flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" /> MEMBER MANAGEMENT
        </h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, phone, plan…"
              className="pl-9 bg-muted border-border w-full sm:w-64"
            />
          </div>
          <Button className="energy-gradient border-0 gap-2" onClick={() => setAdding(true)}>
            <Plus className="w-4 h-4" /> Add Member
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Member</TableHead>
              <TableHead className="hidden md:table-cell">Contact</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Expiry</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((m) => (
              <TableRow key={m.id}>
                <TableCell>
                  <p className="font-medium text-foreground">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.id}</p>
                </TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground text-sm">{m.phone}</TableCell>
                <TableCell className="text-sm">{m.plan}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[m.status]} className="text-xs">{m.status}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell text-sm text-muted-foreground">{m.expiry}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="sm" className="h-8 px-2 gap-1" onClick={() => setViewing(m)}>
                      <Eye className="w-4 h-4" /> View
                    </Button>
                    {m.status !== "Active" && (
                      <Button variant="ghost" size="sm" className="h-8 px-2 gap-1 text-primary" onClick={() => { onRenew(m.id); toast({ title: "Membership renewed", description: `${m.name} is active until Nov 27, 2026 (demo).` }); }}>
                        <RefreshCw className="w-4 h-4" /> Renew
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                  No members match "{query}".
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Member profile dialog */}
      <Dialog open={!!viewing} onOpenChange={(open) => !open && setViewing(null)}>
        <DialogContent className="bg-card border-border max-w-lg max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">{viewing?.name}'s PROFILE</DialogTitle>
          </DialogHeader>
          {viewing && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: Phone, label: "Phone", value: viewing.phone },
                  { icon: Mail, label: "Email", value: viewing.email },
                  { icon: Users, label: "Plan", value: viewing.plan },
                  { icon: CreditCard, label: `Fees due`, value: viewing.feesDue ? `PKR ${viewing.feesDue.toLocaleString()}` : "Clear" },
                  { icon: Calendar, label: "Joined", value: viewing.joined },
                  { icon: Calendar, label: "Expiry", value: viewing.expiry },
                ].map((f) => (
                  <div key={f.label} className="p-3 bg-muted/40 rounded-lg">
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
                      <f.icon className="w-3 h-3" /> {f.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">{f.value}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Payment history</p>
                {memberPayments.length ? memberPayments.map((p) => (
                  <div key={p.id} className="flex items-center justify-between p-2 bg-muted/40 rounded-lg mb-2">
                    <div>
                      <p className="text-sm text-foreground">{p.item} · {p.method}</p>
                      <p className="text-xs text-muted-foreground">{p.date} · {p.status}</p>
                    </div>
                    <span className="text-sm font-semibold text-primary">PKR {p.amount.toLocaleString()}</span>
                  </div>
                )) : <p className="text-xs text-muted-foreground">No payments recorded in demo data.</p>}
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Attendance history</p>
                {memberAttendance.length ? memberAttendance.map((a) => (
                  <div key={a.id} className="flex items-center justify-between p-2 bg-muted/40 rounded-lg mb-2">
                    <p className="text-sm text-foreground">{a.date}</p>
                    <p className="text-xs text-muted-foreground">{a.checkIn} → {a.checkOut}</p>
                  </div>
                )) : <p className="text-xs text-muted-foreground">No check-ins recorded in demo data.</p>}
              </div>

              <DialogFooter>
                {viewing.feesDue > 0 && (
                  <Button
                    className="energy-gradient border-0"
                    onClick={() => { onRecordFee(viewing.id); toast({ title: "Fee recorded", description: `PKR ${viewing.feesDue.toLocaleString()} marked paid for ${viewing.name} (demo).` }); }}
                  >
                    Record Fee Payment
                  </Button>
                )}
                <Button variant="outline" onClick={() => setViewing(null)}>Close</Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Add member dialog */}
      <Dialog open={adding} onOpenChange={setAdding}>
        <DialogContent className="bg-card border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">ADD NEW MEMBER</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label className="text-sm text-muted-foreground">Full name</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-muted border-border mt-1" />
            </div>
            <div>
              <Label className="text-sm text-muted-foreground">Phone</Label>
              <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+92 3XX XXXXXXX" className="bg-muted border-border mt-1" />
            </div>
            <div>
              <Label className="text-sm text-muted-foreground">Email</Label>
              <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-muted border-border mt-1" />
            </div>
            <div>
              <Label className="text-sm text-muted-foreground">Plan</Label>
              <Select value={form.plan} onValueChange={(v) => setForm({ ...form, plan: v })}>
                <SelectTrigger className="bg-muted border-border mt-1"><SelectValue /></SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {["Gold Monthly", "Silver Monthly", "Platinum Annual", "Student Monthly"].map((p) => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAdding(false)}>Cancel</Button>
            <Button className="energy-gradient border-0" onClick={handleAdd}>Add Member</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default MembersTab;
