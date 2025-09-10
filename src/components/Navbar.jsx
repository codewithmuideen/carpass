import React, { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import images from '../constants/images';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 md:px-12 py-4 bg-white shadow-md relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={images.logo} alt="NextPass Logo" className="w-12" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex flex-row items-center space-x-10">
        {['Coverage', 'How it works', 'Help center', 'Resources'].map((item) => (
          <li
            className="text-gray-700 hover:text-blue-600 transition font-medium"
            key={`link-${item}`}
          >
            <Link to={`/${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Login + App Stores */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          to="/login"
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
        >
          Login
        </Link>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={images.applestore} alt="App Store" className="h-10" />
        </a>
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img src={images.playstore} alt="Google Play" className="h-10" />
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center">
        <HiOutlineMenu
          className="w-9 h-9 text-gray-700 cursor-pointer"
          onClick={() => setToggle(true)}
        />

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-xl flex flex-col items-start p-8 z-50"
            >
              <HiX
                className="absolute top-4 right-4 w-9 h-9 text-gray-700 cursor-pointer"
                onClick={() => setToggle(false)}
              />

              {/* Mobile Nav Links */}
              <ul className="mt-16 flex flex-col space-y-6 w-full">
                {['Coverage', 'How it works', 'Help center', 'Resources'].map((item) => (
                  <li
                    key={`mobile-link-${item}`}
                    onClick={() => setToggle(false)}
                    className="text-gray-700 hover:text-blue-600 transition text-lg font-medium"
                  >
                    <Link to={`/${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Login + Stores */}
              <div className="mt-10 flex flex-col space-y-4 w-full items-center">
                {/* Login button (not full width) */}
                <Link
                  to="/login"
                  className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
                  onClick={() => setToggle(false)}
                >
                  Login
                </Link>

                {/* App stores in one row */}
                <div className="flex space-x-4">
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={images.applestore} alt="App Store" className="h-12" />
                  </a>
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={images.playstore} alt="Google Play" className="h-12" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
