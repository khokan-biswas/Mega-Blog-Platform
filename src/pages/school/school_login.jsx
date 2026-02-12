import React from "react";

export default function StudentLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f7f9] px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-gray-800">
          STUDENT LOGIN
        </h1>
        <p className="text-center text-sm text-gray-500 mt-1">
          Welcome back, please login
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="email@gmail.com"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Forgot password?{" "}
            <span className="text-blue-500 font-medium cursor-pointer">
              Reset
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
