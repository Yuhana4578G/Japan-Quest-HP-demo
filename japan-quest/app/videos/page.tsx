import Link from "next/link";

// Replace these VIDEO_IDs with actual YouTube video IDs from @JapanQuest81
const videos = [
  { id: "VIDEO_ID_1", title: "Tokyo in 3 Days: The Ultimate Family Guide", category: "Tokyo" },
  { id: "VIDEO_ID_2", title: "Hidden Gems in Kyoto You Won't Find on Google", category: "Kyoto" },
  { id: "VIDEO_ID_3", title: "Japan IC Cards Explained: Save Time & Money", category: "Tips" },
  { id: "VIDEO_ID_4", title: "Best Family Restaurants in Osaka", category: "Food" },
  { id: "VIDEO_ID_5", title: "How to Get from Tokyo to Kyoto (Cheapest Ways)", category: "Getting Around" },
  { id: "VIDEO_ID_6", title: "Japan Cherry Blossom Season: Family Guide", category: "Tokyo" },
];

const categories = ["All", "Tokyo", "Kyoto", "Osaka", "Food", "Getting Around", "Tips"];

export default function VideosPage() {
  return (
    <>
      <section className="bg-[#1a2744] text-white py-20 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Watch Japan Come Alive</h1>
        <p className="text-white/70 text-lg mb-6">
          Real Japan. Real tips. No fluff.
        </p>
        <a
          href="https://www.youtube.com/@JapanQuest81"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#c0392b] hover:bg-[#a93226] text-white px-8 py-3 rounded-full font-semibold transition-colors"
        >
          Subscribe on YouTube →
        </a>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                cat === "All"
                  ? "bg-[#1a2744] text-white border-[#1a2744]"
                  : "bg-white text-[#1a2744] border-gray-300 hover:border-[#1a2744]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div key={v.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video bg-gray-100">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <span className="text-xs bg-[#c9a84c]/20 text-[#1a2744] font-semibold px-2 py-1 rounded-full">
                  {v.category}
                </span>
                <p className="font-semibold text-[#1a2744] mt-2 text-sm leading-snug">{v.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#1a2744] text-white rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Enjoyed These Videos?
          </h2>
          <p className="text-white/70 mb-8">
            Let us bring Japan to life for your family — in person.
          </p>
          <Link
            href="/book"
            className="inline-block bg-[#c0392b] hover:bg-[#a93226] text-white px-10 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            Book a Local Attendant →
          </Link>
        </div>
      </div>
    </>
  );
}
