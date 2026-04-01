"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "id", label: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "th", label: "ภาษาไทย", flag: "🇹🇭" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "pt-BR", label: "Português (BR)", flag: "🇧🇷" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "zh-CN", label: "中文（简体）", flag: "🇨🇳" },
  { code: "zh-TW", label: "中文（繁體）", flag: "🇹🇼" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === locale) ?? languages[0];

  // Replace locale prefix in pathname
  const switchLocale = (code: string) => {
    const segments = pathname.split("/");
    segments[1] = code;
    router.push(segments.join("/"));
    setOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#c9a84c] transition-colors px-2 py-1 rounded"
        aria-label="Switch language"
      >
        <span>{current.flag}</span>
        <span className="hidden lg:inline">{current.label}</span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 max-h-80 overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-gray-50 transition-colors ${
                lang.code === locale
                  ? "text-[#c0392b] font-semibold bg-red-50"
                  : "text-gray-700"
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
              {lang.code === locale && (
                <span className="ml-auto text-[#c0392b]">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
