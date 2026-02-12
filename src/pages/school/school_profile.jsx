import { useState } from "react";

export default function StudentProfilePage() {
  const student = {
    name: "John Doe",
    bio: "Student of Class 6A",
    email: "john@gmail.com",
    phone: "+91 98765 43210",
    className: "6A",
    roll: "237",
  };

  return (
    <div className="min-h-screen bg-[#f8f7f3] pb-20">
      {/* Header */}
      <div className="px-4 pt-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Profile</h1>
        <img
          src="https://i.pravatar.cc/100"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Profile Card */}
      <div className="mx-4 mt-4 bg-white rounded-2xl p-4 shadow">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/150"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">{student.name}</h2>
            <p className="text-sm text-gray-500">{student.bio}</p>
          </div>
        </div>
      </div>

      {/* Info Rows (same as image layout) */}
      <div className="mx-4 mt-6 space-y-3">
        <InfoRow label="Email" value={student.email} />
        <InfoRow label="Phone" value={student.phone} />
        <InfoRow label="Class" value={student.className} />
        <InfoRow label="Roll No" value={student.roll} />
      </div>

      {/* Settings Section */}
      <div className="mx-4 mt-6">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">Settings</h3>
        <div className="bg-white rounded-xl shadow">
          <SettingItem text="Edit Profile" />
          <SettingItem text="Change Password" />
          <SettingItem text="Logout" danger />
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow flex justify-between">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function SettingItem({ text, danger }) {
  return (
    <div
      className={`px-4 py-3 border-b last:border-b-0 cursor-pointer ${
        danger ? "text-red-500" : "text-gray-700"
      }`}
    >
      {text}
    </div>
  );
}
