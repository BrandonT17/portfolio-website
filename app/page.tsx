import BibleVerse from "@/components/ui/votd";
import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";
import Welcome from "@/components/ui/welcome";
import Game from "@/components/ui/game";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 mt-5 mb-5">
      <section className="flex gap-5">
        <div className={`w-1/5 p-4 flex justify-center ${styles.box}`}>
          <Image src="/hi.png" alt="me" width={200} height={200} className="" />
        </div>
        <div className={`w-2/5 p-4 flex justify-center ${styles.box}`}>
          <Welcome />
        </div>
        <div className={`w-2/5 p-4 flex flex-col ${styles.box}`}>
          <h1>/Users/bt/NAVIGATION/</h1>
          <Link href="/about">cd my-interests</Link>
          <Link href="/portfolio">cd my-portfolio</Link>
          <Link href="/blog">cd my-blog</Link>
        </div>
      </section>
      <section className="flex gap-5">
        <div
          className={`w-1/2 p-4 flex-col justify-center items-center ${styles.box}`}
        >
          <h1>/Users/bt/ABOUT-ME.txt</h1>
          <p>
            My name is --Brandon Thach-- and I am a software developer from
            Chicago, Illinois. I'm currently studying for my Bachelors in
            Computer Science at the University of Illinois Chicago (UIC), where
            I am set to graduate Spring 2026.
          </p>
          <p>
            I enjoy full-stack web application development, web and network
            security, and anything Linux-related.
          </p>
        </div>
        <div
          className={`w-1/2 p-4 flex-col justify-center items-center ${styles.box}`}
        >
          <h1>/Users/bt/SKILLS.txt</h1>
          <ul>
            <li>Languages: JavaScript, TypeScript, Python, C/C++, Java</li>
            <li>
              Frameworks: Next.js (React), SvelteKit, Node.js, Express, Angular
            </li>
            <li>Databases: MongoDB, MySQL, PostgreSQL</li>
            <li>Tools: Git, Docker, Linux, AWS</li>
          </ul>
        </div>
      </section>
      {/* nav links */}
      <section className="flex gap-5">
        <div className={` ${styles.box} w-1/2`}>
          <h1>/Users/bt/EXPERIENCE.txt</h1>
          hello
        </div>

        <div className={` ${styles.box} w-1/2`}>
          <h1>/Users/bt/PROJECTS.txt</h1>
          sdfsd
        </div>
      </section>
      <section>
        <div className=""></div>
        <div
          className={`p-4 flex-col justify-center items-center ${styles.box}`}
        >
          <h1>/Users/bt/VERSE-OF-THE-DAY.tsx</h1>
          <BibleVerse /> (credit: bible-api.com)
        </div>
      </section>

      {/* GAME */}
      <section>
        <div
          className={`p-4 flex-col justify-center items-center ${styles.box}`}
        >
          <h1>/Users/bt/GUESS-THE-BINARY.tsx</h1>
          <Game />
        </div>
      </section>
    </main>
  );
}
