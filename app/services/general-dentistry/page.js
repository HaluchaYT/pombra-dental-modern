import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "General Dentistry in San Bruno | Pombra Dental",
  description:
    "Comprehensive general dentistry — routine cleanings, exams, iTero 5D scans, fillings, crowns, veneers, and more.",
};

const groups = [
  {
    tag: "Preventive care",
    icon: <Icon.Shield className="h-6 w-6" />,
    items: [
      "Dental exams & cleanings",
      "Digital radiographs",
      "iTero 5D digital scans",
      "Sealants & fluoride",
      "Oral cancer screenings",
      "Periodontal maintenance",
    ],
  },
  {
    tag: "Restorative care",
    icon: <Icon.Tooth className="h-6 w-6" />,
    items: [
      "Composite fillings",
      "Crowns & bridges",
      "Porcelain veneers",
      "Dentures & partials",
      "Root canal therapy",
      "Tooth extractions",
    ],
  },
  {
    tag: "Advanced technology",
    icon: <Icon.Laser className="h-6 w-6" />,
    items: [
      "iTero 5D scanning at every exam",
      "Laser-assisted procedures",
      "Digital treatment planning",
      "3D smile previews",
      "Same-day treatment options",
      "Sleep apnea screening",
    ],
  },
];

export default function GeneralPage() {
  return (
    <>
      <PageHero
        eyebrow="Comprehensive Dentistry"
        title="Everything your smile needs, all in one place."
        subtitle="From your very first cleaning to advanced restorative work — our modern practice covers the full spectrum of general and cosmetic dentistry with an emphasis on prevention."
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">
            Schedule a Visit
            <Icon.Arrow className="h-4 w-4" />
          </Link>
          <Link href="/in-office-plan" className="btn-outline">
            See Membership Plan
          </Link>
        </div>
      </PageHero>

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.tag} className="rounded-3xl border border-teal-100 bg-white p-8 shadow-soft">
              <div className="grid place-items-center h-14 w-14 rounded-2xl bg-teal-500 text-cream-50">
                {g.icon}
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold-600 font-semibold mt-6">
                {g.tag}
              </div>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-ink-800">
                    <Icon.Check className="h-4 w-4 text-teal-500 mt-1 flex-shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream-100 py-24 md:py-32">
        <div className="absolute inset-0 bg-mesh-teal opacity-40" />
        <div className="relative container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="eyebrow mb-5">
              <Icon.Sparkle className="h-3 w-3" />
              Our approach
            </div>
            <h2 className="h-section">
              Least invasive.<br />
              Most caring.
            </h2>
          </div>
          <div>
            <p className="lede">
              Dr. Pombra's philosophy is simple: recommend the most comfortable, least invasive
              treatment that will keep you healthy long-term. That means explaining what she sees,
              walking you through your options, and never pushing a procedure you don't need.
            </p>
            <p className="text-ink-600 mt-6 leading-relaxed">
              Every exam uses iTero 5D digital scanning — no goopy impressions, no guesswork.
              You'll see exactly what we see, on a screen, in HD. It's the difference between
              being told what's wrong and being shown.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
