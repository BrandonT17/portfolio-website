import { getProjects, Project } from "@/lib/github";
import { privateRepos } from "@/data/priv-repos";

type Props = {
  projects: Project[];
};

export default async function Page() {
  // only PUBLIC repos
  const username = "BrandonT17";
  const featured = ["portfolio-website", "bin-packing", "ok-weather-app"];

  const publicRepos: Project[] = await getProjects(username, featured);

  const projects: Project[] = [...publicRepos, ...privateRepos];

  return (
    <div>
      <div className="boxx">
        For more projects, check out my GitHub: github.com/BrandonT17
      </div>
      <div className="grid grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className="boxx">
            <h1 className="font-bold">{project.name}</h1>
            <p>{project.description}</p>
            <a className="text-red-600 font-semibold" href={project.url}>{project.url}</a>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.topics.map((topic) => (
                <span key={topic} className="text-xs btn">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
