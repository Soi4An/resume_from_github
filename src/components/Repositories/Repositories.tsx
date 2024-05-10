import { useEffect, useState } from "react";
import { Repository } from "../../types/Repository";
import { getRerositories } from "../../api/getRerositories";
import { Loader } from "../Loader/Loader";
import { Divider } from "../Divider/Divider";
import RowLanguages from "../RowLanguages/RowLanguages";
import RowReposList from "../RowReposList/RowReposList";

type Props = {
  userName: string;
};

function Repositories({ userName }: Props) {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getRerositories(userName)
      .then((res) => setRepos(res))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [userName]);

  return (
    <>
      {isLoading && <Loader />}

      {isError && (
        <p className="h2 text-error">
          {"Failed to get data about repositories"}
        </p>
      )}

      {!!repos.length && !isError && !isLoading && (
        <>
          <Divider />
          <RowLanguages repos={repos} />
          <Divider />
          <RowReposList repos={repos} />
        </>
      )}
    </>
  );
}

export default Repositories;
