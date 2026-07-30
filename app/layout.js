import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

export const metadata = {
  title: "Pombra Dental Excellence | Amazing Smiles, Pampered Care — San Bruno, CA",
  description:
    "Modern dentistry in San Bruno, CA. Invisalign Diamond Provider, Fotona Laser, HealthyStart for kids, and gentle general dentistry with Dr. Hema Pombra.",
  keywords:
    "San Bruno dentist, Invisalign, Fotona Laser, HealthyStart, Dr. Pombra, cosmetic dentistry, laser dentistry",
  metadataBase: new URL("https://drpombra.com"),
  openGraph: {
    title: "Pombra Dental Excellence — San Bruno's Premier Dental Practice",
    description:
      "Amazing smiles. Pampered care. Elevated dentistry with modern laser technology and clear aligners.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>
        <AnnouncementBar />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
