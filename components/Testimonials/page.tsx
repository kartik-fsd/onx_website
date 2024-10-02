import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Rohan Singh",
    designation: "Operations Manager",
    body: "ONX transformed our workforce strategy with seamless execution.",
    img: "https://picsum.photos/seed/4/600/800",
  },
  {
    name: "Aditi Mehra",
    designation: "Project Coordinator",
    body: "Amazing platform that helped streamline our operational tasks efficiently.",
    img: "https://picsum.photos/seed/5/600/800",
  },
  {
    name: "Kunal Shah",
    designation: "Team Lead",
    body: "ONX has redefined how we manage and deploy our teams.",
    img: "https://picsum.photos/seed/6/600/800",
  },
  {
    name: "Neha Agarwal",
    designation: "Business Analyst",
    body: "The experience with ONX has been nothing short of revolutionary.",
    img: "https://picsum.photos/seed/1/600/800",
  },
  {
    name: "Arjun Kapoor",
    designation: "Senior Consultant",
    body: "ONX is a game-changer for business operations management.",
    img: "https://picsum.photos/seed/2/600/800",
  },
  {
    name: "Ritika Sharma",
    designation: "HR Specialist",
    body: "We've seen unmatched efficiency since partnering with ONX.",
    img: "https://picsum.photos/seed/3/600/800",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  designation,
  body,
}: {
  img: string;
  name: string;
  designation: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-full max-w-sm mx-auto cursor-pointer overflow-hidden rounded-xl border p-5  transition-all duration-300",
        "border-indigo-950/[.1] bg-indigo-950/[.01] hover:bg-indigo-950/[.05]"
      )}
    >
      <div className="flex items-center gap-4">
        <Image
          className="rounded-full border-2 border-primary-500"
          src={img}
          alt={name}
          width={48}
          height={48}
        />
        <div className="flex flex-col">
          <figcaption className="text-lg font-semibold text-indigo-950">
            {name}
          </figcaption>
          <p className="text-sm text-indigo-900">{designation}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-gray-700">{body}</blockquote>
    </figure>
  );
};

export function TestimonialSection() {
  return (
    <div className="relative flex flex-col items-center justify-center py-10 w-full overflow-hidden bg-gray-50 ">
      <h2 className="text-3xl font-bold text-center mb-12 text-indigo-700 dark:text-primary-400 z-10">
        Hear What Our Clients Say
      </h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.designation} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.designation} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50 dark:from-gray-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50 dark:from-gray-900"></div>
    </div>
  );
}
