import BibleVerse from "@/components/ui/votd";
import Link from "next/link";
import Image from "next/image";
import Welcome from "@/components/ui/welcome";
import Game from "@/components/ui/game";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* TOP SECTION */}
      <section className="flex flex-col md:flex-row">
        <div
          className="w-full md:w-1/5 flex justify-center boxx relative"
          aria-label="Welcome"
        >
          <Image src="/hi.png" alt="me" fill className=" object-center" />
        </div>

        <div className="w-full md:w-2/5 flex justify-center boxx">
          <Welcome />
        </div>

        <div className="w-full md:w-2/5 flex flex-col boxx">
          <h1>/Users/bt/NAVIGATION/</h1>
          <Link href="/about">cd my-interests</Link>
          <Link href="/portfolio">cd my-portfolio</Link>
          <Link href="/blog">cd my-blog</Link>
        </div>
      </section>

      {/* ABOUT & SKILLS */}
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start boxx">
          <h1>/Users/bt/ABOUT-ME.txt</h1>
          <p>
            My name is --Brandon Thach-- and I am a software developer from
            Chicago, Illinois. I'm currently studying for my Bachelors in
            Computer Science at the University of Illinois, Chicago (UIC), where
            I am set to graduate Spring 2026.
          </p>
          <p>
            I enjoy full-stack web application development, web and network
            security, and anything Linux-related.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-start boxx">
          <h1>/Users/bt/SKILLS.txt</h1>
          <ul className="list-disc pl-5">
            <li>Languages: JavaScript, TypeScript, Python, C/C++, Java</li>
            <li>
              Frameworks: Next.js (React), SvelteKit, Node.js, Express, Angular
            </li>
            <li>Databases: MongoDB, MySQL, PostgreSQL</li>
            <li>Tools: Git, Docker, Linux, AWS</li>
          </ul>
        </div>
      </section>

      {/* EXPERIENCE & PROJECTS */}
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 boxx">
          <h1>/Users/bt/EXPERIENCE.txt</h1>
          hello
        </div>

        <div className="w-full md:w-1/2 boxx">
          <h1>/Users/bt/PROJECTS.txt</h1>
          sdfsd
        </div>
      </section>

      {/* VERSE OF THE DAY */}
      <section className="flex flex-col">
        <div className="flex flex-col justify-center items-start boxx">
          <h1>/Users/bt/VERSE-OF-THE-DAY.tsx</h1>
          <BibleVerse /> {/* credit: bible-api.com */}
        </div>
      </section>

      {/* GAME */}
      <section className="flex flex-col">
        <div className="flex flex-col justify-center items-start boxx">
          <h1>/Users/bt/GUESS-THE-BINARY.tsx</h1>
          <Game />
        </div>
      </section>
    </main>
  );
}
