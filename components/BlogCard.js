export default function BlogCard({ blogPost }) {
  const { title, slug, thumbnail, category, publishedAt, excerpt } =
    blogPost.fields;

  return (
    <div>
      <div>{/* image thumbnail */}</div>
      <div>
        <div>
          <p>{category}</p>
          <h4>{title}</h4>
          <p>{excerpt}</p>
        </div>
        <p>{publishedAt}</p>
      </div>
    </div>
  );
}
