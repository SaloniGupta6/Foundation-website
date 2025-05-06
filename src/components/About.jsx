import React from "react";
import { motion } from "framer-motion";
import BlobBackground from "./BlobBackground";

export default function About() {
  return (
    <div
      id="about"
      className="relative bg-white dark:bg-gray-900 py-16 px-6 md:px-20"
      data-aos="fade-up"
    >
      <BlobBackground />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 z-10 relative">
        {/* 📸 Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://source.unsplash.com/600x400/?help,ngo,smile"
              alt="Muskurahat impact"
              className="w-full h-auto object-cover"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </div>
        </motion.div>

        {/* ✍️ Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            About Muskurahat
          </h2>
          <p
            className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            We are a foundation rooted in compassion, committed to helping those
            in need by spreading joy, support, and dignity. From education and
            healthcare to empowerment programs — we strive to bring a lasting
            smile on every face.
          </p>
        </motion.div>
      </div>
    </div>
  );
}