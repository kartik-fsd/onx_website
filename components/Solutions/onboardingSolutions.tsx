"use client";
import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Solution } from "@/app/assets/data/onboardSolutions";

// Define the Solution interface
interface OnxSolutionsProps {
  solutions: Solution[];
  service: string;
}

// Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "default" | "outline";
  size?: "icon" | "default";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    const variantStyles = {
      default: "bg-indigo-600 text-white hover:bg-indigo-700",
      ghost: "hover:bg-gray-100 hover:text-gray-900",
      outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    };
    const sizeStyles = size === "icon" ? "h-10 w-10" : "h-10 px-4 py-2";

    return (
      <button
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// SolutionCard component
interface SolutionCardProps {
  solution: Solution;
  isActive: boolean;
  onClick: () => void;
}

const SolutionCard: React.FC<SolutionCardProps> = React.memo(
  ({ solution, isActive, onClick }) => {
    const IconComponent = LucideIcons[solution.icon] as React.ComponentType<{
      className?: string;
    }>;
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer",
          isActive && "ring-2 ring-offset-2 ring-indigo-500"
        )}
        onClick={onClick}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-90`}
        />
        <div className="relative p-6">
          <IconComponent className="text-white w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">
            {solution.name}
          </h3>
          <p className="text-white text-opacity-80 text-sm mb-4">
            {solution.categories.join(", ")}
          </p>
          <div className="absolute bottom-4 right-4">
            <ChevronRight className="text-white w-6 h-6" />
          </div>
        </div>
      </motion.div>
    );
  }
);
SolutionCard.displayName = "SolutionCard";

// SolutionDetails component
interface SolutionDetailsProps {
  solution: Solution;
  onLearnMore: () => void;
}

const SolutionDetails: React.FC<SolutionDetailsProps> = React.memo(
  ({ solution, onLearnMore }) => {
    const IconComponent = LucideIcons[solution.icon] as React.ComponentType<{
      className?: string;
    }>;
    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-8 rounded-2xl shadow-xl h-full"
      >
        <div className="flex items-center mb-6">
          <div
            className={`bg-gradient-to-br ${solution.color} p-4 rounded-full mr-6`}
          >
            <IconComponent className="text-white w-10 h-10" />
          </div>
          <h3 className="text-3xl font-bold text-indigo-900">
            {solution.name} Service
          </h3>
        </div>
        <p className="text-lg text-gray-600 mb-8">{solution.description}</p>
        <h4 className="text-2xl font-semibold text-indigo-800 mb-6">
          Key Features:
        </h4>
        <ul className="space-y-4">
          {solution.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start bg-gray-50 p-4 rounded-lg transition-all duration-200 hover:bg-gray-100"
            >
              <Check
                className={cn(
                  `text-${solution.color.split(" ")[0]?.split("-")[1]}-500`,
                  "w-6 h-6 mr-3 flex-shrink-0 mt-1"
                )}
              />
              <span className="text-indigo-800 font-medium">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Button
            variant="outline"
            className="w-full text-md px-8 py-4 flex items-center justify-center"
            onClick={onLearnMore}
          >
            Learn More About {solution.name} Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </motion.div>
    );
  }
);
SolutionDetails.displayName = "SolutionDetails";

// Main OnxSolutions component
const OnxSolutions: React.FC<OnxSolutionsProps> = ({ solutions, service }) => {
  const [activeSolution, setActiveSolution] = useState<Solution | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (solutions && solutions.length > 0) {
      setActiveSolution(solutions[0]);
    }
  }, [solutions]);

  const handleLearnMore = useCallback(() => {
    if (activeSolution) {
      // Use the slug if it exists, otherwise create one from the name
      const urlSlug =
        activeSolution.slug ||
        activeSolution.name
          .toLowerCase()
          .replace(/\s+/g, "-") // Replace spaces with hyphens
          .replace(/[^\w\-]+/g, "") // Remove all non-word chars
          .replace(/\-\-+/g, "-") // Replace multiple hyphens with single hyphen
          .replace(/^-+/, "") // Trim hyphens from start of text
          .replace(/-+$/, ""); // Trim hyphens from end of text

      router.push(`/industry/${urlSlug}`);
    }
  }, [router, activeSolution]);
  if (!solutions || solutions.length === 0) {
    return <div>No Service available.</div>;
  }

  return (
    <div className="px-10 py-6 mx-auto max-w-7xl sm:px-14 lg:px-16 lg:py-8 bg-indigo-50">
      <div className="max-w-2xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-indigo-900 uppercase rounded-full bg-orange-400">
            {service}
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
          {service} service for Every Industry
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Discover our comprehensive range of {service} services tailored for
          various industries.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AnimatePresence>
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.name}
                solution={solution}
                isActive={activeSolution === solution}
                onClick={() => setActiveSolution(solution)}
              />
            ))}
          </AnimatePresence>
        </div>
        <div className="lg:w-1/2">
          <AnimatePresence mode="wait">
            {activeSolution && (
              <SolutionDetails
                key={activeSolution.name}
                solution={activeSolution}
                onLearnMore={handleLearnMore}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default OnxSolutions;

// import React, { useState, useEffect } from "react";
// import {
//   ShoppingBag,
//   Building2,
//   Utensils,
//   Car,
//   Truck,
//   ChevronRight,
//   Users,
// } from "lucide-react";
// import {
//   BuildingOffice2Icon,
//   ShoppingCartIcon,
// } from "@heroicons/react/24/outline";

// const solutions = [
//   {
//     category: "Ecommerce",
//     icon: <ShoppingCartIcon className="h-8 w-8" />,
//     items: ["Seller", "Merchant"],
//     description:
//       "Streamline your online business operations with our tailored ecommerce solutions.",
//     benefits: [
//       "Increased sales",
//       "Improved customer experience",
//       "Efficient inventory management",
//     ],
//     customerCount: 1500,
//   },
//   {
//     category: "BFSI",
//     icon: <BuildingOffice2Icon className="h-8 w-8" />,
//     items: ["SME", "Selling"],
//     description:
//       "Empower your financial services with our robust BFSI{service} service.",
//     benefits: [
//       "Faster onboarding process",
//       "Enhanced security",
//       "Regulatory compliance",
//     ],
//     customerCount: 800,
//   },
//   {
//     category: "Hospitality",
//     icon: <Utensils className="h-8 w-8" />,
//     items: ["Hotel", "Restaurant", "Cafe"],
//     description:
//       "Enhance guest experiences with our comprehensive hospitality management tools.",
//     benefits: [
//       "Improved guest satisfaction",
//       "Streamlined operations",
//       "Increased revenue",
//     ],
//     customerCount: 2000,
//   },
//   {
//     category: "Mobility",
//     icon: <Car className="h-8 w-8" />,
//     items: ["Auto", "Cab", "Moto"],
//     description:
//       "Revolutionize your transportation services with our cutting-edge mobility solutions.",
//     benefits: [
//       "Optimized routes",
//       "Real-time tracking",
//       "Enhanced rider safety",
//     ],
//     customerCount: 1200,
//   },
//   {
//     category: "Logistics",
//     icon: <Truck className="h-8 w-8" />,
//     items: ["Truck", "Large Vehicles", "Semi-Large Vehicles"],
//     description:
//       "Optimize your logistics operations with our efficient management systems.",
//     benefits: [
//       "Reduced operational costs",
//       "Improved delivery times",
//       "Enhanced supply chain visibility",
//     ],
//     customerCount: 950,
//   },
// ];

// const OnxSolutions = () => {
//   const [activeTab, setActiveTab] = useState("Ecommerce");
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [customerCount, setCustomerCount] = useState(0);

//   useEffect(() => {
//     const solution = solutions.find((s) => s.category === activeTab);
//     if (solution) {
//       let count = 0;
//       const interval = setInterval(() => {
//         count += Math.ceil(solution.customerCount / 100);
//         if (count >= solution.customerCount) {
//           clearInterval(interval);
//           setCustomerCount(solution.customerCount);
//         } else {
//           setCustomerCount(count);
//         }
//       }, 20);
//     }
//   }, [activeTab]);

//   const handleTabChange = (category: string) => {
//     setIsAnimating(true);
//     setActiveTab(category);
//     setTimeout(() => setIsAnimating(false), 300);
//   };

//   const activeSolution = solutions.find((s) => s.category === activeTab);

//   return (
//     <div className="w-full mx-auto py-8 px-12 bg-slate-50">
// <div className="max-w-2xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12">
//   <div>
//     <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-indigo-900 uppercase rounded-full bg-orange-400">
//       Onboarding
//     </p>
//   </div>
//   <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-indigo-900 sm:text-4xl md:mx-auto">
//     <span className="relative inline-block">
//       <svg
//         viewBox="0 0 52 24"
//         fill="currentColor"
//         className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-indigo-200 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
//       >
//         <defs>
//           <pattern
//             id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
//             x="0"
//             y="0"
//             width=".135"
//             height=".30"
//           >
//             <circle cx="1" cy="1" r=".7" />
//           </pattern>
//         </defs>
//         <rect
//           fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
//           width="52"
//           height="24"
//         />
//       </svg>
//       <span className="relative">Scalable</span>
//     </span>{" "}
//    {service} service for Every Industry
//   </h2>
//   <p className="text-base text-gray-700 md:text-lg">
//     At Onx by Onx, we specialize in providing seamless onboarding
//     services that meet the unique needs of diverse industries.
//   </p>
// </div>
//       <div className="flex flex-col md:flex-row gap-8">
//         <div className="md:w-1/3">
//           <div className="bg-white rounded-lg shadow-md p-4">
//             {solutions.map((solution) => (
//               <button
//                 key={solution.category}
//                 onClick={() => handleTabChange(solution.category)}
//                 className={`flex items-center w-full p-3 mb-2 rounded-md transition-all duration-300 ${
//                   activeTab === solution.category
//                     ? "bg-indigo-600 text-white"
//                     : "bg-gray-100 text-gray-600 hover:bg-indigo-100"
//                 }`}
//               >
//                 {solution.icon}
//                 <span className="ml-3 font-semibold">{solution.category}</span>
//                 {activeTab === solution.category && (
//                   <ChevronRight className="ml-auto h-5 w-5" />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//         <div
//           className={`md:w-2/3 transition-opacity duration-300 ${
//             isAnimating ? "opacity-0" : "opacity-100"
//           }`}
//         >
//           {activeSolution && (
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <div className="flex items-center text-gray-600 mb-4">
//                 {activeSolution.icon}
//                 <h3 className="text-2xl font-bold ml-3 text-indigo-800">
//                   {activeSolution.category} Solutions
//                 </h3>
//               </div>
//               <p className="text-gray-600 mb-6">{activeSolution.description}</p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <h4 className="text-lg font-semibold mb-2 text-indigo-700">
//                     Onboarding Options
//                   </h4>
//                   <ul className="list-disc pl-5 space-y-2">
//                     {activeSolution.items.map((item, index) => (
//                       <li key={index} className="text-gray-700">
//                         {item} Onboarding
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold mb-2 text-indigo-700">
//                     Key Benefits
//                   </h4>
//                   <ul className="list-disc pl-5 space-y-2">
//                     {activeSolution.benefits.map((benefit, index) => (
//                       <li key={index} className="text-gray-700">
//                         {benefit}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className="mt-8 flex items-center justify-center bg-indigo-100 rounded-lg p-4">
//                 <Users className="h-8 w-8 text-indigo-600 mr-3" />
//                 <div>
//                   <p className="text-sm text-indigo-800 font-semibold">
//                     Trusted by
//                   </p>
//                   <p className="text-3xl font-bold text-indigo-600">
//                     {customerCount.toLocaleString()}+
//                   </p>
//                   <p className="text-sm text-indigo-800">satisfied customers</p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OnxSolutions;
