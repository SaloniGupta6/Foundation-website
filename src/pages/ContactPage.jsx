import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiInstagram, FiFacebook, FiYoutube, FiLinkedin } from "react-icons/fi";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pt-28 px-6 md:px-20 min-h-screen bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-pink-600 dark:text-yellow-400 mb-4">
          Get in Touch
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          We'd love to hear from you. Reach out with any questions, suggestions, or to learn more about our mission.
        </p>
      </motion.section>

      {/* Contact Form and Info */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block font-medium mb-1">Your Name</label>
            <input
              type="text"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Your Email</label>
            <input
              type="email"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Subject</label>
            <input
              type="text"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-pink-600 dark:text-yellow-400" />
            <span className="text-gray-700 dark:text-gray-300">+91 9355254348</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-pink-600 dark:text-yellow-400" />
            <span className="text-gray-700 dark:text-gray-300">muskurahatfoundation0808@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-pink-600 dark:text-yellow-400" />
            <span className="text-gray-700 dark:text-gray-300">
              Bungalow No. 3, Next to Ram Mandir, Kondivita Road, Andheri East, Mumbai, Maharashtra 400059
            </span>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/muskurahatfoundation" target="_blank" rel="noopener noreferrer">
              <FiInstagram className="text-pink-600 dark:text-yellow-400 text-2xl" />
            </a>
            <a href="https://www.facebook.com/muskurahatfoundation" target="_blank" rel="noopener noreferrer">
              <FiFacebook className="text-pink-600 dark:text-yellow-400 text-2xl" />
            </a>
            <a href="https://www.youtube.com/channel/UC9WD-TxgPJjjm63OKib9BOw" target="_blank" rel="noopener noreferrer">
              <FiYoutube className="text-pink-600 dark:text-yellow-400 text-2xl" />
            </a>
            <a href="https://www.linkedin.com/company/muskurahatfoundation" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="text-pink-600 dark:text-yellow-400 text-2xl" />
            </a>
          </div>
        </motion.div>
      </div>

      
    </div>
  );
}