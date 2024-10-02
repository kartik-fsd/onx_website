// app/case-studies/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - ONX Awign",
  description:
    "Explore how ONX Awign is revolutionizing workforce management through innovative solutions. Read our case studies on gig economy, remote work, and more.",
};

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  summary: string;
  imageUrl: string;
}

const CaseStudyCard: React.FC<CaseStudy> = ({
  id,
  title,
  category,
  author,
  date,
  summary,
  imageUrl,
}) => (
  <article
    className="flex flex-col shadow my-4"
    // initial={{ opacity: 0, y: 50 }}
    // animate={{ opacity: 1, y: 0 }}
    // transition={{ duration: 0.5 }}
  >
    <Link href={`/case-studies/${id}`}>
      <div className="hover:opacity-75">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={600}
          className="w-full h-64 object-cover"
        />
      </div>
    </Link>
    <div className="bg-white flex flex-col justify-start p-6">
      <Link
        href={`/categories/${category.toLowerCase()}`}
        className="text-blue-600 text-sm font-bold uppercase pb-4"
      >
        {category}
      </Link>
      <Link
        href={`/case-studies/${id}`}
        className="text-3xl font-bold hover:text-gray-700 pb-4"
      >
        {title}
      </Link>
      <p className="text-sm pb-3">
        By{" "}
        <Link
          href={`/authors/${author.toLowerCase().replace(" ", "-")}`}
          className="font-semibold hover:text-gray-800"
        >
          {author}
        </Link>
        , Published on {date}
      </p>
      <p className="pb-6">{summary}</p>
      <Link
        href={`/case-studies/${id}`}
        className="uppercase text-gray-800 hover:text-black flex items-center"
      >
        Read Case Study <ArrowRight className="ml-2" size={16} />
      </Link>
    </div>
  </article>
);

async function getCaseStudies(): Promise<CaseStudy[]> {
  // In a real application, you would fetch this data from an API or database
  return [
    {
      id: "revolutionizing-workforce-management",
      title: "Revolutionizing Workforce Management with ONX Awign",
      category: "Workforce Solutions",
      author: "ONX Team",
      date: "April 15, 2024",
      summary:
        "Discover how a leading e-commerce company improved operational efficiency by 40% using ONX Awign's innovative workforce management platform.",
      imageUrl: "/api/placeholder/800/600",
    },
    {
      id: "scaling-gig-economy-operations",
      title: "Scaling Gig Economy Operations: A Success Story",
      category: "Gig Economy",
      author: "ONX Team",
      date: "March 22, 2024",
      summary:
        "Learn how a food delivery startup leveraged ONX Awign to scale its gig workforce, resulting in a 50% increase in order fulfillment rates.",
      imageUrl: "/api/placeholder/800/600",
    },
    {
      id: "optimizing-remote-work",
      title: "Optimizing Remote Work with ONX Awign Solutions",
      category: "Remote Work",
      author: "ONX Team",
      date: "February 8, 2024",
      summary:
        "Explore how a global IT services provider enhanced remote work productivity by 30% through ONX Awign's cutting-edge management tools.",
      imageUrl: "/api/placeholder/800/600",
    },
  ];
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="container mx-auto flex flex-wrap py-6">
      {/* Header */}
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <h1
            className="font-bold text-indigo-800 uppercase hover:text-indigo-700 text-5xl"
            // initial={{ opacity: 0, y: -50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5 }}
          >
            ONX Awign Case Studies
          </h1>
          <p className="text-lg text-gray-600">
            Transforming Workforce Management
          </p>
        </div>
      </header>

      {/* Case Studies Section */}
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} {...study} />
        ))}

        {/* Pagination */}
        <div className="flex items-center py-8">
          <Link
            href="/case-studies?page=1"
            className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
          >
            1
          </Link>
          <Link
            href="/case-studies?page=2"
            className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
          >
            2
          </Link>
          <Link
            href="/case-studies?page=2"
            className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
          >
            Next <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>

      {/* Sidebar */}
      <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
        <div className="w-full bg-white shadow flex flex-col my-4 p-6">
          <h2 className="text-xl font-semibold pb-5">About ONX Awign</h2>
          <p className="pb-2">
            ONX Awign is a leading provider of innovative workforce management
            solutions, empowering businesses to optimize their operations and
            scale efficiently in the dynamic gig economy landscape.
          </p>
          <Link
            href="/about"
            className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
          >
            Learn More
          </Link>
        </div>

        <div className="w-full bg-white shadow flex flex-col my-4 p-6">
          <h2 className="text-xl font-semibold pb-5">Contact Us</h2>
          <p className="pb-2">
            Interested in how ONX Awign can transform your workforce management?
            Get in touch with our experts today.
          </p>
          <Link
            href="/contact"
            className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
          >
            Contact Us
          </Link>
        </div>
      </aside>
    </div>
  );
}
