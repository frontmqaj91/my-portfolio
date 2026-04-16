"use client";

type Props = {
  title: string;
  description: string;
  price: string;
  features: string[];
};

export default function PricingTemplate({ title, description, price, features }: Props) {
  return (
    <section className="min-h-screen bg-[#0A0F1E] pb-20 font-latin">

      {/* Hero */}
      <div className="relative overflow-hidden pt-10 pb-28 px-6">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-yellow-900/10 pointer-events-none" />

        <button
          onClick={() => window.history.back()}
          className="fixed top-4 left-4 z-50 flex items-center gap-2 glass border border-white/10
            hover:border-blue-500/50 text-slate-300 hover:text-white px-4 py-2 rounded-xl text-sm
            font-medium transition-all duration-200"
        >
          ← Back
        </button>

        <div className="relative z-10 max-w-4xl mx-auto text-center pt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">{description}</p>

          <div className="glass border border-white/10 rounded-2xl p-10 max-w-sm mx-auto">
            <p className="text-xs text-slate-500 mb-2 uppercase tracking-widest">Starting From</p>
            <p className="text-6xl font-extrabold grad-text mb-3">{price}</p>
            <div className="section-line my-4" />
            <p className="text-xs text-slate-500">
              Final pricing may vary depending on additional features and custom functionality.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-white text-center mb-3">
            What&apos;s Included
          </h2>
          <div className="section-line max-w-xs mx-auto mb-14" />

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="glass border border-white/8 rounded-xl p-5 flex items-start gap-3
                  glow-blue transition-all duration-300"
              >
                <svg className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-slate-300 text-sm leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl p-10 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(30,58,138,0.6) 0%, rgba(10,15,30,0.9) 50%, rgba(201,168,76,0.2) 100%)",
            border: "1px solid rgba(59,130,246,0.3)",
            boxShadow: "0 0 60px rgba(30,58,138,0.3)"
          }}
        >
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Your Website?</h3>
            <p className="text-slate-400 mb-8 text-sm">
              Let&apos;s create a fast, clean, and professional online presence for your business.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white
                transition-all duration-200 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #1E3A8A, #3B82F6)",
                boxShadow: "0 0 25px rgba(59,130,246,0.4)"
              }}
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
