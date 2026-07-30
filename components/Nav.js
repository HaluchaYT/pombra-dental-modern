"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from "./Icons";

const services = [
  { name: "Invisalign", href: "/services/invisalign", desc: "Diamond 1% Provider" },
  { name: "Fotona Laser", href: "/services/fotona-laser", desc: "Advanced laser dentistry" },
  { name: "HealthyStart", href: "/services/healthystart", desc: "Pediatric wellness" },
  { name: "General Dentistry", href: "/services/general-dentistry", desc: "Preventive & restorative" },
];

const about = [
  { name: "Meet Dr. Pombra", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "In-Office Plan", href: "/in-office-plan" },
  { name: "Referring Offices", href: "/referring-offices" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "bg-cream-50/90 backdrop-blur border-b border-teal-100 shadow-sm"
          : "bg-cream-50/70 backdrop-blur"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="grid place-items-center h-11 w-11 rounded-full bg-teal-500 text-cream-50 shadow-soft group-hover:shadow-glow transition">
            <Icon.Tooth className="h-6 w-6" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl text-ink-900">Pombra Dental</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-gold-600 -mt-0.5">
              Excellence
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-ink-700 hover:text-teal-500 transition">
            Home
          </Link>

          <div className="group relative">
            <button className="text-sm font-medium text-ink-700 hover:text-teal-500 transition flex items-center gap-1">
              Services
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
              <div className="w-80 rounded-2xl border border-teal-100 bg-white shadow-card p-2">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-xl px-4 py-3 hover:bg-teal-50 transition"
                  >
                    <div className="text-sm font-semibold text-ink-900">{s.name}</div>
                    <div className="text-xs text-ink-500">{s.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="text-sm font-medium text-ink-700 hover:text-teal-500 transition flex items-center gap-1">
              About
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
              <div className="w-64 rounded-2xl border border-teal-100 bg-white shadow-card p-2">
                {about.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-ink-800 hover:bg-teal-50 hover:text-teal-600 transition"
                  >
                    {a.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/contact" className="text-sm font-medium text-ink-700 hover:text-teal-500 transition">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex btn-primary text-xs px-5 py-2.5">
            Book Visit
            <Icon.Arrow className="h-3.5 w-3.5" />
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="lg:hidden grid place-items-center h-11 w-11 rounded-full border border-teal-200 text-teal-600 hover:bg-teal-50 transition"
          >
            <Icon.Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-cream-50 shadow-2xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-teal-100 p-6">
            <div className="font-display text-xl text-ink-900">Menu</div>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid place-items-center h-10 w-10 rounded-full border border-teal-200 text-teal-600"
            >
              <Icon.Close className="h-5 w-5" />
            </button>
          </div>
          <div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-88px)]">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block text-lg font-display text-ink-900 hover:text-teal-500"
            >
              Home
            </Link>
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold-600 mb-3">
                Services
              </div>
              <div className="space-y-2">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 bg-white border border-teal-100 hover:bg-teal-50"
                  >
                    <div className="font-semibold text-ink-900">{s.name}</div>
                    <div className="text-xs text-ink-500">{s.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold-600 mb-3">
                About
              </div>
              <div className="space-y-1">
                {about.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 text-ink-800 hover:text-teal-500"
                  >
                    {a.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Book Your Visit
              <Icon.Arrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
