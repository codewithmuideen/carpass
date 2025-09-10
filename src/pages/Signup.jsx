import React from "react";

const Signup = () => {
  return (
    <section className="py-20 px-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
      <form className="max-w-sm mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
        >
          Create Account
        </button>
      </form>
    </section>
  );
};

export default Signup;
