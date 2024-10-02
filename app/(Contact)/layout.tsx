import Footer from "@/components/layout/footer";
import HeaderNavbar from "@/components/layout/header";
import LenisScroll from "@/lib/scroll";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";

export const metadata: Metadata = {
  title: "Contact Us | ONX",
  description:
    "Get in touch with ONX by Awign. We're here to answer your questions and provide support for all your business needs.",
  keywords: [
    "ONX",
    "Awign",
    "contact",
    "support",
    "business services",
    "India",
  ],
  openGraph: {
    title: "Contact ONX by Awign",
    description:
      "Reach out to ONX by Awign for all your business inquiries and support needs.",
    url: "https://www.onx.com/contact",
    siteName: "ONX by Awign",
    images: [
      {
        url: "https://www.onx.com/og-image.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "ONX by Awign Contact Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ONX by Awign",
    description:
      "Get in touch with ONX by Awign for business support and inquiries.",
    images: ["https://www.onx.com/twitter-image.jpg"], // Replace with actual image URL
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
  verification: {
    google: "your-google-site-verification-code", // Replace with actual code
    yandex: "your-yandex-verification-code", // Replace with actual code if needed
  },
};
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <LenisScroll />
        <HeaderNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
