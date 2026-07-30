import Link from "next/link";
import { Icon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-teal-900 text-cream-100">
      <div className="absolute inset-0 bg-mesh-teal opacity-40" />
      <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay" />

      <div className="relative container-x pt-20 pb-10">
        {/* CTA banner */}
        <div className="mb-16 rounded-3xl border border-cream-100/10 bg-gradient-to-br from-teal-800 to-teal-700 p-10 md:p-14">
          <div className="grid md:grid-cols-[1.4fr,1fr] items-center gap-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-400 mb-5">
                <Icon.Sparkle className="h-3 w-3" />
                Ready when you are
              </div>
              <h3 className="font-display text-3xl md:text-4xl leading-tight mb-4">
                Your best smile is one visit away.
              </h3>
              <p className="text-cream-100/70 max-w-lg">
                Book online in under a minute — new patients always welcome, and same-week appointments are usually available.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3">
              <a href="tel:6508734776" className="btn-primary justify-center">
                <Icon.Phone className="h-4 w-4" />
                (650) 873-4776
              </a>
              <Link href="/contact" className="btn-outline justify-center bg-transparent border-cream-100/30 text-cream-100 hover:bg-cream-100/10 hover:border-cream-100">
                Book Online
                <Icon.Arrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="grid place-items-center h-11 w-11 rounded-full bg-gold-500 text-teal-900">
                <Icon.Tooth className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-xl text-cream-50">Pombra Dental</div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-gold-400">
                  Excellence
                </div>
              </div>
            </Link>
            <p className="text-sm text-cream-100/60 italic">
              Amazing smiles. Pampered care.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/drhemapombra"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid place-items-center h-10 w-10 rounded-full border border-cream-100/20 hover:border-gold-400 hover:text-gold-400 transition"
              >
                <Icon.Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@pombradental"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="grid place-items-center h-10 w-10 rounded-full border border-cream-100/20 hover:border-gold-400 hover:text-gold-400 transition"
              >
                <Icon.TikTok className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold-400 mb-4">
              Services
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services/invisalign" className="text-cream-100/70 hover:text-cream-50">Invisalign</Link></li>
              <li><Link href="/services/fotona-laser" className="text-cream-100/70 hover:text-cream-50">Fotona Laser</Link></li>
              <li><Link href="/services/healthystart" className="text-cream-100/70 hover:text-cream-50">HealthyStart</Link></li>
              <li><Link href="/services/general-dentistry" className="text-cream-100/70 hover:text-cream-50">General Dentistry</Link></li>
              <li><Link href="/in-office-plan" className="text-cream-100/70 hover:text-cream-50">In-Office Plan</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold-400 mb-4">
              Practice
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-cream-100/70 hover:text-cream-50">Meet Dr. Pombra</Link></li>
              <li><Link href="/team" className="text-cream-100/70 hover:text-cream-50">Our Team</Link></li>
              <li><Link href="/referring-offices" className="text-cream-100/70 hover:text-cream-50">Referring Offices</Link></li>
              <li><Link href="/contact" className="text-cream-100/70 hover:text-cream-50">Contact</Link></li>
              <li><Link href="/disclaimer" className="text-cream-100/70 hover:text-cream-50">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold-400 mb-4">
              Visit Us
            </div>
            <address className="not-italic space-y-3 text-sm text-cream-100/80">
              <div className="flex gap-3">
                <Icon.Map className="h-4 w-4 mt-0.5 flex-shrink-0 text-gold-400" />
                <div>
                  1252 El Camino Real, Ste B<br />
                  San Bruno, CA 94066
                </div>
              </div>
              <div className="flex gap-3">
                <Icon.Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-gold-400" />
                <div>
                  <a href="tel:6508734776" className="hover:text-cream-50 block">(650) 873-4776</a>
                  <span className="text-cream-100/50 text-xs">Fax (650) 873-4790</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon.Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-gold-400" />
                <a href="mailto:drhemapombra@gmail.com" className="hover:text-cream-50 break-all">
                  drhemapombra@gmail.com
                </a>
              </div>
              <div className="flex gap-3">
                <Icon.Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-gold-400" />
                <div>
                  Mon – Thu · 8:30a – 5:30p<br />
                  <span className="text-cream-100/50">Fri – Sun · Closed</span>
                </div>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream-100/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream-100/50">
          <div>
            © {new Date().getFullYear()} Pombra Dental Excellence · All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>ADA</span>
            <span>·</span>
            <span>CDA</span>
            <span>·</span>
            <span>San Mateo Dental Society</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
