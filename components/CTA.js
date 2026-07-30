import Link from "next/link";
import { Icon } from "./Icons";

export default function CTA({
  title = "Ready to meet your dental team?",
  body = "Whether you're new to the area or overdue for a checkup, we make it easy — book in seconds or call our friendly front desk.",
}) {
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 p-10 md:p-16 shadow-card">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cream-50/10 blur-3xl" />

        <div className="relative grid md:grid-cols-[1.4fr,1fr] gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight mb-4">
              {title}
            </h2>
            <p className="text-cream-100/80 text-lg max-w-xl">{body}</p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3">
            <Link href="/contact" className="btn-primary bg-gold-500 hover:bg-gold-600 justify-center">
              Book Your Visit
              <Icon.Arrow className="h-4 w-4" />
            </Link>
            <a href="tel:6508734776" className="btn-outline border-cream-50/40 bg-transparent text-cream-50 hover:bg-cream-50/10 hover:border-cream-50 justify-center">
              <Icon.Phone className="h-4 w-4" />
              (650) 873-4776
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
