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

function ResumePage() {
  const { userName } = useParams();
  const [user, setUser] = useState<ValidateUser | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createdAccount = user?.created_at.slice(0, 10) || null;

  useEffect(() => {
    if (userName) {
      setIsLoading(true);
      setIsError(false);

      getUser(userName)
        .then((res) => setUser(getValidatedUser(res)))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }
  }, []);

  return (
    <main>
      {isLoading && <Loader />}

      {isError && <h2 className="h2">{"THIS USER HASN'T OPTED IN"}</h2>}

      {user && (
        <>
          <RowTitle userName={user.login} />
          <RowAvatar url={user.avatar_url} />
          <Divider />
          <RowDefault name={"Name"} value={user.name} />
          <Divider />
          <RowDefault name={"Public ropositories"} value={user.public_repos} />
          <Divider />
          <RowDefault name={"Authtorized from"} value={createdAccount} />
          <Divider />
        </>
      )}
    </main>
  );
}

export default ResumePage;
