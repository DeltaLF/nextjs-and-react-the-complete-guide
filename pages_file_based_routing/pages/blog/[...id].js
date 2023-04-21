const { useRouter } = require("next/router");

function BlogIdPage() {
  const router = useRouter();
  console.log(router.query, "path", router.pathname);
  return <div>Blog id page</div>;
}

export default BlogIdPage;
