import { Repository } from "../../types/Repository";
import CardRepo from "../CardRepo/CardRepo";

type Props = {
  repos: Repository[];
};

function ReposList({ repos }: Props) {
  const visibleRepos = repos
    .sort((repoA, repoB) => {
    const dateA = new Date(repoA.updated_at).getTime();
    const dateB = new Date(repoB.updated_at).getTime();

    return dateB - dateA;
    })
    .slice(0, 10);

  return (
    <ul>
      {visibleRepos.map((repo) => (
        <li>
          <CardRepo key={repo.id} repo={repo} />
        </li>
      ))}
    </ul>
  );
}

export default ReposList;
