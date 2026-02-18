"use client";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/bg.png')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/64"></div>

      {/* Content */}
      <div className="relative z-10">

        <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/70 text-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

            <h1 className="text-lg font-bold tracking-wide text-white">
              FrontCraftDev
            </h1>

            <div className="hidden md:flex space-x-8 text-sm font-medium text-white">
              <a href="#home" className="hover:text-blue-400 transition">Home</a>
              <a href="#services" className="hover:text-blue-400 transition">Services</a>
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
            </div>

            <button
              className="md:hidden text-2xl text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3.75 6.633h16.5M3.75 12h16.5m-16.5 5.367h16.5" />
                </svg>
              )}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden bg-black/30 backdrop-blur-md border-t text-white">
              <a href="#home" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-gray-800 transition">Home</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-gray-800 transition">Services</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-gray-800 transition">Projects</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-gray-800 transition">Contact</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-gray-800 transition">About</a>
            </div>
          )}
        </nav>

        {/* Hero */}
        <section id="home"
          className="flex flex-col items-center justify-center text-center px-6 py-32">

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Crafting High-Performance Websites That Convert
          </h1>

          <p className="text-gray-300 max-w-2xl mb-8">
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

        {/* Contact */}
        <section id="contact"
          className="px-6 max-w-4xl mx-auto py-24 text-center">

          <h2 className="text-3xl font-bold mb-6 text-white">
            Get In Touch
          </h2>

          <p className="text-gray-300 max-w-2xl mb-8 mx-auto">
            Have a project in mind? Let&apos;s work together!
          </p>

          <a href="https://wa.me/19805779916"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 active:scale-95 rounded-lg text-white font-medium shadow-lg transition">
            Chat on WhatsApp
          </a>
        </section>

        {/* Services */}
        <section id="services"
          className="px-6 max-w-6xl mx-auto py-24">

          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Services We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Modern Website Development
              </h3>
              <p className="text-gray-400">
                High-performance React & Next.js websites built with clean architecture, scalability, and speed optimization.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3 text-white">
                UI/UX Design
              </h3>
              <p className="text-gray-400">
                User-centered interface design focused on clarity, engagement, and conversion optimization.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Performance & SEO Optimization
              </h3>
              <p className="text-gray-400">
                User-centered design solutions that enhance usability and create memorable digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects"
          className="px-6 max-w-6xl mx-auto py-24">

          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-gray-900 p-6 rounded-2xl shadow-xl">
    <h3 className="text-xl font-semibold mb-3 text-purple-400">
      Ahmed Clinic Booking System
    </h3>

    <p className="text-gray-400 mb-4">
      نظام حجز مواعيد طبي متكامل مبني باستخدام Next.js و Tailwind.
    </p>
    <a
    href="https://ahmed-clinic-qrl6.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
    >
      View Live Project
    </a>
    </div>

            <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3 text-white">Business Website</h3>
              <p className="text-gray-400 mb-4">
                Modern responsiv website built with next.js and Tailwind Css.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3 text-white">E-Commerce Platform</h3>
              <p className="text-gray-400 mb-4">
                Full-stack online store with authentication and payments.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3 text-white">Portfolio Website</h3>
              <p className="text-gray-400 mb-4">
                High-performance personal portfolio with clean UI.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about"
          className="px-6 max-w-4xl mx-auto py-24 text-center">

          <h2 className="text-3xl font-bold mb-6 text-white">
            About FrontCraftDev
          </h2>

          <p className="text-gray-300 max-w-2xl mb-8 mx-auto">
            At FrontCraft, we don&apos;t just build websites — we craft high-performance digital experiences designed to grow your business.
          </p>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Every line of code is written with strategy in mind — to increase engagement and turn visitors into paying clients.
          </p>
        </section>

      </div>
    </main>
  );
}
