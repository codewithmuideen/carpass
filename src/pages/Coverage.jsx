import React from "react";
import images from "../constants/images"; // Assuming images.map points to Nigeria coverage map

const Coverage = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-20 px-6 md:px-12 overflow-hidden">
      {/* Background Blobs for decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-3xl animate-blob -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-300 rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000 -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-purple-200 rounded-full opacity-30 blur-3xl animate-blob animation-delay-4000 -z-10"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Section: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-lg">
            More Coverage. <br className="hidden md:block" /> More Freedom.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Our network keeps expanding every day. Today{" "}
            <span className="font-bold text-blue-700">DrivePass</span> covers{" "}
            <span className="font-bold text-green-600">250+ major roads</span>{" "}
            across <span className="font-bold text-purple-600">36 states</span>{" "}
            in Nigeria.
          </p>

          {/* Highlight Badges */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <span className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              36 States Covered
            </span>
            <span className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              250+ Roads
            </span>
            <span className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              Nationwide Access
            </span>
          </div>
        </div>

        {/* Right Section: Map Image */}
        <div className="lg:w-1/2 flex justify-center relative">
          {images.map ? (
            <div className="relative">
              <img
                src={images.map}
                alt="Nigeria coverage map"
                className="max-w-full h-auto rounded-2xl shadow-2xl border-4 border-white transform hover:scale-105 transition duration-500"
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-blue-500 opacity-20 blur-2xl"></div>
            </div>
          ) : (
            <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
              Nigeria Coverage Map Placeholder
            </div>
          )}
        </div>
      </div>

      {/* Tailwind CSS Custom Animation */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          30% {
            transform: translate(-20px, 20px) scale(1.05);
          }
          60% {
            transform: translate(20px, -20px) scale(0.95);
          }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Coverage;
