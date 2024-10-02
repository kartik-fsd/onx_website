"use client";

import { onxInstallationFaqs } from "@/app/assets/data/heroFAQ";
import { industries } from "@/app/assets/data/installationSolutions";
import WhyChooseUsComponent from "@/components/ChooseUS/onboarding";
import WhyChooseUs from "@/components/ChooseUS/page";
import ClientShowcase from "@/components/Client/onboardingClient";
import HireUs from "@/components/Contact/page";
import ONXCTA from "@/components/CTA/page";
import CommitmentToExcellence from "@/components/Excellence/page";
import FAQ from "@/components/FAQ/page";
import SolutionsCarousel from "@/components/Featured/featuredSolution";
import HeroInstallation from "@/components/hero/installationHero";
import OnxSolutions from "@/components/Solutions/onboardingSolutions";
import AwignONXTestimonials from "@/components/Testimonials/onboardingTestimonials";
import { TestimonialSection } from "@/components/Testimonials/page";
import ClientLogoShowcase from "@/components/Client/logoShowcase";
import { installationReasons } from "@/app/assets/data/whychoose";
import { installationTestimonials } from "@/app/assets/data/heroTestimonials";

const Installation = () => {
  const logoConfigs = [
    {
      id: 1,
      image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/sony.svg",
      name: "sony",
    }, //
    {
      id: 2,
      image:
        "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/panasonic.svg",
      name: "Panasonic",
    }, //
    {
      id: 3,
      image: "https://tm-integration-aws.s3.amazonaws.com/amazon.svg",
      name: "Amazon",
    }, //
    {
      id: 4,
      image:
        "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Schindler2.svg",
      name: "Schindler",
    }, //
    {
      id: 5,
      image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Paytm.svg",
      name: "paytm",
    }, //
    {
      id: 6,
      image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/bajaj.svg",
      name: "bajaj",
    }, //
    {
      id: 7,
      image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/ipro.svg",
      name: "Wipro ",
    }, //
    {
      id: 8,
      image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Bolt.svg",
      name: "Bolt",
    }, //
  ];
  return (
    <>
      <HeroInstallation />
      {/* <ClientShowcase
        title="Who's using Our Product?"
        description="Join these leading companies in revolutionizing their business with our solution."
        logoConfigs={logoConfigs}
      /> */}
      <ClientLogoShowcase logos={logoConfigs} />
      {/* <SolutionsCarousel /> */}
      <OnxSolutions solutions={industries} service="Installation" />
      <WhyChooseUsComponent
        title="Why Choose Us"
        description="Discover the Onx advantage in installation services"
        reasons={installationReasons}
      />
      {/* <WhyChooseUs /> */}
      <FAQ faqs={onxInstallationFaqs} />
      <AwignONXTestimonials testimonials={installationTestimonials} />
      {/* <TestimonialSection /> */}
      <ONXCTA />
      <CommitmentToExcellence />
      <HireUs />
    </>
  );
};

export default Installation;
