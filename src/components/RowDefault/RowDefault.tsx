type Props = {
  name: string;
  value: string | number | null;
};

const RowDefault = ({ name, value }: Props) => (
  <div className="resume-row">
    <h3 className="resume-row__name">{`${name}:`}</h3>

    <p className="resume-row__value">{value}</p>
  </div>
);

export default RowDefault;
