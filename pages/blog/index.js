import SiteLayout from "../../components/SiteLayout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  formatPublishedDateForDateTime,
  formatPublishedDateForDisplay,
} from "../../utils/Date";

export async function getStaticProps() {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        {
          blogPostCollection {
            items {
              sys {
                id
              }
              title
              date
              slug
              thumbnail {
                url
              }
              excerpt
              isFeatured
              category
            }
          }
        }
        `,
      }),
    }
  );
  if (!result.ok) {
    console.error(result);
    return {};
  }
  const { data } = await result.json();
  const blogPosts = data.blogPostCollection.items;

  return {
    props: {
      blogPosts,
    },
  };
}

// blogPostCollection {
//   items {
//     title
//     slug
//     thumbnail {
//       url
//     }
//     excerpt
//     isFeatured
//     category
//     publishedAt
//   }
// }

export default function Blog({ blogPosts }) {
  console.log(blogPosts);
  return (
    <>
      <Head>
        <title>The Waffle Corner</title>
        <meta
          name="keywords"
          content="marketing, agency, design, web design, business, content, digital, email, preston, blog, portfolio, website, performance, lightweight, perfect, fast, article, tutorials, guides, ui design, ux design, user experience"
        />
        <meta
          name="description"
          content="Gigawaffle, Digital Marketing Company based in Preston City Centre. Web Design, Brand Design, SEO and Copywriting. grow your business and turn it into a brand"
        />
      </Head>
      <div className="bg-white grid grid-cols-1 p-8">
        {/* <div className="text-navy-blue h-full items-center flex flex-col gap-12 border-r-2 border-gray-200">
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
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-[50px_1fr] p-24 gap-8">
          <h1 className="font-blogheader text-3xl text-primary col-span-full">
            The Waffle Corner
          </h1>
          {blogPosts.map((blogPost) => (
            <div className="shadow-card rounded-l h-min">
              <Link href={"/blog/" + blogPost.slug}>
                <a>
                  <div>
                    <Image
                      src={blogPost.thumbnail.url}
                      width="300"
                      height="200"
                      layout="responsive"
                      objectFit="cover"
                    ></Image>
                  </div>
                  <div className="w-full bg-navy-blue text-white p-2">
                    <p className="text-sm text-right">
                      Read more at www.gigawaffle.co.uk
                    </p>
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <span className="bg-gradient-to-r from-primary to-secondary text-center text-white rounded-full p-2 w-1/2 lg:w-1/4 font-medium text-sm">
                      {blogPost.category}
                    </span>
                    <h4 className="font-medium text-xl">{blogPost.title}</h4>
                    <p className="text-sm">{blogPost.excerpt}</p>
                    <time
                      className="font-semibold text-primary"
                      dateTime={formatPublishedDateForDateTime(blogPost.date)}
                    >
                      {formatPublishedDateForDisplay(blogPost.date)}
                    </time>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Blog.getLayout = function getLayout(page) {
  return <SiteLayout>{page}</SiteLayout>;
};
