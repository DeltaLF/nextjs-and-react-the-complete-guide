import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "database", "posts");

function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

function getPostData(fileName) {
  const postSlug = fileName.replace(/\.md$/, ""); // remove .md from filename
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent); // metadata and content

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };
  return postData;
}

function getAllPosts() {
  const postFiles = getPostsFiles();
  const postsData = postFiles.map((fileName) => getPostData(fileName));
  postsData.sort((a, b) => {
    return a.date > b.date ? -1 : 1;
  });
  return postsData;
}

function getFeaturedPosts() {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
}

export { getAllPosts, getFeaturedPosts, getPostData, getPostsFiles };
