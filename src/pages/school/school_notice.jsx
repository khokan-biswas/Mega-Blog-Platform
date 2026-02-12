const notices = [
  {
    id: 1,
    title: "English Assignment Update",
    teacher: "Mr. A. Sharma",
    date: "12 Jan 2025",
    time: "10:30 AM",
  },
  {
    id: 2,
    title: "Math Unit Test",
    teacher: "Mrs. R. Das",
    date: "13 Jan 2025",
    time: "09:00 AM",
  },
  {
    id: 3,
    title: "Science Project Submission",
    teacher: "Mr. S. Roy",
    date: "14 Jan 2025",
    time: "11:15 AM",
  },
  {
    id: 4,
    title: "Holiday Announcement",
    teacher: "Principal",
    date: "15 Jan 2025",
    time: "08:00 AM",
  },
];

export default function NoticesPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f3] pb-20">
      {/* Header */}
      <div className="px-4 pt-6">
        <h1 className="text-xl font-semibold">Notices</h1>
      </div>

      {/* Notices Grid */}
      <div className="px-4 mt-4 grid grid-cols-1 gap-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white rounded-2xl p-4 shadow border border-gray-100"
          >
            {/* Title */}
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              {notice.title}
            </h2>

            {/* Teacher */}
            <p className="text-sm text-gray-500 mb-3">
              By <span className="font-medium">{notice.teacher}</span>
            </p>

            {/* Date & Time */}
            <div className="flex justify-between text-xs text-gray-400">
              <span>{notice.date}</span>
              <span>{notice.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
