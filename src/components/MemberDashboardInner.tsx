import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp, Calendar, CreditCard, Dumbbell, User, LogOut, CheckCircle2, Target, Flame,
} from "lucide-react";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar,
} from "recharts";
import { Button } from "@/components/ui/button";
import { demoLogout, DEMO_CREDENTIALS } from "@/lib/demoAuth";

const weightData = [
  { month: "Jan", weight: 92 },
  { month: "Feb", weight: 89.5 },
  { month: "Mar", weight: 87 },
  { month: "Apr", weight: 85.5 },
  { month: "May", weight: 83 },
  { month: "Jun", weight: 81.5 },
];

const attendanceData = [
  { week: "W1", sessions: 4 },
  { week: "W2", sessions: 5 },
  { week: "W3", sessions: 3 },
  { week: "W4", sessions: 6 },
];

const bookedClasses = [
  { name: "HIIT Blast", day: "Mon · 6:00 PM", trainer: "Bilal Khan" },
  { name: "Strength Lab", day: "Wed · 7:30 AM", trainer: "Sara Ahmed" },
  { name: "Spin Cycle", day: "Fri · 8:00 PM", trainer: "Omar Farooq" },
];

const upcomingPayments = [
  { item: "Gold Monthly Membership", due: "Nov 5, 2026", amount: "PKR 8,500" },
  { item: "Personal Training (4 sessions)", due: "Nov 12, 2026", amount: "PKR 6,000" },
];

const MemberDashboardInner = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: DEMO_CREDENTIALS.member.name,
    email: DEMO_CREDENTIALS.member.email,
    phone: "+92 300 1234567",
    goal: "Fat loss & muscle tone",
    plan: "Gold Monthly",
    joined: "Mar 12, 2026",
  });

  const handleLogout = () => {
    demoLogout();
    navigate("/");
  };

  const stats = [
    { icon: TrendingUp, label: "Weight Lost", value: "-10.5 kg", sub: "since January" },
    { icon: Calendar, label: "Sessions This Month", value: "18", sub: "of 20 planned" },
    { icon: Flame, label: "Calories Burned", value: "9,240", sub: "this month" },
    { icon: Target, label: "Goal Progress", value: "78%", sub: "target: 80 kg" },
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
            <p className="text-primary font-medium mb-1">MEMBER AREA</p>
            <h1 className="text-4xl md:text-5xl font-display">
              WELCOME BACK, <span className="energy-text">AHMED</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Weight chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 lg:col-span-2"
          >
            <h3 className="text-xl font-display mb-1 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" /> WEIGHT PROGRESS
            </h3>
            <p className="text-sm text-muted-foreground mb-6">Last 6 months (kg)</p>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={weightData}>
                <CartesianGrid stroke="hsl(0 0% 18%)" strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="hsl(0 0% 65%)" fontSize={12} />
                <YAxis domain={[75, 95]} stroke="hsl(0 0% 65%)" fontSize={12} />
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(0 0% 7%)", border: "1px solid hsl(0 0% 18%)", borderRadius: 8 }}
                  labelStyle={{ color: "hsl(0 0% 98%)" }}
                />
                <Line type="monotone" dataKey="weight" stroke="hsl(24 100% 55%)" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Attendance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-display mb-1">WEEKLY SESSIONS</h3>
            <p className="text-sm text-muted-foreground mb-6">This month</p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={attendanceData}>
                <CartesianGrid stroke="hsl(0 0% 18%)" strokeDasharray="3 3" />
                <XAxis dataKey="week" stroke="hsl(0 0% 65%)" fontSize={12} />
                <YAxis stroke="hsl(0 0% 65%)" fontSize={12} allowDecimals={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(0 0% 7%)", border: "1px solid hsl(0 0% 18%)", borderRadius: 8 }}
                  labelStyle={{ color: "hsl(0 0% 98%)" }}
                />
                <Bar dataKey="sessions" fill="hsl(24 100% 55%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-display mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-primary" /> MY PROFILE
            </h3>
            <div className="space-y-4">
              {[
                { label: "Full Name", key: "name" as const },
                { label: "Email", key: "email" as const },
                { label: "Phone", key: "phone" as const },
                { label: "Fitness Goal", key: "goal" as const },
                { label: "Membership Plan", key: "plan" as const },
                { label: "Member Since", key: "joined" as const },
              ].map((field) => (
                <div key={field.key} className="flex items-center justify-between gap-4 pb-3 border-b border-border last:border-0">
                  <span className="text-sm text-muted-foreground">{field.label}</span>
                  {field.key === "goal" ? (
                    <input
                      value={profile[field.key]}
                      onChange={(e) => setProfile({ ...profile, goal: e.target.value })}
                      className="text-sm text-right bg-transparent text-foreground border-b border-primary/40 focus:outline-none focus:border-primary"
                    />
                  ) : (
                    <span className="text-sm font-medium text-foreground">{profile[field.key]}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Classes + Payments */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-display mb-6 flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-primary" /> BOOKED CLASSES
              </h3>
              <div className="space-y-3">
                {bookedClasses.map((c) => (
                  <div key={c.name} className="flex items-center justify-between gap-4 p-3 bg-muted/40 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{c.name}</p>
                      <p className="text-xs text-muted-foreground">{c.day} · {c.trainer}</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  </div>
                ))}
              </div>
              <Link to="/plans" className="inline-block mt-4 text-sm text-primary hover:underline">
                Browse more classes & plans →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-display mb-6 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" /> PAYMENTS
              </h3>
              <div className="space-y-3">
                {upcomingPayments.map((p) => (
                  <div key={p.item} className="flex items-center justify-between gap-4 p-3 bg-muted/40 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground text-sm">{p.item}</p>
                      <p className="text-xs text-muted-foreground">Due {p.due}</p>
                    </div>
                    <span className="text-sm font-semibold text-primary whitespace-nowrap">{p.amount}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">Demo mode — no real payments are processed.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboardInner;
