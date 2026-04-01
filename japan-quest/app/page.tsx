import Link from "next/link";

const strengths = [
  {
    icon: "📋",
    title: "Licensed Travel Agents",
    desc: "Unlike influencers, we're certified professionals with real industry knowledge and insider access.",
  },
  {
    icon: "🗺️",
    title: "Hidden Gems for Families",
    desc: "Off-the-beaten-path spots that families actually love — not just Instagram crowds.",
  },
  {
    icon: "💴",
    title: "Cost & Time Optimized",
    desc: "Travel agent-exclusive tips to save money on transport, currency exchange, and more.",
  },
];

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
            Licensed Travel Agents • Based in Japan
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your Japan Trip,{" "}
            <span className="text-[#c9a84c]">Guaranteed.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Japan travel planned and guided by licensed travel agents — so your
            family can focus on the memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-[#c0392b] hover:bg-[#a93226] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Book Our Local Attendant Service →
            </Link>
            <a
              href="https://www.youtube.com/@JapanQuest81"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Watch Our YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-[#c9a84c] text-[#1a2744]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-bold text-center">
          <span>153,000+ Views</span>
          <span className="hidden sm:block">|</span>
          <span>1,600+ Subscribers</span>
          <span className="hidden sm:block">|</span>
          <span>Licensed Travel Agents</span>
          <span className="hidden sm:block">|</span>
          <span>Based in Japan</span>
        </div>
      </section>

      {/* Strengths */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-[#1a2744] mb-12">
          Why Japan Quest?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-[#1a2744] mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Videos */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a2744] mb-4">
            Latest from YouTube
          </h2>
          <p className="text-center text-gray-500 mb-12">Real Japan. Real tips. No fluff.</p>
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
              See All Videos →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-[#1a2744] mb-4">How We Can Help</h2>
        <p className="text-center text-gray-500 mb-12">
          From planning to in-person guidance — we&apos;ve got your trip covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Local Attendant Service",
              desc: "We join your family in person — guiding, translating, and making every moment count.",
            },
            {
              title: "Custom Itinerary Planning",
              desc: "A fully personalized travel plan built around your family's pace, interests, and budget.",
            },
            {
              title: "Pre-Trip Consultation",
              desc: "45-minute video call to review your itinerary and answer all your Japan questions.",
            },
          ].map((svc) => (
            <div key={svc.title} className="bg-[#1a2744] text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[#c9a84c]">{svc.title}</h3>
              <p className="text-white/70 leading-relaxed mb-6">{svc.desc}</p>
              <Link href="/services" className="text-sm font-semibold text-[#c9a84c] hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/book"
            className="inline-block bg-[#c0392b] hover:bg-[#a93226] text-white px-10 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            Check Availability &amp; Book →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#1a2744] text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/10 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-[#c9a84c]">★</span>
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-white/50 text-sm">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#c9a84c] text-[#1a2744] py-16 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Stop Guessing and Start Your Guaranteed Japan Trip?
        </h2>
        <p className="text-[#1a2744]/70 mb-8 text-lg">
          Spots fill up fast during peak seasons. Book early.
        </p>
        <Link
          href="/book"
          className="inline-block bg-[#1a2744] hover:bg-[#0f1a30] text-white px-10 py-4 rounded-full font-semibold text-lg transition-colors"
        >
          Book Now →
        </Link>
      </section>
    </>
  );
}
