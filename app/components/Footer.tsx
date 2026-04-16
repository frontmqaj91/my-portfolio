import Link from "next/link";

type Lang = "en" | "ar";

const NAV = {
  en: [
    { href: "#services", label: "Services"  },
    { href: "#projects", label: "Projects"  },
    { href: "#apps",     label: "Our Apps"  },
    { href: "#pricing",  label: "Pricing"   },
    { href: "#contact",  label: "Contact"   },
  ],
  ar: [
    { href: "#services", label: "خدماتنا"    },
    { href: "#projects", label: "مشاريعنا"   },
    { href: "#apps",     label: "تطبيقاتنا"  },
    { href: "#pricing",  label: "الأسعار"    },
    { href: "#contact",  label: "تواصل"      },
  ],
};

export default function Footer({ lang = "en" }: { lang?: Lang }) {
  const isAr  = lang === "ar";
  const links = NAV[lang];

  return (
    <footer className="relative bg-[#060B17] border-t border-white/5 overflow-hidden">

      {/* subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* top glow line */}
      <div className="section-line" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">

        {/* Main row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-bold text-xl font-latin grad-text">FrontCraftDev</span>
            <span className="text-xs text-slate-500 font-arabic">
              حلول المواقع الإلكترونية والتطبيقات
            </span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="nav-link hover:text-[#C9A84C] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">

            {/* WhatsApp */}
            <a
              href="https://wa.me/19805779916"
              target="_blank" rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center
                text-slate-400 hover:text-white hover:border-[#25D366]/50
                hover:shadow-[0_0_16px_rgba(37,211,102,.4)] transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/FrontCraftDev"
              target="_blank" rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center
                text-slate-400 hover:text-white hover:border-[#1877F2]/50
                hover:shadow-[0_0_16px_rgba(24,119,242,.4)] transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:contact.frontcraft.dev@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center
                text-slate-400 hover:text-[#C9A84C] hover:border-[#C9A84C]/50
                hover:shadow-[0_0_16px_rgba(201,168,76,.4)] transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-slate-600">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            {isAr
              ? "FrontCraftDev. جميع الحقوق محفوظة."
              : "FrontCraftDev. All rights reserved."}
          </p>
          <Link
            href="/privacy"
            className="hover:text-[#C9A84C] transition-colors duration-200"
          >
            {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
