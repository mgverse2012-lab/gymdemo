import DemoGate from "@/components/DemoGate";
import AdminDashboardInner from "@/components/AdminDashboardInner";

const AdminDashboard = () => (
  <DemoGate role="admin">
    <AdminDashboardInner />
  </DemoGate>
);

export default AdminDashboard;
