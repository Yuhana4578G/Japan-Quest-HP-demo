"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/articles`, label: t("articles") },
    { href: `/${locale}/videos`, label: t("videos") },
  ];

  return (
    <header className="bg-[#1a2744] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="shrink-0">
          <span className="text-[#c9a84c] text-xl font-bold tracking-wide">
            JAPAN QUEST
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium flex-1 justify-end">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#c9a84c] transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <LanguageSwitcher />

          <Link
            href={`/${locale}/book`}
            className="bg-[#c0392b] hover:bg-[#a93226] text-white px-5 py-2 rounded-full font-semibold transition-colors whitespace-nowrap"
          >
            {t("bookNow")}
          </Link>
        </nav>

        {/* Mobile: Language + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a2744] border-t border-white/10 px-4 pb-4 flex flex-col gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#c9a84c] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/book`}
            className="bg-[#c0392b] hover:bg-[#a93226] text-white px-5 py-2 rounded-full font-semibold text-center transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {t("bookNow")}
          </Link>
        </div>
      )}
    </header>
  );
}
