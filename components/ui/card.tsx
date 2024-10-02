import Image from "next/image";
import Link from "next/link";

interface AuthorCardProps {
  author: {
    name: string;
    slug: string;
    image: string;
    bio: string;
  };
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="mt-8 rounded-2xl bg-gray-50 px-8 py-8 text-gray-500 ">
      <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
        <div className="relative mt-1 h-24 w-24 flex-shrink-0">
          {author.image && (
            <Link href={`/author/${author.slug}`}>
              <Image
                src={author.image}
                alt={author.name}
                className="rounded-full object-cover"
                width={96}
                height={96}
              />
            </Link>
          )}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 ">
            About {author.name}
          </h3>
          <p className="mt-3">{author.bio}</p>
          <Link href={`/author/${author.slug}`}>
            <span className="bg-brand-secondary/20 rounded-full py-2 text-sm text-indigo-600">
              View Profile
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
