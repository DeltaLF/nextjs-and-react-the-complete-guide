import PostsGrid from "../posts/posts-grid";
import classess from "./featured-posts.module.css";
function FeaturedPostsPage({ posts }) {
  return (
    <section className={classess.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPostsPage;
