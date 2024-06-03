import { Repository } from "../../types/Repository";
import { getDate } from "../../utils/getData";
import "./CardRepo.scss";
type Props = {
  repo: Repository;
};

function CardRepo({ repo }: Props) {
  const { name, html_url, updated_at } = repo;
  const { day, month, year, hours, minutes } = getDate(updated_at);
  const formatedData = `${day}.${month}.${year} ${hours}:${minutes}`;

  return (
    <div className="card-repo">
      <div className="card-repo__title">
        <h4>{name}</h4>
        <p>{formatedData}</p>
      </div>

      <div className="card-repo__content">
        <a className="card-repo__link" href={html_url}>
          {"Open on the GitHub"}
        </a>
      </div>
    </div>
  );
}

export default CardRepo;
