import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blogPost }) {
  const { title, slug, thumbnail, category, publishedAt, excerpt } =
    blogPost.fields;

  return (
    <div className="shadow-card rounded-l h-min">
      <Link href={"/blog/" + slug}>
        <a>
          <div>
            <Image
              src={"https:" + thumbnail.fields.file.url}
              width={thumbnail.fields.file.details.image.width}
              height={thumbnail.fields.file.details.image.height}
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
            <span className="bg-gradient-to-r from-primary to-secondary text-center text-white rounded-full p-2 w-24 font-medium text-sm">
              {category}
            </span>
            <h4 className="font-medium text-lg">{title}</h4>
            <p className="font-medium text-sm">{excerpt}</p>
            <p className="font-semibold text-primary">{publishedAt}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
