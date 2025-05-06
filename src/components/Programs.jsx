import React from "react";
import { motion } from "framer-motion";
import { Heart, BookOpen, Smile, UserCheck } from "lucide-react";

const programs = [
  {
    icon: <BookOpen size={40} className="text-pink-600" />,
    title: "Education for All",
    description: "We empower underprivileged children with quality education and holistic learning experiences.",
  },
  {
    icon: <Heart size={40} className="text-red-500" />,
    title: "Healthcare Camps",
    description: "Providing access to free check-ups, medical aid, and health awareness in underserved communities.",
  },
  {
    icon: <Smile size={40} className="text-yellow-500" />,
    title: "Mental Well-being",
    description: "We focus on emotional health, conducting therapy sessions, workshops, and joyful events.",
  },
  {
    icon: <UserCheck size={40} className="text-green-600" />,
    title: "Youth Empowerment",
    description: "Skill-building and mentorship programs to support dreams, careers, and confidence.",
  },
];

export default function Programs() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 md:px-20" id="programs">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Our Key Programs
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Creating long-term impact through action-focused initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl hover:scale-[1.03] transition-all"
          >
            <div className="mb-4">{program.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {program.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {program.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}