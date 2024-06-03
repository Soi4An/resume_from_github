import { Repository } from "../../types/Repository";
import CardRepo from "../CardRepo/CardRepo";
import { Divider } from "../Divider/Divider";
import "./ReposList.scss";

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
    <div className="list__wrapper">
      <ul className="list">
        {visibleRepos.map((repo, ind) => (
          <li key={repo.id} >
            {ind !== 0 && <Divider />}
            <CardRepo repo={repo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReposList;
