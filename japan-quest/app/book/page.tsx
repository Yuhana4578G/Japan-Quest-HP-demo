"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const plans = [
  {
    id: "half-day",
    title: "Local Attendant – Half Day",
    duration: "4 hours · 1 area",
    price: "From $200",
    features: ["Airport or hotel meetup", "1 focused area", "Translation & guidance", "Restaurant recommendations"],
  },
  {
    id: "full-day",
    title: "Local Attendant – Full Day",
    duration: "8 hours · multiple areas",
    price: "From $350",
    features: ["Airport or hotel meetup", "Multiple areas", "Translation & guidance", "Restaurant booking support", "Transport assistance"],
    recommended: true,
  },
  {
    id: "itinerary",
    title: "Custom Itinerary Planning",
    duration: "Online · before your trip",
    price: "From $120",
    features: ["Video call consultation", "Custom day-by-day plan", "Cost optimization tips", "PDF itinerary document"],
  },
  {
    id: "consultation",
    title: "Pre-Trip Consultation",
    duration: "45-min video call",
    price: "$60",
    features: ["Itinerary review", "Q&A session", "Personalized tips", "Quick booking available"],
    quickBook: true,
  },
];

const areas = ["Tokyo", "Kyoto", "Osaka", "Hiroshima", "Hokkaido", "Nara", "Other"];

export default function BookPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    dateFrom: "",
    dateTo: "",
    adults: "2",
    children: "0",
    areas: [] as string[],
    requests: "",
    howFound: "",
  });

  const handleAreaToggle = (area: string) => {
    setForm((prev) => ({
      ...prev,
      areas: prev.areas.includes(area)
        ? prev.areas.filter((a) => a !== area)
        : [...prev.areas, area],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Formspree or API route can be wired here
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    router.push("/booking-confirmed");
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a2744] text-white py-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Book Your Japan Travel Service</h1>
        <p className="text-white/70 text-lg">
          Secure your spot — availability fills up fast during peak seasons.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Plan Selection */}
        <h2 className="text-2xl font-bold text-[#1a2744] mb-8">1. Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative text-left border-2 rounded-2xl p-6 transition-all ${
                selectedPlan === plan.id
                  ? "border-[#c0392b] bg-[#c0392b]/5"
                  : "border-gray-200 bg-white hover:border-[#1a2744]"
              }`}
            >
              {plan.recommended && (
                <span className="absolute top-4 right-4 bg-[#c9a84c] text-[#1a2744] text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              {plan.quickBook && (
                <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Instant Book
                </span>
              )}
              <h3 className="text-lg font-bold text-[#1a2744] mb-1">{plan.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{plan.duration}</p>
              <p className="text-2xl font-bold text-[#c0392b] mb-4">{plan.price}</p>
              <ul className="space-y-1">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-green-500">✓</span> {f}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-[#1a2744] text-white rounded-2xl p-8 mb-16">
          <h2 className="text-xl font-bold mb-6 text-[#c9a84c]">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center text-sm">
            {[
              { step: "1", text: "Fill out the form below" },
              { step: "2", text: "Auto-confirmation email sent" },
              { step: "3", text: "Quote & Stripe payment link within 48h" },
              { step: "4", text: "Pay deposit to confirm" },
              { step: "5", text: "Meet us in Japan!" },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-[#c9a84c] text-[#1a2744] font-bold flex items-center justify-center text-base">
                  {s.step}
                </div>
                <p className="text-white/80">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inquiry Form */}
        <h2 className="text-2xl font-bold text-[#1a2744] mb-8">2. Send Your Inquiry</h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                Full Name <span className="text-[#c0392b]">*</span>
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                Email Address <span className="text-[#c0392b]">*</span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                Arrival Date <span className="text-[#c0392b]">*</span>
              </label>
              <input
                type="date"
                required
                value={form.dateFrom}
                onChange={(e) => setForm({ ...form, dateFrom: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                Departure Date <span className="text-[#c0392b]">*</span>
              </label>
              <input
                type="date"
                required
                value={form.dateTo}
                onChange={(e) => setForm({ ...form, dateTo: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-[#1a2744] mb-2">Adults</label>
              <select
                value={form.adults}
                onChange={(e) => setForm({ ...form, adults: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-[#1a2744] mb-2">Children</label>
              <select
                value={form.children}
                onChange={(e) => setForm({ ...form, children: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
              >
                {[0, 1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-[#1a2744] mb-2">Selected Plan</label>
              <input
                type="text"
                readOnly
                value={plans.find((p) => p.id === selectedPlan)?.title ?? "Not selected yet"}
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3 text-gray-500 cursor-default"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1a2744] mb-3">
              Interested Areas <span className="text-[#c0392b]">*</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {areas.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => handleAreaToggle(area)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    form.areas.includes(area)
                      ? "bg-[#1a2744] text-white border-[#1a2744]"
                      : "bg-white text-[#1a2744] border-gray-300 hover:border-[#1a2744]"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1a2744] mb-2">
              Special Requests / Message
            </label>
            <textarea
              rows={4}
              value={form.requests}
              onChange={(e) => setForm({ ...form, requests: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744] resize-none"
              placeholder="Tell us about your family, interests, or any questions you have..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1a2744] mb-2">
              How did you find us?
            </label>
            <select
              value={form.howFound}
              onChange={(e) => setForm({ ...form, howFound: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
            >
              <option value="">Select one</option>
              <option value="youtube">YouTube</option>
              <option value="google">Google Search</option>
              <option value="instagram">Instagram</option>
              <option value="tiktok">TikTok</option>
              <option value="friend">Friend / Family</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading || !form.name || !form.email || !form.dateFrom || form.areas.length === 0}
            className="w-full bg-[#c0392b] hover:bg-[#a93226] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-full font-semibold text-lg transition-colors"
          >
            {loading ? "Sending..." : "Send Inquiry →"}
          </button>
          <p className="text-center text-xs text-gray-400">
            We&apos;ll respond within 48 hours with availability and a personalized quote.
          </p>
        </form>

        {/* Cancellation Policy */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-lg font-bold text-[#1a2744] mb-4">Cancellation Policy</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-gray-500 font-medium">Cancellation Timing</th>
                  <th className="text-left py-2 text-gray-500 font-medium">Refund</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="py-3">30+ days before</td><td className="py-3 text-green-600 font-medium">Full refund</td></tr>
                <tr><td className="py-3">15–29 days before</td><td className="py-3 text-yellow-600 font-medium">50% refund</td></tr>
                <tr><td className="py-3">Under 14 days</td><td className="py-3 text-red-600 font-medium">No refund</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
