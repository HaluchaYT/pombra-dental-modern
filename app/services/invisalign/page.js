import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Invisalign in San Bruno | Pombra Dental Excellence",
  description:
    "Diamond 1% Invisalign Provider in San Bruno. Discreet, comfortable clear aligners with 3D digital scanning and in-office financing.",
};

const benefits = [
  {
    icon: <Icon.Sparkle className="h-5 w-5" />,
    title: "Discreet",
    body: "Virtually invisible aligners — smile through the whole treatment, not just after it.",
  },
  {
    icon: <Icon.Shield className="h-5 w-5" />,
    title: "Comfortable",
    body: "Smooth, custom-fit plastic — no metal brackets, no wire pokes, no scratches.",
  },
  {
    icon: <Icon.Tooth className="h-5 w-5" />,
    title: "Convenient",
    body: "Remove them to eat, brush, and floss like normal. Keep your routine, get straight teeth.",
  },
  {
    icon: <Icon.Check className="h-5 w-5" />,
    title: "Effective",
    body: "Corrects overbites, underbites, crossbites, gaps, and crowded teeth — with predictability.",
  },
];

export default function InvisalignPage() {
  return (
    <>
      <PageHero
        eyebrow="Diamond 1% Invisalign Provider"
        title="A straighter smile, without anyone noticing."
        subtitle="Custom clear aligners designed with 3D digital imaging and delivered by a Diamond 1% provider — the top tier of Invisalign expertise nationwide."
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

      {/* Benefits */}
      <section className="container-x -mt-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-3xl border border-teal-100 bg-white p-6 shadow-soft">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-teal-500 text-cream-50">
                {b.icon}
              </div>
              <h3 className="font-display text-xl text-ink-900 mt-4">{b.title}</h3>
              <p className="text-sm text-ink-600 mt-2 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="container-x py-24 md:py-32">
        <div className="grid lg:grid-cols-[1fr,1.1fr] gap-14 items-start">
          <div>
            <div className="eyebrow mb-5">
              <Icon.Sparkle className="h-3 w-3" />
              The Invisalign journey
            </div>
            <h2 className="h-section">
              Digital scans.<br />
              Custom aligners.<br />
              A smile you love.
            </h2>
            <p className="lede mt-6">
              At your consultation, we use iTero 5D digital scanning to map your teeth
              in stunning detail. You'll see a 3D preview of your future smile before you commit.
            </p>
          </div>

          <ol className="space-y-6">
            {[
              {
                n: "01",
                title: "Consultation & 3D scan",
                body: "A full exam and digital scan. Dr. Pombra reviews what she sees with you and answers every question.",
              },
              {
                n: "02",
                title: "See your future smile",
                body: "Preview your treatment outcome in 3D — before you sign up for anything.",
              },
              {
                n: "03",
                title: "Custom aligners arrive",
                body: "You'll receive a series of custom aligners, worn 20–22 hours per day, changed every 1–2 weeks.",
              },
              {
                n: "04",
                title: "Simple check-ins",
                body: "Brief appointments track progress. Most treatments finish in 6–18 months.",
              },
              {
                n: "05",
                title: "Retention & aftercare",
                body: "A custom retainer keeps your new smile in place. We'll see you at your regular cleanings.",
              },
            ].map((s) => (
              <li
                key={s.n}
                className="flex gap-5 rounded-2xl border border-teal-100 bg-white p-6 shadow-soft"
              >
                <div className="font-display text-3xl text-gold-500 leading-none">{s.n}</div>
                <div>
                  <h4 className="font-semibold text-ink-900 text-lg">{s.title}</h4>
                  <p className="text-sm text-ink-600 mt-1.5 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Financing / trust */}
      <section className="relative overflow-hidden bg-cream-100 py-24">
        <div className="absolute inset-0 bg-mesh-teal opacity-40" />
        <div className="relative container-x grid md:grid-cols-3 gap-8 text-center">
          {[
            { v: "Top 1%", l: "Diamond Invisalign Provider" },
            { v: "In-office", l: "Monthly financing available" },
            { v: "6–18 mo", l: "Typical treatment window" },
          ].map((x) => (
            <div key={x.l} className="rounded-3xl border border-teal-100 bg-white/80 backdrop-blur p-10 shadow-soft">
              <div className="font-display text-5xl text-teal-500">{x.v}</div>
              <div className="text-xs uppercase tracking-[0.22em] text-ink-600 mt-3">{x.l}</div>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Curious what Invisalign could do for your smile?"
        body="Book a complimentary consult — a 30-minute scan and honest conversation about whether it's right for you."
      />
    </>
  );
}
