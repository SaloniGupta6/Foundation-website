import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function VolunteerSignupPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");  // For debugging
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <section className="min-h-screen pt-28 px-6 md:px-20 bg-gradient-to-b from-yellow-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-3xl mx-auto space-y-12">
        <div data-aos="fade-up" className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 dark:text-yellow-400 mb-4">
            Sign Up to Volunteer
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Join our mission and help spread smiles through impactful actions.
          </p>
        </div>

        {submitted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center"
            data-aos="fade-in"
          >
            🎉 Thank you! Your application has been submitted.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          data-aos="fade-up"
          className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Why do you want to volunteer?</label>
            <textarea
              rows="4"
              name="message"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
            />
          </div>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}