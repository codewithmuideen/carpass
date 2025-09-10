import React from "react";

export default function GovernmentWaitlist() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-teal-100 py-16 px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Join the Government Official Waitlist
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Be part of a smarter, transparent system for transport levy management.
        </p>

        {/* FORM uses POST method and action government.php */}
        <form method="POST" action="government.php" className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="text"
            name="ministry"
            placeholder="Ministry / Department"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="text"
            name="position"
            placeholder="Your Position (e.g. Commissioner, Director)"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition duration-300"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}
