import { Inconsolata } from "next/font/google";
import localFont from "next/font/local";
export const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
});

export const templeos = localFont({
  src: "./templeos_font.woff2", // Ensure this path points to your .woff2 file
  variable: "--font-templeos",
  display: "swap",
});
