import React from "react";

export default function UnionWaitlist() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 to-pink-100 py-16 px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Join the Union Waitlist
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Be among the first to manage levies with transparency using DrivePass.
        </p>

        {/* FORM uses method POST and action union.php */}
        <form method="POST" action="union.php" className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <input
            type="text"
            name="union_name"
            placeholder="Union Name"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <input
            type="text"
            name="position"
            placeholder="Your Position (e.g. Secretary, Chairman)"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 transition duration-300"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}
