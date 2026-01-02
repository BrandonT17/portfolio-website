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
    <div className="relative border-t py-0.5">
      <div className="flex flex-col items-center sm:flex-row sm:items-center">
        <div className="flex sm:order-1 sm:items-center justify-center sm:justify-start w-full sm:w-auto">
          <p>Copyright 2025 by Brandon T. 2025</p>
        </div>
        <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 text-center">
          <CurrPath />
        </div>
        <div className="sm:ml-auto sm:order-3 flex justify-center sm:justify-end w-full sm:w-auto">
          [Github] [LinkedIn]
        </div>
      </div>
      <div className="flex sm:justify-left justify-center my-3">[Home] [About Me] [Projects] [Blog]</div>
    </div>
  );
}
