const teachers = [
  { id: 1, name: "John Doe", subject: "Mathematics", phone: "9876543210" },
  { id: 2, name: "Jane Smith", subject: "English", phone: "9876501234" },
  { id: 3, name: "Rahul Das", subject: "Science", phone: "9123456789" },
  { id: 4, name: "Anita Roy", subject: "History", phone: "9012345678" },
];

export default function TeacherList() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 shadow flex items-center justify-between">
        <h1 className="text-lg font-semibold">Teachers</h1>
        <button className="text-sm text-blue-600 font-medium">
          + Add
        </button>
      </div>

      {/* Search */}
      <div className="px-4 mt-4">
        <input
          type="text"
          placeholder="Search teacher"
          className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Teacher List */}
      <div className="px-4 mt-4 space-y-3">
        {teachers.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-xl p-4 shadow flex justify-between items-center"
          >
            <div>
              <p className="font-medium text-gray-800 truncate w-48">
                {t.name}
              </p>
              <p className="text-xs text-gray-500">
                Subject: {t.subject}
              </p>
              <p className="text-xs text-gray-500">
                📞 {t.phone}
              </p>
            </div>

            <button className="text-blue-600 text-sm font-medium">
              View
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-center py-3">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-medium">
          Add New Teacher
        </button>
      </div>
    </div>
  );
}
