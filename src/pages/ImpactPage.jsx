// Import section remains the same
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeartPulse, BookOpen, Smile } from "lucide-react";
import ImpactMap from "../components/ImpactMap";
import PhotoGallery from "../components/PhotoGallery";

// ✅ Stats data
const stats = [
  { icon: <HeartPulse size={36} />, label: "Medical Camps", value: 12000 },
  { icon: <BookOpen size={36} />, label: "Children Educated", value: 8500 },
  { icon: <Smile size={36} />, label: "Lives Touched", value: 25000 },
];

function StatCounter({ value, label, icon }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ count: value });
    }
  }, [controls, inView, value]);

  useEffect(() => {
    let startTime = null;
    const duration = 2000;
    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
    }
    if (inView) {
      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="text-center space-y-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
    >
      <div className="text-indigo-600 dark:text-yellow-400 mx-auto">{icon}</div>
      <h3 className="text-4xl font-extrabold text-pink-600 dark:text-pink-400">
        {count.toLocaleString()}+
      </h3>
      <p className="text-lg text-gray-800 dark:text-gray-200">{label}</p>
    </div>
  );
}

export default function ImpactPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pt-28 px-6 md:px-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-900 dark:text-gray-100 space-y-24 font-sans">

      {/* ✨ Hero Section */}
      <section className="text-center space-y-6" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold text-indigo-700 dark:text-yellow-400">Impact That Inspires</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Our efforts are driven by compassion and executed through measurable actions. Here's how we're making a real difference every day.
        </p>
      </section>

      {/* 📊 Animated Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10" data-aos="fade-up">
        {stats.map((stat, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.2 }}>
            <StatCounter {...stat} />
          </motion.div>
        ))}
      </section>

      {/* 🌍 Impact Locations Map */}
      <section className="space-y-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-indigo-700 dark:text-indigo-300">Where We Make an Impact</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our projects span across major cities in India where we work directly with children and communities to bring change.
        </p>
        <ImpactMap />
      </section>

      {/* 🖼️ Photo Gallery */}
      <section className="space-y-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-pink-600 dark:text-pink-400">Gallery of Smiles</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Glimpses of our journey through pictures – smiles, stories, and moments of impact.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "/images/image1.jpg",
            "/images/image2.jpg",
            "/images/image3.jpg",
            "/images/image4.jpg",
            "/images/image5.jpg",
            "/images/image6.jpg"
          ].map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 🎯 Before & After */}
      <section className="space-y-10" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-indigo-700 dark:text-yellow-400">Before & After Impact</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Witness the transformative journeys of individuals and communities through our dedicated initiatives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 place-items-center">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden max-w-3xl w-full">
            <div className="grid grid-cols-2">
              <div>
                <p className="text-sm text-center font-semibold pt-2">Before</p>
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80"
                  alt="Before"
                  className="object-cover h-60 w-full"
                />
              </div>
              <div>
                <p className="text-sm text-center font-semibold pt-2">After</p>
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80"
                  alt="After"
                  className="object-cover h-60 w-full"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-pink-600 dark:text-pink-400">Educational Empowerment</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                From no school access to attending regular classes with smiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 📣 Awareness Campaigns */}
      <section className="space-y-10" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-pink-600 dark:text-pink-400">Awareness & Outreach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-yellow-300 mb-2">Slum Education Drives</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Weekly on-ground sessions held in urban slums, teaching basic literacy, hygiene, and mental health practices to over 500 kids every month.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-yellow-300 mb-2">Healthcare Awareness Camps</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Regularly partnered with local hospitals and clinics to organize camps offering free checkups, vaccinations, and awareness talks.
            </p>
          </div>
        </div>
      </section>

      {/* 🎥 Impact Video */}
      <section data-aos="fade-up" className="text-center space-y-6 mt-12 mb-32">
        <h2 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-300">Watch Our Impact</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          A glimpse into our journey of spreading hope, health, and happiness.
        </p>
        <div className="relative w-full max-w-4xl mx-auto aspect-video shadow-lg rounded-2xl overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/qnXbUaQTeeo?si=lhIUsAQ7bMEnybzh"
            title="Muskurahat Foundation Impact Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </section>
    </div>
  );
}