import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Programs from "./components/Programs";
import DarkModeToggle from "./components/DarkModeToggle";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";



import AboutPage from "./pages/AboutPage";
import ImpactPage from "./pages/ImpactPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import VolunteerPage from "./pages/VolunteerPage";
import DonatePage from "./pages/DonatePage";
import VolunteerSignupPage from "./pages/VolunteerSignupPage";
import ShareYourStoryPage from "./pages/ShareYourStoryPage";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen relative">
        
        {/* 🔲 Fixed Dark Mode Toggle */}
        <div className="fixed top-4 right-4 z-[1000]">
          <DarkModeToggle />
        </div>

        <Navbar />
        <ScrollToTop />

        <Routes>
          {/* ✅ Homepage with all components */}
          <Route
            path="/"
            element={
              <main className="pt-16 space-y-16">
                <div id="hero"><Hero /></div>
                <div id="about"><About /></div>
                <Programs />
                
                <div id="impact"><Impact /></div>
                <div id="testimonials"><Testimonials /></div>
                <div id="cta"><CTA /></div>
              </main>
            }
          />

          {/* ✅ Separate full-page routes */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/volunteer-signup" element={<VolunteerSignupPage />} />
          <Route path="/share-story" element={<ShareYourStoryPage />} />
                  </Routes>

        <Footer />
      </div>
      <Chatbot />
    </Router>
  );
}

export default App;