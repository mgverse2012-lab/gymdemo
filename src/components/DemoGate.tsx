import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, Lock, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DEMO_CREDENTIALS,
  demoLogin,
  getDemoRole,
  type DemoRole,
} from "@/lib/demoAuth";

interface DemoGateProps {
  role: DemoRole;
  children: React.ReactNode;
}

const DemoGate = ({ role, children }: DemoGateProps) => {
  const [authed, setAuthed] = useState(() => getDemoRole() === role);
  const [email, setEmail] = useState(DEMO_CREDENTIALS[role].email);
  const [password, setPassword] = useState(DEMO_CREDENTIALS[role].password);
  const [error, setError] = useState("");
  const cred = DEMO_CREDENTIALS[role];
  const label = role === "member" ? "Member" : "Admin";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().toLowerCase() === cred.email && password === cred.password) {
      demoLogin(role);
      setAuthed(true);
    } else {
      setError("Invalid demo credentials. Use the prefilled demo account.");
    }
  };

  if (authed) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center py-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 w-full max-w-md"
      >
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-4">
            <Dumbbell className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-display">DEMO {label.toUpperCase()} LOGIN</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Sign in to preview the {role} dashboard of BodystationPK.
          </p>
          <div className="mt-3 px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs font-medium text-primary">
            Demo Version — sample data only
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-muted border-border"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-muted border-border"
            />
          </div>
          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}
          <Button
            type="submit"
            className="w-full energy-gradient border-0 glow-effect h-12 gap-2"
          >
            <LogIn className="w-4 h-4" />
            Sign In as Demo {label}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Demo credentials are prefilled — no real account is needed.{" "}
          <Link to="/" className="text-primary hover:underline">
            Back to website
          </Link>
        </p>
        <p className="text-xs text-muted-foreground text-center mt-2 flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" />
          This is a demo — no personal data is stored.
        </p>
      </motion.div>
    </div>
  );
};

export default DemoGate;
