import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default async function Page() {
  const posts = await getPosts();
  return (
    <main>
      {posts.map((post, i) => (
        <article key={i}>
          {post.frontmatter.title}
          {post.frontmatter.author} {post.frontmatter.date}
          <Link href={`/blog/${post.slug}`}>Read More</Link>
        </article>
      ))}
    </main>
  );
}
