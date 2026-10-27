import { motion } from "framer-motion";
import { Users, UserCheck, UserX, Wallet, TrendingUp, AlertCircle, Activity, UserPlus } from "lucide-react";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from "recharts";
import type { Member, Payment, AttendanceRecord } from "@/lib/adminData";
import { activityLog } from "@/lib/adminData";

interface Props {
  members: Member[];
  payments: Payment[];
  attendance: AttendanceRecord[];
}

const statusColor: Record<string, string> = {
  Hot: "text-destructive",
  Warm: "text-primary",
  Cold: "text-muted-foreground",
};

const OverviewTab = ({ members, payments, attendance }: Props) => {
  const active = members.filter((m) => m.status === "Active").length;
  const expired = members.filter((m) => m.status === "Expired").length;
  const pendingFees = members.reduce((sum, m) => sum + m.feesDue, 0);
  const todayAttendance = attendance.filter((a) => a.date === "Oct 27, 2026").length;
  const newRegistrations = members.filter((m) => m.joined.includes("Oct")).length;

  const stats = [
    { icon: Users, label: "Total Members", value: String(members.length + 516), sub: "demo club total" },
    { icon: UserCheck, label: "Active Members", value: String(active + 514), sub: `${active} shown in sample` },
    { icon: UserX, label: "Expired Members", value: String(expired), sub: "needs renewal call" },
    { icon: Activity, label: "Today's Attendance", value: String(todayAttendance), sub: `${newRegistrations} new registrations in Oct` },
    { icon: Wallet, label: "Monthly Revenue", value: "PKR 1.62M", sub: "+8.7% vs September" },
    { icon: AlertCircle, label: "Pending Fees", value: `PKR ${pendingFees.toLocaleString()}`, sub: "across sample members" },
  ];

  const upcomingExpiries = members
    .filter((m) => m.status !== "Expired")
    .slice(0, 4);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="glass-card p-6 hover-lift"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-2xl font-display text-foreground">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6 lg:col-span-2"
        >
          <h3 className="text-xl font-display mb-1 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" /> MONTHLY REVENUE
          </h3>
          <p className="text-sm text-muted-foreground mb-6">PKR, last 5 months</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart
              data={[
                { month: "Jun", revenue: 1250000 },
                { month: "Jul", revenue: 1380000 },
                { month: "Aug", revenue: 1210000 },
                { month: "Sep", revenue: 1490000 },
                { month: "Oct", revenue: 1620000 },
              ]}
            >
              <CartesianGrid stroke="hsl(0 0% 18%)" strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="hsl(0 0% 65%)" fontSize={12} />
              <YAxis
                stroke="hsl(0 0% 65%)"
                fontSize={12}
                tickFormatter={(v: number) => `${(v / 1000000).toFixed(1)}M`}
              />
              <Tooltip
                formatter={(v) => [`PKR ${Number(v).toLocaleString()}`, "Revenue"]}
                contentStyle={{ backgroundColor: "hsl(0 0% 7%)", border: "1px solid hsl(0 0% 18%)", borderRadius: 8 }}
                labelStyle={{ color: "hsl(0 0% 98%)" }}
              />
              <Line type="monotone" dataKey="revenue" stroke="hsl(24 100% 55%)" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6"
        >
          <h3 className="text-xl font-display mb-6 flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-primary" /> UPCOMING EXPIRIES
          </h3>
          <div className="space-y-3">
            {upcomingExpiries.map((m) => (
              <div key={m.id} className="p-3 bg-muted/40 rounded-lg">
                <p className="font-medium text-foreground text-sm">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.plan} · expires {m.expiry}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="glass-card p-6"
      >
        <h3 className="text-xl font-display mb-6 flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary" /> RECENT ACTIVITY
        </h3>
        <div className="space-y-3">
          {activityLog.slice(0, 4).map((a) => (
            <div key={a.action + a.time} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 bg-muted/40 rounded-lg">
              <div>
                <p className="font-medium text-foreground text-sm">{a.action}</p>
                <p className="text-xs text-muted-foreground">{a.detail}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{a.time}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">Demo mode — sample data for illustration.</p>
      </motion.div>
    </div>
  );
};

export default OverviewTab;
