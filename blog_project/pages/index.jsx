import Hero from "@/components/home-page/hero";
import FeaturedPostsPage from "@/components/home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";

function HomePage({ featuredPost }) {
  return (
    <>
      <Hero />
      <FeaturedPostsPage posts={featuredPost} />
    </>
  );
}

export default HomePage;

export async function getStaticProps() {
  const featuredPost = getFeaturedPosts();
  return {
    props: {
      featuredPost,
    },
    revalidate: 6000, // artile might not be modified frequently
  };
}

// 1) Hero => Present ourselves
// 2) Featured Posts
