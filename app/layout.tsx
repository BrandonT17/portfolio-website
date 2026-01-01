import "./globals.css";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import { VT323 } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
});

export const vt323 = VT323({
  weight: "400",
});

export const metadata: Metadata = {
  title: "Brandon's Website",
  description:
    "Software developer portfolio featuring web development and systems projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className} antialiased`}>
        <div className="max-w-6xl mx-auto px-2">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
