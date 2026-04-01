import Link from "next/link";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    name: "Sarah M.",
    location: "California, USA",
    text: "Japan Quest made our family trip absolutely seamless. The hidden spots they took us to were unbelievable — no crowds, just pure Japan.",
    rating: 5,
  },
  {
    name: "David K.",
    location: "Texas, USA",
    text: "As someone who was nervous about navigating Japan with kids, having a professional agent by our side was priceless. 100% worth it.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    location: "New York, USA",
    text: "We saved so much time and money thanks to their insider tips. I've already recommended Japan Quest to three other families!",
    rating: 5,
  },
];

const featuredVideos = [
  { id: "VIDEO_ID_1", title: "Tokyo in 3 Days: The Ultimate Family Guide" },
  { id: "VIDEO_ID_2", title: "Hidden Gems in Kyoto You Won't Find on Google" },
  { id: "VIDEO_ID_3", title: "Japan IC Cards Explained: Save Time & Money" },
];

export default function Home() {
  const t = useTranslations();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a2744] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/hero-japan.jpg')" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-28 md:py-40 text-center">
          <p className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase mb-4">
            {t("hero.badge")}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {t("hero.title")}{" "}
            <span className="text-[#c9a84c]">{t("hero.titleHighlight")}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-[#c0392b] hover:bg-[#a93226] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              {t("hero.ctaBook")}
            </Link>
            <a
              href="https://www.youtube.com/@JapanQuest81"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              {t("hero.ctaYoutube")}
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-[#c9a84c] text-[#1a2744]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-bold text-center">
          <span>{t("trust.views")}</span>
          <span className="hidden sm:block">|</span>
          <span>{t("trust.subscribers")}</span>
          <span className="hidden sm:block">|</span>
          <span>{t("trust.agents")}</span>
          <span className="hidden sm:block">|</span>
          <span>{t("trust.based")}</span>
        </div>
      </section>

      {/* Strengths */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-[#1a2744] mb-12">
          {t("strengths.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(["1", "2", "3"] as const).map((n) => (
            <div key={n} className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">
                {n === "1" ? "📋" : n === "2" ? "🗺️" : "💴"}
              </div>
              <h3 className="text-xl font-bold text-[#1a2744] mb-3">
                {t(`strengths.item${n}Title` as never)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`strengths.item${n}Desc` as never)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Videos */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a2744] mb-4">
            {t("videos.title")}
          </h2>
          <p className="text-center text-gray-500 mb-12">{t("videos.subtitle")}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVideos.map((v) => (
              <div key={v.id} className="rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-video bg-gray-100">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
                <div className="bg-white p-4">
                  <p className="font-semibold text-[#1a2744] text-sm leading-snug">{v.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/videos"
              className="inline-block border-2 border-[#1a2744] text-[#1a2744] hover:bg-[#1a2744] hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              {t("videos.seeAll")}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-[#1a2744] mb-4">
          {t("services.title")}
        </h2>
        <p className="text-center text-gray-500 mb-12">{t("services.subtitle")}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(["s1", "s2", "s3"] as const).map((k) => (
            <div key={k} className="bg-[#1a2744] text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[#c9a84c]">
                {t(`services.${k}Title` as never)}
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                {t(`services.${k}Desc` as never)}
              </p>
              <Link href="/services" className="text-sm font-semibold text-[#c9a84c] hover:underline">
                {t("services.learnMore")}
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/book"
            className="inline-block bg-[#c0392b] hover:bg-[#a93226] text-white px-10 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            {t("services.cta")}
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#1a2744] text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t("testimonials.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t2) => (
              <div key={t2.name} className="bg-white/10 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t2.rating }).map((_, i) => (
                    <span key={i} className="text-[#c9a84c]">★</span>
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 italic">&ldquo;{t2.text}&rdquo;</p>
                <div>
                  <p className="font-semibold">{t2.name}</p>
                  <p className="text-white/50 text-sm">{t2.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#c9a84c] text-[#1a2744] py-16 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("finalCta.title")}</h2>
        <p className="text-[#1a2744]/70 mb-8 text-lg">{t("finalCta.subtitle")}</p>
        <Link
          href="/book"
          className="inline-block bg-[#1a2744] hover:bg-[#0f1a30] text-white px-10 py-4 rounded-full font-semibold text-lg transition-colors"
        >
          {t("finalCta.button")}
        </Link>
      </section>
    </>
  );
}
