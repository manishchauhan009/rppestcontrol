// app/ahmedabad-pest-control/page.jsx

import CitySeoPage from "@/components/city/CitySeoPage";

export const metadata = {
  title: "Pest Control in Ahmedabad | R.P. Pest Control",
  description:
    "R.P. Pest Control offers residential and commercial pest control services in Ahmedabad including termite treatment, rodent control, cockroach control and more.",
};

export default function AhmedabadPestControlPage() {
  return (
    <CitySeoPage
      city="Ahmedabad"
      nearbyAreas={[
        "SG Highway",
        "Bopal",
        "Satellite",
        "Naranpura",
        "Maninagar",
        "Nikol",
      ]}
      industrialAreas={[
        "Changodar",
        "Bavla Industrial Area",
        "Naroda GIDC",
        "Vatva GIDC",
      ]}
    />
  );
}
