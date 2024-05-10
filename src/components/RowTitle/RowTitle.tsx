import "./RowTitle.scss";

type Props = {
  userName: string;
};

const RowTitle = ({ userName }: Props) => (
  <div className="resume-row resume-row--title">
    <h1>{`Resume of ${userName}`}</h1>
  </div>
);

export default RowTitle;
