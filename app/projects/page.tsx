import { getProjects, Project } from "@/lib/github";
import { repos } from "@/data/repos";
import ProjectCard from "@/components/ui/project-card";

type Props = {
  projects: Project[];
};

export default async function Page() {
  // only PUBLIC repos
  const username = "BrandonT17";
  const featured = [""];

  const publicRepos: Project[] = await getProjects(username, featured);

  const projects: Project[] = [...publicRepos, ...repos];

  return (
    <div>
      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
