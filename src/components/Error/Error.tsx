import { Link } from 'react-router-dom';
import { Divider } from '../Divider/Divider';
import './Error.scss';

const Error = () => (
  <div>
    <Divider />

    <h2 className="error__title h2">{"THIS USER HASN'T OPTED IN"}</h2>

    <div className="error__content">
      {/* <a className="error__link" href={"/"}>{"Go back"}</a> */}
      <Link to={'/'} className="error__link">{"Go back"}</Link>
    </div>
  </div>
);

export default Error;
