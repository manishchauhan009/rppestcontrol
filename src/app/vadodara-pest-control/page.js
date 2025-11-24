// app/vadodara-pest-control/page.jsx

import CitySeoPage from "@/components/city/CitySeoPage";

export const metadata = {
  title: "Pest Control in Vadodara | R.P. Pest Control",
  description:
    "Professional pest control services in Vadodara for homes, societies, offices and industries. Termite, rodent, cockroach, mosquito and general pest management.",
};

export default function VadodaraPestControlPage() {
  return (
    <CitySeoPage
      city="Vadodara"
      nearbyAreas={[
        "Alkapuri",
        "Gotri",
        "Manjalpur",
        "Waghodia Road",
        "Karelibaug",
        "Akota",
      ]}
      industrialAreas={["Makarpura GIDC", "Por GIDC", "Savli GIDC"]}
    />
  );
}
