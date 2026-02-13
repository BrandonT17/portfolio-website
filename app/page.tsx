import BibleVerse from "@/components/ui/votd";
import Link from "next/link";
import Image from "next/image";
import Game from "@/components/ui/game";
import Experience from "@/components/ui/experience";
import Featured from "@/components/ui/featured";
import Skills from "@/components/ui/skills";
import ContactForm from "@/components/ui/contact-form";

export default function Home() {
  const links = [
    { href: "https://github.com/BrandonT17", label: "github" },
    { href: "linkedin.com", label: "linkedin" },
    { href: "/", label: "resume" },
    { href: "/about", label: "email" },
  ];
  return (
    <main className="flex flex-col">
      <section className="flex flex-col md:flex-row min-h-60">
        <div
          className="w-auto md:w-1/3 min-h-[150px] flex justify-center boxx relative"
          aria-label="hello"
        >
          <Image src="/hi.png" alt="me" fill className="object-contain" />
        </div>
        <div
          className="w-auto md:w-1/3 flex flex-col justify-center text-center boxx align-center max-h-45"
          aria-label="i am..."
        >
          <div className="my-auto">
            <h1 className="text-xl font-bold">Brandon Meng Thạch</h1>
            <h2 className="text-md">Full-Stack Developer</h2>
            <h3 className="text-sm">Chicago, Illinois</h3>
            <h4 className="text-sm italic">B.S Computer Science</h4>
          </div>
        </div>
        <div
          className="w-auto md:w-1/3 md:flex-col boxx flex justify-between md:justify-center gap-4"
          aria-label="links"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="">
              $ cd <span className="link underline text-lg">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col sm:flex-row">
        <div
          className="w-auto md:w-2/5 flex flex-col boxx gap-4"
          aria-label="bio"
        >
          <p>
            I'm a full-stack developer focused on building modern web
            applications with an emphasis on user-friendliness, security and
            efficiency. Lately, I've been strengthening my backend programming
            skills, particularly with Node.js and Spring Boot. I'm currently
            studying for my Bachelor's in Computer Science at the University of
            Illinois Chicago.
          </p>
          <Link
            href="/about"
            className="w-25 btn flex justify-right mt-auto uppercase"
          >
            Read More
          </Link>
        </div>

        <div className="md:w-3/5 lg:flex lg:flex-col boxx" aria-label="skills">
          <Skills />
        </div>
      </section>

      <section className="flex flex-col md:flex-row">
        <div className="w-auto md:w-1/2 boxx" aria-label="experience">
          <Experience />
        </div>

        <div
          className="w-auto md:w-1/2 boxx flex flex-col items-start gap-4"
          aria-label="featured projects"
        >
          <Featured />
          <Link href="/projects" className="btn w-25 uppercase mt-auto">
            Read More
          </Link>
        </div>
      </section>

      {/* <section> */}
      {/*   <div className="boxx" aria-label="verse of the day"> */}
      {/*     <BibleVerse /> */}
      {/*   </div> */}
      {/* </section> */}
      <section className="flex flex-col md:flex-row">
        <div className="boxx md:w-2/5 w-auto" aria-label="send me a message">
          <ContactForm />
        </div>
        <div
          className="boxx md:w-3/5 w-auto justify-center flex flex-col"
          aria-label="verse of the day"
        >
          <BibleVerse />
        </div>
      </section>
    </main>
  );
}
