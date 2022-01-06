import { createClient } from "contentful";
import BlogCard from "../../components/BlogCard";
import SiteLayout from "../../components/SiteLayout";
import Head from "next/head";

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
    revalidate: 60,
  };
}

export default function Blog({ blogPosts }) {
  // console.log(blogPosts);
  return (
    <>
      <Head>
        <title>The Waffle Corner</title>
        <meta
          name="keywords"
          content="Marketing | Digital Marketing | Creative Design | Website Design &amp; Development | Branding | SEO | Copywriting |Preston | Marketing Agency | "
        />
        <meta
          name="description"
          content="Gigawaffle, Digital Marketing Company based in Preston City Centre. Web Design, Brand Design, SEO and Copywriting. grow your business and turn it into a brand"
        />
      </Head>
      <div className="bg-white grid grid-cols-1 xl:grid-cols-2 p-8">
        <div className="text-navy-blue h-full items-center flex flex-col gap-12 border-r-2 border-gray-200">
          <label
            htmlFor="blog-search"
            className="text-white absolute z-10 flex"
          ></label>
          <input
            type="search"
            id="blog-search"
            aria-label="Search through blog"
            className="bg-navy-blue rounded-full relative text-center text-white"
            placeholder="Search..."
          ></input>
          <h2 className="text-2xl font-medium">Categories</h2>
          <ul>
            <li>
              <h3 className="font-medium">Marketing</h3>
            </li>
            <li>
              <h3 className="font-medium">Web Design</h3>
            </li>
            <li>
              <h3 className="font-medium">Media</h3>
            </li>
            <li>
              <h3 className="font-medium">Branding</h3>
            </li>
            <li>
              <h3 className="font-medium">Announcements</h3>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-[50px_1fr] p-8 gap-8">
          <h1 className="font-blogheader text-3xl text-primary col-span-full">
            The Waffle Corner
          </h1>
          {blogPosts.map((blogPost) => (
            <BlogCard key={blogPost.sys.id} blogPost={blogPost} />
          ))}
        </div>
      </div>
    </>
  );
}

Blog.getLayout = function getLayout(blog) {
  return <SiteLayout>{blog}</SiteLayout>;
};
