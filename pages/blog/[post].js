import Image from "next/image";
import SiteLayout from "../../components/SiteLayout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  formatPublishedDateForDateTime,
  formatPublishedDateForDisplay,
} from "../../utils/Date";

export async function getStaticPaths() {
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
        query {
          blogPostCollection {
            items {
              slug
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
  const postSlugs = data.blogPostCollection.items;

  const paths = postSlugs.map(({ slug }) => {
    return {
      params: { post: slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { post } = params;

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
        query GetPost($slug: String!) {
          blogPostCollection(
            where: {
            slug: $slug
            }, 
            limit: 1
            ) {
            items {
              title
              featuredImage {
                url
              }
              date
              category
              content {
                json
              }
            }
          }
        }
        `,
        variables: {
          slug: post,
        },
      }),
    }
  );

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();

  const [postData] = data.blogPostCollection.items;

  return {
    props: { post: postData },
    revalidate: 60,
  };
}

export default function BlogPost({ post }) {
  console.log(post);
  return (
    <div className="mt-10 mx-auto max-w-3xl">
      <Image src={post.featuredImage.url} height="700" width="1000" priority />
      <article className="p-4">
        <div>
          <time
            className="font-semibold text-xl mb-4 text-primary"
            dateTime={formatPublishedDateForDateTime(post.date)}
          >
            {formatPublishedDateForDisplay(post.date)}
          </time>
          <h1 className="text-3xl mb-12">{post.title}</h1>
        </div>
        <div className="mb-16">
          {documentToReactComponents(post.content.json)}
        </div>
      </article>
    </div>
  );
}

BlogPost.getLayout = function getLayout(page) {
  return <SiteLayout>{page}</SiteLayout>;
};
