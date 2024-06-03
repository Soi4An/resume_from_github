import { useEffect, useState } from "react";
import { calculateLanguages } from "../../utils/calculateLanguages";
import { Loader } from "../Loader/Loader";
import { Repository } from "../../types/Repository";
import { Language } from "../../types/Language";
import { Divider } from "../Divider/Divider";
import CardLanguage from "../CardLanguage/CardLanguage";

type Props = {
  repos: Repository[];
};

function LanguagesParts({ repos }: Props) {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    calculateLanguages(repos)
      .then((res) => setLanguages(res.sort((a, b) => b.percent - a.percent)))
      .catch((err) => {
        setIsError(true);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [repos]);

  return (
    <>
      {isLoading && <Loader />}

      {isError && <p className="h2 text-error">{"Failed to get data"}</p>}

      {!!languages.length && !isError && !isLoading && (
        <div className="list__wrapper">
          <ul className="list">
            {languages.map(({ name, percent }, ind) => (
              <li key={name} >
                {ind !== 0 && <Divider />}
                <CardLanguage langName={name} langPercent={percent}/>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default LanguagesParts;
