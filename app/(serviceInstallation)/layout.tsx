import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import HeaderNavbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "../globals.css";
import LenisScroll from "@/lib/scroll";

const montserrat = Montserrat({
  //weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.onx.com"),
  generator: "Next.js",
  applicationName: "ONX",
  referrer: "origin-when-cross-origin",
  title: {
    default: "ONX - Expert Installation Services Across India",
    template: "%s | ONX Installation Services",
  },
  description:
    "ONX by Awign delivers professional installation services across India. We specialize in technology setups, retail fixtures, and scalable installation solutions for businesses of all sizes.",
  keywords: [
    "installation services India",
    "B2B field services",
    "onsite installation",
    "technology setup services",
    "retail installations",
    "scalable installation solutions",
    "professional installers India",
    "business equipment installation",
    "nationwide installation services",
    "ONX by Awign",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.onxwork.com/",
    siteName: "ONX Installation Services",
    title: "ONX - Expert Installation Services Across India",
    description:
      "ONX by Awign delivers professional installation services across India. From technology setups to retail fixtures, we ensure seamless execution for businesses nationwide.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/b51318b7-b743-4249-b4d7-8c0f1ddd8b68.jpg",
        width: 1200,
        height: 675,
        alt: "ONX Installation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ONXInstall",
    creator: "@KartikShettar",
    title: "ONX - Expert Installation Services Across India",
    description:
      "ONX by Awign delivers professional installation services across India. From technology setups to retail fixtures, we ensure seamless execution for businesses nationwide.",
    images: [
      "https://opengraph.b-cdn.net/production/images/b51318b7-b743-4249-b4d7-8c0f1ddd8b68.jpg",
    ],
  },
  authors: [{ name: "Kartik Shettar" }],
  creator: "Kartik Shettar",
  publisher: "ONX by Awign",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Define the props for the RootLayout component
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
