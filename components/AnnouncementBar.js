import { Icon } from "./Icons";

export default function AnnouncementBar() {
  return (
    <div className="bg-teal-900 text-cream-100 text-xs">
      <div className="container-x flex flex-wrap items-center justify-between gap-3 py-2.5">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Icon.Clock className="h-3.5 w-3.5 text-gold-400" />
            <span>Mon–Thu · 8:30a – 5:30p</span>
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Icon.Map className="h-3.5 w-3.5 text-gold-400" />
            <span>San Bruno, CA</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:6508734776"
            className="flex items-center gap-1.5 font-medium hover:text-gold-400 transition"
          >
            <Icon.Phone className="h-3.5 w-3.5" />
            <span>(650) 873-4776</span>
          </a>
          <span className="hidden md:inline text-cream-100/60">|</span>
          <span className="hidden md:inline text-cream-100/80">
            New patients welcome
          </span>
        </div>
      </div>
    </div>
  );
}
