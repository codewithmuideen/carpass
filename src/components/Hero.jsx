import React from 'react';
import { Link } from 'react-router-dom';
import { FaWallet, FaCheckCircle, FaMobileAlt, FaCar, FaUsers, FaBuilding } from 'react-icons/fa'; // Import icons
const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-grey-100 via-purple-100 to-black-100 py-20 px-6 md:px-12 text-center relative overflow-hidden">
      {/* Background Shapes for "Fanatabulous" Design */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full opacity-30 blur-3xl animate-blob -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000 -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-pink-300 rounded-full opacity-30 blur-3xl animate-blob animation-delay-4000 -z-10"></div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-lg">
          Pay transport levies once, <br className="hidden md:inline" />drive <span className="text-blue-700">freely</span>.
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto font-light">
          Simplify your journey. Fund your wallet, pay with ease, and show your digital pass to drive freely.
        </p>

        {/* Step-by-step process with icons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="flex flex-col items-center text-gray-800 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <FaWallet className="text-blue-500 text-5xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-2">1. Fund Wallet</h3>
            <p className="text-gray-600">Quick & secure top-up.</p>
          </div>
          <div className="hidden md:block text-5xl text-gray-400">&rarr;</div>
          <div className="md:hidden text-5xl text-gray-400 transform rotate-90 my-4">&rarr;</div>

          <div className="flex flex-col items-center text-gray-800 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <FaCheckCircle className="text-green-500 text-5xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-2">2. Pay Once</h3>
            <p className="text-gray-600">Single, consolidated payment.</p>
          </div>
          <div className="hidden md:block text-5xl text-gray-400">&rarr;</div>
          <div className="md:hidden text-5xl text-gray-400 transform rotate-90 my-4">&rarr;</div>

          <div className="flex flex-col items-center text-gray-800 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <FaMobileAlt className="text-purple-500 text-5xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-2">3. Show Digital Pass</h3>
            <p className="text-gray-600">Hassle-free verification.</p>
          </div>
        </div>

        {/* CTAs */}
        {/* <p className="text-2xl font-bold text-gray-800 mb-6 animate-pulse">Join our waitlist today and be the first to experience the future of hassle-free transport levies.
      </p> */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <Link
            to="/driver"
            className="flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-full font-bold text-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
          >
            <FaCar className="mr-3 text-2xl group-hover:animate-bounce-h" /> I am a Driver
          </Link>
          <Link
            to="/union"
            className="flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-full font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
          >
            <FaUsers className="mr-3 text-2xl group-hover:animate-bounce-h" /> I am a Union Official
          </Link>
          <Link
            to="/government"
            className="flex items-center justify-center px-8 py-4 bg-purple-700 text-white rounded-full font-bold text-lg hover:bg-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
          >
            <FaBuilding className="mr-3 text-2xl group-hover:animate-bounce-h" /> Government Partner
          </Link>
        </div>
      </div>

      {/* Tailwind CSS for Custom Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: translate(0px, 0px) scale(1);
          }
          30% {
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
            transform: translate(-10px, 10px) scale(1.05);
          }
          60% {
            border-radius: 40% 60% 70% 30% / 40% 60% 40% 60%;
            transform: translate(10px, -10px) scale(0.95);
          }
        }

        @keyframes bounce-h {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(5px); }
        }

        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .group:hover .animate-bounce-h {
            animation: bounce-h 0.6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;