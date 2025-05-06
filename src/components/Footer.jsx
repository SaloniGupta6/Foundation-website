import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const icons = [
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaFacebook />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg font-medium mb-4">Follow Us</p>
        <div className="flex justify-center gap-6 mb-6">
          {icons.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.3, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-2xl text-white hover:text-pink-400 transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-sm text-gray-400">
          Made with ❤️ by <span className="text-pink-300 font-semibold">Team Muskurahat</span>
        </p>
      </div>
    </footer>
  );
}