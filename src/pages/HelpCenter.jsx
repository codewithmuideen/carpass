import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IoSearchOutline,
  IoHelpCircleOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
  IoWalletOutline,
  IoDocumentTextOutline,
  IoChatbubbleEllipsesOutline,
  IoArrowForward
} from 'react-icons/io5';

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // All categories now go to /contact
  const categories = [
    {
      name: 'Getting Started',
      icon: <IoHelpCircleOutline className="text-2xl text-blue-500" />,
      description: 'Find guides on setting up your account and first steps.',
      link: '/contact'
    },
    {
      name: 'Account & Security',
      icon: <IoInformationCircleOutline className="text-2xl text-green-500" />,
      description: 'Manage your profile, password, and security settings.',
      link: '/contact'
    },
    {
      name: 'Payments & Transactions',
      icon: <IoWalletOutline className="text-2xl text-purple-500" />,
      description: 'Understand funding, payments, and transaction history.',
      link: '/contact'
    },
    {
      name: 'Digital Pass',
      icon: <IoDocumentTextOutline className="text-2xl text-yellow-500" />,
      description: 'Learn about generating, displaying, and managing your pass.',
      link: '/contact'
    },
    {
      name: 'Technical Support',
      icon: <IoSettingsOutline className="text-2xl text-red-500" />,
      description: 'Troubleshooting common issues and technical guides.',
      link: '/contact'
    },
    {
      name: 'Contact Support',
      icon: <IoChatbubbleEllipsesOutline className="text-2xl text-gray-500" />,
      description: 'Reach out to our support team for personalized help.',
      link: '/contact'
    },
  ];

  // All articles also go to /contact
  const popularArticles = [
    { title: 'How to fund your wallet?', link: '/contact' },
    { title: 'Understanding transport levies and payments', link: '/contact' },
    { title: 'Troubleshooting common login issues', link: '/contact' },
    { title: 'What is a digital pass and how do I use it?', link: '/contact' },
    { title: 'Updating your profile information', link: '/contact' },
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredArticles = popularArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Welcome to Our Help Center
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            How can we assist you today?
          </p>
        </header>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative flex items-center">
            <IoSearchOutline className="absolute left-4 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search for articles, topics, or keywords..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 shadow-sm dark:placeholder-gray-400"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          {searchTerm && (
            <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-3">Search Results:</h3>
              {filteredCategories.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-gray-600 dark:text-gray-300 mb-2">Categories</h4>
                  <ul className="space-y-2">
                    {filteredCategories.map((item, index) => (
                      <li key={index} className="flex items-center group cursor-pointer">
                        <span className="mr-3">{item.icon}</span>
                        <Link
                          to={item.link}
                          className="text-blue-600 hover:underline dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {filteredArticles.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-600 dark:text-gray-300 mb-2">Articles</h4>
                  <ul className="space-y-2">
                    {filteredArticles.map((article, index) => (
                      <li key={index} className="flex items-center group cursor-pointer">
                        <IoDocumentTextOutline className="mr-3 text-gray-400" />
                        <Link
                          to={article.link}
                          className="text-gray-700 hover:underline dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-50 transition-colors"
                        >
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {filteredCategories.length === 0 && filteredArticles.length === 0 && (
                <p className="text-gray-500 dark:text-gray-400">No results found for "{searchTerm}".</p>
              )}
            </div>
          )}
        </div>

        {/* Categories Section */}
        {!searchTerm && (
          <>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Browse by Category</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                  <Link
                    to={category.link}
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out border border-gray-200 dark:border-gray-700 cursor-pointer block"
                  >
                    <div className="flex items-center mb-4">
                      {category.icon}
                      <h3 className="ml-3 text-xl font-semibold">{category.name}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {category.description}
                    </p>
                    <div className="mt-4 flex justify-end">
                      <IoArrowForward className="text-blue-500 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Popular Articles Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Popular Articles</h2>
              <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <ul className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0 cursor-pointer group"
                    >
                      <Link
                        to={article.link}
                        className="text-lg text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      >
                        {article.title}
                      </Link>
                      <IoArrowForward className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Still Need Help? Section */}
            <section className="text-center bg-blue-600 dark:bg-blue-800 text-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Still Can't Find What You're Looking For?</h2>
              <p className="text-lg mb-6">
                Our support team is ready to help.
              </p>
              <Link to="/contact">
                <button
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 dark:text-blue-800 font-semibold rounded-full shadow-md hover:bg-gray-100 transform hover:scale-105 transition duration-300"
                >
                  <IoChatbubbleEllipsesOutline className="mr-2 text-xl" />
                  Contact Support
                </button>
              </Link>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default HelpCenter;
