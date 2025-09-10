import React from "react";

// All Nigerian States + FCT
const states = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa",
  "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa",
  "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
  "Yobe", "Zamfara", "Federal Capital Territory (FCT)"
];

const Coverage = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Nationwide Coverage
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are building transport levy solutions across all 36 states of Nigeria 
          including the FCT. No matter where you are, we’ve got you covered.
        </p>
      </div>

      {/* States Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {states.map((state, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-white shadow-md rounded-xl 
                       border border-gray-100 hover:shadow-lg hover:-translate-y-1 
                       transform transition-all duration-300"
          >
            <span className="text-base md:text-lg font-semibold text-gray-800">
              {state}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coverage;
