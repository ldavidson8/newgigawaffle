import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Skeleton from "../../components/Skeleton";
import SiteLayout from "../../components/SiteLayout";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blogPost",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { blogPost: items[0] },
    revalidate: 60,
  };
}

export default function BlogPost({ blogPost }) {
  if (!blogPost) return <Skeleton />;

  const { featuredImage, title, content } = blogPost.fields;

  return (
    <div className="pt-32 pb-52 px-64">
      <div>
        <Image
          src={"https:" + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
      </div>
      <div>
        <h1 className="text-3xl py-8">{title}</h1>
      </div>
      <div>{documentToReactComponents(content)}</div>
    </div>
  );
}

BlogPost.getLayout = function getLayout(page) {
  return <SiteLayout>{page}</SiteLayout>;
};
