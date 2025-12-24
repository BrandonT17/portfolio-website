import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/ui/mdx-components";

const postDir = path.join(process.cwd(), "app/blog/posts");

type Frontmatter = {
  title: string;
  author: string;
  date: string;
};

export async function getPostBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(postDir, fileName);

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { frontmatter, content } = await compileMDX<Frontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: MDXComponents,
  });

  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}

export async function getPosts() {
  const files = fs.readdirSync(postDir);
  const posts = await Promise.all(
    files.map(async (file) => await getPostBySlug(path.parse(file).name))
  );
  return posts;
}

export async function getAllPostSlug() {
  const files = fs.readdirSync(postDir);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
}
