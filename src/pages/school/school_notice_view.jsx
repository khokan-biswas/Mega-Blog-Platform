// export default function NoticeViewPage() {
//   const notice = {
//     title: "Unit Test Schedule Announced",
//     teacher: "Mr. R. Sharma",
//     date: "12 Sept 2025, 10:30 AM",
//     content:
//       "Dear students,\n\nThe unit test will start from next Monday. Please prepare chapters 3 to 5 properly. Admit cards will be distributed tomorrow.\n\nRegards.",
//     image:
//       "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
//     file: "Unit_Test_Schedule.pdf",
//   };

//   return (
//     <div className="min-h-screen bg-[#f8f7f3] px-4 pb-20">
//       {/* Title */}
//       <h1 className="pt-6 text-xl font-semibold text-gray-800">
//         {notice.title}
//       </h1>

//       {/* Teacher + Date */}
//       <p className="mt-1 text-sm text-gray-500">
//         By <span className="font-medium">{notice.teacher}</span> ·{" "}
//         {notice.date}
//       </p>

//       {/* Content Box */}
//       <div className="mt-4 bg-white rounded-2xl p-4 shadow">
//         <p className="text-sm text-gray-700 whitespace-pre-line">
//           {notice.content}
//         </p>

//         {/* Attached Image */}
//         {notice.image && (
//           <img
//             src={notice.image}
//             alt="Notice attachment"
//             className="mt-4 rounded-xl w-full object-cover"
//           />
//         )}
//       </div>

//       {/* PDF / File Button */}
//       {notice.file && (
//         <div className="mt-4">
//           <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2">
//             📄 View Attachment
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState } from "react";

export default function TeacherNoticePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  return (
    <div className="min-h-screen bg-[#f8f7f3] px-4 pb-24">
      {/* Title */}
      <h1 className="pt-6 text-xl font-semibold text-gray-800">
        Create Notice
      </h1>

      {/* Teacher Name */}
      <p className="mt-1 text-sm text-gray-500">By Mr. R. Sharma</p>

      {/* Notice Title */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Notice title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Content Box */}
      <div className="mt-4 bg-white rounded-2xl p-4 shadow">
        <textarea
          placeholder="Write notice content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="w-full text-sm text-gray-700 resize-none focus:outline-none"
        />
      </div>

      {/* Image Attach */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Attach Image (optional)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full text-sm"
        />
      </div>

      {/* File / PDF Attach */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Attach PDF / File (optional)
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full text-sm"
        />
      </div>

      {/* Send Button */}
      <div className="mt-6">
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
          onClick={() => alert("Notice Sent")}
        >
          Send Notice
        </button>
      </div>
    </div>
  );
}
