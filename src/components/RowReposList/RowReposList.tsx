import { Repository } from "../../types/Repository";
import ReposList from "../ReposList/ReposList";

type Props = {
  repos: Repository[];
};

const RowReposList = ({ repos }: Props) => (
  <div className="resume-row">
    <h3 className="resume-row__name">{"Last 10 edited public repos:"}</h3>

    <ReposList repos={repos} />
  </div>
);

export default RowReposList;
