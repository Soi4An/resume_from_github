import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => (
  <main className="container not-found-page">
    <h1>{"Page not found"}</h1>

    {/* <a href="/">
      {"Go to home"}
    </a> */}

    <Link to={"/"}>
      {"Go to Home"}
    </Link>
  </main>
);

export default NotFoundPage;
