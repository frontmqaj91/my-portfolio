"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "./components/Footer";

type Lang = "en" | "ar";

/* ════════════════════════════════════════════════
   COUNT-UP — animates a number from 0 to target when scrolled into view
════════════════════════════════════════════════ */
function CountUp({ value, duration = 1800 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    const node = ref.current;
    if (!node || target === 0) return;
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          let startTime: number | null = null;
          const tick = (t: number) => {
            if (startTime === null) startTime = t;
            const progress = Math.min((t - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ════════════════════════════════════════════════
   TRANSLATIONS  (data unchanged)
════════════════════════════════════════════════ */
const T = {
  en: {
    langBtn: "عربي",
    nav: {
      home: "Home", services: "Services", projects: "Projects",
      apps: "Our Apps", pricing: "Pricing", about: "About", contact: "Contact",
    },
    hero: {
      title: "We Build Websites & Apps That Grow Your Business",
      sub: "From stunning websites to powerful mobile apps — we craft digital products that turn visitors into loyal clients.",
      cta: "See Our Projects",
      stat1n: "12+",  stat1l: "Projects Delivered",
      stat2n: "100%", stat2l: "Client Satisfaction",
      stat3n: "2+",   stat3l: "Years of Experience",
    },
    services: {
      heading: "Services We Offer",
      items: [
        { icon: "🌐", title: "Web Development",        tag: null as string | null, desc: "High-performance React & Next.js websites built with clean architecture, scalability, and speed optimisation." },
        { icon: "📱", title: "Mobile App Development", tag: "iOS & Android",        desc: "Native and cross-platform mobile apps crafted for performance, usability, and seamless user experiences." },
        { icon: "🎨", title: "UI/UX Design",           tag: null as string | null, desc: "User-centred interface design focused on clarity, engagement, and conversion optimisation." },
      ],
    },
    projects: {
      heading: "Our Projects",
      viewLive: "View Live", comingSoon: "Coming Soon",
      webBadge: "Web", appBadge: "App",
      items: [
        { title: "Mayz — Restaurant SaaS",             desc: "QR-based ordering platform for restaurants. Customers scan, browse the menu, and order directly from their table.", href: "https://www.mayz.app",                    badge: "web" as const },
        { title: "Ahmed Clinic — Booking System",      desc: "A complete medical appointment booking system built with Next.js and Tailwind.", href: "https://ahmed-clinic.vercel.app/",         badge: "web" as const },
        { title: "Renne's Hair Styling — Booking App", desc: "Full-stack hair salon booking system built with Vanilla HTML/CSS/JS.",           href: "https://rennes-hair-styling.vercel.app/", badge: "web" as const },
        { title: "Business Website",     desc: "Modern responsive website built with Next.js and Tailwind CSS.", href: null, badge: "web" as const },
        { title: "E-Commerce Platform",  desc: "Full-stack online store with authentication and payments.",       href: null, badge: "web" as const },
        { title: "Portfolio Website",    desc: "High-performance personal portfolio with clean UI.",              href: null, badge: "web" as const },
      ],
    },
    apps: {
      heading: "Our Apps", sub: "Exciting mobile apps currently in development — stay tuned!",
      badge: "Coming Soon",
      items: [
        { title: "Booking App",        desc: "Smart appointment booking for clinics and service businesses." },
        { title: "E-Commerce App",     desc: "Full-featured shopping app with payment integration and real-time tracking." },
        { title: "Business Dashboard", desc: "Analytics and management dashboard app for growing businesses." },
      ],
    },
    pricing: {
      heading: "Plans Starting At", sub: "Choose the right package that fits your project needs.",
      startNow: "Start Now", popular: "Most Popular",
      cards: [
        { key: "starter",      name: "Starter",      price: "$150",   hot: false, desc: "Perfect for small businesses and personal websites.",          features: ["Responsive modern website design","Up to 3 pages","Basic SEO setup","Contact form integration","Performance optimisation","Clean scalable architecture"] },
        { key: "professional", name: "Professional", price: "$350",   hot: true,  desc: "Ideal for growing brands and startups.",                       features: ["Everything in Starter","Up to 6 pages","Contact form integration","Google Analytics","Advanced SEO setup","Mobile-friendly design","Performance optimisation","Basic security setup","Clean scalable architecture"] },
        { key: "business",     name: "Business",     price: "$750",   hot: false, desc: "Advanced solutions for serious businesses.",                   features: ["Everything in Professional","Up to 10 pages","Custom UI/UX design","CMS integration","Priority support","Contact form + lead capture","Social media integration","30-day post-launch support"] },
        { key: "premium",      name: "Premium",      price: "$1,250", hot: false, desc: "Complete premium solution with priority support.",             features: ["Everything in Business","Fully custom website design","Unlimited pages","Custom UI/UX design","API integration","Advanced performance optimisation","Security hardening","Conversion optimisation","Google Analytics & Search Console","Priority support"] },
      ],
      mobile: { name: "Mobile App", desc: "Custom iOS & Android app development tailored to your business needs.", cta: "Contact for Pricing" },
    },
    about: {
      heading: "About Us",
      body: `We are a web and mobile development team focused on building modern, high-converting digital products for businesses and startups.

Our goal is simple: create websites and apps that not only look great, but also help businesses attract more clients and grow online.

We specialise in:
  • Modern responsive website design
  • Mobile app development (iOS & Android)
  • Fast, SEO-optimised development
  • Clean, scalable code architecture
  • Conversion-focused user experience`,
      closing: "Every project is built with a clear strategy — turning visitors into real clients.",
    },
    contact: {
      heading: "Get In Touch", sub: "Have a project in mind? Let's work together!",
      wa: "Chat on WhatsApp", fb: "Visit Our Facebook Page", em: "Email Us",
    },
  },

  ar: {
    langBtn: "English",
    nav: {
      home: "الرئيسية", services: "خدماتنا", projects: "مشاريعنا",
      apps: "تطبيقاتنا", pricing: "الأسعار", about: "عنّا", contact: "تواصل",
    },
    hero: {
      title: "نبني مواقع وتطبيقات تنمّي تجارتك",
      sub: "من مواقع إلكترونية احترافية إلى تطبيقات جوال قوية — نصنع منتجات رقمية تحوّل الزوار إلى عملاء دائمين.",
      cta: "تصفح مشاريعنا",
      stat1n: "12+",  stat1l: "مشروع منجز",
      stat2n: "100%", stat2l: "رضا العملاء",
      stat3n: "2+",   stat3l: "سنوات خبرة",
    },
    services: {
      heading: "خدماتنا",
      items: [
        { icon: "🌐", title: "تطوير المواقع الإلكترونية", tag: null as string | null, desc: "مواقع React & Next.js عالية الأداء مبنية بهندسة نظيفة وقابلة للتوسع مع تحسين للسرعة." },
        { icon: "📱", title: "تطوير تطبيقات الجوال",      tag: "iOS & Android",       desc: "تطبيقات جوال مخصصة ومتعددة المنصات مصممة للأداء وسهولة الاستخدام وتجربة مستخدم سلسة." },
        { icon: "🎨", title: "تصميم UI/UX",               tag: null as string | null, desc: "تصميم واجهات متمحور حول المستخدم يركز على الوضوح والتفاعل وتحسين معدلات التحويل." },
      ],
    },
    projects: {
      heading: "مشاريعنا",
      viewLive: "عرض المشروع", comingSoon: "قريباً",
      webBadge: "موقع", appBadge: "تطبيق",
      items: [
        { title: "Mayz — نظام إدارة المطاعم",      desc: "نظام طلبات يعتمد على رمز QR للمطاعم. يمسح العميل الرمز، يتصفّح القائمة، ويطلب مباشرة من طاولته.", href: "https://www.mayz.app",                    badge: "web" as const },
        { title: "عيادة أحمد — نظام الحجز",       desc: "نظام حجز مواعيد طبي متكامل مبني باستخدام Next.js و Tailwind.", href: "https://ahmed-clinic.vercel.app/",         badge: "web" as const },
        { title: "Renne's Hair — تطبيق الحجز",    desc: "نظام حجز متكامل لصالون تصفيف الشعر مبني بـ HTML/CSS/JS.",     href: "https://rennes-hair-styling.vercel.app/", badge: "web" as const },
        { title: "موقع شركة",                     desc: "موقع عصري متجاوب مبني بـ Next.js و Tailwind CSS.",             href: null,                                      badge: "web" as const },
        { title: "منصة التجارة الإلكترونية",       desc: "متجر إلكتروني متكامل مع مصادقة ومدفوعات.",                   href: null,                                      badge: "web" as const },
        { title: "موقع محفظة أعمال",               desc: "محفظة أعمال شخصية عالية الأداء بواجهة نظيفة.",               href: null,                                      badge: "web" as const },
      ],
    },
    apps: {
      heading: "تطبيقاتنا", sub: "تطبيقات جوال مثيرة قيد التطوير — ترقّبوها!",
      badge: "قريباً",
      items: [
        { title: "تطبيق الحجز",               desc: "تطبيق جوال ذكي لحجز المواعيد للعيادات وشركات الخدمات." },
        { title: "تطبيق التجارة الإلكترونية", desc: "تطبيق تسوق متكامل مع دفع إلكتروني وتتبع فوري." },
        { title: "لوحة إدارة الأعمال",        desc: "تطبيق تحليلات وإدارة للأعمال النامية." },
      ],
    },
    pricing: {
      heading: "الأسعار تبدأ من", sub: "اختر الباقة المناسبة لمشروعك.",
      startNow: "ابدأ الآن", popular: "الأكثر طلباً",
      cards: [
        { key: "starter",      name: "المبتدئ",     price: "$150",   hot: false, desc: "مثالية للشركات الصغيرة والمواقع الشخصية.",                      features: ["تصميم موقع عصري متجاوب","حتى 3 صفحات","إعداد SEO أساسي","نموذج تواصل","تحسين الأداء","هندسة نظيفة وقابلة للتوسع"] },
        { key: "professional", name: "الاحترافية",  price: "$350",   hot: true,  desc: "مثالية للعلامات التجارية النامية والشركات الناشئة.",             features: ["كل مميزات المبتدئ","حتى 6 صفحات","نموذج تواصل","تركيب Google Analytics","SEO متقدم","تصميم للجوال أولاً","تحسين الأداء","إعداد أمني أساسي","هندسة نظيفة وقابلة للتوسع"] },
        { key: "business",     name: "الأعمال",     price: "$750",   hot: false, desc: "حلول متقدمة للأعمال الجادة.",                                  features: ["كل مميزات الاحترافية","حتى 10 صفحات","تصميم UI/UX مخصص","نظام إدارة محتوى","دعم ذو أولوية","نموذج تواصل + استقطاب عملاء","تكامل وسائل التواصل الاجتماعي","دعم 30 يوماً بعد الإطلاق"] },
        { key: "premium",      name: "المميزة",     price: "$1,250", hot: false, desc: "حل متكامل مميز مع دعم ذو أولوية.",                             features: ["كل مميزات الأعمال","تصميم موقع مخصص بالكامل","صفحات غير محدودة","تصميم UI/UX مخصص","تكامل API","تحسين أداء متقدم","حماية أمنية","تحسين معدل التحويل","إعداد Google Analytics وSearch Console","دعم ذو أولوية"] },
      ],
      mobile: { name: "تطبيق الجوال", desc: "تطوير تطبيق iOS & Android مخصص لاحتياجات عملك.", cta: "تواصل للحصول على السعر" },
    },
    about: {
      heading: "عنّا",
      body: `نحن فريق متخصص في تطوير المواقع والتطبيقات، نركز على بناء منتجات رقمية عصرية للشركات والمشاريع الناشئة.

هدفنا بسيط: إنشاء مواقع وتطبيقات تساعد الأعمال على استقطاب المزيد من العملاء والنمو عبر الإنترنت.

نتخصص في:
  • تصميم مواقع عصرية متجاوبة
  • تطوير تطبيقات الجوال (iOS & Android)
  • تطوير سريع ومحسّن لمحركات البحث
  • هندسة كود نظيفة وقابلة للتوسع
  • تجربة مستخدم تركز على التحويل`,
      closing: "كل مشروع يُبنى باستراتيجية واضحة — لتحويل الزوار إلى عملاء حقيقيين.",
    },
    contact: {
      heading: "تواصل معنا", sub: "لديك مشروع في ذهنك؟ دعنا نعمل معاً!",
      wa: "واتساب", fb: "صفحة فيسبوك", em: "راسلنا بالبريد",
    },
  },
} as const;

/* ════════════════════════════════════════════════
   COMPONENT
════════════════════════════════════════════════ */
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "ar" || saved === "en") setLang(saved); // eslint-disable-line react-hooks/set-state-in-effect
    else {
      const detected: Lang = navigator.language?.startsWith("ar") ? "ar" : "en";
      setLang(detected);
      localStorage.setItem("lang", detected);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll progress bar + back-to-top ring + scroll hint fade — single rAF pass */
  useEffect(() => {
    const bar  = document.getElementById("scroll-progress");
    const btn  = document.getElementById("back-to-top");
    const hint = document.getElementById("scroll-hint");
    const ring = btn?.querySelector<SVGCircleElement>(".ring-progress") ?? null;
    if (!bar && !btn && !hint) return;

    const CIRC = 2 * Math.PI * 46;
    let frameId: number | null = null;

    const update = () => {
      const h   = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? h.scrollTop / max : 0;
      if (bar)  bar.style.width = `${Math.min(Math.max(pct * 100, 0), 100)}%`;
      if (ring) ring.style.strokeDashoffset = `${CIRC * (1 - pct)}`;
      if (btn)  btn.classList.toggle("is-visible", h.scrollTop > 400);
      if (hint) hint.classList.toggle("is-faded",  h.scrollTop > 60);
      frameId = null;
    };
    const onScroll = () => {
      if (frameId === null) frameId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  /* Gyroscope tilt parallax (mobile) — phone tilt shifts hero shapes */
  useEffect(() => {
    if (typeof window === "undefined" || !window.DeviceOrientationEvent) return;
    const layers = document.querySelectorAll<HTMLElement>(".gyro-tilt");
    if (!layers.length) return;

    let frameId: number | null = null;
    let nx = 0, ny = 0;

    const update = () => {
      layers.forEach((el) => {
        const depth = parseFloat(el.dataset.depth || "20");
        el.style.setProperty("--tilt-x", `${nx * depth}px`);
        el.style.setProperty("--tilt-y", `${ny * depth}px`);
      });
      frameId = null;
    };
    const onOrient = (e: DeviceOrientationEvent) => {
      nx = Math.max(-1, Math.min(1, (e.gamma || 0) / 35));
      ny = Math.max(-1, Math.min(1, ((e.beta || 0) - 45) / 35));
      if (frameId === null) frameId = requestAnimationFrame(update);
    };

    type IOSDeviceOrientationEvent = typeof DeviceOrientationEvent & {
      requestPermission?: () => Promise<"granted" | "denied">;
    };
    const DOE = DeviceOrientationEvent as unknown as IOSDeviceOrientationEvent;

    if (typeof DOE.requestPermission === "function") {
      // iOS 13+ — needs a user gesture to request permission
      const onFirstTouch = async () => {
        try {
          const result = await DOE.requestPermission!();
          if (result === "granted") {
            window.addEventListener("deviceorientation", onOrient);
          }
        } catch { /* user denied or unavailable */ }
      };
      document.addEventListener("touchstart", onFirstTouch, { once: true });
      return () => {
        document.removeEventListener("touchstart", onFirstTouch);
        window.removeEventListener("deviceorientation", onOrient);
        if (frameId !== null) cancelAnimationFrame(frameId);
      };
    }

    // Android & older iOS — just listen
    window.addEventListener("deviceorientation", onOrient);
    return () => {
      window.removeEventListener("deviceorientation", onOrient);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  /* Tap ripple — Material-style ink burst on every button press */
  useEffect(() => {
    const onPress = (e: PointerEvent) => {
      const tgt = (e.target as HTMLElement | null)?.closest<HTMLElement>("button, .ripple-host");
      if (!tgt || tgt.classList.contains("flip-card")) return;

      const rect = tgt.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const cs = getComputedStyle(tgt);
      if (cs.position === "static")  tgt.style.position = "relative";
      if (cs.overflow === "visible") tgt.style.overflow = "hidden";

      const r = document.createElement("span");
      r.className = "tap-ripple";
      r.style.left   = `${e.clientX - rect.left}px`;
      r.style.top    = `${e.clientY - rect.top}px`;
      r.style.width  = `${size}px`;
      r.style.height = `${size}px`;
      tgt.appendChild(r);
      setTimeout(() => r.remove(), 700);
    };
    document.addEventListener("pointerdown", onPress);
    return () => document.removeEventListener("pointerdown", onPress);
  }, []);

  /* Magnetic CTA — button leans toward cursor when nearby */
  useEffect(() => {
    const btn = document.getElementById("hero-cta");
    if (!btn) return;
    const onMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < 140) {
        const strength = (1 - dist / 140) * 0.4;
        btn.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      } else {
        btn.style.transform = "translate(0, 0)";
      }
    };
    const onLeave = () => { btn.style.transform = "translate(0, 0)"; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  /* Cursor spotlight tracker — direct DOM updates, rAF-throttled */
  useEffect(() => {
    const spot = document.getElementById("cursor-spotlight");
    if (!spot) return;
    let frameId: number | null = null;
    let nextX = 0, nextY = 0;
    const onMove = (e: MouseEvent) => {
      nextX = e.clientX;
      nextY = e.clientY;
      spot.classList.add("is-active");
      if (frameId === null) {
        frameId = requestAnimationFrame(() => {
          spot.style.transform = `translate(${nextX}px, ${nextY}px) translate(-50%, -50%)`;
          frameId = null;
        });
      }
    };
    const onLeave = () => spot.classList.remove("is-active");
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-in, .section-line");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.07 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  /* Card spotlight — radial glow follows cursor inside each .card-3d */
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".card-3d");
    const handlers: Array<[HTMLElement, (e: MouseEvent) => void]> = [];
    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      };
      card.addEventListener("mousemove", onMove);
      handlers.push([card, onMove]);
    });
    return () => handlers.forEach(([c, h]) => c.removeEventListener("mousemove", h));
  }, [lang]);

  const switchLang = () => { setLang((p) => (p === "en" ? "ar" : "en")); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const t         = T[lang];
  const isAr      = lang === "ar";
  const fontClass = !mounted ? "font-latin" : (isAr ? "font-arabic" : "font-latin");
  const navKeys = Object.keys(t.nav) as Array<keyof typeof t.nav>;

  /* shared card icon bg */
  const iconBg = "bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]";

  return (
    <main className={`relative min-h-screen ${fontClass}`} suppressHydrationWarning={true}>

      {/* Boot splash — hides English fallback until lang detection finishes */}
      <div className={`boot-splash ${mounted ? "is-ready" : ""}`} aria-hidden="true">
        <span className="boot-splash-logo grad-text">FrontCraftDev</span>
        <div className="boot-splash-bar" />
        <span className="boot-splash-tag">Loading</span>
      </div>

      {/* Scroll progress bar */}
      <div id="scroll-progress" className="scroll-progress" aria-hidden="true" />

      {/* Film grain */}
      <div className="film-grain" aria-hidden="true" />

      {/* Cursor spotlight */}
      <div id="cursor-spotlight" className="cursor-spotlight" aria-hidden="true" />

      {/* Back to top */}
      <button
        id="back-to-top"
        className="back-to-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg className="ring" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <linearGradient id="btt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#C9A84C" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="46" className="ring-track" />
          <circle cx="50" cy="50" r="46" className="ring-progress" />
        </svg>
        <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>

      {/* ══════════════════════════════════
          3D BACKGROUND — code & web symbols
      ══════════════════════════════════ */}
      <div className="bg-3d" aria-hidden="true">
        <span className="bg-3d-symbol orbit-a" style={{ top: "8%",  left: "5%",  fontSize: "5.5rem", color: "rgba(59,130,246,0.07)",  animationDelay: "0s"   }}>{`</>`}</span>
        <span className="bg-3d-symbol orbit-b" style={{ top: "14%", left: "82%", fontSize: "4rem",   color: "rgba(201,168,76,0.08)",  animationDelay: "-4s"  }}>{`{ }`}</span>
        <span className="bg-3d-symbol orbit-c" style={{ top: "32%", left: "12%", fontSize: "3rem",   color: "rgba(96,165,250,0.06)",  animationDelay: "-8s"  }}>{`=>`}</span>
        <span className="bg-3d-symbol orbit-d" style={{ top: "28%", left: "70%", fontSize: "4.5rem", color: "rgba(59,130,246,0.06)",  animationDelay: "-2s"  }}>{`( )`}</span>
        <span className="bg-3d-symbol orbit-a" style={{ top: "48%", left: "90%", fontSize: "3.5rem", color: "rgba(201,168,76,0.07)",  animationDelay: "-12s" }}>{`@`}</span>
        <span className="bg-3d-symbol orbit-b" style={{ top: "55%", left: "3%",  fontSize: "4rem",   color: "rgba(96,165,250,0.07)",  animationDelay: "-6s"  }}>{`[ ]`}</span>
        <span className="bg-3d-symbol orbit-c" style={{ top: "62%", left: "45%", fontSize: "3rem",   color: "rgba(201,168,76,0.06)",  animationDelay: "-9s"  }}>{`#`}</span>
        <span className="bg-3d-symbol orbit-d" style={{ top: "72%", left: "78%", fontSize: "5rem",   color: "rgba(59,130,246,0.07)",  animationDelay: "-15s" }}>{`</>`}</span>
        <span className="bg-3d-symbol orbit-a" style={{ top: "80%", left: "18%", fontSize: "3.5rem", color: "rgba(201,168,76,0.08)",  animationDelay: "-3s"  }}>{`&&`}</span>
        <span className="bg-3d-symbol orbit-b" style={{ top: "88%", left: "60%", fontSize: "4rem",   color: "rgba(96,165,250,0.07)",  animationDelay: "-18s" }}>{`://`}</span>
        <span className="bg-3d-symbol orbit-c" style={{ top: "40%", left: "35%", fontSize: "3rem",   color: "rgba(59,130,246,0.05)",  animationDelay: "-7s"  }}>{`;`}</span>
        <span className="bg-3d-symbol orbit-d" style={{ top: "5%",  left: "48%", fontSize: "4rem",   color: "rgba(201,168,76,0.06)",  animationDelay: "-11s" }}>{`{ }`}</span>
      </div>

      {/* ══════════════════════════════════
          NAVBAR
      ══════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[#060B17]/90 backdrop-blur-xl border-b border-white/6 shadow-[0_0_30px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Brand */}
          <div className="flex flex-col leading-tight select-none">
            <span className="text-lg font-bold font-latin grad-text">FrontCraftDev</span>
            <span className="text-[11px] text-slate-500 font-arabic">حلول المواقع الإلكترونية والتطبيقات</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
            {navKeys.map((k) => (
              <a key={k} href={`#${k}`} className="nav-link hover:text-white transition-colors duration-200">
                {t.nav[k]}
              </a>
            ))}
            {/* Lang toggle pill */}
            <button
              onClick={switchLang}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold
                glass border border-white/15 text-slate-300 hover:text-white
                hover:border-[#3B82F6]/50 hover:shadow-[0_0_14px_rgba(59,130,246,0.3)]
                transition-all duration-200"
            >
              <span>{isAr ? "🇺🇸" : "🇸🇦"}</span>
              {t.langBtn}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={switchLang}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold
                glass border border-white/15 text-slate-300 hover:text-white transition-all duration-200"
            >
              <span>{isAr ? "🇺🇸" : "🇸🇦"}</span>
              {t.langBtn}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-slate-400 hover:text-white transition-colors" aria-label="Menu">
              {menuOpen
                ? <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                : <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
              }
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
            <div className="relative z-50 md:hidden glass-dark border-t border-white/6">
              {navKeys.map((k) => (
                <a
                  key={k} href={`#${k}`} onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3.5 text-slate-400 hover:text-white hover:bg-white/4 transition-colors border-b border-white/4 text-sm"
                >
                  {t.nav[k]}
                </a>
              ))}
            </div>
          </>
        )}
      </nav>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center
          px-6 pt-24 pb-16 overflow-hidden"
      >
        {/* Aurora orbs (gyro-aware) */}
        <div className="gyro-tilt absolute inset-0 pointer-events-none" data-depth="35">
          <div className="aurora-orb a" aria-hidden="true" />
          <div className="aurora-orb b" aria-hidden="true" />
          <div className="aurora-orb c" aria-hidden="true" />
        </div>

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        {/* Gradient mesh */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30,58,138,0.35) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: "linear-gradient(to top, #0A0F1E, transparent)" }} />

        {/* Floating hex shapes — 3D depth parallax + gyro tilt */}
        <div className="gyro-tilt absolute inset-0 scene-3d pointer-events-none" data-depth="20">
          <div className="absolute top-24 left-8 md:left-20 w-14 h-14 opacity-10 float-a depth-near">
            <svg viewBox="0 0 100 115" fill="none"><polygon points="50,2 98,26 98,88 50,113 2,88 2,26" stroke="#3B82F6" strokeWidth="2"/></svg>
          </div>
          <div className="absolute top-40 right-8 md:right-28 w-10 h-10 opacity-15 float-b depth-mid">
            <svg viewBox="0 0 100 100" fill="none"><polygon points="50,0 100,50 50,100 0,50" stroke="#C9A84C" strokeWidth="2.5"/></svg>
          </div>
          <div className="absolute bottom-32 left-12 md:left-36 w-8 h-8 opacity-10 float-c depth-far">
            <svg viewBox="0 0 100 100" fill="none"><polygon points="50,5 95,75 5,75" stroke="#3B82F6" strokeWidth="3"/></svg>
          </div>
          <div className="absolute bottom-40 right-10 md:right-40 w-12 h-12 opacity-10 float-a depth-mid">
            <svg viewBox="0 0 100 115" fill="none"><polygon points="50,2 98,26 98,88 50,113 2,88 2,26" stroke="#C9A84C" strokeWidth="2"/></svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">

          {/* Overline */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            glass border border-[#3B82F6]/30 text-[#60A5FA] text-xs font-semibold mb-8 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            Next-Generation Digital Solutions
          </div>

          {/* Headline */}
          <h1
            key={lang}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              font-bold pt-2 pb-4 mb-7 grad-text"
            style={{ lineHeight: isAr ? "1.5" : "1.1" }}
          >
            {t.hero.title.split(" ").map((word, i, arr) => (
              <span
                key={i}
                className="word-reveal"
                style={{ animationDelay: `${0.15 + i * 0.09}s` }}
              >
                {word}{i < arr.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up delay-2 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            {t.hero.sub}
          </p>

          {/* CTA */}
          <div className="animate-fade-up delay-3 relative inline-flex items-center justify-center scene-3d">
            <span className="absolute inset-0 rounded-xl bg-[#3B82F6]/30 animate-ping opacity-60" />
            <button
              id="hero-cta"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-3d magnetic relative px-10 py-4 rounded-xl font-bold text-lg text-white"
              style={{
                background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
                boxShadow: "0 0 35px rgba(59,130,246,0.5), 0 0 70px rgba(59,130,246,0.2)",
              }}
            >
              {t.hero.cta}
            </button>
          </div>

          {/* Stat cards */}
          <div className="animate-fade-up delay-4 grid grid-cols-3 gap-3 sm:gap-5 mt-20 max-w-lg sm:max-w-xl mx-auto">
            {[
              { n: t.hero.stat1n, l: t.hero.stat1l },
              { n: t.hero.stat2n, l: t.hero.stat2l },
              { n: t.hero.stat3n, l: t.hero.stat3l },
            ].map((s, i) => (
              <div key={i} className="glass border border-white/10 rounded-xl sm:rounded-2xl py-4 px-2 sm:px-5 text-center
                hover:border-[#3B82F6]/30 transition-colors duration-200">
                <div className="text-xl sm:text-2xl font-extrabold grad-text"><CountUp value={s.n} /></div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-1 leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint — bouncing chevron */}
        <div id="scroll-hint" className="scroll-hint" aria-hidden="true">
          <span className="scroll-hint-label">Scroll</span>
          <span className="scroll-hint-chevron" />
        </div>
      </section>

      {/* ══════════════════════════════════
          TECH STACK MARQUEE
      ══════════════════════════════════ */}
      <section className="relative py-10 fade-in" dir="ltr">
        <div className="marquee">
          <div className="marquee-track">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-12 pr-12">
                <span className="marquee-item"><span className="glyph">{`</>`}</span>React</span>
                <span className="marquee-item"><span className="glyph gold">{`{ }`}</span>Next.js</span>
                <span className="marquee-item"><span className="glyph">TS</span>TypeScript</span>
                <span className="marquee-item"><span className="glyph gold">~</span>Tailwind</span>
                <span className="marquee-item"><span className="glyph">⬢</span>Node.js</span>
                <span className="marquee-item"><span className="glyph gold">F</span>Figma</span>
                <span className="marquee-item"><span className="glyph">{`( )`}</span>PostgreSQL</span>
                <span className="marquee-item"><span className="glyph gold">@</span>Vercel</span>
                <span className="marquee-item"><span className="glyph">{`</>`}</span>React Native</span>
                <span className="marquee-item"><span className="glyph gold">⚡</span>Turbopack</span>
                <span className="marquee-item"><span className="glyph">=&gt;</span>GraphQL</span>
                <span className="marquee-item"><span className="glyph gold">JS</span>JavaScript</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SERVICES
      ══════════════════════════════════ */}
      <section id="services" className="relative px-6 max-w-6xl mx-auto py-28 fade-in">
        <div className="text-center mb-16">
          <p className="text-xs text-[#3B82F6] font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.services.heading}</h2>
          <div className="section-line max-w-xs mx-auto" />
        </div>

        <div className="scene-3d grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {t.services.items.map((s, i) => (
            <div
              key={i}
              className="card-3d glass border border-white/8 rounded-2xl p-8 flex flex-col
                glow-blue group"
            >
              <div className={`lift-2 w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center text-2xl mb-6
                shadow-[0_0_18px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_26px_rgba(59,130,246,0.5)] transition-shadow duration-300`}>
                {s.icon}
              </div>
              <h3 className="lift-1 text-lg font-semibold text-white mb-1">{s.title}</h3>
              {s.tag && <p className="lift-1 text-xs text-[#C9A84C] font-semibold mb-2">{s.tag}</p>}
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* section divider */}
      <div className="section-line max-w-4xl mx-auto px-6" />

      {/* ══════════════════════════════════
          PROJECTS
      ══════════════════════════════════ */}
      <section id="projects" className="relative px-6 max-w-6xl mx-auto py-28 fade-in">
        <div className="text-center mb-16">
          <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.projects.heading}</h2>
          <div className="section-line max-w-xs mx-auto" />
        </div>

        <div className="scene-3d grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {t.projects.items.map((p, i) => (
            <div
              key={i}
              className="card-3d relative glass border border-white/8 rounded-2xl p-6 flex flex-col
                glow-blue overflow-hidden group"
            >
              {/* gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(30,58,138,0.15) 0%, transparent 60%)" }} />

              {/* badge */}
              <span className="lift-2 absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[11px] font-bold
                bg-[#3B82F6]/15 border border-[#3B82F6]/35 text-[#60A5FA]">
                {p.badge === "web" ? t.projects.webBadge : t.projects.appBadge}
              </span>

              <h3 className="lift-1 relative text-base font-semibold text-white mb-3 pr-14 leading-snug">{p.title}</h3>
              <p className="relative text-slate-400 text-sm leading-relaxed flex-1">{p.desc}</p>

              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer"
                  className="relative mt-5 inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold
                    text-[#60A5FA] border border-[#3B82F6]/30 hover:bg-[#3B82F6]/10
                    hover:border-[#3B82F6]/60 hover:shadow-[0_0_14px_rgba(59,130,246,0.3)]
                    transition-all duration-200 w-fit"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t.projects.viewLive}
                </a>
              ) : (
                <span className="relative mt-5 inline-flex items-center px-4 py-1.5 rounded-lg text-xs font-medium
                  bg-white/5 text-slate-500 border border-white/8 w-fit">
                  {t.projects.comingSoon}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="section-line max-w-4xl mx-auto px-6" />

      {/* ══════════════════════════════════
          OUR APPS
      ══════════════════════════════════ */}
      <section id="apps" className="relative px-6 max-w-6xl mx-auto py-28 fade-in">
        <div className="text-center mb-16">
          <p className="text-xs text-[#3B82F6] font-semibold uppercase tracking-widest mb-3">Mobile</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.apps.heading}</h2>
          <div className="section-line max-w-xs mx-auto mb-4" />
          <p className="text-slate-500 text-sm">{t.apps.sub}</p>
        </div>

        <div className="scene-3d grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {t.apps.items.map((a, i) => (
            <div
              key={i}
              className="card-3d gold-tilt relative glass border border-white/8 rounded-2xl p-8 overflow-hidden
                hover:border-[#C9A84C]/30"
            >
              {/* top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(to right, #1E3A8A, #C9A84C)" }} />

              <div className="flex justify-between items-start mb-5">
                <h3 className="lift-1 text-base font-semibold text-white leading-snug">{a.title}</h3>
                <span
                  className="lift-2 ml-3 shrink-0 badge-pulse text-[10px] font-bold px-2.5 py-1 rounded-full
                    bg-[#C9A84C]/10 border border-[#C9A84C]/40 text-[#C9A84C] whitespace-nowrap"
                >
                  {t.apps.badge}
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
              <div className="mt-5 flex gap-2">
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-slate-500">iOS</span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-slate-500">Android</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-line max-w-4xl mx-auto px-6" />

      {/* ══════════════════════════════════
          PRICING
      ══════════════════════════════════ */}
      <section id="pricing" className="relative max-w-6xl mx-auto px-6 py-28 fade-in">
        <div className="text-center mb-16">
          <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-3">Transparent Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.pricing.heading}</h2>
          <div className="section-line max-w-xs mx-auto mb-4" />
          <p className="text-slate-500 text-sm">{t.pricing.sub}</p>
        </div>

        {/* 4 website cards */}
        <div className="scene-3d grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {t.pricing.cards.map((c) => (
            <div
              key={c.key}
              className={`card-3d ${c.hot ? "gold-tilt magic-border" : "glass border border-white/8 glow-blue"} relative rounded-2xl p-7 flex flex-col`}
              style={c.hot ? { boxShadow: "0 0 35px rgba(201,168,76,0.2), inset 0 0 35px rgba(201,168,76,0.03)" } : {}}
            >
              {c.hot && (
                <div className="lift-3 absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full
                  text-xs font-bold text-[#0A0F1E] whitespace-nowrap"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E5BF6A)" }}
                >
                  {t.pricing.popular}
                </div>
              )}

              <h3 className={`lift-1 text-lg font-bold mb-1 ${c.hot ? "text-[#C9A84C]" : "text-white"}`}>{c.name}</h3>
              <p className="text-slate-500 text-xs mb-5 leading-relaxed">{c.desc}</p>
              <div className={`lift-2 text-3xl font-extrabold mb-6 ${c.hot ? "grad-text" : "text-white"}`}>{c.price}</div>

              <ul className="space-y-2.5 text-sm flex-1 mb-7">
                {c.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-400">
                    <svg className={`w-4 h-4 shrink-0 mt-0.5 ${c.hot ? "text-[#C9A84C]" : "text-[#3B82F6]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link href={`/contact?package=${c.key}`}>
                <button
                  className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-95"
                  style={c.hot
                    ? { background: "linear-gradient(135deg,#C9A84C,#E5BF6A)", color: "#0A0F1E", boxShadow: "0 0 20px rgba(201,168,76,0.3)" }
                    : { background: "linear-gradient(135deg,#1E3A8A,#3B82F6)", color: "white",    boxShadow: "0 0 16px rgba(59,130,246,0.25)" }
                  }
                >
                  {t.pricing.startNow}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile App banner */}
        <div
          className="relative rounded-2xl p-8 overflow-hidden flex flex-col sm:flex-row
            items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(30,58,138,0.5) 0%, rgba(10,15,30,0.95) 40%, rgba(201,168,76,0.15) 100%)",
            border: "1px solid rgba(59,130,246,0.25)",
            boxShadow: "0 0 50px rgba(30,58,138,0.2)"
          }}
        >
          <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center text-xl`}>📱</div>
              <h3 className="text-xl font-bold text-white">{t.pricing.mobile.name}</h3>
            </div>
            <p className="text-slate-400 text-sm">{t.pricing.mobile.desc}</p>
          </div>
          <a href="https://wa.me/19805779916" target="_blank" rel="noopener noreferrer" className="relative z-10 shrink-0">
            <button
              className="px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 active:scale-95 whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E5BF6A)",
                color: "#0A0F1E",
                boxShadow: "0 0 25px rgba(201,168,76,0.4)",
                fontWeight: 700,
              }}
            >
              {t.pricing.mobile.cta}
            </button>
          </a>
        </div>
      </section>

      <div className="section-line max-w-4xl mx-auto px-6" />

      {/* ══════════════════════════════════
          ABOUT
      ══════════════════════════════════ */}
      <section id="about" className="relative px-6 max-w-4xl mx-auto py-28 fade-in">
        <div className="text-center mb-16">
          <p className="text-xs text-[#3B82F6] font-semibold uppercase tracking-widest mb-3">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.about.heading}</h2>
          <div className="section-line max-w-xs mx-auto" />
        </div>

        <div
          className="relative glass border border-white/8 rounded-2xl p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(to right, #1E3A8A, #3B82F6, #C9A84C)" }} />
          <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-slate-400 leading-loose whitespace-pre-line mb-8 text-[15px]">{t.about.body}</p>
            <div className="h-px bg-white/6 mb-6" />
            <p className="grad-text font-semibold text-base">{t.about.closing}</p>
          </div>
        </div>
      </section>

      <div className="section-line max-w-4xl mx-auto px-6" />

      {/* ══════════════════════════════════
          CONTACT
      ══════════════════════════════════ */}
      <section id="contact" className="relative px-6 max-w-4xl mx-auto py-28 text-center fade-in">
        <div className="mb-16">
          <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-3">Let&apos;s Build Together</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.contact.heading}</h2>
          <div className="section-line max-w-xs mx-auto mb-4" />
          <p className="text-slate-500 text-sm">{t.contact.sub}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center sm:items-stretch">

          {/* WhatsApp — flip card */}
          <a href="https://wa.me/19805779916" target="_blank" rel="noopener noreferrer"
            className="flip-card w-full max-w-xs sm:max-w-[240px] h-32"
            aria-label="WhatsApp"
          >
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front flex flex-col items-center justify-center gap-2.5 rounded-2xl
                border border-[#25D366]/35 text-[#25D366] bg-[#25D366]/8 p-5
                shadow-[0_0_18px_rgba(37,211,102,0.15)]">
                <svg className="w-8 h-8 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="font-semibold text-sm">{t.contact.wa}</span>
              </div>
              {/* Back */}
              <div className="flip-card-back flex flex-col items-center justify-center gap-1.5 rounded-2xl
                border border-[#25D366]/70 text-white bg-[#25D366]/15 p-5
                shadow-[0_0_30px_rgba(37,211,102,0.4)]">
                <span className="text-[10px] text-[#25D366] uppercase tracking-widest font-bold">WhatsApp</span>
                <span dir="ltr" className="font-bold text-base">+1 (980) 577-9916</span>
              </div>
            </div>
          </a>

          {/* Facebook — flip card */}
          <a href="https://www.facebook.com/FrontCraftDev" target="_blank" rel="noopener noreferrer"
            className="flip-card w-full max-w-xs sm:max-w-[240px] h-32"
            aria-label="Facebook"
          >
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front flex flex-col items-center justify-center gap-2.5 rounded-2xl
                border border-[#1877F2]/35 text-[#60A5FA] bg-[#1877F2]/8 p-5
                shadow-[0_0_18px_rgba(24,119,242,0.15)]">
                <svg className="w-8 h-8 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="font-semibold text-sm">{t.contact.fb}</span>
              </div>
              {/* Back */}
              <div className="flip-card-back flex flex-col items-center justify-center gap-1.5 rounded-2xl
                border border-[#1877F2]/70 text-white bg-[#1877F2]/15 p-5
                shadow-[0_0_30px_rgba(24,119,242,0.4)]">
                <span className="text-[10px] text-[#60A5FA] uppercase tracking-widest font-bold">Facebook</span>
                <span dir="ltr" className="font-bold text-base">@FrontCraftDev</span>
              </div>
            </div>
          </a>

          {/* Email — flip card */}
          <a href="mailto:contact.frontcraft.dev@gmail.com"
            className="flip-card w-full max-w-xs sm:max-w-[240px] h-32"
            aria-label="Email"
          >
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front flex flex-col items-center justify-center gap-2.5 rounded-2xl
                border border-[#C9A84C]/35 text-[#C9A84C] bg-[#C9A84C]/8 p-5
                shadow-[0_0_18px_rgba(201,168,76,0.15)]">
                <svg className="w-8 h-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold text-sm">{t.contact.em}</span>
              </div>
              {/* Back */}
              <div className="flip-card-back flex flex-col items-center justify-center gap-1.5 rounded-2xl
                border border-[#C9A84C]/70 text-white bg-[#C9A84C]/15 p-5
                shadow-[0_0_30px_rgba(201,168,76,0.4)]">
                <span className="text-[10px] text-[#C9A84C] uppercase tracking-widest font-bold">Email</span>
                <span dir="ltr" className="font-bold text-xs break-all px-2">contact.frontcraft.dev@gmail.com</span>
              </div>
            </div>
          </a>

        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
