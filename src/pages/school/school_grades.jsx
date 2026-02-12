import React, { useState } from "react";

const exams = [
  { key: "first", title: "1st Exam" },
  { key: "second", title: "2nd Exam" },
  { key: "final", title: "Final Exam" },
];

const subjects = ["Math", "Science", "English", "History", "Physics"];

export default function StudentGrades() {
  const [editExam, setEditExam] = useState(null);

  const [marks, setMarks] = useState({
    first: { Math: 0, Science: 0, English: 0, History: 0, Physics: 0 },
    second: { Math: 0, Science: 0, English: 0, History: 0, Physics: 0 },
    final: { Math: 0, Science: 0, English: 0, History: 0, Physics: 0 },
  });

  const handleChange = (examKey, subject, value) => {
    setMarks({
      ...marks,
      [examKey]: {
        ...marks[examKey],
        [subject]: value,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f6f7f9] px-4 py-6">
      {/* Header */}
      <h1 className="text-xl font-bold text-gray-800 mb-4">Grades</h1>

      {exams.map((exam) => (
        <div
          key={exam.key}
          className="bg-white rounded-2xl shadow-sm p-4 mb-5 relative"
        >
          {/* Exam Title */}
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-800">
              {exam.title}
            </h2>
            <button
              onClick={() =>
                setEditExam(editExam === exam.key ? null : exam.key)
              }
              className={`h-9 px-4 rounded-full text-white text-sm font-medium transition ${
                editExam === exam.key ? "bg-green-500" : "bg-blue-500"
              }`}
            >
              {editExam === exam.key ? "Save" : "Edit"}
            </button>
          </div>

          {/* Marks List */}
          <div className="space-y-2">
            {subjects.map((subject) => (
              <div
                key={subject}
                className="flex items-center justify-between"
              >
                <span className="text-sm text-gray-700">{subject}</span>

                {editExam === exam.key ? (
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={marks[exam.key][subject]}
                    onChange={(e) =>
                      handleChange(exam.key, subject, e.target.value)
                    }
                    className="w-16 text-center rounded-lg border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                ) : (
                  <span className="text-sm font-medium text-gray-800">
                    {marks[exam.key][subject]}%
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Edit Button */}
          {/* <button
            onClick={() =>
              setEditExam(editExam === exam.key ? null : exam.key)
            }
            className={`absolute bottom-4 right-4 h-12 w-12 rounded-full shadow-lg flex items-center justify-center text-white text-lg transition ${
              editExam === exam.key ? "bg-green-500" : "bg-blue-500"
            }`}
          >
            {editExam === exam.key ? "✓" : "✎"}
          </button> */}
        </div>
      ))}
    </div>
  );
}
