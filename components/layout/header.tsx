"use client";
import ThemeBtn from "@/components/ui/theme-btn";
import CurrPath from "@/components/ui/curr-path";
import DateTime from "@/components/ui/date-time";
import Hello from "@/components/ui/hello";
import Link from "next/link";

export default function Header() {
  const links = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/projects", label: "projects" },
    { href: "/blog", label: "blog" },
  ];

  return (
    <div className="w-full border-b py-0.75 bg-[var(--header-bg)] text-[var(--header-text)] flex flex-row justify-center">
      <div className="flex flex-row justify-start w-full gap-4">
        <div className="flex flex-row gap-4 w-full justify-start">
          <h1>猛</h1>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="link">
              {link.label}{" "}
            </Link>
          ))}
        </div>
      </div>

      <div className="link flex justify-center">
        <CurrPath />
      </div>

      <div className="flex w-full justify-end">
        <span className="link">
          <ThemeBtn />
        </span>
      </div>
    </div>
  );
}
