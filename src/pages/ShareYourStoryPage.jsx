import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ShareYourStoryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const storedStories = JSON.parse(localStorage.getItem("userStories")) || [];
    setStories(storedStories);
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const story = e.target.story.value.trim();

    if (!name || !story) return;

    const newStory = { name, story, photo };
    const updatedStories = [newStory, ...stories];
    setStories(updatedStories);
    localStorage.setItem("userStories", JSON.stringify(updatedStories));

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
    setPhoto(null);
  };

  return (
    <section className="min-h-screen pt-28 px-6 md:px-20 bg-gradient-to-b from-yellow-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-3xl mx-auto space-y-12">
        <div data-aos="fade-up" className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 dark:text-yellow-400 mb-4">
            Share Your Story
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Your experience can inspire someone. Share how Muskurahat touched your life.
          </p>
        </div>

        {submitted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center"
            data-aos="fade-in"
          >
            💌 Thank you! Your story has been received.
          </div>
        )}

        {/* 📬 Form */}
        <form
          onSubmit={handleSubmit}
          data-aos="fade-up"
          className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Upload Photo (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full p-2 bg-white dark:bg-gray-800 rounded-lg"
            />
            {photo && (
              <img
                src={photo}
                alt="Preview"
                className="mt-4 rounded-lg h-32 object-cover"
              />
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Your Story</label>
            <textarea
              rows="5"
              name="story"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Submit Story
          </button>
        </form>

        {/* 📝 Submitted Stories */}
        {stories.length > 0 && (
          <div data-aos="fade-up" className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-pink-700 dark:text-yellow-400">
              Shared Stories
            </h2>
            <div className="space-y-6">
              {stories.map((s, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md space-y-2"
                >
                  <div className="flex items-center gap-4">
                    {s.photo && (
                      <img
                        src={s.photo}
                        alt={s.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-pink-400"
                      />
                    )}
                    <h4 className="font-semibold text-lg text-pink-600 dark:text-yellow-300">
                      {s.name}
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 italic">"{s.story}"</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}