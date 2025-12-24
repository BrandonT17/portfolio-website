   // components/MDXComponents.tsx
import React from "react";

export const MDXComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold my-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-semibold my-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-base leading-7 my-2" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-blue-500 underline" {...props} />
  ),
  // Add more mappings like ul, li, blockquote, code, etc.
};
 