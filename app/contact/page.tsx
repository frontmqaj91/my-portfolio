"use client";

import { useSearchParams } from "next/navigation";
import { resolve } from "path";
import { useState } from "react";

const packages = {
  starter: {
    title: "Starter Package",
    price: "$150",
    features: [
      "Responsive modern website design",
      "Up to 3 pages",
      "Basic SEO setup",
      "Contact form integration",
      "Performance optimization",
      "Clean scalable architecture",
    ],
  },
  professional: {
    title: "Professional Package",
    price: "$350",
    features: [
      "Responsive modern website design",
      "Up to 6 pages",
      "Advanced SEO setup",
      "Contact form integration",
      "Google Analytics installation",
      "Mobile-friendly design",
      "Performance optimization",
      "Basic security setup",  
      "Clean scalable architecture",
      ],
  },
  business: {
    title: "Business Package",
    price: "$750",
    features: [
      "Custom website design",
      "Up to 10 pages",
      "Advanced SEO setup",
      "Blog or CMS integration",
      "Contact form + lead capture",
      "Google Analytics & search console setup",
      "Mobile-friendly design",
      "Performance optimization",
      "Basic security setup",
      "Social media integration",
    "30 Days post-launch support",
    ],
  },
  premium: {
    title: "Premium Package",
    price: "$1,250",
    features: [
      "Fully custom website design",
      "Unlimited pages",
      "Advanced SEO setup",
      "Blog or CMS integration",
      "Coustom UI/UX design",
      "Contact form + lead capture",
      "API integration",
      "Advanced performance optimization",
      "Security hardening",
      "Google Analytics & search console setup",
      "Mobile-friendly design",
      "Conversion optimization",
      "Priority support",
      "60 Days post-launch support",
    ],
  },
};

export default function ContactPage() {


  const searchParams = useSearchParams();
  const selectedPackage = searchParams.get("package");

  const selectedData = selectedPackage
    ? packages[selectedPackage as keyof typeof packages]
    : null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          package: selectedPackage,
        }),
      });

      if (response.ok) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  setIsLoading(false);   // ← أوقف التحميل أولاً
  setSuccess(true);      // ثم أظهر رسالة النجاح

  setFormData({
    name: "",
    email: "",
    message: "",
  });

      
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      alert("Server error.");
    }
  };

  return (
       
    <section className="min-h-screen bg-[#f4f7f8] py-24 px-6">

      <button
        onClick={() => window.history.back()}
        className="ml-8 mt-2 mb-8 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-900 transition">

          Back to Home

        </button>

      <div className="max-w-3xl mx-auto">

        {/* PACKAGE SUMMARY */}
        {selectedData && (
          <div className="mb-12 bg-white p-8 rounded-2xl shadow-md border">
            <h2 className="text-2xl font-bold text-[#0f3443] mb-2">
              {selectedData.title}
            </h2>

            <p className="text-lg font-semibold text-[#0f3443] mb-3">
              Investment: {selectedData.price}
            </p>

            <p className="text-sm text-[#0f3443] opacity-70 mb-6">
              Final scope and cost are tailored according to your specific project requirements.
            </p>

            <ul className="space-y-2">
              {selectedData.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#0f3443] rounded-full mt-2"></div>
                  <span className="text-[#0f3443]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CONTACT FORM */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-[#0f3443] mb-6">
            Start Your Project
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={formData.name}
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <textarea
              placeholder="Tell me about your project..."
              required
              rows={4}
              value={formData.message}
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
  type="submit"
  disabled={isLoading}
  className="w-full bg-[#0f3443] text-white py-3 rounded-lg hover:bg-[#0c2a36] transition disabled:opacity-70 flex items-center justify-center gap-2"
>
  {isLoading ? (
    <>
      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      Sending...
    </>
  ) : (
    "Request Proposal"
  )}
</button>
{success && (
  <p className="text-green-600 text-sm mt-4 text-center">
    Your request has been sent successfully.
  </p>
)}
          </form>
        </div>

      </div>
    </section>
  );
}
