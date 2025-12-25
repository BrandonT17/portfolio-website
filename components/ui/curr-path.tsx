"use client";

import { usePathname, useRouter } from "next/navigation";

export default function CurrPath() {
  const pathname = usePathname();
  const router = useRouter();

  let pageTitle = "/Users/bt";
  if (pathname === "/") {
    pageTitle = "/Users/bt";
  } else if (pathname === "/about") {
    pageTitle = "/Users/bt/About";
  } else if (pathname === "/portfolio") {
    pageTitle = "/Users/bt/portfolio";
  } else if (pathname === "/blog") {
    pageTitle = "/Users/bt/blog";
  }

  return (
    <button type="button" onClick={() => router.back()}>
      {pageTitle}
    </button>
  );
}
