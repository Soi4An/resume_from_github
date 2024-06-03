import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Divider } from "../../components/Divider/Divider";
import "./HomePage.scss";

function HomePage() {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  // const location = useLocation();

  const changeQueryInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value.trim();

    if (query !== newQuery) {
      setQuery(newQuery);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (query) {
      navigate(`/${query}`);
    }
  };

  return (
    <main className="container">
      <div className="container__page">
        <div className="home__title">
          <h1>{"MY GITHUB RÉSUMÉ"}</h1>
        </div>

        <Divider />

        <p className="home__paragraf">
          {
            "This project can help you find information about a specific user on GitHub. You just need to write the user's nickname in the input field below and click Submit button."
          }
        </p>

        <form onSubmit={handleSubmit} className="home__form">
          <input
            className="home__input"
            placeholder="Write the nickname"
            value={query}
            onChange={changeQueryInput}
            type="text"
          />
          <button className="home__button" type="submit">
            Submit
          </button>
          {/* <Link to={`/${query}`} className="home__button">
            {'Submit'}
          </Link> */}
        </form>
      </div>
    </main>
  );
}

export default HomePage;
