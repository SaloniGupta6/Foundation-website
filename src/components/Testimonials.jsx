import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    text: "Muskurahat Foundation changed my life. I got access to school supplies and mentorship that I never thought possible.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sneha Kapoor",
    text: "The love and care I received during the emotional wellness sessions brought back my confidence and smile.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Volunteer Ravi",
    text: "I’ve volunteered with many NGOs, but the compassion and transparency here is next-level.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-gray-900 py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
      >
        What People Say
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full border-2 border-pink-500"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t.name}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}