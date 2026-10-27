import DemoGate from "@/components/DemoGate";
import MemberDashboardInner from "@/components/MemberDashboardInner";

const MemberDashboard = () => (
  <DemoGate role="member">
    <MemberDashboardInner />
  </DemoGate>
);

export default MemberDashboard;
