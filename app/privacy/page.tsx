"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Lang = "en" | "ar";

type Section = {
  heading: string;
  body: string | null;
  contactPrefix?: string;
  contactLink?: string;
  contactSuffix?: string;
};

type PageContent = {
  back: string;
  title: string;
  intro: string;
  sections: Section[];
};

const CONTENT: Record<Lang, PageContent> = {
  en: {
    back: "← Back to Home",
    title: "Privacy Policy",
    intro:
      "This Privacy Policy describes how we handle your personal information when you use our website. We are committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner.",
    sections: [
      {
        heading: "Information We Collect",
        body: "When you submit a message through our contact form, we may collect your name, email address, and any information you provide in your message. This information is used solely for the purpose of responding to your inquiry.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use the information you provide to respond to your inquiries, provide customer support, and improve our services. We do not share your personal information with third parties for marketing purposes.",
      },
      {
        heading: "Data Security",
        body: "Your personal information is kept confidential and will not be sold, rented, or shared with third parties without your consent, except as required by law. We implement appropriate security measures to protect your information.",
      },
      {
        heading: "Contact",
        body: null,
        contactPrefix: "If you have any questions about this Privacy Policy, please",
        contactLink: "contact us",
        contactSuffix: ".",
      },
    ],
  },
  ar: {
    back: "→ العودة إلى الرئيسية",
    title: "سياسة الخصوصية",
    intro:
      "تصف سياسة الخصوصية هذه كيفية تعاملنا مع معلوماتك الشخصية عند استخدامك لموقعنا الإلكتروني. نحن ملتزمون بحماية خصوصيتك وضمان التعامل مع بياناتك بطريقة آمنة ومسؤولة.",
    sections: [
      {
        heading: "المعلومات التي نجمعها",
        body: "عند إرسال رسالة عبر نموذج التواصل لدينا، قد نجمع اسمك وعنوان بريدك الإلكتروني وأي معلومات تقدمها. تُستخدم هذه المعلومات حصراً للرد على استفسارك.",
      },
      {
        heading: "كيف نستخدم معلوماتك",
        body: "نستخدم المعلومات التي تقدمها للرد على استفساراتك وتقديم دعم العملاء وتحسين خدماتنا. لا نشارك معلوماتك الشخصية مع أطراف ثالثة لأغراض تسويقية.",
      },
      {
        heading: "أمان البيانات",
        body: "تُحفظ معلوماتك الشخصية بسرية تامة ولن تُباع أو تُؤجر أو تُشارك مع أطراف ثالثة دون موافقتك. نتخذ إجراءات أمنية مناسبة لحماية معلوماتك.",
      },
      {
        heading: "تواصل",
        body: null,
        contactPrefix: "إذا كانت لديك أي أسئلة حول سياسة الخصوصية، يرجى",
        contactLink: "التواصل معنا",
        contactSuffix: ".",
      },
    ],
  },
};

export default function PrivacyPage() {
  const [mounted, setMounted] = useState(false);
  const [lang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "ar" || saved === "en") return saved;
    return navigator.language?.startsWith("ar") ? "ar" : "en";
  });

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const c         = CONTENT[lang];
  const isAr      = lang === "ar";
  const fontClass = !mounted ? "font-latin" : (isAr ? "font-arabic" : "font-latin");

  return (
    <section
      className={`relative min-h-screen bg-[#0A0F1E] px-6 py-24 ${fontClass}`}
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-yellow-900/5 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-12 px-5 py-2.5 glass border border-white/10
            hover:border-[#3B82F6]/50 hover:shadow-[0_0_16px_rgba(59,130,246,0.25)]
            text-slate-400 hover:text-white rounded-xl transition-all duration-200 text-sm font-medium"
        >
          {c.back}
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.title}</h1>
        <div className="section-line max-w-[120px] mb-8" />

        {/* Intro */}
        <p className="mb-10 text-slate-400 leading-relaxed">{c.intro}</p>

        {/* Sections */}
        <div className="space-y-8">
          {c.sections.map((section, i) => (
            <div
              key={i}
              className="glass border border-white/8 rounded-2xl p-7
                hover:border-white/14 transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#C9A84C] shrink-0" />
                <h2 className="text-lg font-semibold text-white">{section.heading}</h2>
              </div>

              {section.body ? (
                <p className="text-slate-400 leading-relaxed text-sm">{section.body}</p>
              ) : (
                <p className="text-slate-400 leading-relaxed text-sm">
                  {section.contactPrefix}{" "}
                  <a
                    href="mailto:contact.frontcraft.dev@gmail.com?subject=Privacy Policy Question"
                    className="text-[#C9A84C] hover:text-[#E5BF6A] hover:underline font-medium transition-colors"
                  >
                    {section.contactLink}
                  </a>
                  {section.contactSuffix}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
