import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="All posts" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 6000,
  };
}

export default AllPostsPage;
