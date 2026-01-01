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
      <article className="mt-5">
        "{post.frontmatter.title}"
        <br />
        {/* author: {post.frontmatter.author}
        <br /> */}
        {post.frontmatter.date}
        <br />
        <div>{post.content}</div>
      </article>
    </main>
  );
}
