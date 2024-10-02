// app/layout.tsx
import React from "react";
import { Metadata } from "next";
import HeaderNavbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "ONX Awign - Transforming Workforce Management",
    template: "%s | ONX Awign",
  },
  description:
    "ONX Awign provides innovative workforce management solutions, empowering businesses to optimize operations and scale efficiently in the dynamic gig economy.",
  keywords: ["ONX Awign", "workforce management", "gig economy", "remote work"],
  authors: [{ name: "ONX Team" }],
  creator: "ONX Awign",
  publisher: "ONX Awign",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.onxawign.com",
    siteName: "ONX Awign",
    images: [
      {
        url: "/api/placeholder/1200/630",
        width: 1200,
        height: 630,
        alt: "ONX Awign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@onxawign",
    creator: "@onxawign",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        <HeaderNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
