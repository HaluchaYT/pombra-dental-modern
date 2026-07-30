import { Icon } from "./Icons";

export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden bg-cream-100 pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="absolute inset-0 bg-mesh-teal opacity-60" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative container-x">
        {eyebrow && (
          <div className="eyebrow mb-6">
            <Icon.Sparkle className="h-3 w-3" />
            {eyebrow}
          </div>
        )}
        <h1 className="h-section max-w-4xl">{title}</h1>
        {subtitle && (
          <p className="lede mt-6 max-w-3xl">{subtitle}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
