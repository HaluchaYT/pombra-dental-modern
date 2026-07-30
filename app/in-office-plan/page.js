import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "In-Office Dental Plan | Pombra Dental Excellence",
  description:
    "Dental care without insurance. Our In-Office Plan starts at $335/yr for kids and $435/yr for adults — with two cleanings, x-rays, iTero scans, and 10% off other services.",
};

const plans = [
  {
    tier: "Kids · Under 13",
    price: "$335",
    accent: false,
    features: [
      "2 cleanings & exams per year",
      "X-rays as needed",
      "iTero 5D digital scans",
      "10% off other services",
      "No waiting periods",
      "Immediate coverage",
    ],
  },
  {
    tier: "Adults · 13 & up",
    price: "$435",
    accent: true,
    features: [
      "2 cleanings & exams per year",
      "X-rays as needed",
      "iTero 5D digital scans",
      "10% off other services",
      "No waiting periods",
      "No claim forms, ever",
    ],
  },
];

export default function InOfficePlanPage() {
  return (
    <>
      <PageHero
        eyebrow="Simple. Transparent. Yours."
        title="Dental care without insurance."
        subtitle="Our In-Office Membership Plan is a straightforward annual fee. No claim forms. No waiting periods. No pre-existing exclusions. Just quality dental care, made accessible."
      />

      {/* Plans */}
      <section className="container-x -mt-8 relative z-10 pb-24">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.tier}
              className={`relative rounded-3xl p-10 shadow-card ${
                p.accent
                  ? "bg-teal-500 text-cream-50"
                  : "bg-white text-ink-900 border border-teal-100"
              }`}
            >
              {p.accent && (
                <div className="absolute -top-3 right-6 bg-gold-500 text-teal-900 text-[10px] uppercase tracking-[0.22em] font-bold px-3 py-1 rounded-full">
                  Most popular
                </div>
              )}
              <div className={`text-[10px] uppercase tracking-[0.22em] font-semibold ${p.accent ? "text-gold-400" : "text-gold-600"}`}>
                {p.tier}
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className={`font-display text-6xl ${p.accent ? "text-cream-50" : "text-teal-500"}`}>
                  {p.price}
                </span>
                <span className={`text-sm uppercase tracking-widest ${p.accent ? "text-cream-100/70" : "text-ink-500"}`}>
                  / year
                </span>
              </div>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className={`grid place-items-center h-6 w-6 rounded-full flex-shrink-0 mt-0.5 ${p.accent ? "bg-gold-500 text-teal-900" : "bg-teal-500 text-cream-50"}`}>
                      <Icon.Check className="h-3.5 w-3.5" />
                    </span>
                    <span className={p.accent ? "text-cream-100" : "text-ink-700"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5 w-full ${
                  p.accent
                    ? "bg-gold-500 text-teal-900 hover:bg-gold-400"
                    : "bg-teal-500 text-cream-50 hover:bg-teal-600"
                }`}
              >
                Enroll now
                <Icon.Arrow className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-600 mb-5">
            <Icon.Shield className="h-3 w-3" />
            Important
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-ink-900">
            This is not insurance. It's better.
          </h3>
          <p className="text-ink-600 mt-4 leading-relaxed">
            Membership is a direct arrangement between you and our office — which means no
            waiting periods, no claim forms, no pre-existing conditions excluded, and no denials.
            Sign up today and use it today.
          </p>
        </div>
      </section>

      <CTA
        title="Ready to become a member?"
        body="Enrollment takes less than 5 minutes at your first visit. Bring your smile — we'll handle the rest."
      />
    </>
  );
}
