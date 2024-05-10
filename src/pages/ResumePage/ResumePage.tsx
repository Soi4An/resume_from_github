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

import "./ResumePage.scss";

const userMy = {
  login: "Soi4An",
  id: 123530320,
  node_id: "U_kgDOB1zsUA",
  avatar_url: "https://avatars.githubusercontent.com/u/123530320?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Soi4An",
  html_url: "https://github.com/Soi4An",
  followers_url: "https://api.github.com/users/Soi4An/followers",
  following_url: "https://api.github.com/users/Soi4An/following{/other_user}",
  gists_url: "https://api.github.com/users/Soi4An/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Soi4An/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Soi4An/subscriptions",
  organizations_url: "https://api.github.com/users/Soi4An/orgs",
  repos_url: "https://api.github.com/users/Soi4An/repos",
  events_url: "https://api.github.com/users/Soi4An/events{/privacy}",
  received_events_url: "https://api.github.com/users/Soi4An/received_events",
  type: "User",
  site_admin: false,
  name: "Anton Soich",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 129,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2023-01-25T04:24:52Z",
  updated_at: "2024-04-29T07:45:52Z",
};

function ResumePage() {
  const { userName } = useParams();
  const [user, setUser] = useState<ValidateUser | null>(userMy);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createdAccount = user?.created_at.slice(0, 10) || null;

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

        {isError && <h2 className="h2">{"THIS USER HASN'T OPTED IN"}</h2>}

        {user && !isError && !isLoading && (
          <>
            <RowAvatar url={user.avatar_url} />
            <RowDefault name={"Name"} value={user.name} />
            <Divider />
            <RowDefault
              name={"Public ropositories"}
              value={user.public_repos}
            />
            <Divider />
            <RowDefault name={"Authtorized from"} value={createdAccount} />

            <Repositories userName={user.login} />
          </>
        )}
      </div>
    </main>
  );
}

export default ResumePage;
