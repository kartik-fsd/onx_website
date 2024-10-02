"use client";
import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "../ui/categoryLabel";
import { useRouter } from "next/navigation";

interface Callout {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  authorId: number;
  author: string;
  authorImageSrc: string;
  date: string;
}

interface PostListProps {
  callout: Callout;
  aspect: "landscape" | "square";
  preloadImage: Boolean;
  href: string;
}

export default function PostList({ callout, aspect, href }: PostListProps) {
  const { name, imageSrc, description, authorImageSrc, author, date } = callout;
  const router = useRouter();
  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <article className="group cursor-pointer ">
      <div className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
        <section onClick={() => handleClick(href)}>
          <div
            className={cx(
              "relative block",
              aspect === "landscape" ? "aspect-video" : "aspect-square"
            )}
          >
            {imageSrc ? (
              <Image
                alt={`Image illustrating ${name}`} // Updated alt text to be descriptive and unique
                src={imageSrc}
                className="object-cover transition-all"
                fill
                sizes="(max-width: 768px) 30vw, 33vw"
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center text-gray-200">
                <PhotoIcon className="h-16 w-16" />
              </span>
            )}
          </div>
        </section>
      </div>
      <div className="mt-5">
        <header>
          <h2 className="text-lg font-medium leading-snug tracking-tight text-black">
            <CategoryLabel
              cate={{
                title: name,
                slug: name.toLowerCase(),
                color: "green",
              }}
              nomargin
            />
          </h2>
        </header>
        <h2 className="mt-2 text-lg font-medium leading-snug tracking-tight text-black">
          <Link href={href}>
            <span
              className="bg-gradient-to-r from-orange-200 to-orange-100 bg-[length:0px_10px]
             bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] 
             group-hover:bg-[length:100%_10px] "
            >
              {description}
            </span>
          </Link>
        </h2>
        <div className="mt-3 flex items-center space-x-3 text-gray-500">
          <Link href={href}>
            <div className="flex items-center gap-3">
              <div className="relative h-5 w-5 flex-shrink-0">
                <Image
                  src={authorImageSrc}
                  alt={`Author ${author}`} // Improved alt text for author images
                  className="rounded-full object-cover"
                  fill
                  sizes="20px"
                />
              </div>
              <span className="truncate text-sm">{author}</span>
            </div>
          </Link>
          <span className="text-xs text-gray-300">&bull;</span>
          <time className="truncate text-sm">{date}</time>
        </div>
      </div>
    </article>
  );
}
