import { Repository } from "../../types/Repository";
import LanguagesParts from "../LanguagesParts/LanguagesParts";

type Props = {
  repos: Repository[];
};

const RowLanguages = ({ repos }: Props) => (
  <div className="resume-row">
    <h3 className="resume-row__name">{"Languages"}</h3>

    <LanguagesParts repos={repos} />
  </div>
);

export default RowLanguages;
