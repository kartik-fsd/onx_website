import OnxSolutions from "@/components/Solutions/onboardingSolutions";
import Solutions from "@/components/Featured/mobileFeatured";
import { OnboardingFeature } from "@/components/Featured/onboardingFeatures";
import HeroSection from "@/components/hero/onBoardingHero";
import OnboardingSolutions from "@/components/Solutions/page";
import ClientShowcase from "@/components/Client/onboardingClient";
import WhyChooseUsComponent from "@/components/ChooseUS/onboarding";
import AwignONXTestimonials from "@/components/Testimonials/onboardingTestimonials";
import ONXCTA from "@/components/CTA/page";
import CommitmentToExcellence from "@/components/Excellence/page";
import HireUs from "@/components/Contact/page";
import WhyChooseUs from "@/components/ChooseUS/page";
import { solutions } from "@/app/assets/data/onboardSolutions";
import FAQ from "@/components/FAQ/page";
import { onxOnboardingFaqs } from "@/app/assets/data/heroFAQ";
import ClientLogoShowcase from "@/components/Client/logoShowcase";
import { onboardingReasons } from "@/app/assets/data/whychoose";
import { onboardingTestimonials } from "@/app/assets/data/heroTestimonials";

const Onboarding = () => {
  const logoConfigs = [
    {
      id: 1,
      image:
        "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/google.svg",
      name: "Google",
    }, //
    {
      id: 3,
      image:
        "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Swiggy.svg",
      name: "Swiggy",
    }, //
    {
      id: 4,
      image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/TCS.svg",
      name: "TCS",
    }, //
    {
      id: 5,
      image:
        "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Zomato.svg",
      name: "Zomato",
    }, //
    {
      id: 6,
      image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/uber.svg",
      name: "Uber",
    }, //
    {
      id: 7,
      image:
        "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/amazon.svg",
      name: "Amazon",
    }, //
    {
      id: 8,
      image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/ola.svg",
      name: "ola",
    }, //
    {
      id: 9,
      image:
        "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Zepto1.svg",
      name: "zepto1",
    }, //
    {
      id: 16,
      name: "Rapido",
      image:
        "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Rapido.svg",
    }, //
    {
      id: 17,
      name: "Jiomart",
      image:
        "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/jiomart.svg",
    }, //
    {
      id: 18,
      name: "Bigbasket",
      image:
        "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Bigbasket.svg",
    }, //
  ];
  return (
    <>
      <HeroSection />
      <ClientLogoShowcase logos={logoConfigs} />
      {/* <ClientShowcase
        title="Who's using Our Product?"
        description="Join these leading companies in revolutionizing their business with our solution."
        logoConfigs={logoConfigs}
      /> */}
      {/* <OnboardingFeature /> */}
      {/* <OnboardingSolutions /> */}
      <OnxSolutions solutions={solutions} service="Onbording" />
      <WhyChooseUsComponent
        title="Why Choose Us"
        description="Discover the Onx advantage in onboarding services"
        reasons={onboardingReasons}
      />
      {/* <WhyChooseUs /> */}
      <FAQ faqs={onxOnboardingFaqs} />
      <AwignONXTestimonials testimonials={onboardingTestimonials} />
      <ONXCTA />
      <CommitmentToExcellence />
      <HireUs />
    </>
  );
};

export default Onboarding;
