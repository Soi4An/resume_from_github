import "./CardLanguage.scss";

type Props = {
  langName: string;
  langPercent: number;
};

const CardLanguage = ({ langName, langPercent }: Props) => (
  <div className="card-lang">
    <p className="card-lang__name">{langName}</p>
    <p className="card-lang__value">{langPercent + "%"}</p>
  </div>
);

export default CardLanguage;
