import BibleVerse from "@/components/ui/votd";
import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main>
      <section className="flex gap-10">
        <div className={styles.box + " w-2/3"}>
          <h1>About Me</h1>
          <p>
            My name is --Brandon Thach-- and I am a software developer from
            Chicago, Illinois, currently studying Computer Science at the
            University of Illinois Chicago (UIC), where I am set to graduate in
            the Spring 2026 semester. I enjoy full-stack web application
            development, web+network security, and anything Linux-related.
          </p>
        </div>
        <div className="w-1/3">
          {/* <Image src="/druski.png" alt="me" width={500} height={500} /> */}
          just testing out my width
        </div>
      </section>
      {/* nav links */}
      <section>
        <div className="border">
          <h1>Navigation</h1>
          <div className="flex justify-center gap-4">
            <Link href="/about">My Interests</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div>
          <h1>Verse of the Day</h1>
          <BibleVerse /> (credit: bible-api.com)
        </div>
        <div>
          <h1>Experience</h1>
        </div>
        <div>
          <h1>Projects</h1>
        </div>
      </section>
    </main>
  );
}
