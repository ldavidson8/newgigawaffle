import Image from "next/image";
import SiteLayout from "../../components/SiteLayout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
  };
}

export default function BlogPost({ post }) {
  console.log(post);
  return (
    <div className="pt-32 pb-52 px-64">
      <div>
        <Image src={post.featuredImage.url} height="500" width="400" />
      </div>
      <div>
        <h1 className="text-3xl py-8">{post.title}</h1>
      </div>
      <div></div>
    </div>
  );
}

BlogPost.getLayout = function getLayout(page) {
  return <SiteLayout>{page}</SiteLayout>;
};
