import { Outlet } from 'react-router-dom';
import MyLink from './MyLink';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <MyLink to="/about">About</MyLink>
        <MyLink to="/cards">Cards</MyLink>
      </div>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
