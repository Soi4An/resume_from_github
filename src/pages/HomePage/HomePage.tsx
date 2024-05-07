import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

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
    <main>
      <p>Home Page</p>

      <form onSubmit={handleSubmit}>
        <input value={query} onChange={changeQueryInput} type="text" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default HomePage;
