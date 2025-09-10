import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaApple, FaGooglePlay, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
// Assuming you have these images in your constants/images.js
import images from '../constants/images';

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Enugu", "Gombe", "Imo",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers",
  "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT"
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [stateError, setStateError] = useState('');
  const [termsError, setTermsError] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const [subscribedEmails, setSubscribedEmails] = useState(new Set()); // To store subscribed emails

  const validateEmail = (email) => {
    if (!email) return 'Email is required.';
    if (!/\S+@\S+\.\S+/.test(email)) return 'Email address is invalid.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Validate email
    const emailErrMsg = validateEmail(email);
    setEmailError(emailErrMsg);
    if (emailErrMsg) valid = false;

    // Validate state
    if (!selectedState) {
      setStateError('Please select a state.');
      valid = false;
    } else {
      setStateError('');
    }

    // Validate terms
    if (!agreedToTerms) {
      setTermsError('You must agree to the Terms and Conditions.');
      valid = false;
    } else {
      setTermsError('');
    }

    if (valid) {
      if (subscribedEmails.has(email)) {
        setSubscriptionMessage({ type: 'error', text: 'You have already subscribed with this email. Please use a different one.' });
      } else {
        // Simulate API call or subscription logic
        setSubscribedEmails(prev => new Set(prev).add(email));
        setSubscriptionMessage({ type: 'success', text: 'You have subscribed successfully!' });
        // Clear form fields after successful subscription
        setEmail('');
        setSelectedState('');
        setAgreedToTerms(false);
      }
    } else {
      setSubscriptionMessage(''); // Clear previous messages if validation fails
    }
  };

  return (
    <footer className="bg-blue-900 text-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Product Links */}
        <div className="lg:col-span-1">
          <h4 className="text-white font-bold text-lg mb-4">Product</h4>
          <ul className="space-y-2">
            <li><Link to="/coverage" className="hover:text-white transition-colors duration-200">Coverage</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white transition-colors duration-200">How it works</Link></li>
          </ul>
        </div>

        {/* About Links */}
        <div className="lg:col-span-1">
          <h4 className="text-white font-bold text-lg mb-4">About</h4>
          <ul className="space-y-2">
            <li><Link to="/help-center" className="hover:text-white transition-colors duration-200">Help center</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors duration-200">Resources</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors duration-200">Terms and Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Help Info */}
        <div className="lg:col-span-1">
          <h4 className="text-white font-bold text-lg mb-4">Need help?</h4>
          <div className="space-y-2">
            <p className="flex items-center">
              <FaPhoneAlt className="mr-2 text-blue-400" />
              Call +234 808 814 7766 
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-400" />
              info@drivepass.com 
            </p>
            <p className="text-sm">Mon. - Fri.(9:00AM - 5:00PM)
            </p>
          </div>
        </div>

        {/* Subscription Form */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-bold text-lg mb-4">Want to know when DrivePass is available in your state?</h4>
          <p className="text-gray-400 mb-4">Subscribe and we will notify you when available.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border ${emailError ? 'border-red-500' : 'border-transparent'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(''); // Clear error on change
                }}
              />
              {emailError && <p className="text-red-400 text-sm mt-1 flex items-center"><FaTimesCircle className="mr-1" /> {emailError}</p>}
            </div>

            <div>
              <div className="relative">
                <select
                  className={`w-full p-3 rounded-md bg-gray-700 text-white appearance-none border ${stateError ? 'border-red-500' : 'border-transparent'} focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10`}
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setStateError(''); // Clear error on change
                  }}
                >
                  <option value="" disabled className="text-gray-400">Select a state</option>
                  {NIGERIAN_STATES.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              {stateError && <p className="text-red-400 text-sm mt-1 flex items-center"><FaTimesCircle className="mr-1" /> {stateError}</p>}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-600 bg-gray-700 focus:ring-blue-500"
                checked={agreedToTerms}
                onChange={(e) => {
                  setAgreedToTerms(e.target.checked);
                  setTermsError(''); // Clear error on change
                }}
              />
              <label htmlFor="terms" className="ml-2 text-gray-400 text-sm">
                I agree to <Link to="/terms" className="text-blue-400 hover:underline">Terms and Conditions</Link> and <Link to="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>
              </label>
            </div>
            {termsError && <p className="text-red-400 text-sm mt-1 flex items-center"><FaTimesCircle className="mr-1" /> {termsError}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-colors duration-200"
            >
              Subscribe
            </button>
            {subscriptionMessage.text && (
              <p className={`mt-2 flex items-center text-sm font-medium ${subscriptionMessage.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {subscriptionMessage.type === 'success' ? <FaCheckCircle className="mr-1" /> : <FaTimesCircle className="mr-1" />}
                {subscriptionMessage.text}
              </p>
            )}
          </form>

          {/* Download App */}
          <div className="mt-8">
            <h4 className="text-white font-bold text-lg mb-4">DrivePass app</h4>
           <div className="flex flex-row gap-4 justify-center items-center">
  <a
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <img
      src={images.applestore}
      alt="Download on the App Store"
      className="h-12 w-auto"
    />
  </a>
  <a
    href="https://play.google.com/store/apps"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <img
      src={images.playstore}
      alt="Get it on Google Play"
      className="h-12 w-auto"
    />
  </a>
</div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;