import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Smiles Delivered", value: 12000 },
  { label: "Active Volunteers", value: 350 },
  { label: "Programs Run", value: 45 },
  { label: "Cities Reached", value: 20 },
];

const countUp = (end) => {
  const duration = 2000;
  const stepTime = 50;
  const steps = duration / stepTime;
  const increment = end / steps;
  let current = 0;

  return {
    value: 0,
    start(setValue) {
      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          setValue(end);
          clearInterval(interval);
        } else {
          setValue(Math.floor(current));
        }
      }, stepTime);
    },
  };
};

export default function ImpactStats() {
  return (
    <div id="impact" className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Our Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-gray-700">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Counter end={stat.value} />
              <p className="text-lg mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Counter Component
function Counter({ end }) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const counter = countUp(end);
    counter.start(setValue);
  }, [end]);

  return (
    <h3 className="text-4xl md:text-5xl font-bold text-pink-600">
      {value.toLocaleString()}
    </h3>
  );
}