// app/sitemap.js

export default function sitemap() {
  const baseUrl = "https://rppestcontrol.in";

  const staticRoutes = [
    "",
    "/services",
    "/why-us",
    "/process",
    "/testimonials",
    "/areas-we-serve",
    "/contact",
  ];

  const cityRoutes = [
    "/vapi-pest-control",
    "/surat-pest-control",
    "/ahmedabad-pest-control",
    "/vadodara-pest-control",
    "/rajkot-pest-control",
  ];

  const allRoutes = [...staticRoutes, ...cityRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.7,
  }));
}
