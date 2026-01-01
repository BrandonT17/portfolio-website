import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default async function Page() {
  const posts = await getPosts();
  return (
    <main className="min-h-[200px]">
      {posts.map((post, i) => (
        <article key={i} className="boxx">
          {post.frontmatter.title} {post.frontmatter.date}
          <Link href={`/blog/${post.slug}`} className="font-bold"> Read More</Link>
        </article>
      ))}
      blog powered by MDX // use JSX in Markdown documents
    </main>
  );
}
