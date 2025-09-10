import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "How do I fund my wallet?",
      answer: "You can easily fund your wallet using various secure payment methods available within the app, including bank transfers, mobile money, and credit/debit cards."
    },
    {
      question: "How do I pay transport levies?",
      answer: "Once your wallet is funded, simply select the 'Pay Once' option, choose the relevant levy, and confirm the payment. Your digital pass will be generated instantly."
    },
    {
      question: "How do I show my digital pass?",
      answer: "After payment, your digital pass will be accessible from your dashboard. You can display it directly from your device, or use the SMS/NFC backup options where available."
    },
    {
      question: "What are the benefits of using this system?",
      answer: "Our system offers quick wallet funding, secure transactions, and enhanced fraud safety. The digital pass saves time, ensures universal access, and provides reliable backup options."
    },
    {
      question: "Is my personal and financial information secure?",
      answer: "Yes, we prioritize the security of your data. We use industry-standard encryption and security protocols to protect all personal and financial information."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  {item.question}
                </h3>
                {openIndex === index ? (
                  <IoIosArrowUp className="text-gray-500 text-xl" />
                ) : (
                  <IoIosArrowDown className="text-gray-500 text-xl" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-600">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;