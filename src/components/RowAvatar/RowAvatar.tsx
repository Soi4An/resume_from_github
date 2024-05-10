type Props = {
  url: string;
};

function RowAvatar({ url }: Props) {
  return (
    <div className="resume-row resume-row--center">
      <img src={url} alt={"avatar"} />
    </div>
  );
}

export default RowAvatar;
