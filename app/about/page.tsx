import Image from "next/image";
import BibleVerse from "@/components/ui/votd";

export default function Page() {
  return (
    <div className="flex flex-col ">
      <section className="flex flex-col md:flex-row">
        <div className="boxx md:w-2/3 w-auto" aria-label="About Me">
          <h1 className="font-bold font-mono text-sm">$ cat early-life.txt</h1>
          <p className="pl-4 border-l-2 ml-0.75 pb-2">
            From a young age, I knew I wanted to pursue an engineering career: I
            looked at slow, broken things and thought of how I could fix them
            and make them better. I interacted with mobile and desktop apps and
            wondered how they worked. I wanted to know how data got from one
            place to another. In high school, I took my first Computer Science
            course and have been pursuing programming knowledge ever since.
          </p>
          <h1 className="font-bold font-mono text-sm">$ cat interests.txt</h1>
          <p className="pl-5 border-l-2 ml-0.75 pb-2">
            I enjoy working on full-stack web applications, learning about
            network security, and playing around with open-source projects such
            as Neovim, Linux distributions, OpenSSH, and CLI-driven TUIs like
            spotify-tui. I also enjoy spending hours researching plugins that I
            never end up using. I would like to use my earnings to help the poor
            and take care of my family.
          </p>
          <h1 className="font-bold font-mono text-sm">$ cat goals.txt</h1>
          <p className="pl-4 border-l-2 ml-0.75">
            My dream is to become a software developer and use my skills to help
            make people's lives easier. I want to work on enterprise or web
            applications that people interact with on a daily basis, making them
            cleaner, simpler, faster, and more secure. I also want to take my
            wife Andrea on a lot of trips and collect a bunch of ThinkPads so I
            can use them to teach my kids Linux.
          </p>
        </div>
        <div className="boxx md:w-1/3 w-auto min-h-[400px]">
          <Image src="/portrait.png" fill alt="my uni id" className="" />
        </div>
      </section>
    </div>
  );
}
