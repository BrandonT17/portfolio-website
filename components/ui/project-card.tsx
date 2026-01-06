import { Project } from "@/lib/github";
import Image from "next/image";
import Link from "next/link";

// defines new type with project property -> since components receive props as an object in a type-safe manner
type ProjectCardProps = {
  project: Project;
};

const DEFAULT_IMG = "/pixel-portrait.png";

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, url, topics, image, collaborators } = project;

  const imageSrc = image?.[0] || DEFAULT_IMG;

  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 md:text-start text-center boxx">
      <div className="flex flex-col md:w-3/5 p-3 justify-center gap-1 md:order-1 order-2">
        <h1 className="font-bold text-xl uppercase ">"{name}"</h1>
        <p>{description}</p>
        <p className="flex flex-wrap gap-2 text-sm md:justify-start justify-center pt-2">
          {topics.map((topic) => (
            <span key={topic} className="border-3 border-double px-1">
              {topic}
            </span>
          ))}
        </p>
      </div>
      <div className="flex md:w-2/5 md:border-l justify-center h-50 p-4 md:order-2 order-1">
        <div className="relative w-full">
          <Image src={imageSrc} alt="img" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}
