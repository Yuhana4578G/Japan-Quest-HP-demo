import Link from "next/link";

const expertise = [
  "Tokyo (Shinjuku, Asakusa, Shibuya, Akihabara)",
  "Kyoto (Gion, Arashiyama, Fushimi Inari)",
  "Osaka (Dotonbori, Kuromon Market)",
  "Hiroshima & Miyajima",
  "Hokkaido (Sapporo, Niseko)",
  "Hidden local gems across Japan",
];

const differences = [
  { label: "Credentials", us: "Licensed Travel Agents", others: "Influencers / Bloggers" },
  { label: "Information accuracy", us: "Always current, locally verified", others: "Outdated info is common" },
  { label: "In-person support", us: "Local attendant service available", others: "Videos only" },
  { label: "Crowd avoidance", us: "Local hidden spots", others: "Popular tourist spots" },
  { label: "Cost optimization", us: "Agent-exclusive money-saving tips", others: "General advice" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#1a2744] text-white py-20 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">About Japan Quest</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          We&apos;re not influencers. We&apos;re licensed travel agents who live in Japan.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-20 space-y-20">
        {/* Story */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a2744] mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-700 space-y-4 leading-relaxed">
            <p>
              Japan Quest was founded by a team of licensed travel agents based in Japan, united by one
              mission: to eliminate the risk of trip failure for families visiting Japan.
            </p>
            <p>
              We started our YouTube channel in January 2025 after years of watching well-meaning
              travelers struggle with outdated guidebook information, overcrowded tourist spots, and
              costly mistakes that a local professional could have prevented in minutes.
            </p>
            <p>
              With 153,000+ views in our first year, we&apos;ve proven that travelers are hungry for
              real, practical, professional-grade advice — not just beautiful drone shots of famous
              landmarks.
            </p>
          </div>
        </section>

        {/* What makes us different */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a2744] mb-6">What Makes Us Different</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#1a2744] text-white">
                  <th className="text-left px-6 py-4">Aspect</th>
                  <th className="text-left px-6 py-4">Japan Quest</th>
                  <th className="text-left px-6 py-4">Typical Travel Channel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {differences.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-medium text-[#1a2744]">{row.label}</td>
                    <td className="px-6 py-4 text-green-700">✅ {row.us}</td>
                    <td className="px-6 py-4 text-gray-500">❌ {row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-[#c9a84c] rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-[#1a2744] mb-4">Our Mission</h2>
          <p className="text-[#1a2744] text-xl leading-relaxed font-medium max-w-2xl mx-auto">
            &ldquo;Eliminate the risk of trip failure and guarantee the most time- and
            cost-effective travel experience for every family we serve.&rdquo;
          </p>
        </section>

        {/* Expertise */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a2744] mb-6">Our Japan Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {expertise.map((e) => (
              <div key={e} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm">
                <span className="text-[#c9a84c] text-lg">🗾</span>
                <span className="text-gray-700 text-sm">{e}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Social Links */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-[#1a2744] mb-6">Follow Our Journey</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "YouTube", url: "https://www.youtube.com/@JapanQuest81" },
              { label: "Instagram", url: "https://www.instagram.com/japanquest81" },
              { label: "TikTok", url: "https://www.tiktok.com/@japanquest81" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#1a2744] text-[#1a2744] hover:bg-[#1a2744] hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/book"
            className="inline-block bg-[#c0392b] hover:bg-[#a93226] text-white px-10 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            Ready to Explore Japan Together? Book Now →
          </Link>
        </div>
      </div>
    </>
  );
}
