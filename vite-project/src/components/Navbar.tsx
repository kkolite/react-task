import { Outlet, useLocation } from 'react-router-dom';
import MyLink from './MyLink';

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div className="navbar">
        <p>Current page: {location.pathname.slice(1)}</p>
        <MyLink to="/about">About</MyLink>
        <MyLink to="/cards">Cards</MyLink>
        <MyLink to="/form">Form</MyLink>
      </div>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
