import Hero from "@/components/home-page/hero";
import FeaturedPostsPage from "@/components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    date: "2022-01-01",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    date: "2022-01-01",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    date: "2022-01-01",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    date: "2022-01-01",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPostsPage posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;

// 1) Hero => Present ourselves
// 2) Featured Posts
