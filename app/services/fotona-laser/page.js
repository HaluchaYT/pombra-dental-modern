import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Fotona Laser Dentistry in San Bruno | Pombra Dental",
  description:
    "Gentle, precise Fotona laser dentistry — NightLase for snoring, laser whitening, ComfortLase pain relief, and periodontal laser therapy.",
};

const treatments = [
  {
    tag: "Snoring & Sleep",
    title: "NightLase®",
    body: "A non-invasive treatment that gently tightens the tissues of the airway, reducing snoring and improving sleep quality — with virtually no downtime.",
    for: ["Chronic snorers", "Mild sleep apnea", "Partners tired of the noise"],
  },
  {
    tag: "Cosmetic",
    title: "Laser Tooth Whitening",
    body: "Laser-assisted whitening brightens your smile faster than traditional bleaching — with less sensitivity and enamel protection built in.",
    for: ["Special occasions", "Stubborn stains", "A quick refresh"],
  },
  {
    tag: "Comfort",
    title: "ComfortLase®",
    body: "Photobiomodulation therapy that eases pain, inflammation, and sensitivity — no needles, no medication, just relief.",
    for: ["Tooth sensitivity", "TMJ discomfort", "Muscle soreness"],
  },
  {
    tag: "Gum Health",
    title: "Periodontal Laser Treatment",
    body: "Precise laser targeting removes harmful bacteria and inflamed tissue while preserving healthy gum — supporting long-term gum health.",
    for: ["Gum disease", "Bleeding gums", "Pocket reduction"],
  },
  {
    tag: "Advanced Therapy",
    title: "TwinLight® Periodontal Therapy",
    body: "The gold standard in laser periodontal care. Removes bacteria and infected tissue with less discomfort, less bleeding, and faster recovery than traditional methods.",
    for: ["Moderate to severe gum disease", "Patients wanting a gentler alternative"],
  },
];

export default function FotonaPage() {
  return (
    <>
      <PageHero
        eyebrow="Fotona Certified Practice"
        title="Laser dentistry, done gently."
        subtitle="From snoring to whitening to gum health, the Fotona laser platform lets us treat more conditions with less pain, less bleeding, and faster healing."
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">
            Book a Consultation
            <Icon.Arrow className="h-4 w-4" />
          </Link>
          <a href="tel:6508734776" className="btn-outline">
            <Icon.Phone className="h-4 w-4" />
            (650) 873-4776
          </a>
        </div>
      </PageHero>

      {/* Treatments */}
      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-10 items-end mb-14">
          <div>
            <div className="eyebrow mb-5">
              <Icon.Laser className="h-3 w-3" />
              What Fotona treats
            </div>
            <h2 className="h-section">
              Five specialized<br />
              laser treatments.
            </h2>
          </div>
          <p className="lede">
            Each procedure uses the same Fotona platform but a completely different setting —
            precisely tuned to what your smile needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {treatments.map((t) => (
            <article
              key={t.title}
              className="group rounded-3xl border border-teal-100 bg-white p-8 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
                    {t.tag}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-ink-900 mt-2">{t.title}</h3>
                </div>
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-teal-500 text-cream-50 group-hover:bg-gold-500 transition flex-shrink-0">
                  <Icon.Laser className="h-6 w-6" />
                </div>
              </div>
              <p className="text-ink-600 mt-4 leading-relaxed">{t.body}</p>
              <div className="mt-6 pt-6 border-t border-teal-100">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-3">
                  Best for
                </div>
                <ul className="space-y-1.5">
                  {t.for.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                      <Icon.Check className="h-4 w-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Fotona */}
      <section className="relative overflow-hidden bg-teal-900 py-24 md:py-32 text-cream-100">
        <div className="absolute inset-0 bg-mesh-teal opacity-40" />
        <div className="relative container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-400 mb-6">
              <Icon.Sparkle className="h-3 w-3" />
              Why Fotona
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Precision that changes<br />
              how dentistry feels.
            </h2>
            <p className="text-cream-100/70 mt-6 text-lg leading-relaxed max-w-lg">
              Fotona's dual-wavelength lasers let us switch between soft-tissue precision
              and deeper therapeutic effect — treating more conditions in fewer visits,
              without the drills and needles most people dread.
            </p>
          </div>

          <ul className="space-y-4">
            {[
              "Less bleeding, less swelling, faster healing.",
              "Minimally invasive — often no anesthesia required.",
              "Great for anxious patients and needle-averse kids.",
              "Sterilizes as it works, reducing infection risk.",
              "Preserves more healthy tissue than traditional tools.",
            ].map((line) => (
              <li key={line} className="flex items-start gap-4">
                <span className="grid place-items-center h-8 w-8 rounded-full bg-gold-500 text-teal-900 flex-shrink-0">
                  <Icon.Check className="h-4 w-4" />
                </span>
                <span className="text-cream-100/90 pt-1">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        title="Have a Fotona question?"
        body="Every mouth is different. Book a consultation and we'll walk you through which laser treatment — if any — is right for you."
      />
    </>
  );
}
