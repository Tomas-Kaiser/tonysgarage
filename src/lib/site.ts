export const site = {
  name: "Tony's Garage",
  town: "Wicklow Town",
  yearsExperience: 48,
  phoneDisplay: "086 254 5233",
  phoneHref: "tel:+353862545233",
  email: "donnellytony@hotmail.com",
  address: {
    line1: "Harbour Point, Strand St Upper",
    line2: "Wicklow, A67 YX52",
  },
  mapsQuery: "Tony's Garage, Harbour Point, Strand St Upper, Wicklow, A67 YX52",
  hours: [
    { days: "Monday – Friday", time: "8:00 – 17:00" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
  facebook: "https://www.facebook.com/p/Tonys-Garage-100008090689045/",
};

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export type ServiceIcon = "nct" | "brakes" | "oil" | "engine" | "suspension" | "battery";

export const services: { title: string; details: string; icon: ServiceIcon }[] = [
  {
    title: "NCT Prep & Servicing",
    details:
      "Full pre-NCT checks, emissions testing and routine servicing to keep your car roadworthy and compliant.",
    icon: "nct",
  },
  {
    title: "Brakes & Clutches",
    details:
      "Complete brake system repairs, clutch replacements, hydraulic checks and performance diagnostics.",
    icon: "brakes",
  },
  {
    title: "Oil & Filter Change",
    details:
      "Engine oil replacement using top-quality oils, plus oil, air and fuel filter changes to keep things efficient.",
    icon: "oil",
  },
  {
    title: "Engines & Gearboxes",
    details:
      "Engine diagnostics and repairs, timing belt replacement, and manual or automatic gearbox inspections and rebuilds.",
    icon: "engine",
  },
  {
    title: "Suspension",
    details:
      "Repair and replacement of shock absorbers, springs and bushings, with full suspension system diagnostics.",
    icon: "suspension",
  },
  {
    title: "Battery Service",
    details:
      "Testing, voltage checks and on-site fitting of new batteries, with proper disposal of the old one.",
    icon: "battery",
  },
];

export const highlights = [
  { value: `${site.yearsExperience}+`, label: "Years in Wicklow" },
  { value: "All", label: "Makes & models" },
  { value: "Petrol", label: "& diesel engines" },
  { value: "Full", label: "Diagnostic service" },
];

export const reviews = [
  {
    quote:
      "Struggled so hard to find a decent mechanic. Was advised to go to Tony’s garage, and took a chance. My car hasn’t felt as good to drive since I got it.",
    name: "Amy",
  },
  {
    quote:
      "I can't speak highly enough of Tony's Garage, extremely professional and friendly service. Simply the best I have ever had work done by.",
    name: "Bear",
  },
  {
    quote: "Tony is the best mechanic I've ever known. I can't recommend him highly enough.",
    name: "Alistair",
  },
  {
    quote: "Excellent service, fantastic staff. An absolute gem of a resource!",
    name: "Andrea",
  },
  {
    quote:
      "Tony is an absolute gentleman and a fantastic mechanic. Could not recommend him and his team more.",
    name: "Cormac",
  },
  {
    quote: "Amazing friendly service and great prices. I would recommend Tony's to everyone.",
    name: "Shauna",
  },
];
