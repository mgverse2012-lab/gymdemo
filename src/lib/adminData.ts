// Demo admin data — BodystationPK. All sample data, nothing stored.

export type MemberStatus = "Active" | "Expired" | "Pending";

export interface Member {
  id: string;
  name: string;
  phone: string;
  email: string;
  plan: string;
  status: MemberStatus;
  joined: string;
  expiry: string;
  feesPaid: number;
  feesDue: number;
}

export interface Payment {
  id: string;
  member: string;
  item: string;
  amount: number;
  method: "Cash" | "Bank Transfer" | "Card";
  status: "Paid" | "Pending" | "Overdue" | "Partial";
  date: string;
}

export interface AttendanceRecord {
  id: string;
  member: string;
  date: string;
  checkIn: string;
  checkOut: string;
}

export interface Trainer {
  name: string;
  speciality: string;
  experience: string;
  schedule: string;
}

export interface GymClass {
  name: string;
  trainer: string;
  slot: string;
  capacity: number;
  booked: number;
  status: "Open" | "Full";
}

export interface Enquiry {
  name: string;
  interest: string;
  contact: string;
  status: "Hot" | "Warm" | "Cold";
  date: string;
  note: string;
}

export const members: Member[] = [
  { id: "M-001", name: "Ahmed Raza", phone: "+92 300 1234567", email: "member@demo.pk", plan: "Gold Monthly", status: "Active", joined: "Mar 12, 2026", expiry: "Nov 12, 2026", feesPaid: 93500, feesDue: 0 },
  { id: "M-002", name: "Fatima Noor", phone: "+92 301 4445556", email: "fatima.noor@mail.pk", plan: "Silver Monthly", status: "Active", joined: "Jun 2, 2026", expiry: "Nov 2, 2026", feesPaid: 34000, feesDue: 0 },
  { id: "M-003", name: "Usman Tariq", phone: "+92 302 7778889", email: "usman.tariq@mail.pk", plan: "Platinum Annual", status: "Active", joined: "Jan 15, 2026", expiry: "Jan 15, 2027", feesPaid: 84000, feesDue: 0 },
  { id: "M-004", name: "Ayesha Malik", phone: "+92 303 9990001", email: "ayesha.malik@mail.pk", plan: "Gold Monthly", status: "Pending", joined: "Oct 20, 2026", expiry: "Nov 20, 2026", feesPaid: 0, feesDue: 8500 },
  { id: "M-005", name: "Bilal Saeed", phone: "+92 304 2223334", email: "bilal.saeed@mail.pk", plan: "Silver Monthly", status: "Expired", joined: "Feb 1, 2026", expiry: "Oct 1, 2026", feesPaid: 68000, feesDue: 17000 },
  { id: "M-006", name: "Hassan Iqbal", phone: "+92 300 1112223", email: "hassan.iqbal@mail.pk", plan: "Gold Monthly", status: "Active", joined: "Aug 9, 2026", expiry: "Nov 9, 2026", feesPaid: 25500, feesDue: 0 },
  { id: "M-007", name: "Zainab Khan", phone: "+92 305 5556667", email: "zainab.khan@mail.pk", plan: "Student Monthly", status: "Active", joined: "Sep 18, 2026", expiry: "Nov 18, 2026", feesPaid: 11000, feesDue: 0 },
  { id: "M-008", name: "Omar Farooq", phone: "+92 306 8889990", email: "omar.farooq@mail.pk", plan: "Platinum Annual", status: "Active", joined: "Mar 3, 2026", expiry: "Mar 3, 2027", feesPaid: 84000, feesDue: 0 },
];

export const payments: Payment[] = [
  { id: "P-001", member: "Ahmed Raza", item: "Gold Monthly", amount: 8500, method: "Card", status: "Paid", date: "Oct 12, 2026" },
  { id: "P-002", member: "Fatima Noor", item: "Silver Monthly", amount: 6500, method: "Bank Transfer", status: "Paid", date: "Oct 10, 2026" },
  { id: "P-003", member: "Ayesha Malik", item: "Gold Monthly", amount: 8500, method: "Cash", status: "Pending", date: "Oct 22, 2026" },
  { id: "P-004", member: "Bilal Saeed", item: "Silver Monthly", amount: 3250, method: "Cash", status: "Partial", date: "Oct 5, 2026" },
  { id: "P-005", member: "Hassan Iqbal", item: "Personal Training (4 sessions)", amount: 6000, method: "Card", status: "Overdue", date: "Sep 28, 2026" },
  { id: "P-006", member: "Zainab Khan", item: "Student Monthly", amount: 5500, method: "Cash", status: "Paid", date: "Oct 18, 2026" },
  { id: "P-007", member: "Usman Tariq", item: "Personal Training (8 sessions)", amount: 12000, method: "Bank Transfer", status: "Paid", date: "Oct 2, 2026" },
];

export const attendance: AttendanceRecord[] = [
  { id: "A-001", member: "Ahmed Raza", date: "Oct 27, 2026", checkIn: "06:32", checkOut: "07:48" },
  { id: "A-002", member: "Fatima Noor", date: "Oct 27, 2026", checkIn: "07:05", checkOut: "08:10" },
  { id: "A-003", member: "Usman Tariq", date: "Oct 27, 2026", checkIn: "17:20", checkOut: "—" },
  { id: "A-004", member: "Zainab Khan", date: "Oct 27, 2026", checkIn: "18:00", checkOut: "19:05" },
  { id: "A-005", member: "Hassan Iqbal", date: "Oct 26, 2026", checkIn: "06:15", checkOut: "07:30" },
  { id: "A-006", member: "Omar Farooq", date: "Oct 26, 2026", checkIn: "19:40", checkOut: "21:00" },
];

export const trainers: Trainer[] = [
  { name: "Bilal Khan", speciality: "Strength & Conditioning", experience: "8 years", schedule: "Mon–Sat · 6:00 AM–2:00 PM" },
  { name: "Sara Ahmed", speciality: "Yoga & Pilates", experience: "6 years", schedule: "Mon–Fri · 7:00 AM–12:00 PM" },
  { name: "Omar Farooq", speciality: "CrossFit & HIIT", experience: "5 years", schedule: "Mon–Sat · 4:00 PM–10:00 PM" },
  { name: "Hira Sheikh", speciality: "Weight Loss & Nutrition", experience: "7 years", schedule: "Tue–Sun · 9:00 AM–3:00 PM" },
];

export const classes: GymClass[] = [
  { name: "HIIT Blast", trainer: "Omar Farooq", slot: "Mon · 6:00 PM", capacity: 20, booked: 18, status: "Open" },
  { name: "Strength Lab", trainer: "Bilal Khan", slot: "Wed · 7:30 AM", capacity: 14, booked: 14, status: "Full" },
  { name: "Spin Cycle", trainer: "Omar Farooq", slot: "Fri · 8:00 PM", capacity: 16, booked: 9, status: "Open" },
  { name: "Sunrise Yoga", trainer: "Sara Ahmed", slot: "Tue · 7:00 AM", capacity: 22, booked: 15, status: "Open" },
  { name: "Fat Burn Circuit", trainer: "Hira Sheikh", slot: "Thu · 6:30 PM", capacity: 18, booked: 17, status: "Open" },
];

export const enquiries: Enquiry[] = [
  { name: "Hassan Iqbal", interest: "Weight loss program", contact: "+92 300 1112223", status: "Hot", date: "Oct 24, 2026", note: "Wants to start next week" },
  { name: "Fatima Noor", interest: "Yoga & pilates classes", contact: "+92 301 4445556", status: "Warm", date: "Oct 22, 2026", note: "Comparing class timings" },
  { name: "Usman Tariq", interest: "Personal training", contact: "+92 302 7778889", status: "Hot", date: "Oct 21, 2026", note: "Asked for PT packages" },
  { name: "Ayesha Malik", interest: "General membership", contact: "+92 303 9990001", status: "Cold", date: "Oct 15, 2026", note: "Will decide next month" },
  { name: "Bilal Saeed", interest: "Strength training", contact: "+92 304 2223334", status: "Warm", date: "Oct 12, 2026", note: "Requested a free trial" },
];

export const notifications = [
  { id: "N-1", type: "Expiry", message: "Bilal Saeed's Silver Monthly expired on Oct 1, 2026.", date: "Oct 27, 2026", read: false },
  { id: "N-2", type: "Fee", message: "Hassan Iqbal has an overdue payment of PKR 6,000.", date: "Oct 27, 2026", read: false },
  { id: "N-3", type: "Booking", message: "Strength Lab (Wed 7:30 AM) is fully booked.", date: "Oct 26, 2026", read: false },
  { id: "N-4", type: "Trial", message: "2 free-trial requests awaiting approval from the website.", date: "Oct 25, 2026", read: true },
  { id: "N-5", type: "Announcement", message: "Diwali-week schedule posted — no changes to evening classes.", date: "Oct 24, 2026", read: true },
];

export const activityLog = [
  { action: "Payment recorded", detail: "Card · PKR 8,500 · Ahmed Raza", time: "Today · 09:12" },
  { action: "New member added", detail: "Zainab Khan · Student Monthly", time: "Yesterday · 18:40" },
  { action: "Membership renewed", detail: "Omar Farooq · Platinum Annual", time: "Yesterday · 14:22" },
  { action: "Trial approved", detail: "Usman Tariq · 3-day free trial", time: "Oct 25 · 11:05" },
  { action: "Class created", detail: "Fat Burn Circuit · Thu 6:30 PM", time: "Oct 24 · 10:15" },
];

export const membershipGrowth = [
  { month: "Jun", members: 468 },
  { month: "Jul", members: 481 },
  { month: "Aug", members: 495 },
  { month: "Sep", members: 506 },
  { month: "Oct", members: 524 },
];

export const monthlyRevenue = [
  { month: "Jun", revenue: 1250000, collected: 1180000 },
  { month: "Jul", revenue: 1380000, collected: 1295000 },
  { month: "Aug", revenue: 1210000, collected: 1175000 },
  { month: "Sep", revenue: 1490000, collected: 1400000 },
  { month: "Oct", revenue: 1620000, collected: 1520000 },
];

export const whatsappLink = (contact: string) =>
  `https://wa.me/${contact.replace(/[^0-9]/g, "")}`;

export const downloadCsv = (filename: string, rows: (string | number)[][]) => {
  const csv = rows
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};
