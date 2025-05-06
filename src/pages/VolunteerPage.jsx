// src/pages/VolunteerPage.jsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function VolunteerPage() {
    const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pt-28 px-6 md:px-16 bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-900 dark:text-gray-100 font-sans">
      
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h1 className="text-5xl font-extrabold text-pink-600 dark:text-yellow-400">
          Become a Volunteer
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Your time can create smiles. Join hands with Muskurahat Foundation to be the light in someone’s life.
        </p>
      </motion.section>

      {/* Why Volunteer */}
      <section className="mt-16 space-y-10" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center text-indigo-700 dark:text-yellow-300">
          Why Join Us?
        </h2>
        <ul className="grid md:grid-cols-3 gap-8 text-center text-lg">
          {[
            "Make a Real Difference",
            "Build Leadership & Team Skills",
            "Work on Meaningful Projects",
          ].map((reason, index) => (
            <li
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {reason}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="pt-28 px-6 md:px-20 min-h-screen bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 dark:text-yellow-400">
          Become a Volunteer
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Help us bring smiles to thousands. Whether you can contribute time,
          skills, or ideas — there's a place for you.
        </p>

        <button
          onClick={() => navigate("/volunteer-signup")}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Sign Up to Volunteer
        </button>
      </div>
    </section>
    </div>
  );
}