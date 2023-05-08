import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import a11yDark from "react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("css", css);

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={300}
              height={100}
              style={{ height: "auto" }}
            />
          </div>
        );
      } else {
        return <p>{paragraph.children}</p>;
      }
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter style={a11yDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
