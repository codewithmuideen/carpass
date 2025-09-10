import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactCard = ({ icon: Icon, title, detail }) => (
  <motion.div
    whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="rounded-3xl border border-gray-200 bg-white p-8 text-center flex flex-col items-center cursor-pointer transform hover:scale-102 transition-all duration-300 shadow-md hover:shadow-xl"
  >
    <div className="p-4 bg-blue-500/10 rounded-full mb-5">
      <Icon className="h-10 w-10 text-blue-700" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-base leading-relaxed">{detail}</p>
  </motion.div>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-8 lg:px-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 bg-gradient-to-br from-blue-700 to-indigo-800 text-white py-20 px-6 rounded-3xl shadow-xl relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 relative z-10 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-lg sm:text-xl opacity-95 max-w-3xl mx-auto relative z-10 leading-relaxed">
          We're here to assist you. Reach out to our dedicated team for any
          queries or support.
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
        <ContactCard
          icon={Phone}
          title="Give Us a Call"
          detail="+234 905 234 5678"
        />
        <ContactCard
          icon={Mail}
          title="Email Our Team"
          detail="hello@carpass.com"
        />
        <ContactCard
          icon={MapPin}
          title="Our Office"
          detail="Lagos, Nigeria"
        />
        <ContactCard
          icon={Clock}
          title="Operating Hours"
          detail="Mon - Fri: 9am - 5pm GMT"
        />
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-4xl mx-auto mb-20 border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Send Us a Message
        </h2>
        <form
          className="space-y-7"
          action="sendmail.php"
          method="POST"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                placeholder="john.doe@example.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
              placeholder="Query about CarPass services"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 resize-y"
              placeholder="Write your detailed message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3.5 px-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
