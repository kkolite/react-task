import { Link } from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';

const Error = () => {
  return (
    <div className="error__page">
      <div className="error__container">
        <h2 className="error_h">404</h2>
        <div className="error__text">Oops! Page not found!</div>
        <Link to={'/about'}>
          <MyButton>To Main Page</MyButton>
        </Link>
      </div>
    </div>
  );
};

export default Error;
