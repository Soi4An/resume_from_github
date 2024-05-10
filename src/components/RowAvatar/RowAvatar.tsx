import "./RowAvatar.scss";

type Props = {
  url: string;
};

const RowAvatar = ({ url }: Props) => (
  <div className="resume-row resume-row--avatar">
    <img className="avatar" src={url} alt={"avatar"} />
  </div>
);

export default RowAvatar;
