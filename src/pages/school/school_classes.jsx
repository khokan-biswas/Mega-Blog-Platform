// Inline fallback icon to avoid requiring lucide-react dependency
const BookOpenIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="text-blue-600"
  >
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 19.5C4 16.985 7.582 15 12 15s8 1.985 8 4.5V6a2 2 0 00-2-2H6a2 2 0 00-2 2v13.5z" />
  </svg>
);

const classes = [
  {
    id: 1,
    name: "Class 6A",
    subjects: "All Subjects",
    students: 45,
  },
  {
    id: 2,
    name: "Class 7B",
    subjects: "All Subjects",
    students: 32,
  },
  {
    id: 3,
    name: "Class 7A",
    subjects: "All Subjects",
    students: 37,
  },
];

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f3] pb-20">
      {/* Header */}
      <div className="px-4 pt-6">
        <h1 className="text-xl font-semibold">Classes</h1>
      </div>

      {/* Search */}
      <div className="px-4 mt-4">
        <input
          type="text"
          placeholder="Filter"
          className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Class Cards */}
      <div className="px-4 mt-4 space-y-4">
        {classes.map((cls) => (
          <div
            key={cls.id}
            className="bg-white rounded-2xl p-4 shadow border border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <BookOpenIcon size={20} />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-gray-800">{cls.name}</h2>
                <p className="text-sm text-gray-500">{cls.subjects}</p>
                <p className="text-xs text-gray-400">
                  {cls.students} students
                </p>
              </div>
            </div>

            <button className="mt-3 w-full text-sm font-medium text-blue-600 border border-blue-200 rounded-xl py-2">
              Manage Class
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
