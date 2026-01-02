import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col justify-center md:flex-row">
      <div className="boxx w-2/3" aria-label="About Me">
        From a very young age, I had a strong interest in engineering,
        particularly the problem-solving aspect and how finding the optimal
        solution to a problem can totally change the way someone interacts with
        a piece of technology. Thus, I decided in high school that I would go
        into programming and to study Computer Science. <br /> I spent a lot of
        time experimenting with technology, from Raspberry PI where I used
        Arduinos to create a multiplayer trivia game, to experimenting with
        several different Linux distrobutions to experience the freedom of open
        source technology.
        <br /> I like working on projects that make people's lives easier- I
        think that should be the goal of any programmer. In college, I worked
        with a friend to create an app that allowed members of our church
        community to communicate with one another in a shared space to promote
        online interactions between one another.
      </div>
      <div className="boxx w-1/3 min-h-[400px]">
        <Image src="/portrait.png" fill alt="my uni id" className="" />
      </div>
    </div>
  );
}
