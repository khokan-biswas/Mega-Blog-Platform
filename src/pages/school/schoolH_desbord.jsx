// import { Users, BookOpen, Bell, CheckCircle } from "lucide-react";

// export default function AdminDashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-lg hidden md:block">
//         <div className="p-6 text-xl font-bold text-blue-600">Admin Panel</div>
//         <nav className="px-4 space-y-2">
//           <NavItem text="Classes" />
//           <NavItem text="Teachers" />
//           <NavItem text="Present Today" />
//           <NavItem text="Notices" />
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-semibold">Dashboard</h1>
//           <div className="flex items-center gap-3">
//             <Bell className="text-gray-600" />
//             <img
//               src="https://i.pravatar.cc/40"
//               className="w-9 h-9 rounded-full"
//             />
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <StatCard
//             title="Classes"
//             value="12"
//             icon={<BookOpen />}
//             color="bg-blue-100 text-blue-600"
//           />
//           <StatCard
//             title="Teachers"
//             value="25"
//             icon={<Users />}
//             color="bg-green-100 text-green-600"
//           />
//           <StatCard
//             title="Present Today"
//             value="312"
//             icon={<CheckCircle />}
//             color="bg-purple-100 text-purple-600"
//           />
//           <StatCard
//             title="Notices"
//             value="8"
//             icon={<Bell />}
//             color="bg-yellow-100 text-yellow-600"
//           />
//         </div>

//         {/* Sections */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
//           {/* Classes */}
//           <Card title="Classes">
//             <ListItem text="Class 6A" />
//             <ListItem text="Class 7B" />
//             <ListItem text="Class 8A" />
//           </Card>

//           {/* Teachers */}
//           <Card title="Teachers">
//             <ListItem text="Mr. R. Sharma" />
//             <ListItem text="Ms. Anjali Sen" />
//             <ListItem text="Mr. S. Das" />
//           </Card>

//           {/* Present Today */}
//           <Card title="Present Today">
//             <p className="text-sm text-gray-600">
//               312 students are marked present today across all classes.
//             </p>
//           </Card>

//           {/* Notices */}
//           <Card title="Recent Notices">
//             <ListItem text="Unit Test Schedule" />
//             <ListItem text="Holiday Announcement" />
//           </Card>
//         </div>
//       </main>
//     </div>
//   );
// }

// function NavItem({ text }) {
//   return (
//     <div className="px-4 py-2 rounded-lg hover:bg-blue-50 cursor-pointer text-gray-700">
//       {text}
//     </div>
//   );
// }

// function StatCard({ title, value, icon, color }) {
//   return (
//     <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-4">
//       <div className={`p-3 rounded-xl ${color}`}>{icon}</div>
//       <div>
//         <p className="text-sm text-gray-500">{title}</p>
//         <p className="text-xl font-semibold">{value}</p>
//       </div>
//     </div>
//   );
// }

// function Card({ title, children }) {
//   return (
//     <div className="bg-white rounded-2xl shadow p-5">
//       <h2 className="font-semibold mb-3">{title}</h2>
//       <div className="space-y-2">{children}</div>
//     </div>
//   );
// }

// function ListItem({ text }) {
//   return (
//     <div className="text-sm text-gray-700 border-b last:border-none pb-2">
//       {text}
//     </div>
//   );
// }



import { Users, BookOpen, Bell, CheckCircle } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 shadow flex justify-between items-center">
        <h1 className="text-lg font-semibold">Admin Dashboard</h1>
        <img
          src="https://i.pravatar.cc/40"
          alt="admin"
          className="w-9 h-9 rounded-full"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 px-4 mt-4">
        <StatCard title="Classes" value="12" icon={<BookOpen />} />
        <StatCard title="Teachers" value="18" icon={<Users />} />
        <StatCard title="Present Today" value="96%" icon={<CheckCircle />} />
        <StatCard title="Notices" value="5" icon={<Bell />} />
      </div>

      {/* Sections */}
      <div className="px-4 mt-6 space-y-4">
        <Section title="Classes">
          <ListItem text="Class 6A" />
          <ListItem text="Class 7B" />
          <ListItem text="Class 8C" />
        </Section>

        <Section title="Teacher List">
          <ListItem text="Mr. John Doe" />
          <ListItem text="Ms. Jane Smith" />
          <ListItem text="Mr. Rahul Das" />
        </Section>

        <Section title="Present Today">
          <p className="text-sm text-gray-600">
            480 / 500 students present
          </p>
        </Section>

        <Section title="Notices">
          <ListItem text="Exam starts from 20 Sept" />
          <ListItem text="Holiday on Friday" />
        </Section>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">
        <NavItem icon={<BookOpen />} label="Classes" />
        <NavItem icon={<Users />} label="Teachers" />
        <NavItem icon={<CheckCircle />} label="Present" />
        <NavItem icon={<Bell />} label="Notices" />
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow flex items-center gap-3">
      <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="font-semibold text-sm mb-3">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function ListItem({ text }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-gray-700">{text}</span>
      <button className="text-blue-600 text-xs font-medium">
        View
      </button>
    </div>
  );
}

function NavItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center text-xs text-gray-600">
      {icon}
      <span>{label}</span>
    </div>
  );
}
