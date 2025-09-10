import React from "react";
import { motion } from "framer-motion";
import { Search, BookOpen, FileText, Download, HelpCircle } from "lucide-react";
// Assuming 'images' is correctly imported from your constants
import images from "../constants/images"; 

const ResourceCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -7, boxShadow: "0 10px 20px rgba(0,0,0,0.08)" }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="rounded-3xl border border-gray-200 bg-white p-8 flex flex-col items-center text-center cursor-pointer transform hover:scale-102 transition-all duration-300 shadow-sm hover:shadow-lg"
  >
    <div className="p-4 bg-blue-500/10 rounded-full mb-5">
      <Icon className="h-10 w-10 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
  </motion.div>
);

const FeaturedCard = ({ image, title, desc }) => (
  <motion.div
    whileHover={{ y: -7, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="rounded-3xl overflow-hidden border border-gray-200 bg-white flex flex-col group cursor-pointer transform hover:scale-102 transition-all duration-300 shadow-sm hover:shadow-lg"
  >
    <div className="h-56 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-6 md:p-8 flex-1 flex flex-col">
      <h4 className="text-xl font-semibold text-gray-800 mb-3">{title}</h4>
      <p className="text-gray-600 text-base mb-5 flex-1">{desc}</p>
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full self-start transition-colors duration-300 shadow-md hover:shadow-lg">
        Read More
      </button>
    </div>
  </motion.div>
);

export default function Resources() {
  const categories = [
    {
      icon: BookOpen,
      title: "Guides & Tutorials",
      desc: "Step-by-step onboarding and app usage guides for a smooth start.",
    },
    {
      icon: HelpCircle,
      title: "FAQs",
      desc: "Quick and comprehensive answers to all your common questions.",
    },
    {
      icon: FileText,
      title: "Compliance & Policies",
      desc: "Understand Levy rules, ID verification, and regulatory standards.",
    },
    {
      icon: Download,
      title: "Downloads",
      desc: "Access essential PDFs, insightful infographics, and official documents.",
    },
  ];

  const featured = [
    {
      image: images.payment, // Ensure these image paths are correct
      title: "How to Fund Your Wallet Effortlessly",
      desc: "Easily top up your wallet using your bank card, direct transfer, or a local agent.",
    },
    {
      image: images.pay_as_you_go, // Ensure these image paths are correct
      title: "Your Digital Pass: Explained in Detail",
      desc: "Discover how your single digital pass ensures free and seamless movement across all checkpoints.",
    },
    {
      image: images.control, // Ensure these image paths are correct
      title: "Staying Secure Online: Our Top Priorities",
      desc: "Learn about the robust measures we implement to protect your payments and personal data.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-8 lg:px-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 px-6 rounded-3xl shadow-xl transform skew-y-1- hover:skew-y-0 transition-transform duration-500 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 relative z-10 tracking-tight">
          Explore Our Rich Resources
        </h1>
        <p className="text-lg sm:text-xl opacity-95 mb-10 max-w-3xl mx-auto relative z-10 leading-relaxed">
          Your comprehensive hub for guides, FAQs, and essential tools to navigate with confidence and ease.
        </p>
        <div className="max-w-xl mx-auto flex items-center bg-white rounded-full shadow-lg p-3 relative z-10">
          <Search className="text-gray-400 ml-4 h-6 w-6" />
          <input
            type="text"
            placeholder="Search for guides, policies, or FAQs..."
            className="flex-1 px-4 py-3 outline-none rounded-r-full text-gray-800 text-lg placeholder-gray-400"
          />
        </div>
      </motion.div>

      {/* Categories Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-16">
        Resource Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-24">
        {categories.map((cat, i) => (
          <ResourceCard key={i} {...cat} />
        ))}
      </div>

      {/* Featured Resources Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-16">
        Featured Insights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-24">
        {featured.map((item, i) => (
          <FeaturedCard key={i} {...item} />
        ))}
      </div>

      {/* Downloads Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-gradient-to-br from-teal-500 to-green-600 text-white p-12 sm:p-16 rounded-3xl shadow-2xl text-center transform hover:rotate-1- hover:scale-102 transition-all duration-500 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')" }}></div>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 relative z-10">
          Ready to Deep Dive?
        </h2>
        <p className="text-lg sm:text-xl opacity-95 mb-8 max-w-2xl mx-auto relative z-10 leading-relaxed">
          Access a curated collection of PDFs, detailed infographics, and official policy documents.
        </p>
        <button className="px-10 py-4 bg-white text-teal-700 font-bold rounded-full shadow-lg hover:bg-gray-100 hover:text-teal-800 transition-all duration-300 transform hover:scale-105 relative z-10 text-lg">
          Download Resource Pack
        </button>
      </motion.div>
    </div>
  );
}