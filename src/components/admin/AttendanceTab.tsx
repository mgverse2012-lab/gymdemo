import { useState } from "react";
import { motion } from "framer-motion";
import { LogIn, LogOut, Search, QrCode, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { type AttendanceRecord, type Member } from "@/lib/adminData";

interface Props {
  attendance: AttendanceRecord[];
  members: Member[];
  onCheckIn: (member: string) => void;
}

const AttendanceTab = ({ attendance, members, onCheckIn }: Props) => {
  const { toast } = useToast();
  const [query, setQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("all");

  const dates = ["all", ...Array.from(new Set(attendance.map((a) => a.date)))];
  const filtered = attendance.filter(
    (a) =>
      (dateFilter === "all" || a.date === dateFilter) &&
      a.member.toLowerCase().includes(query.toLowerCase())
  );

  const checkIn = (member: string) => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
    onCheckIn(member);
    toast({ title: "Checked in", description: `${member} at ${time} (demo).` });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-display flex items-center gap-2">
          <CalendarClock className="w-5 h-5 text-primary" /> ATTENDANCE
        </h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search member…"
              className="pl-9 bg-muted border-border w-full sm:w-52"
            />
          </div>
          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="bg-muted border-border w-full sm:w-40"><SelectValue /></SelectTrigger>
            <SelectContent className="bg-card border-border">
              {dates.map((d) => (
                <SelectItem key={d} value={d}>{d === "all" ? "All dates" : d}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-3">Quick check-in</p>
        <div className="flex flex-wrap gap-2">
          {members.slice(0, 6).map((m) => (
            <Button
              key={m.id}
              variant="outline"
              size="sm"
              className="gap-1"
              onClick={() => checkIn(m.name)}
            >
              <LogIn className="w-3.5 h-3.5" /> {m.name.split(" ")[0]}
            </Button>
          ))}
          <Button variant="outline" size="sm" className="gap-1 text-primary" onClick={() => toast({ title: "QR check-in", description: "In the live version, members scan their QR code at the gate (demo)." })}>
            <QrCode className="w-3.5 h-3.5" /> QR check-in
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Member</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Check-in</TableHead>
              <TableHead>Check-out</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((a) => (
              <TableRow key={a.id}>
                <TableCell className="font-medium text-foreground">{a.member}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{a.date}</TableCell>
                <TableCell className="text-sm">{a.checkIn}</TableCell>
                <TableCell className="text-sm">
                  {a.checkOut === "—" ? (
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <LogOut className="w-3.5 h-3.5" /> still in
                    </span>
                  ) : a.checkOut}
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                  No attendance records match your filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};

export default AttendanceTab;
