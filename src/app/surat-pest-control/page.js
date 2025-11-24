// app/surat-pest-control/page.jsx

import CitySeoPage from "@/components/city/CitySeoPage";

export const metadata = {
  title: "Pest Control in Surat | R.P. Pest Control",
  description:
    "Get safe and effective pest control services in Surat for homes, apartments, textile units and commercial properties. Termite, rodent, cockroach, bedbug and more.",
};

export default function SuratPestControlPage() {
  return (
    <CitySeoPage
      city="Surat"
      nearbyAreas={[
        "Adajan",
        "Vesu",
        "Varachha",
        "Katargam",
        "Udhna",
        "Athwalines",
      ]}
      industrialAreas={[
        "Pandesara GIDC",
        "Sachin GIDC",
        "Hazira Industrial Area",
      ]}
    />
  );
}
