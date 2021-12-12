import React from "react";
import { createClient } from "contentful";
import BlogCard from "../../components/BlogCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blogPost" });

  return {
    props: {
      blogPosts: res.items,
    },
  };
}

export default function Blog({ blogPosts }) {
  console.log(blogPosts);
  return (
    <div className="bg-white h-screen grid grid-cols-2">
      <div className="bg-dark-gray text-white">Sidebar</div>
      <h1 className="font-blogheader">The Waffle Corner</h1>
      {blogPosts.map((blogPost) => (
        <BlogCard key={blogPost.sys.id} blogPost={blogPost} />
      ))}
    </div>
  );
}
