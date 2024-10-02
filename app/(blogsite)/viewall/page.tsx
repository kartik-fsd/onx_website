import Container from "@/components/ui/container";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Loading from "@/components/ui/loading";

// Lazy load Archive component for better performance
const Archive = dynamic(() => import("./archive"), {
  suspense: true,
  loading: () => <Loading />,
});

// Define metadata for the View All page
export const metadata: Metadata = {
  title: "Archive | Onx - Gig Staffing Solutions",
  description:
    "Explore our complete collection of blog posts on gig staffing, telecalling, and more.",
  openGraph: {
    title: "Blog Archive | Onx - Gig Staffing Solutions",
    description:
      "Explore our complete collection of blog posts on gig staffing, telecalling, and more.",
    url: "https://www.onx.com/viewall",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archive | Onx - Gig Staffing Solutions",
    description:
      "Explore our complete collection of blog posts on gig staffing, telecalling, and more.",
  },
  alternates: {
    canonical: "https://www.onx.com/viewall",
  },
};

function ViewAll() {
  return (
    <Container className="relative">
      <header className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 lg:text-4xl lg:leading-snug">
          Blog Archive
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Explore our complete collection of blog posts on gig staffing,
          telecalling, and more.
        </p>
      </header>

      <Suspense fallback={<Loading />}>
        <Archive />
      </Suspense>
    </Container>
  );
}

export default ViewAll;
