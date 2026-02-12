import React, { useState } from "react";

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

export default function StudentAttendance() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear] = useState(today.getFullYear());
  const [editMode, setEditMode] = useState(false);

  const totalDays = daysInMonth(currentMonth, currentYear);

  // attendance per month (key: YYYY-MM)
  const [attendanceData, setAttendanceData] = useState({});

  const monthKey = `${currentYear}-${currentMonth}`;
  const attendance = attendanceData[monthKey] || Array(totalDays).fill(null);

  const handleDateClick = (index) => {
    if (!editMode) return;

    const updated = [...attendance];
    if (updated[index] === null) updated[index] = false;
    else if (updated[index] === false) updated[index] = true;
    else updated[index] = null;

    setAttendanceData({
      ...attendanceData,
      [monthKey]: updated,
    });
  };

  const getDayStyle = (status) => {
    if (status === true) return "bg-green-500 text-white";
    if (status === false) return "bg-red-500 text-white";
    return "bg-gray-200 text-gray-600";
  };

  const prevMonth = () => {
    if (currentMonth === 0) return;
    setCurrentMonth(currentMonth - 1);
  };

  const nextMonth = () => {
    if (currentMonth === today.getMonth()) return;
    setCurrentMonth(currentMonth + 1);
  };

  return (
    <div className="min-h-screen bg-[#f6f7f9] px-4 py-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="text-xl">◀</button>
        <h1 className="text-lg font-bold text-gray-800">
          {months[currentMonth]} {currentYear}
        </h1>
        <button onClick={nextMonth} className="text-xl">▶</button>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600">
          {['S','M','T','W','T','F','S'].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 mt-3 text-center text-sm">
          {Array.from({ length: totalDays }).map((_, i) => (
            <div
              key={i}
              onClick={() => handleDateClick(i)}
              className={`h-9 w-9 mx-auto flex items-center justify-center rounded-full font-medium cursor-pointer transition ${getDayStyle(attendance[i])}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-around mt-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
          <span className="text-sm text-gray-600">Present</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="text-sm text-gray-600">Absent</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-gray-400"></span>
          <span className="text-sm text-gray-600">Not Marked</span>
        </div>
      </div>

      {/* Info */}
      <div className="bg-white rounded-2xl shadow-sm p-4 mt-5 text-center">
        <p className="text-sm text-gray-500">
          Attendance auto-loads for selected month
        </p>
      </div>

      {/* Floating Edit Button */}
      <button
        onClick={() => setEditMode(!editMode)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg flex items-center justify-center text-white text-xl transition ${
          editMode ? "bg-green-500" : "bg-blue-500"
        }`}
      >
        {editMode ? "✓" : "✎"}
      </button>
    </div>
  );
}
