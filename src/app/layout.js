// app/layout.jsx
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const siteUrl = "https://rppestcontrol.in";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "R.P. Pest Control – Govt Approved & ISO Certified | Gujarat",
    template: "%s | R.P. Pest Control",
  },
  description:
    "R.P. Pest Control provides professional pest control services across Gujarat including Vapi, Surat, Ahmedabad, Vadodara and Rajkot. Govt approved, ISO 9001:2015 certified – termites, rodents, cockroaches, honey bees, wood borers and more.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "R.P. Pest Control – Professional Pest Control Across Gujarat",
    description:
      "Safe, reliable pest control services for homes, societies, factories and offices across Gujarat. Termites, rodents, cockroaches, honey bees and more.",
    siteName: "R.P. Pest Control",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "R.P. Pest Control technician performing pest treatment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "R.P. Pest Control – Gujarat",
    description:
      "Professional pest control services across Gujarat – residential, commercial and industrial.",
    images: ["/images/og-cover.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "pest control",
    "pest control Gujarat",
    "pest control Vapi",
    "termite control",
    "cockroach control",
    "rodent control",
    "industrial pest control",
    "R.P. Pest Control",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "R.P. Pest Control",
              url: siteUrl,
              image: `${siteUrl}/images/og-cover.jpg`,
              description:
                "Government approved and ISO 9001:2015 certified pest control company providing services across Gujarat.",
              telephone: "+91-98249-31033",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vapi",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Gujarat",
              },
              sameAs: [],
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
