import React from "react";

export default function DriverWaitlist() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 py-16 px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Join the Driver Waitlist
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Be the first to experience DrivePass for seamless levy payments.
        </p>

        {/* FORM uses method POST and action driver.php */}
        <form method="POST" action="driver.php" className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}
