import React from "react";

export default function FloatingDonateButton() {
  return (
    <a
      href="#donate" // Change this to your donate section or external payment link
      className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full shadow-lg z-50 transition-all duration-300"
    >
      Donate 💖
    </a>
  );
}