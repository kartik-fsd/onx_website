// app/case-studies/[id]/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Metadata } from "next";

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  content: {
    introduction: string;
    challenge: string;
    solution: string;
    results: string;
    conclusion: string;
  };
  authorInfo: {
    name: string;
    bio: string;
    image: string;
  };
  imageUrl: string;
}

async function getCaseStudy(id: string): Promise<CaseStudy> {
  // In a real application, you would fetch this data from an API or database
  return {
    id: "revolutionizing-workforce-management",
    title: "Revolutionizing Workforce Management with ONX Awign",
    category: "Workforce Solutions",
    author: "ONX Team",
    date: "April 15, 2024",
    content: {
      introduction:
        "In today's dynamic business environment, efficient workforce management is crucial for success. This case study explores how a leading e-commerce company partnered with ONX Awign to transform their workforce management, resulting in significant improvements in operational efficiency.",
      challenge:
        "The e-commerce company was struggling with outdated workforce management systems, leading to inefficiencies in scheduling, task allocation, and performance tracking. This resulted in increased costs, reduced productivity, and challenges in scaling operations to meet growing demand.",
      solution:
        "ONX Awign implemented its cutting-edge workforce management platform, tailored to the unique needs of the e-commerce industry. Key features included:\n\n- AI-driven scheduling optimization\n- Real-time task allocation and tracking\n- Performance analytics dashboard\n- Mobile app for on-the-go management",
      results:
        "Within six months of implementation, the e-commerce company experienced:\n\n- 40% improvement in operational efficiency\n- 25% reduction in labor costs\n- 30% increase in employee satisfaction\n- 50% faster response to demand fluctuations",
      conclusion:
        "The partnership between the e-commerce company and ONX Awign demonstrates the transformative power of innovative workforce management solutions. By leveraging AI and real-time data analytics, businesses can optimize their operations, reduce costs, and improve employee satisfaction, positioning themselves for sustainable growth in the competitive e-commerce landscape.",
    },
    authorInfo: {
      name: "Sarah Johnson",
      bio: "Sarah Johnson is a Senior Consultant at ONX Awign, specializing in workforce optimization for e-commerce and retail sectors. With over 15 years of experience, she has helped numerous companies transform their operations through innovative technology solutions.",
      image: "/api/placeholder/150/150",
    },
    imageUrl: "/api/placeholder/1000/500",
  };
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const caseStudy = await getCaseStudy(params.id);
  return {
    title: `${caseStudy.title} | ONX Awign Case Study`,
    description: caseStudy.content.introduction,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: { id: string };
}) {
  const caseStudy = await getCaseStudy(params.id);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Case Study Image */}
              <div className="relative h-64 sm:h-80 md:h-96">
                <Image
                  src={caseStudy.imageUrl}
                  alt={caseStudy.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 hover:opacity-75"
                />
              </div>
              <div className="p-6 sm:p-8">
                <Link
                  href={`/categories/${caseStudy.category.toLowerCase()}`}
                  className="text-blue-600 text-sm font-semibold uppercase tracking-wider"
                >
                  {caseStudy.category}
                </Link>
                <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  {caseStudy.title}
                </h1>
                <p className="mt-3 text-sm text-gray-500">
                  By{" "}
                  <Link
                    href={`/authors/${caseStudy.author
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    {caseStudy.author}
                  </Link>{" "}
                  | Published on {caseStudy.date}
                </p>

                <div className="mt-8 prose prose-blue max-w-none">
                  <p className="pb-3">{caseStudy.content.introduction}</p>

                  <p className="pb-3">{caseStudy.content.challenge}</p>

                  <p className="pb-3">{caseStudy.content.solution}</p>

                  <p className="pb-3">{caseStudy.content.results}</p>

                  <p className="pb-3">{caseStudy.content.conclusion}</p>
                </div>
              </div>
            </article>

            {/* Navigation */}
            <div className="mt-12 flex justify-between">
              <Link
                href="#"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>Previous Case Study</span>
              </Link>
              <Link
                href="#"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <span>Next Case Study</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Author Info */}
            <div className="mt-12 bg-white rounded-lg shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start">
              <Image
                src={caseStudy.authorInfo.image}
                alt={caseStudy.authorInfo.name}
                width={112}
                height={112}
                className="rounded-full shadow-md"
              />
              <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                <h3 className="text-xl font-semibold text-gray-900">
                  {caseStudy.authorInfo.name}
                </h3>
                <p className="mt-2 text-gray-600">{caseStudy.authorInfo.bio}</p>
                <div className="mt-4 flex justify-center sm:justify-start space-x-4">
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    <Facebook size={20} />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    <Instagram size={20} />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    <Twitter size={20} />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                About ONX Awign
              </h2>
              <p className="text-gray-600 mb-4">
                ONX Awign is a leading provider of innovative workforce
                management solutions, empowering businesses to optimize their
                operations and scale efficiently in the dynamic gig economy
                landscape.
              </p>
              <Link
                href="/about"
                className="block w-full text-center bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Related Case Studies
              </h2>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                  >
                    Optimizing Remote Work with ONX Awign Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                  >
                    Scaling Gig Economy Operations: A Success Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                  >
                    Transforming Talent Acquisition in the Digital Age
                  </Link>
                </li>
              </ul>
              <Link
                href="/case-studies"
                className="block w-full text-center bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded mt-6 hover:bg-gray-300 transition-colors duration-300"
              >
                View All Case Studies
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
