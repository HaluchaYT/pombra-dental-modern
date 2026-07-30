import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Referring Offices | Pombra Dental Excellence",
  description:
    "Information for referring dental offices and specialists working with Pombra Dental Excellence in San Bruno.",
};

export default function ReferringPage() {
  return (
    <>
      <PageHero
        eyebrow="For Dental Professionals"
        title="Refer a patient to Pombra Dental."
        subtitle="We partner with a network of trusted specialists and referring general dentists to make co-treatment simple, professional, and patient-first."
      />

      <section className="container-x py-24">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-3xl border border-teal-100 bg-white p-8 shadow-soft">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-teal-500 text-cream-50 mb-5">
              <Icon.Mail className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl text-ink-900">Send us a referral</h3>
            <p className="text-ink-600 mt-3">
              Email records to our team and we'll follow up with your patient within one business day.
            </p>
            <a
              href="mailto:drhemapombra@gmail.com"
              className="link-underline mt-5 inline-flex items-center gap-2 text-teal-600 font-semibold"
            >
              drhemapombra@gmail.com
              <Icon.Arrow className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-3xl border border-teal-100 bg-white p-8 shadow-soft">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-gold-500 text-teal-900 mb-5">
              <Icon.Phone className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl text-ink-900">Call our office manager</h3>
            <p className="text-ink-600 mt-3">
              Speak directly with Jessica or Guilla during business hours — Monday through Thursday.
            </p>
            <a
              href="tel:6508734776"
              className="link-underline mt-5 inline-flex items-center gap-2 text-teal-600 font-semibold"
            >
              (650) 873-4776
              <Icon.Arrow className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="font-display text-3xl text-ink-900">What we offer</h3>
          <p className="text-ink-600 mt-4 leading-relaxed">
            Comprehensive general and cosmetic dentistry, Diamond 1% Invisalign care, Fotona laser
            treatments (NightLase, ComfortLase, periodontal), HealthyStart pediatric wellness,
            iTero 5D scanning, and sleep apnea screening. We coordinate treatment plans closely
            with referring specialists and provide detailed reports.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Contact Our Team
            <Icon.Arrow className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
