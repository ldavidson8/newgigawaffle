import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blogPost }) {
  const { title, slug, thumbnail, category, publishedAt, excerpt } =
    blogPost.fields;

  return (
    <>
      <Link href={"/blog/" + slug}>
        <a>
          <div className="shadow-card rounded-l h-60">
            <div>
              <Image
                src={"https:" + thumbnail.fields.file.url}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
              ></Image>
            </div>
            <div className="p-4 flex flex-col gap-3">
              <div>
                <p className="bg-gradient-to-r from-primary to-secondary w-1/4 text-center text-white rounded-full p-1 font-medium text-sm">
                  {category}
                </p>
                <h4 className="font-medium">{title}</h4>
                <p className="font-normal text-xs">{excerpt}</p>
              </div>
              <p className="font-medium text-primary">{publishedAt}</p>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}
