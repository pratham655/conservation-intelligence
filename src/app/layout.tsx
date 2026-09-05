import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Conservation Impact Intelligence | Satellite-Driven Environmental Verification",
  description: "Advanced satellite-driven platform for measuring, monitoring, predicting, and verifying conservation and ecological recovery interventions across India.",
  keywords: [
    "Satellite Intelligence",
    "Environmental Intelligence",
    "Conservation Monitoring",
    "Environmental Recovery",
    "NDVI",
    "NDWI",
    "Earth Observation",
    "MoEFCC",
    "Explainable AI",
    "Ecological Integrity",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FBFBF8] text-[#14281D] selection:bg-[#B7E4C7] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
