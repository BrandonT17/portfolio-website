export type Project = {
  name: string;
  description: string;
  url: string | null;
  topics: string[];
};

export async function getProjects(
  username: string,
  selectedRepos: string[]
): Promise<Project[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await res.json();
  const projects = data
    .filter((repo: any) => !repo.fork && selectedRepos.includes(repo.name))
    .map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      topics: repo.topics || [],
    }));

  return projects;
}
