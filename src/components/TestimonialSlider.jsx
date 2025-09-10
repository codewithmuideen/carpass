import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Onwunbiko Pascal",
    role: "Professional Driver",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "DrivePass has completely changed how I pay levies. It's seamless, quick, and stress-free. Highly recommended!",
  },
  {
    name: "Saudat Jamiu",
    role: "Logistics Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    text: "The digital pass saves us so much time. My team can move freely without constant interruptions. A real game changer.",
  },
  {
    name: "Adewale Musa",
    role: "Union Official",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    text: "Managing collections has never been this easy. Transparency and accountability are top-notch with DrivePass.",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <div className="relative w-full max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        What People Are Saying
      </h2>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 text-center border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-center mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 shadow-lg"
              />
            </div>

            <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              "{testimonial.text}"
            </p>

            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.role}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-blue-600 w-6" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
