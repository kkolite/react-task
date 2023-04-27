import { Link } from 'react-router-dom';
import { MyButton } from '../components/UI';
import { TEXT } from '../data/text';

export const Error = () => {
  return (
    <div className="error__page">
      <div className="error__container">
        <h2 className="error_h">404</h2>
        <div className="error__text">{TEXT.ERRORS.NOT_FOUND}</div>
        <Link to={'/about'}>
          <MyButton>{TEXT.ERRORS.TO_MAIN}</MyButton>
        </Link>
      </div>
    </div>
  );
};
