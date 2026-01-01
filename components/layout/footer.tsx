"use client";
import CurrPath from "@/components/ui/curr-path";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const links = [
    {
      href: "https://github.com/BrandonT17",
      img: "/github.ico",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/brandon-thach-a64870227/",
      img: "/linkedin.ico",
      label: "LinkedIn",
    },
  ];
  return (
    <div>
      <div className="flex justify-between border-t">
        <p>Copyright 2025 by Brandon T. 2025</p>
        <CurrPath />
        <p>rip terry davis</p>
      </div>
      <div className="justify-end flex flex-row gap-1 my-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <Image 
              src={link.img}
              alt={link.label}
              width={25}
              height={25}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
