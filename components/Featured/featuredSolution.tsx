"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PhoneArrowUpRightIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

interface Solution {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  color: string;
  bullets: string[];
  stats: { label: string; value: string }[];
}

const solutions: Solution[] = [
  {
    icon: ChartPieIcon,
    title: "Gig-Staffing Excellence",
    description:
      "Revolutionize your workforce management with ONX's cutting-edge gig-staffing solutions, designed to meet dynamic business needs across industries.",
    image:
      "https://images.unsplash.com/photo-1611680580904-7be8bb7a5e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80",
    color: "from-blue-400 to-indigo-600",
    bullets: [
      "Access to 1.5+ million skilled gig workers",
      "Reduce operational costs by up to 30%",
      "Achieve 95% faster deployment compared to traditional staffing",
    ],
    stats: [
      { label: "Gig Workers", value: "1.5M+" },
      { label: "Cost Reduction", value: "30%" },
      { label: "Faster Deployment", value: "95%" },
    ],
  },
  {
    icon: CursorArrowRaysIcon,
    title: "Strategic Promoter Deployment",
    description:
      "Elevate your brand presence with ONX's professional promoter network, driving impactful marketing campaigns and boosting customer engagement.",
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80",
    color: "from-green-400 to-teal-600",
    bullets: [
      "Pan-India coverage with 100,000+ trained promoters",
      "Increase brand visibility by up to 40%",
      "Achieve 25% higher conversion rates in promotional events",
    ],
    stats: [
      { label: "Trained Promoters", value: "100K+" },
      { label: "Brand Visibility Increase", value: "40%" },
      { label: "Higher Conversion Rates", value: "25%" },
    ],
  },
  {
    icon: FingerPrintIcon,
    title: "Precision Audit Services",
    description:
      "Ensure unparalleled compliance and operational accuracy with ONX's comprehensive audit solutions, tailored for businesses of all sizes.",
    image:
      "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80",
    color: "from-purple-400 to-pink-600",
    bullets: [
      "Conduct 1 million+ audits annually across 19,000+ pin codes",
      "Achieve 99.9% accuracy in audit reports",
      "Reduce audit turnaround time by 60%",
    ],
    stats: [
      { label: "Annual Audits", value: "1M+" },
      { label: "Accuracy Rate", value: "99.9%" },
      { label: "Faster Turnaround", value: "60%" },
    ],
  },
  {
    icon: PhoneArrowUpRightIcon,
    title: "Advanced Telecalling Solutions",
    description:
      "Maximize customer outreach and sales potential with ONX's state-of-the-art telecalling services, powered by AI and human expertise.",
    image:
      "https://images.unsplash.com/photo-1611680580904-7be8bb7a5e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80",
    color: "from-yellow-400 to-orange-600",
    bullets: [
      "Handle 5 million+ calls monthly with 10,000+ skilled agents",
      "Improve customer satisfaction scores by 35%",
      "Increase sales conversion rates by up to 20%",
    ],
    stats: [
      { label: "Monthly Calls", value: "5M+" },
      { label: "Customer Satisfaction Increase", value: "35%" },
      { label: "Sales Conversion Boost", value: "20%" },
    ],
  },
  {
    icon: ArrowPathIcon,
    title: "Streamlined Onboarding Process",
    description:
      "Accelerate your business growth with ONX's efficient merchant and seller onboarding solutions, designed for speed and accuracy.",
    image:
      "https://images.unsplash.com/photo-1644132246573-bc75ce0a2946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80",
    color: "from-red-400 to-rose-600",
    bullets: [
      "Onboard 50,000+ merchants and sellers monthly",
      "Reduce onboarding time by 70% through automation",
      "Achieve 99% accuracy in documentation and verification",
    ],
    stats: [
      { label: "Monthly Onboardings", value: "50K+" },
      { label: "Time Reduction", value: "70%" },
      { label: "Verification Accuracy", value: "99%" },
    ],
  },
];

const SolutionsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % solutions.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === -1) {
        return prevIndex === 0 ? solutions.length - 1 : prevIndex - 1;
      }
      return (prevIndex + 1) % solutions.length;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden  bg-gradient-to-br from-indigo-50 to-white min-h-screen flex flex-col justify-center">
      <div id="solutions" className="container mx-auto max-w-7xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl  md:text-4xl font-bold text-indigo-900 capitalize text-center mb-2">
          Innovative Solutions by ONX
        </h1>
        <p className="text-lg sm:text-xl text-indigo-800 font-semibold text-center mb-6 sm:mb-8">
          Empowering businesses with cutting-edge workforce solutions
        </p>

        <div
          className="relative w-full max-w-5xl mx-auto"
          style={{ minHeight: "500px", height: "calc(100vh - 300px)" }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full sm:h-fit flex flex-col  lg:flex-row">
                <div
                  className="w-full lg:w-1/2 relative overflow-hidden"
                  style={{ minHeight: "300px" }}
                >
                  <motion.img
                    src={solutions[currentIndex].image}
                    alt={solutions[currentIndex].title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 7 }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${solutions[currentIndex].color} opacity-75`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center"
                    >
                      {React.createElement(solutions[currentIndex].icon, {
                        className: "w-8 h-8 sm:w-12 sm:h-12 text-indigo-600",
                      })}
                    </motion.div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <motion.h2
                      className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-700 mb-2 sm:mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {solutions[currentIndex].title}
                    </motion.h2>
                    <motion.p
                      className="text-sm font-medium sm:text-base lg:text-md text-gray-600 mb-4 sm:mb-6"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {solutions[currentIndex].description}
                    </motion.p>
                    <ul className="space-y-2 mb-4 sm:mb-6">
                      {solutions[currentIndex].bullets.map((bullet, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start text-sm sm:text-base text-gray-600"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                      {solutions[currentIndex].stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          className="text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-indigo-600">
                            {stat.value}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-500">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <motion.button
                      className="w-full px-4 sm:px-6 py-2 sm:py-3 text-white bg-indigo-600 rounded-full
                       hover:bg-indigo-700 transition-colors text-sm sm:text-base lg:text-lg font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-4 sm:mt-8">
          <button
            onClick={() => navigate(-1)}
            className="mx-2 p-2 sm:p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            aria-label="scroll-right"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={() => navigate(1)}
            className="mx-2 p-2 sm:p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            aria-label="scroll-right"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCarousel;
