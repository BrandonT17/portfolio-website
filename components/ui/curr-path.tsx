"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CurrPath() {
  const pathname = usePathname();

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
    <Link href="/">
      <button type="button">{pageTitle}</button>
    </Link>
  );
}
