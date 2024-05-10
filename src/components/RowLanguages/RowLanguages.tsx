import { Repository } from "../../types/Repository";
import LanguagesParts from "../LanguagesParts/LanguagesParts";

type Props = {
  repos: Repository[];
};

const RowLanguages = ({ repos }: Props) => (
  <div className="resume-row">
    <p className="resume-row__name">{"Languages"}</p>

    <LanguagesParts repos={repos} />
  </div>
);

export default RowLanguages;
