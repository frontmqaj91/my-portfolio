"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

type Lang = "en" | "ar";

type PackageData = {
  title: string;
  price: string;
  features: string[];
};

type Translations = {
  back: string;
  startProject: string;
  investment: string;
  scopeNote: string;
  fullName: string;
  emailAddress: string;
  tellProject: string;
  requestProposal: string;
  sending: string;
  successMsg: string;
  packages: Record<string, PackageData>;
};

const T: Record<Lang, Translations> = {
  en: {
    back: "← Back",
    startProject: "Start Your Project",
    investment: "Investment:",
    scopeNote:
      "Final scope and cost are tailored according to your specific project requirements.",
    fullName: "Full Name",
    emailAddress: "Email Address",
    tellProject: "Tell me about your project",
    requestProposal: "Request Proposal",
    sending: "Sending…",
    successMsg: "Your request has been sent!",
    packages: {
      starter: {
        title: "Starter Package",
        price: "$150",
        features: [
          "Responsive modern design",
          "Up to 3 pages",
          "Basic SEO setup",
          "Contact form",
          "Performance optimization",
          "Clean architecture",
        ],
      },
      professional: {
        title: "Professional Package",
        price: "$350",
        features: [
          "Everything in Starter",
          "Up to 6 pages",
          "Advanced SEO",
          "Google Analytics",
          "Mobile-first design",
          "Security setup",
        ],
      },
      business: {
        title: "Business Package",
        price: "$750",
        features: [
          "Everything in Professional",
          "Up to 10 pages",
          "Custom UI/UX",
          "CMS integration",
          "Social media integration",
          "30-day support",
        ],
      },
      premium: {
        title: "Premium Package",
        price: "$1,250",
        features: [
          "Everything in Business",
          "Unlimited pages",
          "API integration",
          "Advanced optimization",
          "Security hardening",
          "60-day support",
        ],
      },
    },
  },
  ar: {
    back: "→ رجوع",
    startProject: "ابدأ مشروعك",
    investment: "التكلفة:",
    scopeNote: "تُحدَّد التكلفة النهائية بناءً على متطلبات مشروعك بالتفصيل.",
    fullName: "الاسم الكامل",
    emailAddress: "البريد الإلكتروني",
    tellProject: "أخبرني عن مشروعك",
    requestProposal: "طلب عرض سعر",
    sending: "جارٍ الإرسال…",
    successMsg: "تم إرسال طلبك بنجاح!",
    packages: {
      starter: {
        title: "باقة المبتدئ",
        price: "$150",
        features: [
          "تصميم متجاوب عصري",
          "حتى 3 صفحات",
          "إعداد SEO أساسي",
          "نموذج تواصل",
          "تحسين الأداء",
          "هندسة نظيفة",
        ],
      },
      professional: {
        title: "الباقة الاحترافية",
        price: "$350",
        features: [
          "كل مميزات المبتدئ",
          "حتى 6 صفحات",
          "SEO متقدم",
          "Google Analytics",
          "تصميم للجوال أولاً",
          "إعداد أمني",
        ],
      },
      business: {
        title: "باقة الأعمال",
        price: "$750",
        features: [
          "كل مميزات الاحترافية",
          "حتى 10 صفحات",
          "تصميم UI/UX مخصص",
          "نظام إدارة محتوى",
          "تكامل وسائل التواصل",
          "دعم 30 يوماً",
        ],
      },
      premium: {
        title: "الباقة المميزة",
        price: "$1,250",
        features: [
          "كل مميزات الأعمال",
          "صفحات غير محدودة",
          "تكامل API",
          "تحسين متقدم",
          "حماية أمنية",
          "دعم 60 يوماً",
        ],
      },
    },
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactContent />
    </Suspense>
  );
}

function ContactContent() {
  const searchParams   = useSearchParams();
  const selectedPackage = searchParams.get("package");

  const [lang, setLang]       = useState<Lang>("en");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  /* ── Language detection (logic unchanged) ── */
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "ar" || saved === "en") {
      setLang(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir  = saved === "ar" ? "rtl" : "ltr";
    } else {
      const detected: Lang = navigator.language?.startsWith("ar") ? "ar" : "en";
      setLang(detected);
      document.documentElement.lang = detected;
      document.documentElement.dir  = detected === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const c       = T[lang];
  const isAr    = lang === "ar";
  const fontCls = isAr ? "font-arabic" : "font-latin";
  const pkgData = selectedPackage ? c.packages[selectedPackage] : null;

  /* ── Form submit (logic unchanged) ── */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ ...formData, package: selectedPackage }),
      });
      if (res.ok) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={`relative min-h-screen bg-[#0A0F1E] py-24 px-6 ${fontCls}`}>

      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-yellow-900/5 pointer-events-none" />

      {/* Back button */}
      <button
        onClick={() => window.history.back()}
        className="relative z-10 mb-10 flex items-center gap-2 text-slate-500 hover:text-[#3B82F6]
          transition-colors duration-200 font-medium text-sm"
      >
        {c.back}
      </button>

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Package summary */}
        {pkgData && (
          <div className="mb-10 glass border border-white/10 rounded-2xl overflow-hidden">
            <div
              className="p-6"
              style={{
                background: "linear-gradient(135deg, rgba(30,58,138,0.8) 0%, rgba(10,15,30,0.9) 100%)",
              }}
            >
              <h2 className="text-xl font-bold text-white mb-1">{pkgData.title}</h2>
              <p className="text-2xl font-extrabold text-[#C9A84C]">
                {c.investment} {pkgData.price}
              </p>
            </div>
            <div className="p-6">
              <p className="text-xs text-slate-500 mb-5">{c.scopeNote}</p>
              <div className="grid grid-cols-2 gap-2">
                {pkgData.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#C9A84C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-400">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Form card */}
        <div className="glass border border-white/10 rounded-2xl p-8 md:p-10">
          <h1 className="text-2xl font-bold text-white mb-8">{c.startProject}</h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div className="relative w-full">
              <input
                id="name" type="text" required placeholder=" " autoComplete="off"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="peer w-full px-4 pt-6 pb-2 rounded-xl transition-all
                  bg-white/5 border border-white/10 text-white
                  focus:outline-none focus:border-[#3B82F6]/60 focus:bg-white/8
                  focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-slate-500 text-xs transition-all
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                  peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#3B82F6]"
              >
                {c.fullName}
              </label>
            </div>

            {/* Email */}
            <div className="relative w-full">
              <input
                id="email" type="email" required placeholder=" " autoComplete="off"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="peer w-full px-4 pt-6 pb-2 rounded-xl transition-all
                  bg-white/5 border border-white/10 text-white
                  focus:outline-none focus:border-[#3B82F6]/60 focus:bg-white/8
                  focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-slate-500 text-xs transition-all
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                  peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#3B82F6]"
              >
                {c.emailAddress}
              </label>
            </div>

            {/* Message */}
            <div className="relative w-full">
              <textarea
                id="message" required rows={4} placeholder=" " autoComplete="off"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="peer w-full px-4 pt-6 pb-2 rounded-xl resize-none transition-all
                  bg-white/5 border border-white/10 text-white
                  focus:outline-none focus:border-[#3B82F6]/60 focus:bg-white/8
                  focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-slate-500 text-xs transition-all
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                  peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#3B82F6]"
              >
                {c.tellProject}
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-200
                disabled:opacity-50 flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #1E3A8A, #3B82F6)",
                boxShadow: "0 0 20px rgba(59,130,246,0.35)",
              }}
            >
              {isLoading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {c.sending}
                </>
              ) : c.requestProposal}
            </button>

          </form>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative glass border border-white/15 px-8 py-5 rounded-2xl shadow-2xl
            flex items-center gap-4 animate-pop-in">
            <div
              className="w-11 h-11 flex items-center justify-center rounded-full text-white text-lg font-bold"
              style={{ background: "linear-gradient(135deg,#1E3A8A,#C9A84C)" }}
            >
              ✓
            </div>
            <p className="font-semibold text-white">{c.successMsg}</p>
          </div>
        </div>
      )}
    </section>
  );
}
