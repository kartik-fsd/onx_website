import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import { format, parseISO } from "date-fns";
import CategoryLabel from "@/components/ui/categoryLabel";
import AuthorCard from "@/components/ui/card";
import { notFound } from "next/navigation";

interface PostProps {
  loading: boolean;
  post?: {
    slug: string;
    title: string;
    category: string;
    description: string;
    mainImage: { src: string; caption?: string };
    author: {
      name: string;
      avatar: string;
      slug: { current: string };
      bio: string;
    };
    publishedAt: string;
    estReadingTime: number;
    body: {
      type: string;
      content?: string;
      src?: string;
      caption?: string;
    }[];
  };
}

export default function Post({ loading, post }: PostProps) {
  if (!loading && !post?.slug) {
    notFound();
  }

  const imageProps = post?.mainImage?.src
    ? {
        src: post.mainImage.src as string,
        caption: post.mainImage.caption,
      }
    : null;

  const authorImageProps = post?.author?.avatar
    ? { src: post.author.avatar as string, alt: post.author.name }
    : null;

  const category = post?.category ?? "Uncategorized";

  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md">
          {/* Main Section */}
          <div className="flex justify-center mt-1">
            <CategoryLabel
              nomargin
              cate={{
                title: category,
                slug: category?.toLowerCase(),
                color: "green",
              }}
            />
          </div>

          <h1 className="text-brand-primary mb-4 mt-4 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug">
            {post?.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500">
            <div className="flex items-center gap-3">
              {authorImageProps && (
                <div className="relative h-10 w-10 flex-shrink-0">
                  <Link href={`/author/${post?.author?.slug.current}`}>
                    <Image
                      src={authorImageProps.src}
                      alt={authorImageProps.alt}
                      className="rounded-full object-cover"
                      fill
                      sizes="40px"
                    />
                  </Link>
                </div>
              )}
              <div>
                <p className="text-gray-800">
                  <Link href={`/author/${post?.author?.slug.current}`}>
                    {post?.author?.name}
                  </Link>
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time className="text-gray-500" dateTime={post?.publishedAt}>
                    {format(parseISO(post?.publishedAt || ""), "MMMM dd, yyyy")}
                  </time>
                  <span>· {post?.estReadingTime || "5"} min read</span>
                </div>
              </div>
            </div>
          </div>

          {imageProps && (
            <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden mt-6 mb-6 lg:rounded-lg">
              <Image
                src={imageProps.src}
                alt="Thumbnail"
                loading="eager"
                fill
                sizes="100vw"
                className="object-cover"
              />
              {imageProps.caption && (
                <figcaption className="absolute bottom-0 left-0 w-full text-center text-sm text-gray-600 bg-white bg-opacity-75 py-2">
                  {imageProps.caption}
                </figcaption>
              )}
            </div>
          )}

          {/* Main Content */}
          <div className="prose mx-auto mt-3 dark:prose-invert prose-a:text-indigo-600">
            <p className=" indent-5 text-md">{post?.description}</p>
          </div>

          <div className="prose mx-auto my-6 dark:prose-invert prose-a:text-indigo-600">
            {post?.body?.map((element, index) => {
              switch (element.type) {
                case "subheading":
                  return (
                    <h2
                      key={index}
                      className="mt-8 mb-4 text-xl font-semibold text-gray-800"
                    >
                      {element.content}
                    </h2>
                  );
                case "quote":
                  return (
                    <blockquote
                      key={index}
                      className="mt-6 mb-6 pl-4 font-semibold border-l-4 border-gray-300 italic text-gray-800 "
                    >
                      <span className="relative before:content-['“'] after:content-['”'] before:absolute before:-left-4 before:text-2xl after:text-2xl">
                        {element.content}
                      </span>
                    </blockquote>
                  );
                case "image":
                  return (
                    <figure key={index} className="mt-8 mb-8">
                      {element.src && (
                        <Image
                          src={element.src}
                          alt="Thumbnail"
                          width={800}
                          height={450}
                          className="rounded-lg"
                        />
                      )}
                      {element.caption && (
                        <figcaption className="text-center text-sm text-gray-600 mt-2">
                          {element.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                case "paragraph":
                  return <p key={index}>{element.content}</p>;
                default:
                  return null;
              }
            })}
          </div>

          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-indigo-600"
            >
              ← View all posts
            </Link>
          </div>

          {post?.author && (
            <AuthorCard
              author={{
                name: post.author.name,
                image: post.author.avatar,
                slug: post.author.slug.current,
                bio: post.author.bio,
              }}
            />
          )}
        </div>
      </Container>
    </>
  );
}
