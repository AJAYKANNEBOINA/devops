import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "WALKINS — India's #1 Walk-in Drive Platform | walkindrives.in",
    template: "%s | WALKINS — walkindrives.in",
  },
  description: "Find verified walk-in drives near you. India's only platform dedicated exclusively to walk-in hiring. Browse drives by city, role, and date.",
  keywords: ["walk-in drive", "walk-in jobs", "walkin jobs India", "fresher jobs", "IT jobs walkin", "walkindrives.in"],
  authors: [{ name: "WALKINS" }],
  creator: "WALKINS",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://walkindrives.in",
    siteName: "WALKINS",
    title: "WALKINS — India's #1 Walk-in Drive Platform",
    description: "Find verified walk-in drives near you. No job applications. Just show up and get hired.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WALKINS — India's #1 Walk-in Drive Platform",
    description: "Find verified walk-in drives near you.",
    creator: "@walkindrives",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/images/logo-walkins-icon.svg",
    shortcut: "/images/logo-walkins-icon.svg",
    apple: "/images/logo-walkins-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
