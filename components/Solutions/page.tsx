"use client";
// import { useState } from "react";
// import {
//   ChevronDownIcon,
//   ShoppingCartIcon,
//   Building2,
//   UtensilsIcon,
//   CarIcon,
//   TruckIcon,
// } from "lucide-react";

// const solutions = [
//   {
//     category: "E-commerce",
//     icon: <ShoppingCartIcon className="h-6 w-6" />,
//     description: "Tailored solutions for sellers and merchants",
//     features: [
//       "Marketplace integration",
//       "Product listing automation",
//       "Order management",
//     ],
//     audience: "Sellers, Merchants",
//   },
//   {
//     category: "BFSI",
//     icon: <Building2 className="h-6 w-6" />,
//     description: "Streamlined onboarding for financial services",
//     features: [
//       "KYC automation",
//       "Secure digital onboarding",
//       "Loan application workflows",
//     ],
//     audience: "SMEs, Financial institutions",
//   },
//   {
//     category: "Hospitality",
//     icon: <UtensilsIcon className="h-6 w-6" />,
//     description: "Enhance guest experiences in hospitality",
//     features: [
//       "Mobile check-in/out",
//       "Staff training modules",
//       "Inventory management",
//     ],
//     audience: "Hotels, Restaurants, Cafes",
//   },
//   {
//     category: "Mobility",
//     icon: <CarIcon className="h-6 w-6" />,
//     description: "Accelerate transportation services",
//     features: [
//       "Driver verification",
//       "Route optimization",
//       "Passenger safety features",
//     ],
//     audience: "Auto, Cab, Moto businesses",
//   },
//   {
//     category: "Logistics",
//     icon: <TruckIcon className="h-6 w-6" />,
//     description: "Optimize supply chain operations",
//     features: [
//       "Driver & vehicle management",
//       "Load matching",
//       "Real-time tracking",
//     ],
//     audience: "Truck, Large Vehicles operators",
//   },
// ];

// export default function OnboardingSolutions() {
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

//   return (
//     <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
//           Solutions Provided by Awign
//         </h2>
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {solutions.map((solution) => (
//             <div
//               key={solution.category}
//               className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out"
//             >
//               <div className="px-4 py-5 sm:p-6">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
//                       {solution.icon}
//                     </div>
//                     <div className="ml-4">
//                       <h3 className="text-lg font-medium text-gray-900">
//                         {solution.category}
//                       </h3>
//                       <p className="mt-1 text-sm text-gray-500">
//                         {solution.description}
//                       </p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() =>
//                       setExpandedCategory(
//                         expandedCategory === solution.category
//                           ? null
//                           : solution.category
//                       )
//                     }
//                     className="ml-2 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     <ChevronDownIcon
//                       className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
//                         expandedCategory === solution.category
//                           ? "rotate-180"
//                           : ""
//                       }`}
//                     />
//                   </button>
//                 </div>
//                 {expandedCategory === solution.category && (
//                   <div className="mt-4">
//                     <h4 className="text-sm font-medium text-gray-900">
//                       Key Features:
//                     </h4>
//                     <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
//                       {solution.features.map((feature, index) => (
//                         <li key={index}>{feature}</li>
//                       ))}
//                     </ul>
//                     <h4 className="mt-3 text-sm font-medium text-gray-900">
//                       Target Audience:
//                     </h4>
//                     <p className="mt-1 text-sm text-gray-600">
//                       {solution.audience}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// import React from "react";
// import Image from "next/image";

// export const OnboardingSolutions = () => {
//   return (
//     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <h2 className="text-4xl font-bold text-center text-indigo-900 mb-12">
//         Solutions Provided by Awign
//       </h2>
//       <p className="text-lg text-center text-indigo-700 mb-8 max-w-2xl mx-auto">
//         Awign offers tailored onboarding solutions across various sectors. Our
//         specialized services span multiple industries, ensuring seamless
//         integration and operations.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Ecommerce - Seller/Merchant */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-center items-center mb-4">
//             <Image
//               src="/icons/ecommerce.svg" // Replace with the actual path to your image
//               alt="Ecommerce"
//               width={64}
//               height={64}
//               className="w-16 h-16"
//             />
//           </div>
//           <h3 className="text-xl font-semibold text-indigo-900 mb-2 text-center">
//             E-Commerce
//           </h3>
//           <p className="text-indigo-700 text-center">
//             Specialized onboarding for sellers and merchants in the E-commerce
//             sector. Our tailored solutions ensure a smooth process for digital
//             marketplaces.
//           </p>
//         </div>

//         {/* BFSI - SME/Selling */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-center items-center mb-4">
//             <Image
//               src="/icons/bfsi.svg" // Replace with the actual path to your image
//               alt="BFSI"
//               width={64}
//               height={64}
//               className="w-16 h-16"
//             />
//           </div>
//           <h3 className="text-xl font-semibold text-indigo-900 mb-2 text-center">
//             BFSI
//           </h3>
//           <p className="text-indigo-700 text-center">
//             Onboarding solutions designed for small and medium enterprises
//             (SMEs) and financial service providers. We help streamline
//             operations for BFSI sectors.
//           </p>
//         </div>

//         {/* Hospitality - Hotel/Restaurant/Cafe */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-center items-center mb-4">
//             <Image
//               src="/icons/hospitality.svg" // Replace with the actual path to your image
//               alt="Hospitality"
//               width={64}
//               height={64}
//               className="w-16 h-16"
//             />
//           </div>
//           <h3 className="text-xl font-semibold text-indigo-900 mb-2 text-center">
//             Hospitality
//           </h3>
//           <p className="text-indigo-700 text-center">
//             From hotels to cafes, our onboarding solutions cater to businesses
//             in the hospitality sector, ensuring operational efficiency and
//             seamless service.
//           </p>
//         </div>

//         {/* Mobility - Auto/Cab/Moto */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-center items-center mb-4">
//             <Image
//               src="/icons/mobility.svg" // Replace with the actual path to your image
//               alt="Mobility"
//               width={64}
//               height={64}
//               className="w-16 h-16"
//             />
//           </div>
//           <h3 className="text-xl font-semibold text-indigo-900 mb-2 text-center">
//             Mobility
//           </h3>
//           <p className="text-indigo-700 text-center">
//             Our solutions for the mobility sector streamline onboarding for
//             autos, cabs, and motorcycles, ensuring easy integration for
//             transportation services.
//           </p>
//         </div>

//         {/* Logistics - Trucks/Large Vehicles */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-center items-center mb-4">
//             <Image
//               src="/icons/logistics.svg" // Replace with the actual path to your image
//               alt="Logistics"
//               width={64}
//               height={64}
//               className="w-16 h-16"
//             />
//           </div>
//           <h3 className="text-xl font-semibold text-indigo-900 mb-2 text-center">
//             Logistics
//           </h3>
//           <p className="text-indigo-700 text-center">
//             Tailored solutions for logistics companies, facilitating the
//             onboarding of truck drivers and large vehicle operators for smooth
//             supply chain operations.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import {
  SearchIcon,
  ShoppingCartIcon,
  BuildingIcon,
  UtensilsIcon,
  CarIcon,
  TruckIcon,
  XIcon,
} from "lucide-react";

const solutions = [
  {
    id: 1,
    category: "E-commerce",
    icon: <ShoppingCartIcon className="h-6 w-6" />,
    description: "Tailored solutions for sellers and merchants",
    features: [
      "Marketplace integration",
      "Product listing automation",
      "Order management",
      "Analytics dashboard",
      "Inventory sync",
    ],
    audience: "Sellers, Merchants",
    benefits: [
      "Increase sales",
      "Streamline operations",
      "Enhance customer experience",
    ],
    color: "bg-blue-500",
  },
  {
    id: 2,
    category: "BFSI",
    icon: <BuildingIcon className="h-6 w-6" />,
    description: "Streamlined onboarding for financial services",
    features: [
      "KYC automation",
      "Secure digital onboarding",
      "Loan application workflows",
      "Risk assessment",
      "Compliance management",
    ],
    audience: "SMEs, Financial institutions",
    benefits: [
      "Reduce onboarding time",
      "Enhance security",
      "Improve customer satisfaction",
    ],
    color: "bg-green-500",
  },
  {
    id: 3,
    category: "Hospitality",
    icon: <UtensilsIcon className="h-6 w-6" />,
    description: "Enhance guest experiences in hospitality",
    features: [
      "Mobile check-in/out",
      "Staff training modules",
      "Inventory management",
      "Booking system integration",
      "Guest feedback analysis",
    ],
    audience: "Hotels, Restaurants, Cafes",
    benefits: [
      "Improve guest satisfaction",
      "Optimize operations",
      "Increase repeat business",
    ],
    color: "bg-yellow-500",
  },
  {
    id: 4,
    category: "Mobility",
    icon: <CarIcon className="h-6 w-6" />,
    description: "Accelerate transportation services",
    features: [
      "Driver verification",
      "Route optimization",
      "Passenger safety features",
      "Real-time tracking",
      "Automated dispatching",
    ],
    audience: "Auto, Cab, Moto businesses",
    benefits: ["Enhance safety", "Improve efficiency", "Boost customer trust"],
    color: "bg-red-500",
  },
  {
    id: 5,
    category: "Logistics",
    icon: <TruckIcon className="h-6 w-6" />,
    description: "Optimize supply chain operations",
    features: [
      "Driver & vehicle management",
      "Load matching",
      "Real-time tracking",
      "Digital documentation",
      "Performance analytics",
    ],
    audience: "Truck, Large Vehicles operators",
    benefits: [
      "Reduce operational costs",
      "Improve delivery times",
      "Enhance visibility",
    ],
    color: "bg-purple-500",
  },
];

export default function OnboardingSolutions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<
    (typeof solutions)[0] | null
  >(null);

  const categories = ["All", ...solutions.map((s) => s.category)];

  const filteredSolutions = solutions.filter(
    (solution) =>
      (selectedCategory ? solution.category === selectedCategory : true) &&
      (searchTerm
        ? solution.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          solution.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          solution.features.some((feature) =>
            feature.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          solution.audience.toLowerCase().includes(searchTerm.toLowerCase())
        : true)
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedSolution(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const renderSolutionCard = (
    solution: (typeof solutions)[0],
    isDetailed: boolean
  ) => (
    <div
      key={solution.id}
      className={`bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-all duration-300 ease-in-out ${
        isDetailed ? "" : "transform hover:-translate-y-1 cursor-pointer"
      }`}
      onClick={() => !isDetailed && setSelectedSolution(solution)}
    >
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center mb-4">
          <div className={`flex-shrink-0 ${solution.color} rounded-md p-3`}>
            {solution.icon}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">
              {solution.category}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{solution.description}</p>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900">Key Features:</h4>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
            {solution.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        {isDetailed && (
          <>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900">Benefits:</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                {solution.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900">
                Target Audience:
              </h4>
              <p className="text-sm text-gray-600">{solution.audience}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-indigo-900 uppercase rounded-full bg-orange-400">
            Onboarding
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-indigo-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-indigo-200 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Scalable</span>
          </span>{" "}
          Onboarding Solutions for Every Industry
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search solutions..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category === "All" ? null : category)
                }
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  (category === "All" && !selectedCategory) ||
                  category === selectedCategory
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSolutions.map((solution) =>
            renderSolutionCard(solution, !!selectedCategory)
          )}
        </div>
      </div>
      {selectedSolution && !selectedCategory && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full m-4">
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button
                onClick={() => setSelectedSolution(null)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              {renderSolutionCard(selectedSolution, true)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
