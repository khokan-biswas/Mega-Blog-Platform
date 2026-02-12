// import { useState } from "react";

// const subjects = ["None", "Math", "Science", "English", "History"];
// const months = [
//   "None",
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const students = [
//   { roll: 1, name: "Riya Pramanick", attendance: 90 },
//   { roll: 2, name: "Jane Smith", attendance: 92 },
//   { roll: 3, name: "Shadow ", attendance: 87 },
//   { roll: 4, name: "Naylin Mitra", attendance: 95 },
//   { roll: 5, name: "Steron Walter", attendance: 89 },
// ];

// export default function ClassStudentList() {
//   const [selectedSubject, setSelectedSubject] = useState("None");
//   const [selectedMonth, setSelectedMonth] = useState("None");

//   const [marks, setMarks] = useState({});
//   const [monthlyAttendance, setMonthlyAttendance] = useState({});

//   const showAttendanceInput = selectedMonth !== "None";
//   const showMarksInput =
//     selectedMonth === "None" && selectedSubject !== "None";

//   return (
//     <div className="min-h-screen bg-[#f8f7f3] pb-20">
//       {/* Header */}
//       <div className="px-4 pt-6 flex items-center justify-between">
//         <div>
//           <h1 className="text-xl font-semibold">Class 6A</h1>
//           <span className="text-sm text-gray-500">Students</span>
//         </div>

//         {/* Month + Subject */}
//         <div className="flex gap-2">
//           <select
//             value={selectedMonth}
//             onChange={(e) => setSelectedMonth(e.target.value)}
//             className="text-sm border rounded-lg px-2 py-1 bg-white"
//           >
//             {months.map((m) => (
//               <option key={m} value={m}>
//                 {m}
//               </option>
//             ))}
//           </select>

//           <select
//             value={selectedSubject}
//             onChange={(e) => setSelectedSubject(e.target.value)}
//             className="text-sm border rounded-lg px-2 py-1 bg-white"
//           >
//             {subjects.map((s) => (
//               <option key={s} value={s}>
//                 {s}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Filter */}
//       <div className="px-4 mt-4">
//         <input
//           type="text"
//           placeholder="Filter students"
//           className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm focus:outline-none"
//         />
//       </div>

//       {/* Table */}
//       <div className="px-4 mt-4">
//         <div className="grid grid-cols-[50px_90px_100px_1fr] text-xs text-gray-500 ml-3 mb-2">
//           <span>Roll</span>
//           <span>Att%</span>
//           <span>Name</span>
//           <span>
//             {showAttendanceInput
//               ? selectedMonth
//               : showMarksInput
//               ? selectedSubject
//               : "View"}
//           </span>
//         </div>

//         <div className="space-y-2">
//           {students.map((s) => (
//             <div
//               key={s.roll}
//               className="bg-white rounded-xl px-3 py-2 shadow-sm grid grid-cols-[50px_70px_1fr_90px] items-center text-sm"
//             >
//               <span>{s.roll}</span>
//               <span>{s.attendance}%</span>

//               {/* Name */}
//               <span className="truncate font-medium">{s.name}</span>

//               {/* Conditional Column */}
//               {showAttendanceInput ? (
//                 <input
//                   type="number"
//                   placeholder="Days"
//                   value={
//                     monthlyAttendance[`${s.roll}-${selectedMonth}`] || ""
//                   }
//                   onChange={(e) =>
//                     setMonthlyAttendance({
//                       ...monthlyAttendance,
//                       [`${s.roll}-${selectedMonth}`]: e.target.value,
//                     })
//                   }
//                   className="w-full border rounded-md px-2 py-1 text-sm"
//                 />
//               ) : showMarksInput ? (
//                 <input
//                   type="number"
//                   placeholder="Marks"
//                   value={marks[`${s.roll}-${selectedSubject}`] || ""}
//                   onChange={(e) =>
//                     setMarks({
//                       ...marks,
//                       [`${s.roll}-${selectedSubject}`]: e.target.value,
//                     })
//                   }
//                   className="w-full border rounded-md px-2 py-1 text-sm"
//                 />
//               ) : (
//                 <button className="text-blue-600 font-medium text-sm">
//                   View
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";

const months = [
  "None",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const students = [
  { roll: 1, name: "Riya Pramanick", attendance: 90 },
  { roll: 2, name: "Jane Smith", attendance: 92 },
  { roll: 3, name: "Shadow Very Long Name Example Here", attendance: 87 },
  { roll: 4, name: "Naylin Mitra", attendance: 95 },
  { roll: 5, name: "Steron Walter", attendance: 89 },
];

export default function ClassStudentList() {
  const [subjects, setSubjects] = useState([
    "None",
    "Math",
    "Science",
    "English",
    "History",
  ]);

  const [newSubject, setNewSubject] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("None");
  const [selectedMonth, setSelectedMonth] = useState("None");

  const [marks, setMarks] = useState({});
  const [monthlyAttendance, setMonthlyAttendance] = useState({});

  const showAttendanceInput = selectedMonth !== "None";
  const showMarksInput =
    selectedMonth === "None" && selectedSubject !== "None";

  const handleAddSubject = () => {
    const subject = newSubject.trim();
    if (!subject || subjects.includes(subject)) return;
    setSubjects([...subjects, subject]);
    setNewSubject("");
  };

  return (
    <div className="min-h-screen bg-[#f8f7f3] pb-20">
      {/* Header */}
      <div className="px-4 pt-6 flex justify-between items-start">
        <div>
          <h1 className="text-xl font-semibold">Class 6A</h1>
          <span className="text-sm text-gray-500">Students</span>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-2 items-end">
          <div className="flex gap-2">
            {/* Month */}
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="text-sm border rounded-lg px-2 py-1 bg-white"
            >
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>

            {/* Subject */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="text-sm border rounded-lg px-2 py-1 bg-white"
            >
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Add Subject */}
          <div className="flex gap-1">
            <input
              type="text"
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
              placeholder="Add subject"
              className="text-xs border rounded-lg px-2 py-1 w-24"
            />
            <button
              onClick={handleAddSubject}
              className="text-xs bg-blue-600 text-white px-2 py-1 rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="px-4 mt-4">
        <input
          type="text"
          placeholder="Filter students"
          className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Table Header */}
      <div className="px-4 mt-4">
        <div className="grid grid-cols-[45px_65px_1fr_90px] text-xs text-gray-500 mb-2 ml-2">
          <span>Roll</span>
          <span>Att%</span>
          <span>Name</span>
          <span>
            {showAttendanceInput
              ? selectedMonth
              : showMarksInput
              ? selectedSubject
              : "View"}
          </span>
        </div>

        {/* Student Rows */}
        <div className="space-y-2">
          {students.map((s) => (
            <div
              key={s.roll}
              className="bg-white rounded-xl px-3 py-2 shadow-sm grid grid-cols-[45px_65px_1fr_90px] items-center text-sm"
            >
              <span>{s.roll}</span>
              <span>{s.attendance}%</span>

              {/* Name */}
              <span className="truncate font-medium pr-2">
                {s.name}
              </span>

              {/* Dynamic Column */}
              {showAttendanceInput ? (
                <input
                  type="number"
                  placeholder="Days"
                  value={
                    monthlyAttendance[`${s.roll}-${selectedMonth}`] || ""
                  }
                  onChange={(e) =>
                    setMonthlyAttendance({
                      ...monthlyAttendance,
                      [`${s.roll}-${selectedMonth}`]: e.target.value,
                    })
                  }
                  className="w-full border rounded-md px-2 py-1 text-sm"
                />
              ) : showMarksInput ? (
                <input
                  type="number"
                  placeholder="Marks"
                  value={marks[`${s.roll}-${selectedSubject}`] || ""}
                  onChange={(e) =>
                    setMarks({
                      ...marks,
                      [`${s.roll}-${selectedSubject}`]: e.target.value,
                    })
                  }
                  className="w-full border rounded-md px-2 py-1 text-sm"
                />
              ) : (
                <button className="text-blue-600 font-medium text-sm">
                  View
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
