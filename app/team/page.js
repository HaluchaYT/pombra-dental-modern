import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Meet Our Team | Pombra Dental Excellence",
  description:
    "Meet the friendly, expert team behind Pombra Dental Excellence in San Bruno — Jessica, Guilla, Jaime, and Graciella.",
};

const team = [
  {
    name: "Dr. Hema Pombra",
    role: "Founding Dentist · DDS",
    img: "https://static.wixstatic.com/media/7173fc_ac9c0d0a435b4598b54feb7e9ca42ff2~mv2.jpg",
    bio: "Board-certified dentist, Diamond 1% Invisalign Provider, and Fotona-certified — Dr. Pombra founded the practice on a belief that great dentistry starts with genuine relationships.",
  },
  {
    name: "Jessica",
    role: "Office Manager",
    img: "https://static.wixstatic.com/media/7173fc_36e592cdfc6f487b9d12f52bc31d39db~mv2.jpg/v1/crop/x_30,y_60,w_450,h_476/fill/w_403,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0649%20(1).jpg",
    bio: "Handles billing and insurance inquiries — the person who makes sure things run smoothly. Bay Area native, mom, golfer, and cook.",
  },
  {
    name: "Guilla",
    role: "Office Manager",
    img: "https://static.wixstatic.com/media/7173fc_ace3667c8b7647d294d97bc2556fec00~mv2.jpg/v1/crop/x_0,y_326,w_2296,h_2426/fill/w_403,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ge-photo.jpg",
    bio: "Born and raised in the Bay Area, bilingual in English and Tagalog. Greets every patient warmly and helps navigate scheduling and treatment plans.",
  },
  {
    name: "Jaime",
    role: "Registered Dental Assistant",
    img: "https://static.wixstatic.com/media/7173fc_f57b589758b549f3b9f36989735e9da4~mv2.jpg/v1/crop/x_75,y_137,w_298,h_315/fill/w_403,h_426,al_c,lg_1,q_80,enc_avif,quality_auto/Jaime%20update%20pic.jpg",
    bio: "RDA-certified since 2007 and part of the Pombra Dental family for 17 years. A steady, expert presence chairside — always pursuing continuing education.",
  },
  {
    name: "Graciella",
    role: "Lead Dental Assistant",
    img: "https://static.wixstatic.com/media/7173fc_7da5ed2d8acc4542902ca71571d03fb7~mv2.jpg/v1/crop/x_94,y_0,w_2236,h_2364/fill/w_403,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/gc-photo.jpg",
    bio: "Three years at Pombra Dental and counting. An eager learner who prioritizes patient comfort above all — and a great concert-goer on the weekends.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="The Pombra Family"
        title="The people who make it feel like home."
        subtitle="A small, warm team you'll get to know by name. Every one of them is here because they genuinely love this work — and it shows."
      />

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m) => (
            <article
              key={m.name}
              className="group rounded-3xl overflow-hidden border border-teal-100 bg-white shadow-soft hover:shadow-card hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-cream-50 font-display text-2xl leading-tight">{m.name}</div>
                  <div className="text-xs uppercase tracking-[0.22em] text-gold-400 mt-1 font-semibold">
                    {m.role}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-ink-700 leading-relaxed">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA
        title="Come meet us in person."
        body="A first visit is on us — free consultation, no pressure. Just an easy way to see if we're the right fit for you."
      />
    </>
  );
}
