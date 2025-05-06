// src/components/ScrollToTop.jsx
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-6 z-50 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition duration-300"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    )
  );
}