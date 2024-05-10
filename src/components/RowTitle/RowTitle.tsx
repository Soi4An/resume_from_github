type Props = {
  userName: string;
};

function RowTitle({ userName }: Props) {
  return (
    <div className="resume-row resume-row--center">
      <h1 className="h1">{`Resume of ${userName}`}</h1>
    </div>
  );
}

export default RowTitle;
