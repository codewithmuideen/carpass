import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import images from "../constants/images";
import { Link } from "react-router-dom";

export default function GetStartedSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-8 lg:px-20 flex flex-col items-center justify-center">
      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-16 text-center tracking-tight leading-tight"
      >
        Ready to get rolling?
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto items-center">
        {/* Left Section: Register Now */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-10"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Register now</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Join CarPass today and experience seamless travel. Create your account in minutes.
            </p>
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 100, 250, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 text-lg"
              >
                Create an account
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right Section: Download the App */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
            Or download the app
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
            {/* QR Code */}
            <div className="flex flex-col items-center text-center">
              <img
                src={images.barcode}
                alt="QR Code to download app"
                className="w-48 h-48 sm:w-40 sm:h-40 object-contain rounded-lg shadow-md border border-gray-100 p-2 bg-white"
              />
              <p className="text-gray-600 text-sm mt-4 max-w-[150px]">
                Scan the QR code using your phone camera.
              </p>
              <p className="text-gray-600 text-sm">Available for Android and iOS.</p>
            </div>

            {/* Mobile App Screenshot */}
            <div className="relative flex justify-center items-end h-[400px] w-full max-w-[300px] sm:max-w-[350px]">
              <motion.img
  initial={{ y: 50, opacity: 0, rotate: 5 }}
  animate={{ y: 0, opacity: 1, rotate: 0 }}
  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
  src={images.mobileapp}
  alt="Mobile App Screenshot"
  className="h-full object-contain"
/>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
