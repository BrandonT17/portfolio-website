import { getPostBySlug, getAllPostSlug } from "@/lib/posts";
import { MDXComponents } from "@/components/ui/mdx-components";

export async function generateStaticParams() {
  return getAllPostSlug();
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <main className="min-h-[300px]">
      <article>
        <h1>{post.frontmatter.title}</h1>
        <div>
          {post.frontmatter.date} / {post.frontmatter.author}
        </div>
        <div>{post.content}</div>
      </article>
    </main>
  );
}
