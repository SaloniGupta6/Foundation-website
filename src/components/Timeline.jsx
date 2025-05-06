import { motion } from "framer-motion";

const milestones = [
  {
    year: "2018",
    title: "Founded",
    description: "MuskuHARAT Foundation was born with a mission to spread joy and dignity.",
  },
  {
    year: "2019",
    title: "First 1,000 Smiles",
    description: "Launched our first outreach campaign across local schools.",
  },
  {
    year: "2020",
    title: "Medical Drives Begin",
    description: "Started free medical checkups in underserved communities.",
  },
  {
    year: "2022",
    title: "Education Expansion",
    description: "Built learning hubs and distributed books to rural children.",
  },
  {
    year: "2024",
    title: "Nationwide Impact",
    description: "Reached 10,000+ lives with love, care, and resources.",
  },
];

export default function Timeline() {
  return (
    <section className="relative bg-gray-50 py-16 px-6 md:px-20" id="timeline">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Journey
      </h2>

      <div className="relative border-l-4 border-pink-500 ml-4 space-y-12 max-w-3xl mx-auto">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="ml-6 relative"
          >
            <div className="absolute -left-9 top-0 w-6 h-6 bg-pink-500 rounded-full border-4 border-white shadow-md"></div>
            <h3 className="text-xl font-semibold text-gray-800">{milestone.year}</h3>
            <h4 className="text-md font-medium text-pink-600">{milestone.title}</h4>
            <p className="text-gray-600 mt-1">{milestone.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}