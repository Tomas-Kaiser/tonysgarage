import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tony's Garage | Car Repairs & Servicing in Wicklow Town",
  description:
    "Honest car repairs, servicing and NCT preparation in Wicklow Town for over 48 years. Brakes, clutches, engines, gearboxes, suspension and full diagnostics on all makes and models.",
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IE" className={`${inter.variable} ${oswald.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
