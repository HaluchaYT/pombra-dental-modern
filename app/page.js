import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icons";
import CTA from "@/components/CTA";

const services = [
  {
    icon: <Icon.Sparkle className="h-6 w-6" />,
    title: "Invisalign",
    tag: "Diamond 1% Provider",
    desc: "Discreet, comfortable clear aligners tailored with digital 3D imaging for a smile you'll love showing off.",
    href: "/services/invisalign",
  },
  {
    icon: <Icon.Laser className="h-6 w-6" />,
    title: "Fotona Laser",
    tag: "Advanced technology",
    desc: "Gentle laser dentistry for whitening, snoring, TMJ discomfort, gum health, and pain-free care.",
    href: "/services/fotona-laser",
  },
  {
    icon: <Icon.Kids className="h-6 w-6" />,
    title: "HealthyStart",
    tag: "For growing smiles",
    desc: "A non-invasive appliance program that supports breathing, sleep, and healthy oral development in kids.",
    href: "/services/healthystart",
  },
  {
    icon: <Icon.Tooth className="h-6 w-6" />,
    title: "General Dentistry",
    tag: "Preventive & restorative",
    desc: "Cleanings, exams, iTero 5D scans, fillings, crowns, veneers — comprehensive care from a caring team.",
    href: "/services/general-dentistry",
  },
];

const trustStats = [
  { value: "20+", label: "Years serving San Bruno" },
  { value: "1%", label: "Diamond Invisalign Provider" },
  { value: "5.0", label: "Patient rating" },
  { value: "5D", label: "iTero digital scans" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-14 lg:pt-20 pb-24 lg:pb-32">
        <div className="absolute inset-0 bg-mesh-teal" />
        <div className="absolute top-32 -right-40 h-[500px] w-[500px] rounded-full bg-gold-400/10 blur-3xl" />
        <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-3xl" />

        <div className="relative container-x grid lg:grid-cols-[1.15fr,1fr] gap-14 lg:gap-20 items-center">
          <div className="animate-fadeUp">
            <div className="eyebrow mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
              </span>
              Now welcoming new patients
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-ink-900 leading-[1.02] tracking-tight">
              Amazing smiles.<br />
              <span className="italic text-teal-500">Pampered</span> care.
            </h1>

            <p className="lede mt-7 max-w-xl">
              San Bruno's premier dental experience — where thoughtful design, modern
              technology, and a caring team make every visit something to look forward to.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book Your Visit
                <Icon.Arrow className="h-4 w-4" />
              </Link>
              <a href="tel:6508734776" className="btn-outline">
                <Icon.Phone className="h-4 w-4" />
                (650) 873-4776
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-ink-600">
              <div className="flex items-center gap-2">
                <div className="flex text-gold-500">
                  {[...Array(5)].map((_, i) => <Icon.Star key={i} className="h-4 w-4" />)}
                </div>
                <span className="font-medium text-ink-800">5.0</span>
                <span>Google reviews</span>
              </div>
              <span className="hidden sm:inline text-ink-400">·</span>
              <div className="flex items-center gap-2">
                <Icon.Shield className="h-4 w-4 text-teal-500" />
                <span>Most insurance accepted</span>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-card ring-1 ring-teal-500/10">
              <Image
                src="https://static.wixstatic.com/media/7173fc_ac9c0d0a435b4598b54feb7e9ca42ff2~mv2.jpg"
                alt="Dr. Hema Pombra"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="text-cream-50">
                  <div className="font-display text-2xl">Dr. Hema Pombra</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-gold-400 mt-1">
                    DDS · Founding Dentist
                  </div>
                </div>
                <Link
                  href="/about"
                  aria-label="Meet Dr. Pombra"
                  className="grid place-items-center h-12 w-12 rounded-full bg-cream-50 text-teal-600 hover:bg-gold-500 hover:text-cream-50 transition"
                >
                  <Icon.Arrow className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Floating card 1 */}
            <div className="absolute -left-6 top-16 hidden md:block animate-floaty">
              <div className="rounded-2xl bg-white shadow-card border border-teal-100 p-5 w-56">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-11 w-11 rounded-full bg-teal-50 text-teal-500">
                    <Icon.Sparkle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                      Invisalign
                    </div>
                    <div className="text-sm text-ink-800">Diamond Provider</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -right-6 bottom-24 hidden md:block animate-floaty" style={{ animationDelay: "1.5s" }}>
              <div className="rounded-2xl bg-white shadow-card border border-teal-100 p-5 w-60">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-11 w-11 rounded-full bg-gold-500/10 text-gold-600">
                    <Icon.Laser className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                      Fotona Laser
                    </div>
                    <div className="text-sm text-ink-800">Gentle. Precise.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="container-x">
        <div className="rounded-3xl border border-teal-100 bg-white/70 backdrop-blur px-8 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-soft">
          {trustStats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-4xl md:text-5xl text-teal-500 leading-none">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-ink-600">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-10 md:gap-16 items-end mb-14">
          <div>
            <div className="eyebrow mb-5">
              <Icon.Sparkle className="h-3 w-3" />
              What we do best
            </div>
            <h2 className="h-section">
              Elevated dentistry,<br />
              designed around you.
            </h2>
          </div>
          <p className="lede">
            From clear aligners and laser therapy to gentle pediatric care and everyday checkups —
            everything you need under one calm, modern roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link key={s.title} href={s.href} className="card-service group">
              <div className="grid place-items-center h-14 w-14 rounded-2xl bg-teal-500 text-cream-50 shadow-soft group-hover:bg-gold-500 transition">
                {s.icon}
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold-600 font-semibold mt-6">
                {s.tag}
              </div>
              <h3 className="font-display text-2xl text-ink-900 mt-2">{s.title}</h3>
              <p className="text-sm text-ink-600 leading-relaxed mt-3">{s.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-600 group-hover:text-gold-600">
                Learn more
                <Icon.Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="relative overflow-hidden bg-cream-100 py-24 md:py-32">
        <div className="absolute inset-0 bg-mesh-teal opacity-40" />
        <div className="relative container-x grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="relative aspect-[5/6] rounded-[2rem] overflow-hidden shadow-card ring-1 ring-teal-500/10">
              <Image
                src="https://static.wixstatic.com/media/7173fc_4371b6103c9447d4a4a96486187eb9d5~mv2.jpg"
                alt="Pombra Dental office"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 md:-right-10 rounded-3xl bg-teal-500 text-cream-50 p-6 md:p-8 max-w-xs shadow-card">
              <Icon.Quote className="h-8 w-8 text-gold-400 mb-3" />
              <p className="text-sm leading-relaxed italic">
                "Used to dread going to the dentist — this office has changed my life."
              </p>
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold-400 mt-4 font-semibold">
                — Verified patient
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow mb-5">
              <Icon.Tooth className="h-3 w-3" />
              About the practice
            </div>
            <h2 className="h-section">
              Meet Dr. Pombra & our<br />
              San Bruno team.
            </h2>
            <p className="lede mt-6">
              Dr. Hema Pombra believes healthy smiles start with real relationships.
              Since founding the practice, she's built a warm, modern office where technology
              and hospitality work hand-in-hand — so every visit feels less like a chore
              and more like being taken care of.
            </p>
            <ul className="mt-8 space-y-3 text-ink-700">
              {[
                "Board-certified DDS with continuing education in laser & clear aligners",
                "Diamond 1% Invisalign Provider — a global top-tier tier of care",
                "iTero 5D digital scanning used at every visit",
                "Bilingual team, transparent pricing, and in-office membership plans",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="grid place-items-center h-6 w-6 rounded-full bg-teal-500 text-cream-50 flex-shrink-0 mt-0.5">
                    <Icon.Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                Meet Dr. Pombra
                <Icon.Arrow className="h-4 w-4" />
              </Link>
              <Link href="/team" className="btn-outline">Meet the Team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-x py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-5">
            <Icon.Sparkle className="h-3 w-3" />
            What to expect
          </div>
          <h2 className="h-section">
            Your first visit,<br />
            simplified.
          </h2>
          <p className="lede mt-6">
            No paperwork mountain, no surprises. Here's exactly what happens when you become a Pombra Dental patient.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              n: "01",
              title: "Book online",
              body: "Choose a time that works. We'll confirm within one business day and send everything you need beforehand.",
            },
            {
              n: "02",
              title: "Meet & scan",
              body: "iTero 5D scans replace goopy impressions. Dr. Pombra walks you through what she sees, in plain language.",
            },
            {
              n: "03",
              title: "A plan you love",
              body: "You leave with clear next steps, honest costs, and a team who's actually excited to see you again.",
            },
          ].map((step, i) => (
            <div
              key={step.n}
              className="relative rounded-3xl border border-teal-100 bg-white p-8 shadow-soft"
            >
              <div className="font-display text-6xl text-teal-500/20 leading-none">{step.n}</div>
              <h3 className="font-display text-2xl text-ink-900 mt-2">{step.title}</h3>
              <p className="text-ink-600 mt-3 leading-relaxed">{step.body}</p>
              {i < 2 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="grid place-items-center h-10 w-10 rounded-full bg-cream-50 border border-teal-100 text-teal-500">
                    <Icon.Arrow className="h-4 w-4" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL / TRUST */}
      <section className="relative overflow-hidden bg-teal-900 py-24 md:py-32 text-cream-100">
        <div className="absolute inset-0 bg-mesh-teal opacity-40" />
        <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay" />

        <div className="relative container-x grid lg:grid-cols-[1fr,1.2fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-400 mb-6">
              <Icon.Star className="h-3 w-3" />
              Loved by our community
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              A dental office people<br />
              actually recommend.
            </h2>
            <p className="text-cream-100/70 mt-6 text-lg leading-relaxed max-w-md">
              Our patients don't just show up — they send their family, their friends,
              their coworkers. Here's what they say.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                stars: 5,
                quote:
                  "Amazing office! Used to dread going to the dentist — but I found this office and it has changed my life. The staff is so patient and kind.",
                name: "Verified Patient",
                sub: "Google Review",
              },
              {
                stars: 5,
                quote:
                  "Dr. Pombra explained every step. I never felt rushed and the tech they use is genuinely impressive. Best dental visit I've had.",
                name: "Long-time Patient",
                sub: "Yelp Review",
              },
              {
                stars: 5,
                quote:
                  "My kids actually ask when we're going back. The team makes them feel comfortable and safe.",
                name: "Parent",
                sub: "HealthyStart Family",
              },
              {
                stars: 5,
                quote:
                  "Got Invisalign here and the results are unbelievable. The 3D scan was cool, no goop, and financing made it easy.",
                name: "Invisalign Patient",
                sub: "In-Office Plan Member",
              },
            ].map((t, i) => (
              <figure
                key={i}
                className="rounded-2xl border border-cream-100/10 bg-teal-800/50 backdrop-blur p-6 hover:border-gold-400/30 transition"
              >
                <div className="flex gap-0.5 text-gold-400 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Icon.Star key={i} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="text-cream-100/90 leading-relaxed text-sm">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-cream-100/10">
                  <div className="text-sm font-semibold text-cream-50">{t.name}</div>
                  <div className="text-xs text-cream-100/50 mt-0.5">{t.sub}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TEASER */}
      <section className="container-x py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow mb-5">
              <Icon.Shield className="h-3 w-3" />
              No insurance? No problem.
            </div>
            <h2 className="h-section">
              The Pombra Dental<br />
              In-Office Plan.
            </h2>
            <p className="lede mt-6">
              A simple annual membership that includes your regular cleanings, exams, x-rays,
              and 5D scans — plus 10% off most treatments. No waiting periods. No claims.
            </p>
            <Link href="/in-office-plan" className="btn-primary mt-8">
              See what's included
              <Icon.Arrow className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-3xl border-2 border-teal-100 bg-white p-8 shadow-soft">
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
                Adults
              </div>
              <div className="mt-3 font-display text-5xl text-teal-500">$435</div>
              <div className="text-xs text-ink-500 uppercase tracking-widest mt-1">per year</div>
              <ul className="mt-6 space-y-2 text-sm text-ink-700">
                <li className="flex gap-2"><Icon.Check className="h-4 w-4 text-teal-500 flex-shrink-0 mt-0.5" />2 cleanings & exams</li>
                <li className="flex gap-2"><Icon.Check className="h-4 w-4 text-teal-500 flex-shrink-0 mt-0.5" />X-rays & iTero scans</li>
                <li className="flex gap-2"><Icon.Check className="h-4 w-4 text-teal-500 flex-shrink-0 mt-0.5" />10% off other services</li>
                <li className="flex gap-2"><Icon.Check className="h-4 w-4 text-teal-500 flex-shrink-0 mt-0.5" />No waiting period</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-teal-500 text-cream-50 p-8 shadow-card sm:translate-y-6">
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold-400 font-semibold">
                Kids (Under 13)
              </div>
              <div className="mt-3 font-display text-5xl">$335</div>
              <div className="text-xs uppercase tracking-widest mt-1 opacity-70">per year</div>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex gap-2"><Icon.Check className="h-4 w-4 text-gold-400 flex-shrink-0 mt-0.5" />2 cleanings & exams</li>
                <li className="flex gap-2"><Icon.Check className="h-4 w-4 text-gold-400 flex-shrink-0 mt-0.5" />Pediatric-first team</li>
                <li className="flex gap-2"><Icon.Check className="h-4 w-4 text-gold-400 flex-shrink-0 mt-0.5" />10% off other services</li>
                <li className="flex gap-2"><Icon.Check className="h-4 w-4 text-gold-400 flex-shrink-0 mt-0.5" />Immediate coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
