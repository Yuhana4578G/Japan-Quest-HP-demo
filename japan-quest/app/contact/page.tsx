import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1a2744] text-white py-20 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-white/70 text-lg">Questions, collaborations, or media inquiries.</p>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-20 space-y-12">
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#c0392b] text-white rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-2">Book a Service</h2>
            <p className="text-white/80 text-sm mb-6">
              For tour bookings and travel service inquiries, please use our dedicated booking page.
            </p>
            <Link
              href="/book"
              className="inline-block bg-white text-[#c0392b] px-6 py-3 rounded-full font-semibold text-sm transition-colors hover:bg-gray-100"
            >
              Go to Book Now →
            </Link>
          </div>
          <div className="bg-[#1a2744] text-white rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-2 text-[#c9a84c]">Business & Collaborations</h2>
            <p className="text-white/80 text-sm mb-6">
              For media, sponsorship, or collaboration inquiries, use the form below or reach out via social.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <a href="https://www.youtube.com/@JapanQuest81" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors">
                YouTube @JapanQuest81
              </a>
              <a href="https://www.instagram.com/japanquest81" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors">
                Instagram @japanquest81
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-[#1a2744] mb-6">Send a Message</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#1a2744] mb-2">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1a2744] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1a2744] mb-2">Subject</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744]">
                <option value="">Select a topic</option>
                <option>Collaboration / Sponsorship</option>
                <option>Media Inquiry</option>
                <option>General Question</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1a2744] mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744] resize-none"
                placeholder="Tell us more..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1a2744] hover:bg-[#0f1a30] text-white py-4 rounded-full font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
