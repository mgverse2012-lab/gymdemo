import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users, Wallet, UserPlus, Flame, LogOut, TrendingUp, MessageSquare, Star,
} from "lucide-react";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Legend,
} from "recharts";
import { Button } from "@/components/ui/button";
import { demoLogout } from "@/lib/demoAuth";

const revenueData = [
  { month: "Jun", revenue: 1250000 },
  { month: "Jul", revenue: 1380000 },
  { month: "Aug", revenue: 1210000 },
  { month: "Sep", revenue: 1490000 },
  { month: "Oct", revenue: 1620000 },
];

const signupsData = [
  { week: "W1", members: 12, trials: 20 },
  { week: "W2", members: 15, trials: 26 },
  { week: "W3", members: 9, trials: 18 },
  { week: "W4", members: 18, trials: 31 },
];

const leads = [
  { name: "Hassan Iqbal", interest: "Weight loss program", status: "Hot", contact: "+92 300 1112223" },
  { name: "Fatima Noor", interest: "Yoga & pilates classes", status: "Warm", contact: "+92 301 4445556" },
  { name: "Usman Tariq", interest: "Personal training", status: "Hot", contact: "+92 302 7778889" },
  { name: "Ayesha Malik", interest: "General membership", status: "Cold", contact: "+92 303 9990001" },
  { name: "Bilal Saeed", interest: "Strength training", status: "Warm", contact: "+92 304 2223334" },
];

const popularServices = [
  { service: "Personal Training", share: 34 },
  { service: "Group Classes", share: 26 },
  { service: "Weight Loss Program", share: 21 },
  { service: "Strength Programs", share: 19 },
];

const statusColor: Record<string, string> = {
  Hot: "text-destructive",
  Warm: "text-primary",
  Cold: "text-muted-foreground",
};

const AdminDashboardInner = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    demoLogout();
    navigate("/");
  };

  const stats = [
    { icon: Users, label: "Active Members", value: "524", sub: "+18 this week" },
    { icon: Wallet, label: "Monthly Revenue", value: "PKR 1.62M", sub: "+8.7% vs September" },
    { icon: UserPlus, label: "Free Trials", value: "31", sub: "this week" },
    { icon: Flame, label: "Hot Leads", value: "9", sub: "awaiting follow-up" },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-primary font-medium mb-1">ADMIN PANEL</p>
            <h1 className="text-4xl md:text-5xl font-display">
              GYM <span className="energy-text">OVERVIEW</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs font-medium text-primary">
              Demo Version — sample data
            </div>
            <Button variant="outline" className="gap-2" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Revenue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-display mb-1 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" /> MONTHLY REVENUE
            </h3>
            <p className="text-sm text-muted-foreground mb-6">PKR, last 5 months</p>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={revenueData}>
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

          {/* Signups */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-display mb-1">SIGNUPS & TRIALS</h3>
            <p className="text-sm text-muted-foreground mb-6">This month, per week</p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={signupsData}>
                <CartesianGrid stroke="hsl(0 0% 18%)" strokeDasharray="3 3" />
                <XAxis dataKey="week" stroke="hsl(0 0% 65%)" fontSize={12} />
                <YAxis stroke="hsl(0 0% 65%)" fontSize={12} allowDecimals={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(0 0% 7%)", border: "1px solid hsl(0 0% 18%)", borderRadius: 8 }}
                  labelStyle={{ color: "hsl(0 0% 98%)" }}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="members" name="New Members" fill="hsl(24 100% 55%)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="trials" name="Free Trials" fill="hsl(340 80% 55%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="glass-card p-6 lg:col-span-2"
          >
            <h3 className="text-xl font-display mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" /> RECENT LEADS
            </h3>
            <div className="space-y-3">
              {leads.map((l) => (
                <div key={l.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-muted/40 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{l.name}</p>
                    <p className="text-xs text-muted-foreground">{l.interest} · {l.contact}</p>
                  </div>
                  <span className={`text-sm font-semibold ${statusColor[l.status]} whitespace-nowrap`}>
                    {l.status} Lead
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">Demo mode — leads are AI-classified sample data.</p>
          </motion.div>

          {/* Popular services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-display mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" /> POPULAR SERVICES
            </h3>
            <div className="space-y-5">
              {popularServices.map((s) => (
                <div key={s.service}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground">{s.service}</span>
                    <span className="text-sm font-semibold text-primary">{s.share}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full energy-gradient rounded-full" style={{ width: `${s.share * 2.5}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardInner;
