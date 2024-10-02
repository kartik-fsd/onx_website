"use client";

import React, { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import GridPattern from "../magicui/grid-pattern";
import { cn } from "@/lib/utils";

interface Logo {
  id: number;
  name: string;
  image: string;
}

interface ClientLogoShowcaseProps {
  logos: Logo[];
  mainTitle?: string;
  subTitle?: string;
  scrollSpeed?: number;
  backgroundColor?: string;
  titleColor?: string;
  subTitleColor?: string;
}

export default function ClientLogoShowcase({
  logos,
  mainTitle = "Our Esteemed Clients",
  subTitle = "From innovative startups to Fortune 500 giants, we're proud to partner with industry leaders",
  scrollSpeed = 30,
  backgroundColor = "bg-white",
  titleColor = "text-indigo-900",
  subTitleColor = "text-gray-600",
}: ClientLogoShowcaseProps) {
  const [selectedLogo, setSelectedLogo] = useState<Logo | null>(null);

  const handleLogoClick = useCallback((logo: Logo) => {
    setSelectedLogo((prevLogo) => (prevLogo?.id === logo.id ? null : logo));
  }, []);

  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: scrollSpeed,
          ease: "linear",
        },
      },
    },
  };

  const memoizedLogos = useMemo(() => logos, [logos]);

  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 pt-6 pb-10 overflow-hidden ${backgroundColor} relative`}
      id="client_showcase"
    >
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          `stroke-gray-300/50 [mask-image:linear-gradient(to_top_left,white,transparent,transparent)]`
        )}
      />
      <h2 className={`text-4xl font-bold text-center mb-5 ${titleColor}`}>
        {mainTitle}
      </h2>
      <p className={`text-xl font-sans text-center mb-12 ${subTitleColor}`}>
        {subTitle}
      </p>
      <div className="relative z-10">
        <div className="overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            variants={marqueeVariants}
            animate="animate"
          >
            {[...memoizedLogos, ...memoizedLogos].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="inline-block mx-4 my-2 cursor-pointer"
              >
                <motion.div
                  className="w-28 h-28 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleLogoClick(logo)}
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={90}
                    height={90}
                    className="object-contain "
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
        <AnimatePresence>
          {selectedLogo && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={logoVariants}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm"
            >
              <Image
                src={selectedLogo.image}
                alt={selectedLogo.name}
                width={110}
                height={110}
                className="object-contain mb-2"
              />
              <p className="text-gray-600 text-center max-w-lg px-4 mb-2">
                Proud to work with {selectedLogo.name}, delivering innovative
                solutions and driving business growth.
              </p>
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
                onClick={() => setSelectedLogo(null)}
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
// "use client";

// import React, {
//   useCallback,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import { AnimatePresence, motion, useAnimation } from "framer-motion";
// import Image from "next/image";
// import amazon from "@/app/assets/svg/amazon.svg";
// import bajaj from "@/app/assets/svg/bajaj.svg";
// import google from "@/app/assets/svg/google.svg";
// import infosys from "@/app/assets/svg/ola.svg";
// import panasonic from "@/app/assets/svg/panasonic.svg";
// import paytm from "@/app/assets/svg/Paytm.svg";
// import sony from "@/app/assets/svg/sony.svg";
// import swiggy from "@/app/assets/svg/swiggy.svg";
// import tcs from "@/app/assets/svg/TCS.svg";
// import uber from "@/app/assets/svg/uber.svg";
// import zomato from "@/app/assets/svg/zomato.svg";

// interface Logo {
//   id: number;
//   name: string;
//   image: string;
// }

// const logos: Logo[] = [
//   { id: 1, name: "Amazon", image: amazon },
//   { id: 2, name: "Bajaj", image: bajaj },
//   { id: 3, name: "Google", image: google },
//   { id: 4, name: "Infosys", image: infosys },
//   //  { id: 5, name: "Panasonic", image: panasonic },
//   { id: 6, name: "Paytm", image: paytm },
//   // { id: 7, name: "Sony", image: sony },
//   { id: 8, name: "Swiggy", image: swiggy },
//   { id: 9, name: "TCS", image: tcs },
//   { id: 10, name: "Uber", image: uber },
//   { id: 11, name: "Zomato", image: zomato },
// ];

// export default function ClientConstellation() {
//   const [selectedLogo, setSelectedLogo] = useState<Logo | null>(null);
//   const constellationRef = useRef<HTMLDivElement>(null);
//   const controls = useAnimation();

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (constellationRef.current) {
//         const { clientX, clientY } = e;
//         const { left, top, width, height } =
//           constellationRef.current.getBoundingClientRect();
//         const x = (clientX - left - width / 2) / 25;
//         const y = (clientY - top - height / 2) / 25;
//         controls.start({ x, y });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [controls]);

//   const handleLogoClick = (logo: Logo) => {
//     setSelectedLogo((prevLogo) => (prevLogo?.id === logo.id ? null : logo));
//   };

//   return (
//     <div className="relative w-full h-screen bg-indigo-900 overflow-hidden">
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent opacity-20"></div>
//       <motion.div
//         ref={constellationRef}
//         className="relative w-full h-full flex items-center justify-center"
//         animate={controls}
//         transition={{ type: "spring", stiffness: 100, damping: 30 }}
//       >
//         {logos.map((logo, index) => {
//           const angle = (index / logos.length) * 2 * Math.PI;
//           const radius = 200 + Math.random() * 100;
//           const x = Math.cos(angle) * radius;
//           const y = Math.sin(angle) * radius;

//           return (
//             <motion.div
//               key={logo.id}
//               className="absolute"
//               initial={{ x, y, opacity: 0 }}
//               animate={{
//                 x,
//                 y,
//                 opacity: 1,
//                 scale: selectedLogo?.id === logo.id ? 1.2 : 1,
//               }}
//               transition={{ duration: 0.5 }}
//             >
//               <motion.div
//                 className="relative w-16 h-16 rounded-full bg-indigo-100 bg-opacity-80 backdrop-blur-sm flex items-center justify-center cursor-pointer"
//                 whileHover={{ scale: 1.1 }}
//                 onClick={() => handleLogoClick(logo)}
//               >
//                 <Image
//                   src={logo.image}
//                   alt={logo.name}
//                   width={40}
//                   height={40}
//                   className="object-contain"
//                 />
//                 {selectedLogo?.id === logo.id && (
//                   <motion.div
//                     className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-2 shadow-lg"
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                   >
//                     <p className="text-xs font-semibold text-gray-800 whitespace-nowrap">
//                       {logo.name}
//                     </p>
//                   </motion.div>
//                 )}
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </motion.div>
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white">
//         <h2 className="text-3xl font-bold mb-2">Our Client Constellation</h2>
//         <p className="text-lg opacity-80">
//           Explore our network of industry leaders
//         </p>
//       </div>
//     </div>
//   );
// }
