import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Saloni Gupta",
    role: "Founder & Visionary",
    image: "https://source.unsplash.com/200x200/?woman,leader",
  },
  {
    name: "Aarav Mehta",
    role: "Operations Head",
    image: "https://source.unsplash.com/200x200/?man,smile",
  },
  {
    name: "Priya Sharma",
    role: "Creative Director",
    image: "https://source.unsplash.com/200x200/?woman,creative",
  },
];

export default function Team() {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20" id="team">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet the Team
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            transitionSpeed={1500}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}