import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/about">About</Link>
      <Link to="/cards">Cards</Link>
    </div>
  );
};

export default Navbar;