import { Repository } from "../../types/Repository";
import ReposList from "../ReposList/ReposList";

type Props = {
  repos: Repository[];
};

const RowReposList = ({ repos }: Props) => (
  <div className="resume-row">
    <p className="resume-row__name">{"Last 10 edited public repos:"}</p>

    <ReposList repos={repos} />
  </div>
);

export default RowReposList;
