import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import "../globals.css";
import HeaderNavbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LenisScroll from "@/lib/scroll";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.onxwork.com"),
  title: {
    default: "ONX - India's Leading B2B Field Service Marketplace",
    template: "%s | ONX",
  },
  description:
    "ONX is India's premier B2B service marketplace, offering scalable onboarding and installation solutions for businesses in retail, telecom, logistics, and more.",
  generator: "Next.js",
  applicationName: "ONX",
  referrer: "origin-when-cross-origin",
  keywords: [
    "B2B service marketplace",
    "field service management",
    "onboarding services",
    "installation services",
    "scalable workforce solutions",
    "business operations optimization",
    "technician deployment",
    "gig economy platform",
    "on-demand staffing",
    "B2B workforce management",
    "Indian business services",
    "enterprise installation solutions",
  ],
  authors: [{ name: "Kartik Shettar" }],
  creator: "Kartik Shettar",
  publisher: "ONX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.onxwork.com/",
    siteName: "ONX",
    title:
      "ONX - Leading B2B Field Service Marketplace For Scalable Workforce Solutions",
    description:
      "ONX provides scalable onboarding and installation services for businesses across retail, telecom, and logistics industries in India.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/b51318b7-b743-4249-b4d7-8c0f1ddd8b68.jpg",
        width: 1200,
        height: 675,
        alt: "ONX - B2B Service Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@onxwork",
    creator: "@KartikShettar",
    title:
      "ONX - Leading B2B Field Service Marketplace For Scalable Workforce Solutions",
    description:
      "ONX provides scalable onboarding and installation services for businesses across retail, telecom, and logistics industries in India.",
    images: [
      "https://opengraph.b-cdn.net/production/images/b51318b7-b743-4249-b4d7-8c0f1ddd8b68.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={montserrat.className}>
        <LenisScroll />
        <HeaderNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
