import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "../assets/Blobs.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center px-6 bg-white dark:bg-black transition-colors duration-500"
    >
      {/* 🔵 Blob Background Animation */}
      <div className="blob-container z-0" />

      {/* ✨ Animated Content */}
      <motion.div
        className="z-10 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
          Empowering{" "}
          <motion.span
            className="text-pink-600 inline-block relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          >
            Smiles
          </motion.span>{" "}
          Through Compassion
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Join Muskurahat in spreading joy, education, and health to the underprivileged.<br />
          Every small act creates a <span className="font-medium text-pink-500">big impact</span>.
        </p>

        <a
          href="#impact"
          className="mt-10 inline-flex items-center gap-2 px-8 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition dark:bg-pink-500 dark:hover:bg-pink-600"
        >
          Explore Our Impact <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}