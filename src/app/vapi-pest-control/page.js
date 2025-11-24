// app/vapi-pest-control/page.jsx

import CitySeoPage from "@/components/city/CitySeoPage";

export const metadata = {
  title: "Pest Control in Vapi | R.P. Pest Control",
  description:
    "R.P. Pest Control provides professional pest control services in Vapi for homes, flats, societies, factories and offices. Termites, rodents, cockroaches, honey bees and more.",
};

export default function VapiPestControlPage() {
  return (
    <CitySeoPage
      city="Vapi"
      nearbyAreas={["Vapi GIDC", "Sarigam", "Pardi", "Daman", "Chanod"]}
      industrialAreas={["Vapi GIDC", "Sarigam Industrial Area", "Nearby estates"]}
    />
  );
}
