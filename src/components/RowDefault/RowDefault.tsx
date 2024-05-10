type Props = {
  name: string;
  value: string | number | null;
};

function RowDefault({ name, value }: Props) {
  return (
    <div className="resume-row">
      <p className="resume-row__name">{`${name}:`}</p>
      <p>{value}</p>
    </div>
  );
}

export default RowDefault;
