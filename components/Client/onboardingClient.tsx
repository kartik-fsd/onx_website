import React from "react";
import GridPattern from "../magicui/grid-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoConfig {
  icon: string;
  name: string;
}

interface ClientShowcaseProps {
  title: string;
  description: string;
  logoConfigs?: LogoConfig[];
  backgroundColor?: string;
  textColor?: string;
  gridColor?: string;
}

const LogoComponent: React.FC<LogoConfig> = ({ icon, name }) => (
  <div className="flex h-20 items-center justify-center">
    <div className="inline-flex items-center gap-2 text-2xl font-semibold">
      <Image
        src={icon}
        alt={`${name} icon`}
        width={100}
        height={100}
        className="inline-block object-contain mix-blend-multiply"
      />
    </div>
  </div>
);
const ClientShowcase: React.FC<ClientShowcaseProps> = ({
  title,
  description,
  logoConfigs = [],
  backgroundColor = "bg-indigo-100",
  textColor = "text-gray-900",
  gridColor = "rgba(0,0,0,0.1)",
}) => {
  return (
    <section className={`${backgroundColor} ${textColor} py-4 relative`}>
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          `stroke-gray-400/50 [mask-image:linear-gradient(to_top_right,white,transparent,transparent)]`
        )}
      />
      <div className="relative z-20 max-w-xl mx-auto text-center px-2 ">
        <h3
          className={` mb-6 font-sans text-3xl text-indigo-800 font-bold leading-none tracking-tight sm:text-4xl md:mx-auto`}
        >
          {title}
        </h3>
        <p className="mt-3">{description}</p>
      </div>

      <div className="container mx-auto p-6 xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          {Array.isArray(logoConfigs) &&
            logoConfigs.map((config, index) => (
              <LogoComponent key={index} {...config} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
