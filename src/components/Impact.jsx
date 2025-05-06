import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { label: "Children Educated", value: 1200 },
  { label: "Healthcare Camps", value: 75 },
  { label: "Volunteers", value: 300 },
  { label: "Smiles Delivered", value: 5000 },
];

export default function Impact() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6 md:px-20" id="impact">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Our Impact
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Numbers that reflect the lives we’ve touched with compassion and action.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-pink-600 mb-2">
              <CountUp end={stat.value} duration={2.5} separator="," />
              {stat.label === "Smiles Delivered" && "+"}
            </h3>
            <p className="text-gray-700 dark:text-gray-200 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}