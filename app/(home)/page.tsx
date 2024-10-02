import Insights from "@/components/BlogInsight/page";
import KeyChallenge from "@/components/Challenges/design";
import { KeyChallenges } from "@/components/Challenges/page";
import WhyChooseUs from "@/components/ChooseUS/page";
import { OurClient } from "@/components/Client/page";
import HireUs from "@/components/Contact/page";
import CommitmentToExcellence from "@/components/Excellence/page";
import SolutionsCarousel from "@/components/Featured/featuredSolution";
import Hero from "@/components/hero/hero";
import { HeroImage } from "@/components/hero/heroImage";
import Timeline from "@/components/HowItWorks/howItWorks";
import { IndiaMap } from "@/components/Stats/page";
import { TestimonialSection } from "@/components/Testimonials/page";
import FAQ from "@/components/FAQ/page";
import WhyChooseUsComponent from "@/components/ChooseUS/onboarding";
import AwignONXTestimonials from "@/components/Testimonials/onboardingTestimonials";
import ServiceCard from "@/components/KeyServices/page";
import { testimonials } from "@/app/assets/data/heroTestimonials";
import ClientLogoShowcase from "@/components/Client/logoShowcase";
import { onxGeneralFaqs } from "../assets/data/heroFAQ";
interface Logo {
  id: number;
  name: string;
  image: string;
}

const logos: Logo[] = [
  {
    id: 1,
    image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/google.svg",
    name: "Google",
  }, //
  {
    id: 3,
    image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Swiggy.svg",
    name: "Swiggy",
  }, //
  {
    id: 4,
    image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/TCS.svg",
    name: "TCS",
  }, //
  {
    id: 5,
    image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Zomato.svg",
    name: "Zomato",
  }, //
  {
    id: 6,
    image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/uber.svg",
    name: "Uber",
  }, //
  {
    id: 7,
    image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/amazon.svg",
    name: "Amazon",
  }, //
  {
    id: 8,
    image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/ola.svg",
    name: "ola",
  }, //
  {
    id: 9,
    image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Zepto1.svg",
    name: "zepto1",
  }, //
  {
    id: 10,
    image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/sony.svg",
    name: "sony",
  }, //
  {
    id: 11,
    image:
      "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/panasonic.svg",
    name: "Panasonic",
  }, //
  {
    id: 12,
    image: "https://tm-integration-aws.s3.amazonaws.com/amazon.svg",
    name: "Amazon",
  }, //
  {
    id: 13,
    image:
      "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Schindler2.svg",
    name: "Schindler",
  }, //
  {
    id: 14,
    image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Paytm.svg",
    name: "paytm",
  }, //
  {
    id: 15,
    image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/bajaj.svg",
    name: "bajaj",
  }, //
  {
    id: 16,
    image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/ipro.svg",
    name: "Wipro ",
  }, //
  {
    id: 19,
    image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Bolt.svg",
    name: "Bolt",
  }, //
  {
    id: 20,
    name: "Rapido",
    image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Rapido.svg",
  }, //
  {
    id: 17,
    name: "Jiomart",
    image: "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/jiomart.svg",
  }, //
  {
    id: 18,
    name: "Bigbasket",
    image:
      "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/Bigbasket.svg",
  }, //
];

const HeroSection: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <OurClient /> */}
      <ClientLogoShowcase logos={logos} />
      <KeyChallenge />
      {/* <SolutionsCarousel /> */}
      <ServiceCard />
      {/* <WhyChooseUsComponent /> */}
      <WhyChooseUs />
      <Timeline />
      <IndiaMap />
      {/* <TestimonialSection /> */}
      <FAQ faqs={onxGeneralFaqs} />
      <AwignONXTestimonials testimonials={testimonials} />
      <HireUs />
      <Insights />
      <CommitmentToExcellence />
    </>
  );
};

export default HeroSection;
