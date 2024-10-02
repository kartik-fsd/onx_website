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
  generator: "Onx",
  applicationName: "Onx",
  referrer: "origin-when-cross-origin",
  title: "Onx -B2B Onboarding Automation | Cut Time by 50% ",
  description:
    "Efficient and scalable onboarding services tailored for B2B companies. Onx by Awign helps businesses streamline their onboarding processes with expert field teams",
  openGraph: {
    url: "https://www.onx.com/",
    title: "Onx -B2B Onboarding Automation | Cut Time by 50% ",
    description:
      "Efficient and scalable onboarding services tailored for B2B companies. Onx by Awign helps businesses streamline their onboarding processes with expert field teams",
    image:
      "https://opengraph.b-cdn.net/production/images/b51318b7-b743-4249-b4d7-8c0f1ddd8b68.jpg?token=HtS-tWUeTu8FEVCOwrTyzc65yauWN1UoVOTMAp8KmAU&height=675&width=1200&expires=33260672605",
    keywords: [
      "B2B field services",
      "onboarding services for businesses",
      " installation services in India",
      "scalable installation solutions",
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "onx.com",
    url: "https://www.onx.com/",
    title: "Onx -B2B Onboarding Automation | Cut Time by 50% ",
    description:
      "Efficient and scalable onboarding services tailored for B2B companies. Onx by Awign helps businesses streamline their onboarding processes with expert field teams",
    image:
      "https://opengraph.b-cdn.net/production/images/b51318b7-b743-4249-b4d7-8c0f1ddd8b68.jpg?token=HtS-tWUeTu8FEVCOwrTyzc65yauWN1UoVOTMAp8KmAU&height=675&width=1200&expires=33260672605",
  },
  creator: "Kartik Shettar",
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
