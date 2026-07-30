import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Contact & Book | Pombra Dental Excellence — San Bruno",
  description:
    "Book your visit at Pombra Dental Excellence in San Bruno, CA. Call (650) 873-4776, email drhemapombra@gmail.com, or send a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Say hello"
        title="Let's get you on the schedule."
        subtitle="New patient? Overdue for a cleaning? Curious about Invisalign? Whatever brings you here, we'd love to hear from you."
      />

      <section className="container-x -mt-8 pb-24 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8">
          {/* Form card */}
          <div className="rounded-3xl border border-teal-100 bg-white p-8 md:p-10 shadow-card">
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold-600 font-semibold mb-2">
              Send a message
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-ink-900 mb-6">
              We reply within one business day.
            </h2>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-teal-100 bg-cream-50 px-4 py-3 text-ink-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-teal-100 bg-cream-50 px-4 py-3 text-ink-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-teal-100 bg-cream-50 px-4 py-3 text-ink-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border border-teal-100 bg-cream-50 px-4 py-3 text-ink-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">
                  I'm interested in
                </label>
                <select className="w-full rounded-xl border border-teal-100 bg-cream-50 px-4 py-3 text-ink-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition">
                  <option>New patient visit</option>
                  <option>Invisalign consultation</option>
                  <option>Fotona Laser treatment</option>
                  <option>HealthyStart (for my child)</option>
                  <option>General cleaning & exam</option>
                  <option>Cosmetic consultation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-teal-100 bg-cream-50 px-4 py-3 text-ink-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition resize-none"
                  placeholder="Tell us what you're looking for or when you'd like to come in."
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message
                <Icon.Arrow className="h-4 w-4" />
              </button>
              <p className="text-xs text-ink-500">
                By submitting this form, you agree to our privacy practices. We'll never share your info.
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-teal-500 text-cream-50 p-8 shadow-card">
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold-400 font-semibold mb-2">
                Fastest way to reach us
              </div>
              <a href="tel:6508734776" className="font-display text-4xl block hover:text-gold-400 transition">
                (650) 873-4776
              </a>
              <div className="text-cream-100/70 text-sm mt-2">
                Front desk answers Monday – Thursday
              </div>
            </div>

            {[
              {
                icon: <Icon.Map className="h-5 w-5" />,
                label: "Visit",
                lines: ["1252 El Camino Real, Suite B", "San Bruno, CA 94066"],
              },
              {
                icon: <Icon.Mail className="h-5 w-5" />,
                label: "Email",
                lines: ["drhemapombra@gmail.com"],
              },
              {
                icon: <Icon.Clock className="h-5 w-5" />,
                label: "Hours",
                lines: ["Mon – Thu · 8:30a – 5:30p", "Fri – Sun · Closed"],
              },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl bg-white border border-teal-100 p-6 shadow-soft">
                <div className="flex gap-4 items-start">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-teal-50 text-teal-600 flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
                      {c.label}
                    </div>
                    {c.lines.map((l) => (
                      <div key={l} className="text-ink-800 mt-1">{l}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/drhemapombra"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid place-items-center h-11 w-11 rounded-full bg-white border border-teal-100 text-teal-600 hover:bg-teal-500 hover:text-cream-50 shadow-soft transition"
              >
                <Icon.Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@pombradental"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="grid place-items-center h-11 w-11 rounded-full bg-white border border-teal-100 text-teal-600 hover:bg-teal-500 hover:text-cream-50 shadow-soft transition"
              >
                <Icon.TikTok className="h-5 w-5" />
              </a>
              <span className="text-sm text-ink-500 ml-2">Follow along on socials</span>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container-x pb-24">
        <div className="rounded-3xl overflow-hidden shadow-card border border-teal-100">
          <iframe
            src="https://www.google.com/maps?q=1252+El+Camino+Real,+San+Bruno,+CA+94066&output=embed"
            width="100%"
            height="440"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pombra Dental Excellence location"
          />
        </div>
      </section>
    </>
  );
}
