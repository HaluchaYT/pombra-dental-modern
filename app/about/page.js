import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Meet Dr. Hema Pombra | Pombra Dental Excellence",
  description:
    "Dr. Hema M. Pombra, DDS — founding dentist of Pombra Dental Excellence in San Bruno. Diamond 1% Invisalign Provider, Fotona certified, and lifelong learner.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet Dr. Pombra"
        title="Dr. Hema M. Pombra, DDS"
        subtitle="Founding dentist of Pombra Dental Excellence. Board-certified in California. Diamond 1% Invisalign Provider. And — most importantly — a dentist who genuinely enjoys getting to know the people in her chair."
      />

      {/* Bio */}
      <section className="container-x -mt-16 relative z-10 pb-24">
        <div className="grid lg:grid-cols-[1fr,1.3fr] gap-14 items-start">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-card ring-1 ring-teal-500/10">
              <Image
                src="https://static.wixstatic.com/media/7173fc_ac9c0d0a435b4598b54feb7e9ca42ff2~mv2.jpg"
                alt="Dr. Hema Pombra, DDS"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-6 rounded-2xl border border-teal-100 bg-white p-6 shadow-soft">
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold-600 font-semibold mb-3">
                Credentials
              </div>
              <ul className="space-y-2 text-sm text-ink-700">
                <li className="flex gap-2"><Icon.Check className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />Doctor of Dental Surgery (DDS)</li>
                <li className="flex gap-2"><Icon.Check className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />BVP Dental College, Pune</li>
                <li className="flex gap-2"><Icon.Check className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />Board-certified, California</li>
                <li className="flex gap-2"><Icon.Check className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />Diamond 1% Invisalign Provider</li>
                <li className="flex gap-2"><Icon.Check className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />Fotona Certified</li>
                <li className="flex gap-2"><Icon.Check className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />HealthyStart Provider</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 text-lg text-ink-700 leading-relaxed">
            <p>
              Dr. Hema Pombra founded Pombra Dental Excellence with a simple goal —
              to build the kind of dental practice she'd want to visit herself.
              Warm, modern, honest, and quietly luxurious.
            </p>
            <p>
              A graduate of BVP Dental College in Pune, Dr. Pombra brings a deep
              commitment to the interconnection between oral health and overall
              wellness. She's a firm believer that a healthy mouth is essential to
              a healthy body — and that patient education is the single most
              important treatment she can offer.
            </p>
            <p>
              Beyond general and cosmetic dentistry, Dr. Pombra has developed
              particular expertise in Invisalign clear aligners, Fotona laser
              treatments, and sleep apnea screening. She's a Diamond 1% Invisalign
              Provider — a distinction held by only the top 1% of Invisalign
              dentists nationwide.
            </p>
            <p>
              Dr. Pombra invests heavily in continuing education, regularly attending
              CE courses and joining study clubs across the country. She shares her
              expertise with fellow dental professionals and stays at the forefront
              of what modern dentistry can do.
            </p>

            <div className="pt-6 border-t border-teal-100">
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold-600 font-semibold mb-4">
                Areas of focus
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "General dentistry",
                  "Invisalign & clear aligners",
                  "Fotona laser treatments",
                  "HealthyStart",
                  "Sleep apnea screening",
                  "Cosmetic dentistry",
                  "Preventive care",
                ].map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs px-3 py-1.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-teal-100">
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold-600 font-semibold mb-4">
                Professional memberships
              </div>
              <ul className="space-y-2 text-base">
                <li>· American Dental Association</li>
                <li>· California Dental Society</li>
                <li>· San Mateo Dental Society</li>
                <li>· American Academy of Clear Aligners</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative overflow-hidden bg-teal-900 py-24 md:py-32 text-cream-100">
        <div className="absolute inset-0 bg-mesh-teal opacity-40" />
        <div className="relative container-x max-w-4xl text-center">
          <Icon.Quote className="h-12 w-12 text-gold-400 mx-auto mb-6" />
          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight italic">
            "A healthy mouth is essential to a healthy body.
            My job is to give you the tools, the knowledge, and the care
            to keep both for a lifetime."
          </blockquote>
          <div className="mt-8 text-sm uppercase tracking-[0.28em] text-gold-400 font-semibold">
            — Dr. Hema Pombra, DDS
          </div>
        </div>
      </section>

      <CTA
        title="Come meet Dr. Pombra."
        body="A first visit is the easiest way to know if it's a fit. Book online in under a minute — or call our front desk any time."
      />
    </>
  );
}
