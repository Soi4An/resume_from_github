import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../api/getUser";
import { ValidateUser } from "../../types/ValidateUser";
import { getValidatedUser } from "../../utils/getValidatedUser";
import { Loader } from "../../components/Loader/Loader";
import { Divider } from "../../components/Divider/Divider";
import RowAvatar from "../../components/RowAvatar/RowAvatar";
import RowDefault from "../../components/RowDefault/RowDefault";
import RowTitle from "../../components/RowTitle/RowTitle";
import Repositories from "../../components/Repositories/Repositories";
import Error from "../../components/Error/Error";
import "./ResumePage.scss";
import { getDate } from "../../utils/getData";

function ResumePage() {
  const { userName } = useParams();
  const [user, setUser] = useState<ValidateUser | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const gotDate = user ? getDate(user?.created_at) : null;
  const formatedData = gotDate
    ? `${gotDate.day}.${gotDate.month}.${gotDate.year}`
    : null;

  useEffect(() => {
    if (userName) {
      setIsLoading(true);
      setIsError(false);

      getUser(userName)
        .then((res) => setUser(getValidatedUser(res)))
        .catch((err) => {
          setIsError(true);
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
  }, [userName]);

  return (
    <main className="container">
      <div className="container__page">
        <RowTitle userName={userName || "user"} />

        {isLoading && <Loader />}

        {isError && <Error />}

        {user && !isError && !isLoading && (
          <>
            <RowAvatar url={user.avatar_url} />
            <RowDefault
              name={"Name"}
              value={user.name || `${user.login} (name is missing)`}
            />
            <Divider />
            <RowDefault
              name={"Public ropositories"}
              value={user.public_repos}
            />
            <Divider />
            <RowDefault name={"Authtorized from"} value={formatedData} />

            <Repositories userName={user.login} />
          </>
        )}
      </div>
    </main>
  );
}

export default ResumePage;
