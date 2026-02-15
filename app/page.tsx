"use client";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white scroll-smooth">
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 border-b border-gray-800 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    
    <h1 className="text-lg font-bold tracking-wide">
      FrontCraft
    </h1>

    <div className="hidden md:flex space-x-8 text-sm font-medium">
      <a href="#home" className="hover:text-blue-400 transition">
        Home
      </a>

      <a href="#services" className="hover:text-blue-400 transition">
        Services
        </a>
        
      <a href="#projects" className="hover:text-blue-400 transition">
        Projects
      </a>

      <a href="#contact" className="hover:text-blue-400 transition">
        Contact
      </a>

      <a href="#about" className="hover:text-blue-400 transition">
          About
        </a>

      
    </div>

    {/* Hamburger button */}
    <button
    className="md:hidden text-2x1"
    onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.633h16.5M3.75 12h16.5m-16.5 5.367h16.5" />
        </svg>
      )}
    </button>
  </div>

  {/* Mobile menu */}
  {isOpen && (
  <div className="md:hidden bg-black/30 backdrop-blur-md border-t">

    <a
      href="#home"
      onClick={() => setIsOpen(false)}
      className="block px-6 py-3 hover:bg-gray-800 transition"
    >
      Home
    </a>

    <a
      href="#services"
      onClick={() => setIsOpen(false)}
      className="block px-6 py-3 hover:bg-gray-800 transition"
    >
      Services
    </a>

    <a
      href="#projects"
      onClick={() => setIsOpen(false)}
      className="block px-6 py-3 hover:bg-gray-800 transition"
    >
      Projects
    </a>

    <a
      href="#contact"
      onClick={() => setIsOpen(false)}
      className="block px-6 py-3 hover:bg-gray-800 transition"
    >
      Contact
    </a>

    <a
      href="#about"
      onClick={() => setIsOpen(false)}
      className="block px-6 py-3 hover:bg-gray-800 transition"
    >
      About
    </a>

    </div>
  )}
</nav>

      {/* Hero Section */}
      <section
       id="home"
        className="flex flex-col items-center justify-center text-center px-6 20 py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hi, I'm Mo
        </h1>

        <p className="text-gray-400 max-w-2xl mb-8">
          I build fast, modern websites for growing businesses.
          High-performance React & Next.js websites that convert visitors into clients.
        </p>

        <button
        onClick={() => {
          document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth"
          });
        }}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-lg text-white font-medium shadow-lg transition">
          View My Projects
        </button>
      </section>

      <section
       id="contact"
        className="px-6 max-w-4x1 mx-auto py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-400 max-w-2xl mb-8 mx-auto">
          Have a project in mind? Let's work together!
        </p>

        <a href="https://wa.me/19805779916"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 hover:bg-green-600 active:scale-95 rounded-lg text-white font-medium shadow-lg transition"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* Services Section */}

        <section
        id="services"

        className="px-6 max-w-6xl mx-auto py-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Services I Offer
        </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {/* Service 1 */}
            <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3">
                Modern Website Development
              </h3>
              <p className="text-gray-400">
                High-performance React & Next.js websites built with clean architecture, scalability, and speed optimization.

              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3">
                UI/UX Design 
              </h3>
              <p className="text-gray-400">
                User-centered interface design focused pn clarity, engagement, and conversion optimization.
                 
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3">
                Performance & SEO Optimization.

              </h3>
              <p className="text-gray-400">
                User-centered design solutions that enhance usability and create memorable digital experiences.
              </p>
            </div>

          </div>
      </section>

      {/* Projects Section */}
      <section
       id="projects"
        className="px-6 max-w-6xl mx-auto py-24">

        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              Business Website
            </h3>
            <p className="text-gray-400 mb-4">
              Modern responsive website built with Next.js and Tailwind CSS.
            </p>
            <span className="text-blue-400 text-sm">
              Next.js • Tailwind
            </span>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              E-Commerce Platform
            </h3>
            <p className="text-gray-400 mb-4">
              Full-stack online store with authentication and payments.
            </p>
            <span className="text-blue-400 text-sm">
              React • Node.js
            </span>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              Portfolio Website
            </h3>
            <p className="text-gray-400 mb-4">
              High-performance personal portfolio with clean UI.
            </p>
            <span className="text-blue-400 text-sm">
              UI/UX • Next.js
            </span>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="px-6 max-w-4xl mx-auto py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">
          About FrontCraft
        </h2>
        <p className="text-gray-400 max-w-2xl mb-8 mx-auto">
          At FrontCraft, we don't just build websites — we craft high-performance digital experiences
  designed to grow your business. Our focus is on speed, clean architecture,
  user-centered design, and conversion optimization.
          </p>
          <p className="text-gray-400 max-w-2xl mb-8 mx-auto">
            Every line of code is written with strategy in mind — to increase engagement,
  build trust with your audience, and turn visitors into paying clients.
  We build modern React & Next.js websites that don’t just look premium —
  they perform.
          </p>
      </section>
      
    </main>
  );
}
