import { useState } from "react";

export default function ProfilePage() {
  const [user] = useState({
    name: "John Doe",
    email: "john@gmail.com",
    className: "Class 6A",
    roll: "23",
    attendance: 90,
    avgMarks: 88,
    notices: 3,
  });

  return (
    <div className="min-h-screen bg-[#f8f7f3] pb-20">
      {/* Header */}
      <div className="px-4 pt-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Profile</h1>
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Profile Card */}
      <div className="mx-4 mt-4 bg-white rounded-2xl p-4 shadow">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/150"
            alt="profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-500">
              {user.className} · Roll {user.roll}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mx-4 mt-6">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">
          Quick Stats
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {/* Marks */}
          <div className="bg-blue-500 text-white rounded-2xl p-4 text-center shadow">
            <p className="text-sm">Marks</p>
            <p className="text-2xl font-bold">{user.avgMarks}%</p>
          </div>

          {/* Attendance */}
          <div className="bg-green-500 text-white rounded-2xl p-4 text-center shadow">
            <p className="text-sm">Attendance</p>
            <p className="text-2xl font-bold">{user.attendance}%</p>
          </div>

          {/* Notices */}
          <div className="bg-orange-500 text-white rounded-2xl p-4 text-center shadow">
            <p className="text-sm">Notices</p>
            <p className="text-2xl font-bold">{user.notices}</p>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="mx-4 mt-6 space-y-3">
        <div className="bg-white rounded-xl p-4 shadow flex justify-between">
          <span className="text-gray-600">Overall Attendance</span>
          <span className="font-semibold">{user.attendance}%</span>
        </div>
        <div className="bg-white rounded-xl p-4 shadow flex justify-between">
          <span className="text-gray-600">Average Marks</span>
          <span className="font-semibold">{user.avgMarks}%</span>
        </div>
        <div className="bg-white rounded-xl p-4 shadow flex justify-between">
          <span className="text-gray-600">Unread Notices</span>
          <span className="font-semibold">{user.notices}</span>
        </div>
      </div>
    </div>
  );
}
