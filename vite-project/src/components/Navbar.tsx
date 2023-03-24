import { Outlet, useLocation } from 'react-router-dom';
import { TEXT } from '../data/text';
import MyLink from './MyLink';

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div className="navbar">
        <p>{TEXT.PAGES.CURRENT} {location.pathname.slice(1)}</p>
        <MyLink to="/about">{TEXT.PAGES.ABOUT}</MyLink>
        <MyLink to="/cards">{TEXT.PAGES.CARDS}</MyLink>
        <MyLink to="/form">{TEXT.PAGES.FORM}</MyLink>
      </div>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
