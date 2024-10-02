"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRightIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PhoneArrowUpRightIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import BlurFade from "../magicui/blur-fade";

const solutions = [
  {
    icon: ChartPieIcon,
    title: "Gig-Staffing",
    description:
      "Access a flexible and scalable workforce tailored to your business needs, allowing you to adapt quickly and efficiently to market demands.",
    link: "#",
  },
  {
    icon: CursorArrowRaysIcon,
    title: "Promoter Deployment",
    description:
      "Boost brand engagement with professional promoters who connect with your target audience and drive impactful in-store and field marketing campaigns.",
    link: "#",
  },
  {
    icon: FingerPrintIcon,
    title: "Audit",
    description:
      "Ensure compliance and operational accuracy with detailed audit services that provide insights and safeguard your business processes.",
    link: "#",
  },
  {
    icon: PhoneArrowUpRightIcon,
    title: "Telecalling",
    description:
      "Enhance your customer outreach with professional telecalling services designed to generate leads, drive sales, and build customer loyalty.",
    link: "#",
  },
  {
    icon: ArrowPathIcon,
    title: "Onboarding",
    description:
      "Simplify and expedite your merchant and seller onboarding process with streamlined solutions that enhance efficiency and compliance.",
    link: "#",
  },
];

export default function Solutions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-6 px-8 md:px-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <BlurFade delay={0.2} inView>
            <h1 className="text-2xl font-semibold text-indigo-800 capitalize lg:text-3xl dark:text-white">
              Explore our solutions
            </h1>

            <div className="mt-2">
              <span className="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-orange-400 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-orange-400 rounded-full"></span>
            </div>
          </BlurFade>
        </div>
        {/* Flexbox Container */}
        <div className="flex flex-wrap justify-center gap-10 space-x-6">
          {solutions.map((solution, index) => (
            <BlurFade key={index} delay={0.22 + index * 0.05} inView>
              <motion.div
                className="relative group bg-white p-8 shadow-lg rounded-xl overflow-hidden flex flex-col items-center h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.09 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                style={{
                  flexBasis: "calc(33.333% - 16px)",
                  flexGrow: 1,
                  flexShrink: 1,
                  maxWidth: "330px",
                }}
              >
                {/* Background Decorative Shape */}
                <div className="absolute -top-8 -right-8 bg-gradient-to-br from-[#2D348D] to-[#ec5c24] rounded-full w-36 h-36 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                {/* Icon with Animation */}
                <motion.div
                  className="relative w-16 h-16 mb-6 bg-[#2D348D] rounded-full flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                >
                  <solution.icon className="w-8 h-8 text-white" />
                </motion.div>
                {/* Title and Description */}
                <h3 className="text-2xl font-semibold text-[#2D348D] mb-4 text-center">
                  {solution.title}
                </h3>
                <p className="text-gray-700 mb-6 text-center flex-grow">
                  {solution.description}
                </p>
                {/* Read More Link */}
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.a
                    href={solution.link}
                    className="inline-flex items-center text-[#ec5c24] font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.span
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRightIcon className="w-4 h-4 ml-1" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.a>
                </motion.div>
                {/* Bottom Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D348D] to-[#ec5c24]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
