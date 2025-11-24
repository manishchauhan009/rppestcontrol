// app/rajkot-pest-control/page.jsx

import CitySeoPage from "@/components/city/CitySeoPage";

export const metadata = {
  title: "Pest Control in Rajkot | R.P. Pest Control",
  description:
    "Get reliable pest control in Rajkot for homes, shops, showrooms and industrial units. Termite, rodent, cockroach, ant and other pest control services.",
};

export default function RajkotPestControlPage() {
  return (
    <CitySeoPage
      city="Rajkot"
      nearbyAreas={[
        "Kalavad Road",
        "150 Feet Ring Road",
        "Mavdi",
        "Gondal Road",
        "University Road",
      ]}
      industrialAreas={["Shapar-Veraval", "Aji GIDC", "Metoda GIDC"]}
    />
  );
}
