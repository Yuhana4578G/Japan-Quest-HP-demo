import Link from "next/link";

// Placeholder articles — replace with CMS data later
const articles = [
  {
    slug: "tokyo-family-3-days",
    title: "Tokyo in 3 Days: The Perfect Family Itinerary",
    category: "Tokyo",
    excerpt: "How to see the best of Tokyo with kids — without the crowds, the confusion, or the regret.",
    date: "March 15, 2025",
    readTime: "8 min read",
  },
  {
    slug: "ic-card-guide",
    title: "Japan IC Cards Explained: Which One Should Your Family Get?",
    category: "Getting Around",
    excerpt: "Suica, Pasmo, ICOCA — we break down exactly which card saves you the most time and money.",
    date: "February 28, 2025",
    readTime: "5 min read",
  },
  {
    slug: "kyoto-hidden-gems",
    title: "10 Hidden Gems in Kyoto That Locals Actually Love",
    category: "Kyoto",
    excerpt: "Skip the packed Fushimi Inari crowds. Here are the Kyoto spots that will take your breath away.",
    date: "February 10, 2025",
    readTime: "10 min read",
  },
  {
    slug: "japan-family-budget",
    title: "How to Visit Japan as a Family Without Blowing Your Budget",
    category: "Budget Tips",
    excerpt: "Insider travel agent tricks for saving on accommodation, food, transport, and more.",
    date: "January 25, 2025",
    readTime: "12 min read",
  },
  {
    slug: "osaka-food-guide",
    title: "Osaka Food Guide for Families: What to Eat and Where",
    category: "Food",
    excerpt: "Takoyaki, okonomiyaki, and beyond — your complete family-friendly Osaka food map.",
    date: "January 10, 2025",
    readTime: "7 min read",
  },
  {
    slug: "cherry-blossom-guide",
    title: "Japan Cherry Blossom 2025: Best Spots for Families",
    category: "Planning Tips",
    excerpt: "When to go, where to go, and how to avoid the crowds during Japan's most popular season.",
    date: "December 20, 2024",
    readTime: "9 min read",
  },
];

const categories = ["All", "Tokyo", "Kyoto", "Osaka", "Food", "Getting Around", "Budget Tips", "Planning Tips"];

export default function ArticlesPage() {
  return (
    <>
      <section className="bg-[#1a2744] text-white py-20 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Japan Travel Guides & Inspiration</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Practical tips, hidden gems, and local insights from licensed travel agents based in Japan.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Category Filter */}
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

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="aspect-video bg-gradient-to-br from-[#1a2744] to-[#2d4a7a] flex items-center justify-center text-4xl">
                🗾
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-[#c9a84c]/20 text-[#1a2744] font-semibold px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                <h2 className="font-bold text-[#1a2744] mb-2 leading-snug group-hover:text-[#c0392b] transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <p className="text-xs text-gray-400">{article.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
