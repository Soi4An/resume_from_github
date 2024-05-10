import { useEffect, useState } from "react";
import { calculateLanguages } from "../../utils/calculateLanguages";
import { Loader } from "../Loader/Loader";
import { Repository } from "../../types/Repository";
import { Language } from "../../types/Language";
import RowDefault from "../RowDefault/RowDefault";

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
      .then((res) => setLanguages(res))
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

      {!!languages.length &&
        !isError &&
        !isLoading &&
        languages.map(({ name, percent }) => (
          <RowDefault key={name} name={name} value={percent + "%"} />
        ))}
    </>
  );
}

export default LanguagesParts;
