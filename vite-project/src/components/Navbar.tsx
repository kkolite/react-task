import { Outlet } from 'react-router-dom';
import MyLink from './MyLink';

interface IProps {
  page: string;
}

const Navbar = ({ page }: IProps) => {
  return (
    <>
      <div className="navbar">
        <p>Current page: {page}</p>
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
