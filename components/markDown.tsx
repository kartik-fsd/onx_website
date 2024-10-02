import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import getVideoId from "get-video-id";
import Iframe from "react-iframe";

interface MarkdownRendererProps {
  content: string;
}

// Custom Image component
const ImageComponent: React.FC<{ src: string; alt?: string }> = ({
  src,
  alt,
}) => (
  <Image
    src={src}
    alt={alt || "Image"}
    loading="lazy"
    className="object-cover"
    width={800}
    height={450}
  />
);

interface IframePreviewProps {
  url: string;
  height?: string;
}

// Custom Iframe component
const IframePreview: React.FC<IframePreviewProps> = ({
  url,
  height = "350",
}) => {
  if (!url) return <p>Missing Embed URL</p>;

  const { id, service } = getVideoId(url);
  const isYoutubeVideo = id && service === "youtube";
  const finalURL = isYoutubeVideo
    ? `https://www.youtube-nocookie.com/embed/${id}`
    : url;

  return (
    <Iframe
      url={finalURL}
      width="100%"
      height={height}
      className="rounded-md"
      display="block"
      position="relative"
      //frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  );
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    components={{
      img: ({ src, alt }) => <ImageComponent src={src!} alt={alt} />,
      iframe: ({ src }) => <IframePreview url={src!} />,
      code({ node, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || "");
        return match ? (
          <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
      a: ({ href, children }) => (
        <Link
          href={href!}
          target={href!.startsWith("/") ? undefined : "_blank"}
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      ),
    }}
  >
    {content}
  </ReactMarkdown>
);

export default MarkdownRenderer;
