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
    <>
      <div className="bg-white h-screen grid grid-cols-[300px_1fr]">
        <div className="text-navy-blue bg-blue-500 h-full items-center flex flex-col gap-12">
          <label
            htmlFor="blog-search"
            className="text-white absolute z-10 flex"
          >
            Search...
            <img
              src="/search-alt.svg"
              alt=""
              height={"23px"}
              width={"23px"}
              className="right-0"
            />
          </label>
          <input
            type="search"
            id="blog-search"
            aria-label="Search through blog"
            className="bg-navy-blue rounded-full relative"
          ></input>
          <h2 className="text-2xl font-medium">Categories</h2>
          <ul>
            <li>
              <h3>Marketing</h3>
            </li>
            <li>
              <h3>Web Design</h3>
            </li>
            <li>
              <h3>Media</h3>
            </li>
            <li>
              <h3>Branding</h3>
            </li>
            <li>
              <h3>Announcements</h3>
            </li>
          </ul>
          <h2 className="text-2xl font-medium">Top Posts</h2>
          <div className="grid grid-cols-1">
            <div className="flex">
              <span className="text-6xl">1</span>
              <p className="max-w-xs">
                Top 5 free websites for creating engaging social media content
              </p>
            </div>
            <div className="flex">
              <span className="text-6xl">2</span>
              <p className="max-w-xs">
                Top 5 free websites for creating engaging social media content
              </p>
            </div>
            <div className="flex">
              <span className="text-6xl">3</span>
              <p className="max-w-xs">
                Top 5 free websites for creating engaging social media content
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-[50px_1fr] p-8 gap-8">
          <h1 className="font-blogheader col-span-full">The Waffle Corner</h1>
          {blogPosts.map((blogPost) => (
            <BlogCard key={blogPost.sys.id} blogPost={blogPost} />
          ))}
        </div>
      </div>
    </>
  );
}
