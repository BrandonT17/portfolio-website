import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/ui/theme-context";
import { inconsolata } from "@/lib/fonts";
import { templeos } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Brandon Thach",
  description:
    "Software developer portfolio featuring web development and systems projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inconsolata.className} antialiased`}>
        <ThemeProvider>
          <div className="max-w-6xl mx-auto px-2">
            <Header />
            <main className="py-2">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
