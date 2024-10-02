"use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useRouter } from "next/navigation";
// import {
//   Users,
//   Settings,
//   ArrowRight,
//   CheckCircle,
//   BarChart2,
// } from "lucide-react";

// export const Card = ({ className, children }) => {
//   return (
//     <div className={`rounded-lg shadow-md overflow-hidden ${className}`}>
//       {children}
//     </div>
//   );
// };

// export const CardContent = ({ className, children }) => {
//   return <div className={`p-4 ${className}`}>{children}</div>;
// };

// const services = [
//   {
//     title: "Onboarding Services",
//     icon: <Users className="w-16 h-16" />,
//     color: "from-blue-500 to-indigo-700",
//     description:
//       "Streamline your retail and merchant operations with our efficient onboarding process.",
//     features: [
//       "Automated documentation processing",
//       "Seamless system integration",
//       "Real-time progress tracking",
//       "Customizable workflows",
//     ],
//     stats: [
//       { label: "Clients Onboarded", value: "1,500+" },
//       { label: "Avg. Process Time", value: "24 hours" },
//       { label: "Satisfaction Rate", value: "98%" },
//     ],
//     route: "/onboarding",
//   },
//   {
//     title: "Installation Services",
//     icon: <Settings className="w-16 h-16" />,
//     color: "from-purple-500 to-pink-700",
//     description:
//       "Expert installation solutions tailored to your industry needs for optimal performance.",
//     features: [
//       "Skilled technician network",
//       "Quality assurance protocols",
//       "Flexible scheduling options",
//       "Post-installation support",
//     ],
//     stats: [
//       { label: "Installations Completed", value: "10,000+" },
//       { label: "On-time Completion", value: "99%" },
//       { label: "Support Satisfaction", value: "95%" },
//     ],
//     route: "/installation",
//   },
// ];

// const ProfessionalSplitScreenServices = () => {
//   const [activeService, setActiveService] = useState(0);
//   const router = useRouter();

//   const handleLearnMore = (route: string) => {
//     router.push(route);
//   };

//   return (
//     <div className="h-screen flex flex-col md:flex-row overflow-hidden bg-gray-900">
//       {services.map((service, index) => (
//         <motion.div
//           key={index}
//           className={`relative flex-1 flex items-center justify-center overflow-hidden cursor-pointer
//                       ${index === activeService ? "z-10" : "z-0"}
//                       bg-gradient-to-br ${service.color}`}
//           animate={{
//             flex: index === activeService ? 1.5 : 0.75,
//           }}
//           transition={{ duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] }}
//           onClick={() => setActiveService(index)}
//         >
//           <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="mb-6"
//             >
//               {service.icon}
//             </motion.div>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="text-5xl font-bold mb-4 text-center"
//             >
//               {service.title}
//             </motion.h2>

//             <AnimatePresence mode="wait">
//               {index === activeService && (
//                 <motion.div
//                   key={`content-${index}`}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.5 }}
//                   className="w-full max-w-4xl"
//                 >
//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                     className="text-center mb-8 text-xl leading-relaxed"
//                   >
//                     {service.description}
//                   </motion.p>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: 0.3 }}
//                       className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6"
//                     >
//                       <h3 className="text-2xl font-semibold mb-4">
//                         Key Features
//                       </h3>
//                       <ul className="space-y-3">
//                         {service.features.map((feature, idx) => (
//                           <motion.li
//                             key={idx}
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{
//                               duration: 0.5,
//                               delay: 0.4 + idx * 0.1,
//                             }}
//                             className="flex items-center"
//                           >
//                             <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
//                             <span className="text-lg">{feature}</span>
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </motion.div>

//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: 0.4 }}
//                       className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6"
//                     >
//                       <h3 className="text-2xl font-semibold mb-4">
//                         Performance Stats
//                       </h3>
//                       <div className="space-y-4">
//                         {service.stats.map((stat, idx) => (
//                           <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{
//                               duration: 0.5,
//                               delay: 0.5 + idx * 0.1,
//                             }}
//                             className="flex justify-between items-center"
//                           >
//                             <span className="text-lg">{stat.label}</span>
//                             <span className="text-3xl font-bold">
//                               {stat.value}
//                             </span>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   </div>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.6 }}
//                     className="flex justify-center"
//                   >
//                     <motion.button
//                       className="px-10 py-4 bg-white text-gray-900 rounded-full font-bold text-lg flex items-center hover:bg-opacity-90 transition-colors"
//                       whileHover={{
//                         scale: 1.05,
//                         boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => handleLearnMore(service.route)}
//                     >
//                       Learn More <ArrowRight className="ml-2 w-6 h-6" />
//                     </motion.button>
//                   </motion.div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default ProfessionalSplitScreenServices;
import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Settings,
  Check,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Service {
  title: string;
  icon: React.ElementType;
  description: string;
  solutions: string[];
  stats: { label: string; value: string }[];
  image: string;
  route: string;
  color: string;
}

const services: Service[] = [
  {
    title: "Onboarding Services",
    icon: Users,
    description:
      "Streamline your retail and merchant operations with our efficient onboarding process.",
    solutions: [
      "Instant Expert Onboarding Support",
      "Comprehensive Range of Onboarding Services",
      "On-Ground Professional Assistance",
    ],
    stats: [
      { label: "Faster Onboarding", value: "60%" },
      { label: "Customer Satisfaction", value: "95%" },
    ],
    image:
      "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/onboarding.jpg",
    route: "/onboarding-services",
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "Installation Services",
    icon: Settings,
    description:
      "Expert installation solutions tailored to your industry needs for optimal performance.",
    solutions: [
      "Skilled technician network",
      "Quality assurance protocols",
      "Post-installation support",
    ],
    stats: [
      { label: "On-time Completion", value: "98%" },
      { label: "Cost Savings", value: "30%" },
    ],
    image:
      "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/installation.jpg",
    route: "/installation-services",
    color: "from-yellow-400 to-orange-600",
  },
];

const UniqueServiceCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  const handleLearnMore = (route: string) => {
    router.push(route);
  };

  return (
    <div ref={ref} className="relative  py-12 px-4 sm:px-6 lg:px-8 realtive">
      <div
        className="absolute inset-0 -z-20 h-full w-full pattern-wavy pattern-indigo-300 pattern-bg-white 
  pattern-size-10 pattern-opacity-20"
      />

      <div className="max-w-6xl mx-auto" id="services">
        <h2 className="text-3xl font-extrabold text-center text-indigo-900 mb-6 z-10">
          Specialized Services We Offer
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2  relative overflow-hidden">
                  <Image
                    src={services[currentIndex].image}
                    alt={services[currentIndex].title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-xl md:rounded-l-xl md:rounded-t-none"
                    priority
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${services[currentIndex].color} opacity-75`}
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
                      {React.createElement(services[currentIndex].icon, {
                        className: "w-8 h-8 sm:w-12 sm:h-12 text-indigo-600",
                      })}
                    </motion.div>
                  </div>
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="flex items-center mb-6">
                    <div
                      className={`bg-gradient-to-br ${services[currentIndex].color} p-4 rounded-full mr-6`}
                    >
                      {React.createElement(services[currentIndex].icon, {
                        className: "text-white w-10 h-10",
                      })}
                    </div>

                    <h3 className="text-3xl font-bold text-indigo-900">
                      {services[currentIndex].title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {services[currentIndex].description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-2xl font-semibold text-indigo-800 mb-6">
                      Key Features:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {services[currentIndex].solutions.map(
                        (solution, index) => (
                          <li
                            key={index}
                            className="flex items-start bg-gray-50 p-4 rounded-lg transition-all duration-200 hover:bg-gray-100"
                          >
                            <Check
                              className={
                                "text-green-500 w-6 h-6 mr-3 flex-shrink-0 mt-1"
                              }
                            />
                            <span className="text-indigo-800 font-medium">
                              {solution}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {services[currentIndex].stats.map((stat, index) => (
                      <div key={index} className="bg-indigo-100 rounded-lg p-4">
                        <p className="text-2xl font-bold text-indigo-600">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    onClick={() =>
                      handleLearnMore(services[currentIndex].route)
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-indigo-600 text-white hover:bg-indigo-700 w-full h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Know More About Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-2 ${
                index === currentIndex ? "bg-indigo-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniqueServiceCarousel;
