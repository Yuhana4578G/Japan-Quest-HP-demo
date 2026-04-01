import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a2744] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-[#c9a84c] text-xl font-bold mb-2">JAPAN QUEST</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Licensed travel agents based in Japan.<br />
              Your Japan trip, guaranteed.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold mb-3 text-[#c9a84c]">Navigation</p>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/book", label: "Book Now" },
                { href: "/articles", label: "Articles" },
                { href: "/videos", label: "Videos" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#c9a84c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-semibold mb-3 text-[#c9a84c]">Follow Us</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="https://www.youtube.com/@JapanQuest81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c9a84c] transition-colors"
                >
                  YouTube @JapanQuest81
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/japanquest81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c9a84c] transition-colors"
                >
                  Instagram @japanquest81
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@japanquest81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c9a84c] transition-colors"
                >
                  TikTok @japanquest81
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© 2025 Japan Quest. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
