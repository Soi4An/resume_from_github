import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../api/getUser";
import { ValidateUser } from "../../types/ValidateUser";
import { getValidatedUser } from "../../utils/getValidatedUser";
import { Loader } from "../../components/Loader/Loader";
import { Divider } from "../../components/Divider/Divider";

function ResumePage() {
  const { userName } = useParams();
  const [user, setUser] = useState<ValidateUser | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

      {isError && <div>{"THIS USER HASN'T OPTED IN"}</div>}

      {user && (
        <>
          <p>Resume Page</p>

          <p>{`Alias: ${userName}`}</p>
          <img src={user.avatar_url} alt={"avatar"} />
          <Divider />
          <p>{`Name: ${user.name}`}</p>
          <Divider />
          <p>{`Public ropositories: ${user.public_repos}`}</p>
          <Divider />
          <p>{`Authtorized from: ${user.created_at.slice(0, 10)}`}</p>


        </>
      )}
    </main>
  );
}

export default ResumePage;
