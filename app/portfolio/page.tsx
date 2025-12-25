import { getProjects, Project } from "@/lib/github";

type Props = {
  projects: Project[];
};

export default async function Page() {
  const username = "BrandonT17";
  const repos = ["portfolio-website", "SecureConferenceApp", "bin-packing"];

  const projects: Project[] = await getProjects(username, repos);
  return (
    <div>
      {projects.map((project) => (
        <div key={project.name}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <p>{project.url}</p>
        </div>
      ))}
    </div>
  );
}
