import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      alert("❌ Please fill in both fields.");
      return;
    }

    // Optional: send form to PHP backend
    e.target.submit();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-10"
      >
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Log in to continue to CarPass</p>
        </div>

        {/* Form */}
        <form method="POST" action="login.php" onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-gray-700"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-gray-700"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
          >
            Log In
          </button>
        </form>

        {/* Footer links */}
        <div className="text-center mt-6">
          <a href="" className="text-indigo-600 hover:underline text-sm">
            Forgot your password?
          </a>
        </div>

        <div className="text-center mt-4 text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-600 font-semibold hover:underline">
            Sign up
          </a>
        </div>
      </motion.div>
    </div>
  );
}
