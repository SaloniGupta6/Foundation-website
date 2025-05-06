import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import founderImg from "../assets/founder.jpg";
import team1 from "../assets/team1.jpg"; // Add relevant team images
import team2 from "../assets/team2.jpg";
import { Users, Target, Lightbulb } from "lucide-react";

const timeline = [
  { year: "2017", description: "Founded with a mission to spread smiles in underserved areas." },
  { year: "2018", description: "Started emotional well-being and health support programs." },
  { year: "2020", description: "Launched educational initiatives during the pandemic." },
  { year: "2023", description: "Expanded to multiple states and impacted over 50,000 lives." },
];

const missionVision = [
  {
    icon: <Target size={36} className="text-pink-500" />,
    title: "Our Mission",
    text: "To bring hope and happiness to every child and family by ensuring access to emotional, educational, and healthcare support.",
  },
  {
    icon: <Lightbulb size={36} className="text-yellow-500" />,
    title: "Our Vision",
    text: "A society where compassion leads change, and no smile is left behind.",
  },
];

const team = [
  { name: "Ananya Sharma", role: "Operations Head", image: team1 },
  { name: "Rita Verma", role: "Community Outreach Lead", image: team2 },
];

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pt-28 px-6 md:px-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 space-y-24 font-sans">

      {/* 🧑‍💼 Meet Our Founder */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-12" data-aos="fade-up">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-extrabold text-pink-600 dark:text-pink-400">Meet Our Founder</h2>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
            The heart and soul behind Muskurahat Foundation, our founder is a visionary driven by love, empathy, and action. What started as a simple act of kindness evolved into a full-scale movement bringing transformation to thousands.
          </p>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Their story is not just one of leadership but of relentless courage — building trust with children in slums, educating youth during the pandemic, and leading countless volunteer drives. Their journey reflects unwavering dedication to humanity and the power of grassroots love.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={founderImg}
            alt="Founder"
            className="rounded-3xl shadow-2xl w-[60%] md:w-[75%] object-cover border-4 border-pink-200 dark:border-pink-600"
          />
        </div>
      </section>
      {/* 🌊 SVG Wave Divider */}
<div className="relative">
  <svg className="absolute top-0 left-0 w-full -mt-10 z-[-1]" viewBox="0 0 1440 320">
    <path fill="#f472b6" fillOpacity="0.4" d="M0,96L80,128C160,160,320,224,480,218.7C640,213,800,139,960,122.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
  </svg>
</div>


      {/* 🌟 Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10" data-aos="fade-up">
        {missionVision.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-tr from-indigo-100 via-white to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-3xl font-bold mb-2 text-indigo-700 dark:text-yellow-400">{item.title}</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">{item.text}</p>
          </motion.div>
        ))}
        
      </section>

      {/* 📜 Our Journey Timeline */}
      <section className="space-y-14" data-aos="fade-up">
        <h2 className="text-5xl font-extrabold text-center text-indigo-700 dark:text-indigo-300">Our Journey</h2>
        <div className="relative ml-6 pl-8 border-l-4 border-pink-500 dark:border-pink-400">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative mb-14 pl-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="absolute -left-[19px] top-1 w-5 h-5 bg-pink-500 dark:bg-pink-400 rounded-full border-4 border-white dark:border-gray-900 shadow-md" />
              <div className="text-lg font-semibold text-indigo-600 dark:text-yellow-300 mb-1">
                {item.year} &nbsp;&mdash;
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
          <div className="absolute w-72 h-72 bg-pink-300 opacity-30 rounded-full blur-3xl -z-10 top-0 left-10 dark:bg-pink-600" />
        </div>
      </section>

      {/* 👥 Meet Our Team */}
      <section className="space-y-10" data-aos="fade-up">
        <h2 className="text-5xl font-extrabold text-center text-pink-600 dark:text-pink-400">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center w-72"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={member.image} alt={member.name} className="rounded-full w-28 h-28 mx-auto mb-4 object-cover border-4 border-pink-300" />
              <h3 className="text-xl font-bold text-indigo-700 dark:text-yellow-400">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💡 Why We Matter */}
      <section className="text-center space-y-6" data-aos="fade-up">
        <Users size={48} className="mx-auto text-indigo-500 dark:text-yellow-400" />
        <h2 className="text-5xl font-extrabold">Why We Matter</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          In a world where basic needs are a privilege for many, Muskurahat Foundation works to ensure that love, care, and joy reach every corner. We matter because every child matters.
        </p>
      </section>
    </div>
  );
}