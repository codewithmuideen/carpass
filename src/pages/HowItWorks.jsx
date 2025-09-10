import React from "react";
import { FaWallet, FaCheckCircle, FaMobileAlt } from "react-icons/fa";
import images from "../constants/images";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaWallet className="text-blue-600 text-5xl mb-4" />,
      title: "1. Fund Wallet",
      description: "Quick & secure top-up using multiple payment methods.",
    },
    {
      icon: <FaCheckCircle className="text-green-600 text-5xl mb-4" />,
      title: "2. Pay Once",
      description: "Make a single consolidated payment for all levies.",
    },
    {
      icon: <FaMobileAlt className="text-purple-600 text-5xl mb-4" />,
      title: "3. Show Digital Pass",
      description: "Easily verify your pass with zero hassle on the road.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-6 md:px-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section - Steps */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10">
            How It Works
          </h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-md 
                           hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex-shrink-0">{step.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 flex justify-center">
          {images.pass ? (
            <div className="relative">
              <img
                src={images.pass}
                alt="Digital pass in action"
                className="max-w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Overlay Play Button (Optional) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="bg-black bg-opacity-60 rounded-full w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Play video"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
              Image/Video Placeholder
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
