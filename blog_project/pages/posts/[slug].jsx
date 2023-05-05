import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
// import { getPostData, getPostsFiles } from "@/lib/posts";

function PostDetailPage({ post }) {
  return <PostContent post={post} />;
}

export default PostDetailPage;

export function getStaticPaths() {
  const postFiles = getPostsFiles();
  const slugs = postFiles.map((file) => file.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const post = getPostData(slug);
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}
