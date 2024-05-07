import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../api/getUser";

function ResumePage() {
  const { userName } = useParams();

  useEffect(() => {
    if (userName) {
      getUser(userName)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }, []);
  return (
    <main>
    <p>Resume Page</p>
    <p>{userName}</p>
  </main>
  );
}

export default ResumePage;
