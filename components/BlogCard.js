import Link from "next/link";
import Image from "next/image";
import {
  formatPublishedDateForDateTime,
  formatPublishedDateForDisplay,
} from "../utils/Date";

export default function BlogCard({ blogPost }) {
  const { title, date, slug, thumbnail, excerpt, category } = blogPost.items;

  return (
    <div className="shadow-card rounded-l h-min">
      <Link href={"/blog/" + slug}>
        <a>
          <div>
            <Image
              src={thumbnail}
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
              {category}
            </span>
            <h4 className="font-medium text-xl">{title}</h4>
            <p className="text-sm">{excerpt}</p>
            <time
              className="font-semibold text-primary"
              dateTime={formatPublishedDateForDateTime(date)}
            >
              {formatPublishedDateForDisplay(date)}
            </time>
          </div>
        </a>
      </Link>
    </div>
  );
}
