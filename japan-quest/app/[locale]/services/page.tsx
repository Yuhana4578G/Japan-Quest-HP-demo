import Link from "next/link";

const services = [
  {
    title: "Local Attendant Service",
    subtitle: "In-person guidance on the day",
    description:
      "Our flagship service. A Japan Quest team member joins your family in person for the day — guiding, translating, and making every moment seamless.",
    included: [
      "Airport or hotel meetup",
      "Full-day navigation & guidance",
      "English-Japanese translation",
      "Restaurant booking & ordering help",
      "Transport assistance (trains, buses)",
      "Hidden local spot recommendations",
      "Emergency support",
    ],
    notIncluded: ["Transport costs", "Admission fees", "Meals"],
    pricing: [
      { label: "Half Day (4h) · 1–2 people", price: "$200" },
      { label: "Half Day (4h) · 3–6 people", price: "$280" },
      { label: "Full Day (8h) · 1–2 people", price: "$350" },
      { label: "Full Day (8h) · 3–6 people", price: "$480" },
    ],
  },
  {
    title: "Custom Itinerary Planning",
    subtitle: "Your perfect trip, built before you arrive",
    description:
      "We build a fully personalized, day-by-day Japan itinerary tailored to your family's pace, interests, ages, and budget.",
    included: [
      "Video call consultation (60 min)",
      "Custom day-by-day itinerary",
      "Cost & time optimization",
      "Transport route planning",
      "Restaurant & accommodation tips",
      "PDF itinerary document",
      "1 revision round",
    ],
    notIncluded: ["Booking execution", "In-person attendance"],
    pricing: [
      { label: "5–7 day itinerary", price: "$120" },
      { label: "8–14 day itinerary", price: "$180" },
    ],
  },
  {
    title: "Pre-Trip Consultation",
    subtitle: "45-minute expert review of your plan",
    description:
      "Already have a rough itinerary? Let us review it, flag the problems, and give you professional-grade tips to make it bulletproof.",
    included: [
      "45-minute video call",
      "Itinerary review & feedback",
      "Q&A session",
      "Cost-saving tips",
      "Crowd-avoidance advice",
    ],
    notIncluded: ["Written itinerary document", "In-person attendance"],
    pricing: [
      { label: "45-minute session", price: "$60" },
    ],
    instantBook: true,
  },
];

const faqs = [
  {
    q: "Do you speak English fluently?",
    a: "Yes. Our team operates entirely in English with native-level fluency.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 4–6 weeks in advance, especially for spring (cherry blossom) and fall (autumn leaves) seasons.",
  },
  {
    q: "Can you accommodate families with young children or elderly members?",
    a: "Absolutely. We specialize in family travel and will adapt the pace and activities to suit all ages.",
  },
  {
    q: "What areas of Japan do you cover?",
    a: "We primarily cover Tokyo, Kyoto, Osaka, Hiroshima, Nara, and Hokkaido. Contact us for other areas.",
  },
  {
    q: "Is a deposit required to confirm the booking?",
    a: "Yes. After we confirm availability, you'll receive a Stripe payment link for a 20–30% deposit. The remaining balance is due 2 weeks before your service date.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#1a2744] text-white py-20 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Professional Japan Travel Services</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          From planning to in-person guidance — we&apos;ve got your trip covered.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-20 space-y-16">
        {services.map((svc) => (
          <div key={svc.title} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-[#1a2744] text-white px-8 py-6">
              <h2 className="text-2xl font-bold text-[#c9a84c]">{svc.title}</h2>
              <p className="text-white/70 mt-1">{svc.subtitle}</p>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">{svc.description}</p>
                <div className="mb-4">
                  <p className="font-semibold text-[#1a2744] mb-2">✅ What&apos;s Included</p>
                  <ul className="space-y-1">
                    {svc.included.map((item) => (
                      <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[#1a2744] mb-2">❌ Not Included</p>
                  <ul className="space-y-1">
                    {svc.notIncluded.map((item) => (
                      <li key={item} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <p className="font-semibold text-[#1a2744] mb-3">Pricing</p>
                <div className="space-y-2 mb-6">
                  {svc.pricing.map((p) => (
                    <div key={p.label} className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
                      <span className="text-sm text-gray-700">{p.label}</span>
                      <span className="font-bold text-[#c0392b]">{p.price}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/book"
                  className="block text-center bg-[#c0392b] hover:bg-[#a93226] text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  {svc.instantBook ? "Book Now (Instant)" : "Send Inquiry →"}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a2744] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm">
                <p className="font-semibold text-[#1a2744] mb-2">{faq.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
