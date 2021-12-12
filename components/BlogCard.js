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
          <div className="w-full flex justify-between bg-navy-blue text-white p-2">
            <img src="/arrow-right.svg" className="fill-inherit"></img>
            <p className="text-sm">Read more at www.gigawaffle.co.uk</p>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <div>
              <p className="bg-gradient-to-r from-primary to-secondary w-1/4 text-center text-white rounded-full p-1 font-medium text-sm">
                {category}
              </p>
              <h4 className="font-medium text-lg">{title}</h4>
              <p className="font-normal text-xs">{excerpt}</p>
            </div>
            <p className="font-medium text-primary">{publishedAt}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
