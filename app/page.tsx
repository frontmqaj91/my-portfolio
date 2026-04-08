"use client";

import { useState } from "react";

import Link from "next/link";

import Footer from "./components/Footer";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main
      className="min-h-screen relative"
    >

      {/* Content */}
      <div className="relative z-10">

        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#FAFAF8] text-black shadow-[0_1px_0_rgba(0,0,0,0.1)]">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

            <div className="text-lg font-bold tracking-wide text-black">
              FrontCraftDev
            </div>

            <div className="hidden md:flex space-x-9 text-sm font-medium text-black">
              <a href="#home" className="hover:text-blue-400 transition">Home</a>
              <a href="#services" className="hover:text-blue-400 transition">Services</a>
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
              <a href="#pricing" className="hover:text-blue-400 transition">Pricing</a>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
              
            </div>

            <button
              className="md:hidden text-2xl text-black"
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
            <div className="md:hidden bg-white backdrop-blur-md border-t text-black">
              <a href="#home" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-gray-800 transition">Home</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-gray-800 transition">Services</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-gray-800 transition">Projects</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-gray-800 transition">Pricing</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-gray-800 transition">About</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-gray-800 transition">Contact</a>
              
            </div>
          )}
        </nav>

        {/* Hero */}
        <section id="home"
          className="flex flex-col items-center justify-center text-center px-6 py-32">

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark-gray leading-snug">
            Custom Websites That Help Your Business Attract More Clients & Grow Online
          </h1>

          <div className="max-w-2xl mx-auto p-6 border border-gray-300 rounded-2xl shadow-sm flex items-center justify-center min-h-[150px]">

          <p className="text-dark-gray max-w-2xl mb-5">

            I design and develop modren, high-converting websites for businesses and startups.
            My websites are fast, responsive, SEO-optimized, and user-friendly turn visitors into real clients.
          </p>
          </div>

          <button
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth"
              });
            }}
            className="mt-6 px-6 py-3 bg-[#0f3643] hover:bg-[#0c2a36] active:scale-95 rounded-lg text-white font-medium shadow-lg transition">
            See My Projects
          </button>
        </section>

        

        {/* Services */}
        <section id="services"
          className="px-6 max-w-6xl mx-auto py-24">

          <h2 className="text-3xl font-bold text-center mb-12 text-dark-gray">
            Services We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-[#d4a574] p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3 text-[#2f2a26]">
                Modern Website Development
              </h3>
              <p className="text-[#2f2a26]">
                High-performance React & Next.js websites built with clean architecture, scalability, and speed optimization.
              </p>
            </div>

            <div className="bg-[#d4a574] p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3 text-[#2f2a26]">
                UI/UX Design
              </h3>
              <p className="text-[#2f2a26]">
                User-centered interface design focused on clarity, engagement, and conversion optimization.
              </p>
            </div>

            <div className="bg-[#d4a574] p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3 text-[#2f2a26]">
                Performance & SEO Optimization
              </h3>
              <p className="text-[#2f2a26]">
                User-centered design solutions that enhance usability and create memorable digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects"
          className="px-6 max-w-6xl mx-auto py-24">

          <h2 className="text-3xl font-bold text-center mb-12 text-dark-gray">
            Projects
          </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-[#0f3443] p-6 rounded-2xl shadow-xl hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-3 text-white">
          Ahmed Clinic_Booking System
        </h3>
        <p className="text-gray-200 mb-4">
          نظام حجز مواعيد طبي متكامل مبني باستخدام Next.js و Tailwind.
        </p>
        <a
          href="https://ahmed-clinic.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-[#2dd4bf] hover:bg-gray-200 text-[#0f3443] px-4 py-2 rounded-lg"
        >
          View Live Project
        </a>
      </div>

      <div className="bg-[#0f3443] p-6 rounded-2xl shadow-xl hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-3 text-white">
          Renne&apos;s Hair Styling _ Booking Web App
        </h3>
        <p className="text-gray-200 mb-4">
          Built a full-stack hair salon booking system using Vanilla HTML/CSS/JS.
        </p>
        <a
          href="https://rennes-hair-styling.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-[#2dd4bf] hover:bg-gray-200 text-[#0f3443] px-4 py-2 rounded-lg"
        >
          View Live Project
        </a>
      </div>

      <div className="bg-[#0f3443] p-6 rounded-2xl shadow-xl hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-3 text-white">Business Website</h3>
        <p className="text-gray-200 mb-4">
          Modern responsiv website built with next.js and Tailwind Css.
        </p>
      </div>

      <div className="bg-[#0f3443] p-6 rounded-2xl shadow-xl hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-3 text-white">E-Commerce Platform</h3>
        <p className="text-gray-200 mb-4">
          Full-stack online store with authentication and payments.
        </p>
      </div>

      <div className="bg-[#0f3443] p-6 rounded-2xl shadow-xl hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-3 text-white">Portfolio Website</h3>
        <p className="text-gray-200 mb-4">
          High-performance personal portfolio with clean UI.
        </p>
      </div>
    </div>
        </section>

        {/* Pricing */}
<section id="pricing"
 className="max-w-6xl mx-auto px-6 py-24">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
    Plans Starting At
  </h2>

  <p className="text-dark-gray text-center mb-12">
    Choose the right package that fits your project needs.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* Card 1 - Starter */}
    <div className="bg-[#f4f7f8] rounded-2xl shadow-md p-8 border hover:shadow-lg transition">
  <h3 className="text-xl font-semibold mb-4 text-[#0f3443]">Starter</h3>
  <p className="text-[#0f3443] mb-6">
    Perfect for small businesses and personal websites.
  </p>
  <div className="text-2xl font-bold mb-6 text-[#0f3443]">$150</div>

  <ul className="space-y-2 text-sm mb-6 max-h-40 overflow-y-auto pr-2 text-gray-700">

    <li>✔ Responsive modern website design</li>
    <li>✔ Up to 3 pages</li>
    <li>✔ Basic SEO setup</li>
    <li>✔ Contact form integration</li>
    <li>✔ Performance optimization</li>
    <li>✔ Clean scalable architecture</li>
  </ul>

  <Link href="/contact?package=starter">
  <button className="w-full bg-[#0f3443] text-white py-3 rounded-lg hover:bg-[#0c2b36] transition">
  
    Start Now
  </button>
  </Link>
</div>

{/* Card 2 - Professinoal */}
<div className="relative bg-[#e3eef2] rounded-2xl shadow-md p-8 border hover:shadow-lg transition">

  <div className="absolute top-1 right-1 bg-blue-300 text-[#1f4e5f] text-xs font-semibold px-3 py-1 rounded-full shadow">
    Most Popular

  </div>
  <h3 className="text-xl font-semibold mb-4 text-[#0f3443]">Professional</h3>
  <p className="text-[#335c67] mb-6">
    Ideal for growing brands and startups.
  </p>
  <div className="text-2xl font-bold mb-6 text-[#0f3443]">$350</div>
  <ul className="space-y-2 text-sm mb-6 max-h-40 overflow-y-auto pr-2 text-gray-700">
  
    <li>✔ Everything in Starter</li>
    <li>✔ Up to 6 pages</li>
    <li>✔ Contact form integration</li>
    <li>✔ Google Analytics installation</li>
    <li>✔ Advanced SEO setup</li>
    <li>✔ Mobile-friendly design</li>
    <li>✔ Performance optimization</li>
    <li>✔ Basic security setup</li>
    <li>✔ Clean scalable architecture</li>
  </ul>

  <Link href="/contact?package=professional">
  <button className="w-full bg-[#0f3443] text-white py-3 rounded-lg hover:bg-[#0c2b36] transition">
    Start Now
  </button>
  </Link>
</div>

{/* Card 3 - Business */}
<div className="bg-[#1f4e5f] rounded-2xl shadow-md p-8 border hover:shadow-lg transition">
  <h3 className="text-xl font-semibold mb-4 text-white">Business</h3>
  <p className="text-white mb-6">
    Advanced solutions for serious businesses.
  </p>
  <div className="text-2xl font-bold mb-6 text-[#dceff5]">$750</div>

  <ul className="space-y-2 text-sm mb-6 max-h-40 overflow-y-auto pr-2 text-white">
    <li>✔ Everything in Professional</li>
    <li>✔ Up to 10 pages</li>
    <li>✔ Custom UI/UX design</li>
    <li>✔ CMS integration</li>
  
    <li>✔ Priority support</li>
    <li>✔ Contact form + lead capture</li>
    <li>✔ Social media integration</li>
    <li>✔ 30 Days post-launch support</li>
  </ul>

  <Link href="/contact?package=business">
  <button className="w-full bg-white text-[#1f4e5f] py-3 rounded-lg hover:bg-gray-200 transition">
    Start Now 
  </button>
  </Link>
</div>

{/* Card 4 - Premium */}
<div className="bg-[#0f3443] rounded-2xl shadow-md p-8 border hover:shadow-lg transition">
  <h3 className="text-xl font-semibold mb-4 text-white">Premium</h3>
  <p className="text-white mb-6">
    Complete premium solution with advanced features and priority support.
  </p>
  <div className="text-2xl font-bold mb-6 text-[#f4d7b8]">$1,250</div>

  <ul className="space-y-2 text-sm mb-6 max-h-40 overflow-y-auto pr-2 text-white">
  
    <li>✔ Everything in Business</li>
    <li>✔ Fully custom website design</li>
    <li>✔ Unlimited pages</li>
    <li>✔ Custom UI/UX design</li>
    <li>✔ API integration</li>
    <li>✔ Advanced performance optimization</li>
    <li>✔ Security hardening</li>
    <li>✔ Conversion optimization</li>
    <li>✔ Google Analytics & search console setup</li>
    <li>✔ Mobile-friendly design</li>
    <li>✔ Priority support</li>
  </ul>

  <Link href="/contact?package=premium">
  <button className="w-full bg-[#f4d7b8] text-black py-3 rounded-lg hover:bg-white text-[#f4d7b8] transition">
    Start Now 
  </button>
  </Link>
</div>

  </div>
</section>

        {/* About */}
        <section id="about"
          className="px-6 max-w-4xl mx-auto py-24 text-center">

          <h2 className="text-3xl font-bold mb-6 text-dark-gray">
            About Me
          </h2>

          <div className="max-w-2xl mx-auto p-8 mt-6 border border-gray-300 rounded-2xl shadow-sm">

          <p className="text-gray-900 max-w-2xl mb-8">
            I’m a web developer focused on building modern, high-converting websites for businesses and startups.

My goal is simple: create websites that not only look great, but also help businesses attract more clients and grow online.

I specialize in:

• Modern responsive website design  
• Fast, SEO-optimized development  
• Clean, scalable code architecture  
• Conversion-focused user experience.
          </p>

          <p className="text-gray-800 max-w-2xl mx-auto">
            Every project is built with a clear strategy — turning visitors into real clients.
          </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact"
          className="px-6 max-w-4xl mx-auto py-24 text-center">

          <h2 className="text-3xl font-bold mb-6 text-dark-gray">
            Get In Touch
          </h2>

          <p className="text-dark-gray max-w-2xl mb-8 mx-auto">
            Have a project in mind? Let&apos;s work together!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

  <a href="https://wa.me/19805779916"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-green-500 hover:bg-green-600 active:scale-95 rounded-lg text-white font-medium shadow-lg transition">
    Chat on WhatsApp
  </a>

  <a href="https://www.facebook.com/FrontCraftDev"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-[#1877F2] hover:bg-blue-600 active:scale-95 rounded-lg text-white font-medium shadow-lg transition">
    Visit Our Facebook Page
  </a>

  <a 
  href="mailto:contact.frontcraft.dev@gmail.com"
  className="px-6 py-3 bg-gray-300 border border-gray-400 text-[#0f3443] rounded-lg hover:bg-gray-100
  transition"
  >
    Email Me
  </a>

</div>

        </section>

      </div>
      <Footer />
    </main>
  );
}
