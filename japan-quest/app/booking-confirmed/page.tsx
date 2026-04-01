import Link from "next/link";

export default function BookingConfirmedPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-32 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-3xl font-bold text-[#1a2744] mb-4">
        Your Inquiry Has Been Received!
      </h1>
      <p className="text-gray-600 leading-relaxed mb-8">
        Thank you for reaching out to Japan Quest. We&apos;ll review your request and
        get back to you within <strong>48 hours</strong> with availability and a
        personalized quote including a secure Stripe payment link.
      </p>
      <div className="bg-[#1a2744] text-white rounded-2xl p-8 mb-10 text-left space-y-3">
        <p className="font-semibold text-[#c9a84c] mb-2">What happens next?</p>
        <p className="text-white/80 text-sm">✅ Check your inbox for an auto-confirmation email</p>
        <p className="text-white/80 text-sm">✅ We&apos;ll review your request and prepare a custom quote</p>
        <p className="text-white/80 text-sm">✅ You&apos;ll receive a secure Stripe payment link to confirm your booking</p>
      </div>
      <p className="text-gray-500 mb-8">In the meantime, explore more Japan tips:</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/videos"
          className="bg-[#1a2744] hover:bg-[#0f1a30] text-white px-8 py-3 rounded-full font-semibold transition-colors"
        >
          Watch Our Videos
        </Link>
        <Link
          href="/articles"
          className="border-2 border-[#1a2744] text-[#1a2744] hover:bg-[#1a2744] hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
        >
          Read Travel Guides
        </Link>
      </div>
    </section>
  );
}
