import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section
      id="cta"
      className="
        relative
        bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400
        text-white
        py-20 px-6 md:px-20
        overflow-hidden rounded-t-3xl
        dark:bg-gray-900 dark:bg-none dark:text-white
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center z-10 relative"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Be the Change. Spread Smiles.
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Whether you donate, volunteer, or simply share our mission — your action matters.
          Join Muskurahat Foundation and bring hope where it’s needed most.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/donate"
            className="inline-flex items-center justify-center gap-2 bg-white text-pink-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition dark:bg-white dark:text-pink-700"
          >
            Donate Now <ArrowRight size={18} />
          </Link>

          <Link
            to="/volunteer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-pink-600 transition dark:hover:bg-white dark:hover:text-pink-700"
          >
            Become a Volunteer <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}