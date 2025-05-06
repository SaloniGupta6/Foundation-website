import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

// Testimonials data
const testimonials = [
  {
    name: "Aarav Sharma",
    quote: "Thanks to Muskurahat Foundation, my children now go to school with confidence and joy every day.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Rekha Devi",
    quote: "I never imagined I could stand on my own feet. This NGO gave me that power and belief.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4,
  },
  {
    name: "Mohammed Faisal",
    quote: "The healthcare camp saved my child's life. I am forever grateful to Muskurahat.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pt-28 px-6 md:px-16 min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-sans space-y-24">

      {/* 🌟 Hero Section */}
      <section className="text-center space-y-6" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold text-pink-600 dark:text-yellow-400">
          Voices of Change
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Real stories from those whose lives we've touched – through love, care, and unwavering support.
        </p>
      </section>

      {/* 💬 Testimonials Carousel */}
      <section className="space-y-10" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-indigo-700 dark:text-yellow-400">
          What People Say
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 text-center space-y-6 relative border-t-8 border-pink-300 dark:border-yellow-400">
                <div className="flex justify-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-24 h-24 rounded-full border-4 border-pink-400"
                  />
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 italic bg-pink-50 dark:bg-gray-800 px-6 py-4 rounded-xl shadow-inner">
                  “{t.quote}”
                </p>
                <div className="flex justify-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <h4 className="font-semibold text-pink-600 dark:text-pink-400 text-xl">{t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

{/* 🎥 Founder Message Section */}
<section className="space-y-8 text-center" data-aos="fade-up">
  <h2 className="text-4xl font-bold text-pink-600 dark:text-yellow-400">
    A Message From the Heart
  </h2>
  <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
    Hear about the journey, the impact, and the mission that drives us forward.
  </p>
  <div className="relative overflow-hidden pt-[48%] max-w-4xl mx-auto rounded-xl shadow-lg bg-white dark:bg-gray-900">
    <iframe
      className="absolute top-0 left-0 w-full h-full rounded-xl"
      src="https://www.youtube.com/embed/669qZJ6N4XA"
      title="Muskurahat Foundation"
      frameBorder="0"
      loading="eager"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>

      {/* 🙌 Call to Action */}
      <section
        className="bg-gradient-to-r from-pink-100 to-yellow-100 dark:from-gray-800 dark:to-gray-700 py-12 px-6 md:px-16 rounded-2xl shadow-xl text-center space-y-6"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 dark:text-yellow-300">
          Inspired by our story?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Join our mission to bring smiles and positive change. Whether you want to volunteer your time, support financially, or share your journey—every action matters.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/volunteer"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md"
          >
            Volunteer
          </a>
          <a
            href="/donate"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md"
          >
            Donate
          </a>
          <a
            href="/share-story"
            className="inline-block bg-white text-pink-600 border-2 border-pink-500 hover:bg-pink-50 font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md"
          >
            Share Your Story
          </a>
        </div>
      </section>
    </div>
  );
}