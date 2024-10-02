"use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

// interface Testimonial {
//   id: number;
//   name: string;
//   position: string;
//   company: string;
//   quote: string;
//   rating: number;
//   solution: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Priya Sharma",
//     position: "Head of HR",
//     company: "TechInnovate Solutions",
//     quote:
//       "Awign's ONX streamlined our onboarding process, reducing time-to-productivity by 40%. It's been a game-changer for our rapid growth.",
//     rating: 5,
//     solution: "Ecommerce",
//   },
//   {
//     id: 2,
//     name: "Rahul Patel",
//     position: "Operations Manager",
//     company: "SwiftLogistics",
//     quote:
//       "The customization options in ONX allowed us to create a seamless onboarding experience for our diverse driver network. Highly recommended!",
//     rating: 4,
//     solution: "Logistics",
//   },
//   {
//     id: 3,
//     name: "Anita Desai",
//     position: "Customer Success Lead",
//     company: "FintechPro",
//     quote:
//       "ONX by Awign simplified our complex compliance requirements. We've seen a 30% increase in onboarding completion rates since implementation.",
//     rating: 5,
//     solution: "BFSI",
//   },
//   // Add more testimonials as needed
// ];

// const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
//   testimonial,
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -50 }}
//     className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full"
//   >
//     <div className="flex-grow">
//       <div className="flex items-center justify-between mb-4">
//         <div>
//           <h3 className="font-bold text-lg text-gray-800">
//             {testimonial.name}
//           </h3>
//           <p className="text-gray-600">{testimonial.position}</p>
//           <p className="text-gray-500 text-sm">{testimonial.company}</p>
//         </div>
//         <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
//           {testimonial.solution} Solution
//         </span>
//       </div>
//       <div className="relative mb-4">
//         <Quote className="absolute top-0 left-0 w-8 h-8 text-indigo-200 -z-10" />
//         <p className="text-gray-700 italic pl-10">
//           &ldquo;{testimonial.quote}&rdquo;
//         </p>
//       </div>
//     </div>
//     <div className="flex justify-between items-center mt-4">
//       <div className="flex">
//         {[...Array(5)].map((_, i) => (
//           <Star
//             key={i}
//             className={`w-5 h-5 ${
//               i < testimonial.rating
//                 ? "text-yellow-400 fill-current"
//                 : "text-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   </motion.div>
// );

// const AwignONXTestimonials: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const testimonialsPerPage = 2;

//   const nextTestimonial = () => {
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex + 1) % (testimonials.length - testimonialsPerPage + 1)
//     );
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + testimonials.length - testimonialsPerPage + 1) %
//         (testimonials.length - testimonialsPerPage + 1)
//     );
//   };

//   useEffect(() => {
//     const timer = setInterval(nextTestimonial, 10000); // Auto-advance every 10 seconds
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="bg-gradient-to-br from-indigo-50 to-purple-100 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-2">
//           What Our Clients Say About ONX
//         </h2>
//         <p className="text-xl text-gray-600 text-center mb-12">
//           Discover how Awign ONX is transforming onboarding processes across
//           industries
//         </p>
//         <div className="relative">
//           <div className="flex justify-between items-center mb-8">
//             <button
//               onClick={prevTestimonial}
//               className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft className="w-6 h-6 text-indigo-600" />
//             </button>
//             <button
//               onClick={nextTestimonial}
//               className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight className="w-6 h-6 text-indigo-600" />
//             </button>
//           </div>
//           <div className="overflow-hidden">
//             <motion.div
//               className="flex transition-all duration-300 ease-in-out"
//               style={{
//                 transform: `translateX(-${
//                   currentIndex * (100 / testimonialsPerPage)
//                 }%)`,
//               }}
//             >
//               {testimonials.map((testimonial) => (
//                 <div
//                   key={testimonial.id}
//                   className="w-full sm:w-1/2 flex-shrink-0 px-4"
//                 >
//                   <TestimonialCard testimonial={testimonial} />
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AwignONXTestimonials;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

// interface Testimonial {
//   id: number;
//   name: string;
//   position: string;
//   company: string;
//   quote: string;
//   rating: number;
//   solution: string;
//   impact: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Priya Sharma",
//     position: "Head of HR",
//     company: "TechInnovate Solutions",
//     quote:
//       "Awign's ONX streamlined our onboarding process, reducing time-to-productivity significantly. It's been a game-changer for our rapid growth.",
//     rating: 5,
//     solution: "Ecommerce",
//     impact: "40% faster onboarding",
//   },
//   {
//     id: 2,
//     name: "Rahul Patel",
//     position: "Operations Manager",
//     company: "SwiftLogistics",
//     quote:
//       "The customization options in ONX allowed us to create a seamless onboarding experience for our diverse driver network. Highly recommended!",
//     rating: 4,
//     solution: "Logistics",
//     impact: "98% driver satisfaction",
//   },
//   {
//     id: 3,
//     name: "Anita Desai",
//     position: "Customer Success Lead",
//     company: "FintechPro",
//     quote:
//       "ONX by Awign simplified our complex compliance requirements. We've seen a significant increase in onboarding completion rates since implementation.",
//     rating: 5,
//     solution: "BFSI",
//     impact: "30% higher completion",
//   },
//   // Add more testimonials as needed
// ];

// const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
//   testimonial,
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -50 }}
//     className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg overflow-hidden shadow-lg"
//   >
//     <div className="p-6 relative">
//       <div className="absolute top-4 right-4">
//         <span className="text-xs font-semibold bg-white bg-opacity-20 text-white px-3 py-1 rounded-full">
//           {testimonial.solution}
//         </span>
//       </div>
//       <Quote className="text-white opacity-20 w-16 h-16 absolute top-6 left-6 -z-10" />
//       <p className="text-white text-lg italic mb-6 relative z-10">
//         "{testimonial.quote}"
//       </p>
//       <div className="flex justify-between items-end">
//         <div>
//           <h3 className="font-bold text-xl text-white">{testimonial.name}</h3>
//           <p className="text-indigo-200">{testimonial.position}</p>
//           <p className="text-indigo-200 text-sm">{testimonial.company}</p>
//         </div>
//         <div className="text-right">
//           <div className="flex mb-2 justify-end">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className={`w-5 h-5 ${
//                   i < testimonial.rating
//                     ? "text-yellow-400 fill-current"
//                     : "text-indigo-300"
//                 }`}
//               />
//             ))}
//           </div>
//           <span className="text-sm font-semibold text-indigo-200 bg-white bg-opacity-20 px-3 py-1 rounded-full">
//             {testimonial.impact}
//           </span>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// const AwignONXTestimonials: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   useEffect(() => {
//     const timer = setInterval(nextTestimonial, 8000); // Auto-advance every 8 seconds
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-2">
//           Client Success Stories
//         </h2>
//         <p className="text-xl text-gray-600 text-center mb-12">
//           See how Awign ONX is revolutionizing onboarding across industries
//         </p>
//         <div className="relative">
//           <AnimatePresence mode="wait">
//             <TestimonialCard
//               key={currentIndex}
//               testimonial={testimonials[currentIndex]}
//             />
//           </AnimatePresence>
//           <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
//             <button
//               onClick={prevTestimonial}
//               className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft className="w-6 h-6 text-indigo-600" />
//             </button>
//           </div>
//           <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
//             <button
//               onClick={nextTestimonial}
//               className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight className="w-6 h-6 text-indigo-600" />
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-center mt-8">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
//                 index === currentIndex ? "bg-indigo-600 w-6" : "bg-indigo-300"
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AwignONXTestimonials;
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Testimonial } from "@/app/assets/data/heroTestimonials";

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="bg-white rounded-lg overflow-hidden shadow-lg border border-indigo-100 p-6"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="font-bold text-xl text-gray-800">{testimonial.name}</h3>
        <p className="text-gray-600">{testimonial.position}</p>
        {/* <p className="text-gray-500 text-sm">{testimonial.company}</p> */}
      </div>
      <span className="text-sm font-semibold bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
        {testimonial.solution}
      </span>
    </div>
    <p className="text-gray-700 text-center px-6 text-lg mb-6">
      &quot;{testimonial.quote}&quot;
    </p>
    <div className="flex justify-between items-end">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
        {testimonial.impact}
      </span>
    </div>
  </motion.div>
);

const MemoizedTestimonialCard = React.memo(TestimonialCard);
MemoizedTestimonialCard.displayName = "MemoizedTestimonialCard";

const BackgroundSVG: React.FC = () => (
  <svg viewBox="0 0 88 88" className="w-full max-w-screen-xl text-indigo-200">
    <circle fill="currentColor" cx="44" cy="44" r="15.5" />
    <circle fillOpacity="0.2" fill="currentColor" cx="44" cy="44" r="44" />
    <circle fillOpacity="0.2" fill="currentColor" cx="44" cy="44" r="37.5" />
    <circle fillOpacity="0.3" fill="currentColor" cx="44" cy="44" r="29.5" />
    <circle fillOpacity="0.3" fill="currentColor" cx="44" cy="44" r="22.5" />
  </svg>
);

interface AwignONXTestimonialsProps {
  testimonials?: Testimonial[];
}

const AwignONXTestimonials: React.FC<AwignONXTestimonialsProps> = ({
  testimonials = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsLength = testimonials.length;

  const nextTestimonial = useCallback(() => {
    if (testimonialsLength > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsLength);
    }
  }, [testimonialsLength]);

  const prevTestimonial = useCallback(() => {
    if (testimonialsLength > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + testimonialsLength) % testimonialsLength
      );
    }
  }, [testimonialsLength]);

  useEffect(() => {
    if (testimonialsLength > 1) {
      const timer = setInterval(nextTestimonial, 8000);
      return () => clearInterval(timer);
    }
  }, [nextTestimonial, testimonialsLength]);

  const navigationButtons = useMemo(
    () => [
      {
        onClick: prevTestimonial,
        icon: ChevronLeft,
        label: "Previous testimonial",
      },
      {
        onClick: nextTestimonial,
        icon: ChevronRight,
        label: "Next testimonial",
      },
    ],
    [prevTestimonial, nextTestimonial]
  );

  if (testimonialsLength === 0) {
    return null;
  }

  return (
    <div
      className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 relative"
      id="testimonials"
    >
      <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
        <BackgroundSVG />
      </div>
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-4xl font-extrabold text-indigo-900 text-center mb-2">
          Client Success Stories
        </h2>
        <p className="text-xl text-indigo-700 text-center mb-12">
          See how Awign ONX is revolutionizing onboarding across industries
        </p>
        <div className="relative">
          <AnimatePresence mode="wait">
            <MemoizedTestimonialCard
              key={currentIndex}
              testimonial={testimonials[currentIndex]}
            />
          </AnimatePresence>
          {testimonialsLength > 1 &&
            navigationButtons.map(({ onClick, icon: Icon, label }, index) => (
              <button
                key={index}
                onClick={onClick}
                className={`absolute top-1/2 ${
                  index === 0 ? "-left-4" : "-right-4"
                } transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-indigo-600" />
              </button>
            ))}
        </div>
        {testimonialsLength > 1 && (
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                  index === currentIndex ? "bg-indigo-600 w-6" : "bg-indigo-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AwignONXTestimonials;
