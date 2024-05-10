import { Repository } from "../../types/Repository";
import { getData } from "../../utils/getData";

type Props = {
  repo: Repository;
};

function CardRepo({ repo }: Props) {
  const { name, html_url, updated_at } = repo;
  const { day, month, year, hours, minutes } = getData(updated_at);
  const formatedData = `${day}.${month}.${year} ${hours}:${minutes}`;

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p>{formatedData}</p>
      </div>

      <div>
        <a href={html_url}>{'Open on the GitHub'}</a>
      </div>
    </div>
  );
}

export default CardRepo;
