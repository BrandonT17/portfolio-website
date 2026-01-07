"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeBtn from "@/components/ui/theme-btn";
import DateTime from "@/components/ui/date-time";
import Hello from "@/components/ui/hello";
import CurrPath from "@/components/ui/curr-path";

export default function Header() {
  const pathname = usePathname();

  let pageTitle = "/Users/bt";
  return (
    <div className="relative border-b py-0.25 bg-[var(--header-bg)] text-[var(--header-text)]">
      <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center">
        {/* Left */}
        <div className="flex gap-2 sm:order-1 sm:items-center justify-center sm:justify-start w-full sm:w-auto">
          <span className="link">
            <Hello />
          </span>
          <DateTime />
        </div>

        {/* Center */}
        <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 text-center">
          <span className="link">
            <CurrPath />
          </span>
        </div>

        {/* Right */}
        <div className="sm:ml-auto sm:order-3 flex justify-center sm:justify-end w-full sm:w-auto">
          <span className="link">
            <ThemeBtn />
          </span>
        </div>
      </div>
    </div>
  );
}
