"use client";

import { Link } from "lucide-react";

type PricingTemplateProps = {
  title: string;
  description: string;
  price: string;
  features: string[];
};

export default function PricingTemplate({
  title,
  description,
  price,
  features,
}: PricingTemplateProps) {
  return (
    <section className="bg-white pb-20">

    
      {/* HERO */}
      <div className="bg-[#f4f7f8] pt-10 pb-24 px-6">

        <button
          onClick={() => window.history.back()}
          className="fixed top-4 left-4 bg-red-600 text-white px-4 py-2 rounded z-50">
          Back to Pricing
        </button>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#0f3443] mb-4">
            {title}
          </h1>

          <p className="text-[#0f3443] mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="bg-[#e3eef2] rounded-2xl shadow-md p-8 border hover:shadow-lg transition">
            <p className="text-sm text-[#0f3443] opacity-70 mb-2">
              Starting From
            </p>
            <p className="text-4xl font-bold text-[#0f3443] mb-4">
              {price}
            </p>
            <p className="text-sm text-[#0f3443] opacity-70">
              Final pricing may vary depending on additional features and custom functionality.
            </p>

          
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#0f3443] text-center mb-12">
            What’s Included
          </h2>

          <div className="grid md:grid-cols-2 gap-8 py-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#f4f7f8] p-6 rounded-2xl shadow-sm border"
              >
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-[#0f3443] rounded-full mt-2"></div>
                  <p className="text-[#0f3443]">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="bg-[#f4f7f8] py-32 px-6 min-h-[50vh] flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-[#0f3443] mb-4">
            Ready to Build Your Website?
          </h3>

          <p className="text-[#0f3443] mb-8 opacity-80">
            Lets create a fast, clean, and professional online presence for your business.
          </p>

          <button className="mt-6 px-6 py-3 bg-[#0f3443] hover:bg-[#0c3443] active:scale-95 rounded-lg text-white font-medium shadow-lg transition">
            Get Started Now
          </button>
        </div>
      </div>

    </section>
  );
}