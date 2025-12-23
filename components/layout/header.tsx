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
        <div className="flex justify-between items-center border-b">
            <div className="flex gap-2"><Hello /> <DateTime /></div>
            <div><CurrPath/></div>
            <ThemeBtn />
        </div>
    );
}