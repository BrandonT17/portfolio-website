import BibleVerse from "@/components/ui/votd";
import Link from "next/link";
import Image from "next/image";
import Welcome from "@/components/ui/welcome";
import { experiences } from "@/data/experience";
import Game from "@/components/ui/game";
import Experience from "@/components/ui/experience";
import Featured from "@/components/ui/featured";
import Skills from "@/components/ui/skills";
import ContactForm from "@/components/ui/contact-form";

export default function Home() {
  const links = [
    { href: "/about", label: "cd about-me", description: "" },
    { href: "/projects", label: "cd my-projects", description: "" },
    { href: "/blog", label: "cd my-blog", description: "" },
    {
      href: "/resume.pdf",
      label: "open RESUME.pdf",
      description: "[!]",
    },
    {
      href: "https://github.com/BrandonT17",
      label: "open my-github",
      description: "[!]",
    },
  ];

  return (
    <main className="flex flex-col">
      {/* TOP SECTION */}
      <section className="flex flex-col md:flex-row">
        <div
          className="w-auto md:w-1/3 min-h-[150px] flex justify-center boxx relative"
          aria-label="welcome"
        >
          <Image src="/hi.png" alt="me" fill className="object-contain" />
        </div>

        <div
          className="w-auto md:w-1/3 flex justify-center boxx"
          aria-label="neofetch"
        >
          <Welcome />
        </div>

        <div
          className="w-auto md:w-1/3 flex flex-col boxx gap-4 justify-center"
          aria-label="navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="btn px-1 font-bold"
            >
              $ {link.label} <span className="blink">{link.description}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT & SKILLS */}
      <section className="flex flex-col md:flex-row">
        <div
          className="w-auto md:w-2/5 flex flex-col items-start boxx"
          aria-label="bio"
        >
          <p>
            My name is <em>--Brandon Thach--</em> and I am a{" "}
            <b>full-stack software developer</b> based in{" "}
            <b>Chicago, Illinois</b>. I am pursuing a Bachelor's degree in
            Computer Science at the University of Illinois Chicago, where I'm
            set to graduate in Spring 2026.
          </p>
          <p>
            I build complete web applications with a strong emphasis on
            security. I also enjoy experimenting with utility tools and the
            Linux operating system.
            <span>
              <Link href="/about" className="link">
                {" "}
                [Read More]
              </Link>
            </span>
          </p>
        </div>

        <div className="md:w-3/5 flex flex-col boxx" aria-label="skills">
          <Skills />
        </div>
      </section>

      {/* EXPERIENCE & PROJECTS */}
      <section className="flex flex-col md:flex-row">
        <div className="w-auto md:w-1/2 boxx" aria-label="experience">
          {/* <h1>/Users/bt/EXPERIENCE.txt</h1> */}
          <Experience />
        </div>

        <div className="w-auto md:w-1/2 boxx" aria-label="featured projects">
          {/* <h1>/Users/bt/PROJECTS.txt</h1> */}
          <Featured />
          <Link href="/projects" className="link">
            {" "}
            [Read More]
          </Link>
        </div>
      </section>

      <section>
        <div className="boxx" aria-label="verse of the day">
          <BibleVerse />
        </div>
      </section>
      <section className="flex flex-col md:flex-row">
        {/* CONTACT ME FORM */}
        <div className="boxx md:w-2/5 w-auto" aria-label="send me a message">
          <ContactForm />
        </div>
        <div
          className="flex flex-col boxx md:w-3/5 w-auto align-middle gap-2"
          aria-label="play a game"
        >
          <Game />
          <span className="text-center">
            <Link href="/ascii-chart.pdf" className="link uppercase">
              [binary-to-ascii-chart.pdf]
            </Link>
          </span>
        </div>
      </section>
    </main>
  );
}
