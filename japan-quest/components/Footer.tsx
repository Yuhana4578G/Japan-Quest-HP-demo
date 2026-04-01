"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const navLinks = [
    { href: `/${locale}`, key: "home" },
    { href: `/${locale}/about`, key: "about" },
    { href: `/${locale}/services`, key: "services" },
    { href: `/${locale}/book`, key: "bookNow" },
    { href: `/${locale}/articles`, key: "articles" },
    { href: `/${locale}/videos`, key: "videos" },
    { href: `/${locale}/contact`, key: "contact" },
  ];

  return (
    <footer className="bg-[#1a2744] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-[#c9a84c] text-xl font-bold mb-2">JAPAN QUEST</p>
            <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <p className="font-semibold mb-3 text-[#c9a84c]">{t("footer.navigation")}</p>
            <ul className="space-y-2 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#c9a84c] transition-colors">
                    {t(`nav.${link.key}` as never)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3 text-[#c9a84c]">{t("footer.follow")}</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="https://www.youtube.com/@JapanQuest81" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors">
                  YouTube @JapanQuest81
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/japanquest81" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors">
                  Instagram @japanquest81
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@japanquest81" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors">
                  TikTok @japanquest81
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-4">
            <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">{t("footer.privacy")}</Link>
            <Link href={`/${locale}/terms`} className="hover:text-white transition-colors">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
