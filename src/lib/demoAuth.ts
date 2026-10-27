export type DemoRole = "member" | "admin";

const KEY = "bspk-demo-auth";

export const DEMO_CREDENTIALS: Record<
  DemoRole,
  { email: string; password: string; name: string }
> = {
  member: { email: "member@demo.pk", password: "demo123", name: "Ahmed Raza" },
  admin: { email: "admin@demo.pk", password: "demo123", name: "Demo Admin" },
};

export const demoLogin = (role: DemoRole) => {
  sessionStorage.setItem(KEY, role);
};

export const demoLogout = () => {
  sessionStorage.removeItem(KEY);
};

export const getDemoRole = (): DemoRole | null => {
  if (typeof sessionStorage === "undefined") return null;
  const value = sessionStorage.getItem(KEY);
  return value === "member" || value === "admin" ? value : null;
};
