import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => (
  <main className="container">
    <div className="not-found-page container__page">
      <h1>{"Page not found"}</h1>

      <Link to={"/"}>{"Go to Home"}</Link>
    </div>
  </main>
);

export default NotFoundPage;
