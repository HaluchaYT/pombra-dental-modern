import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "HealthyStart in San Bruno | Pombra Dental for Kids",
  description:
    "HealthyStart is a non-invasive appliance program that supports better breathing, sleep, and oral development in children — offered at Pombra Dental in San Bruno.",
};

export default function HealthyStartPage() {
  return (
    <>
      <PageHero
        eyebrow="Pediatric Wellness"
        title="Healthy smiles start early."
        subtitle="HealthyStart is a gentle, non-invasive appliance program that supports your child's breathing, sleep, and oral development — laying the foundation for a lifetime of good oral health."
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">
            Book a Screening
            <Icon.Arrow className="h-4 w-4" />
          </Link>
          <a href="tel:6508734776" className="btn-outline">
            <Icon.Phone className="h-4 w-4" />
            (650) 873-4776
          </a>
        </div>
      </PageHero>

      {/* What it is */}
      <section className="container-x py-24 md:py-32 grid lg:grid-cols-[1fr,1.1fr] gap-14 items-center">
        <div className="relative">
          <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-card ring-1 ring-teal-500/10">
            <Image
              src="https://static.wixstatic.com/media/7173fc_0b3b17f3810c4bfaad3ae7770fef5e60~mv2.jpg"
              alt="HealthyStart appliance"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 rounded-3xl bg-gold-500 text-teal-900 p-6 max-w-[240px] shadow-card">
            <Icon.Kids className="h-8 w-8 mb-3" />
            <div className="font-display text-xl leading-snug">
              Designed for growing smiles.
            </div>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-5">
            <Icon.Kids className="h-3 w-3" />
            What is HealthyStart?
          </div>
          <h2 className="h-section">
            More than<br />
            straight teeth.
          </h2>
          <p className="lede mt-6">
            HealthyStart isn't traditional orthodontics. It's a soft, removable appliance
            program that helps guide healthy jaw development, address the root causes of
            crooked teeth, and support your child's overall wellness — from sleep quality
            to breathing patterns.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { t: "Better breathing", d: "Encourages nasal breathing over mouth breathing." },
              { t: "Deeper sleep", d: "Reduces snoring and restless nights." },
              { t: "Healthier habits", d: "Discourages thumb-sucking and tongue thrust." },
              { t: "Straighter smiles", d: "Guides teeth into proper alignment naturally." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl bg-white border border-teal-100 p-5 shadow-soft">
                <div className="grid place-items-center h-9 w-9 rounded-xl bg-teal-50 text-teal-600 mb-3">
                  <Icon.Check className="h-4 w-4" />
                </div>
                <div className="font-semibold text-ink-900 text-sm">{x.t}</div>
                <div className="text-xs text-ink-600 mt-1 leading-relaxed">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs */}
      <section className="relative overflow-hidden bg-cream-100 py-24">
        <div className="absolute inset-0 bg-mesh-teal opacity-40" />
        <div className="relative container-x">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-5">
              <Icon.Sparkle className="h-3 w-3" />
              Signs to watch for
            </div>
            <h2 className="h-section">
              Is HealthyStart<br />
              right for your child?
            </h2>
            <p className="lede mt-6">
              Even one of these signs can be worth a screening. Early intervention is
              simpler, gentler, and more effective than waiting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              "Mouth breathing during sleep or throughout the day",
              "Snoring, restless sleep, or bedwetting past age 5",
              "Crooked, crowded, or gapped teeth",
              "Chronic allergies or frequent ear infections",
              "Difficulty focusing or hyperactivity",
              "Thumb-sucking or extended pacifier use",
              "Slow speech development or unclear speech",
              "Grinding teeth at night",
              "Dark circles under the eyes",
            ].map((sign) => (
              <div key={sign} className="rounded-2xl bg-white border border-teal-100 p-5 shadow-soft flex items-start gap-3">
                <span className="grid place-items-center h-7 w-7 rounded-full bg-teal-500 text-cream-50 flex-shrink-0 mt-0.5">
                  <Icon.Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-ink-700 leading-relaxed">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Give your child a healthy foundation."
        body="A quick screening will tell us if HealthyStart could help — and there's no cost to find out."
      />
    </>
  );
}
