import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/Users/salonigupta/Desktop/foundation-website/src/assets/logo.png"; // Replace with your logo path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Impact", path: "/impact" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-indigo-600 dark:text-indigo-300"
        >
          <img
            src={logo}
            alt="logo"
            className="scale-125 md:scale-[4.5] transform origin-left h-10 w-auto -ml-4"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-300 transition font-medium ${
                  location.pathname === link.path
                    ? "text-indigo-600 dark:text-indigo-300 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/donate"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full shadow-md transition-all"
            >
              Donate
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 dark:text-gray-100 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`block text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-300 transition font-medium ${
                    location.pathname === link.path
                      ? "text-indigo-600 dark:text-indigo-300 font-semibold"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/donate"
                className="block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full shadow-md transition-all"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}