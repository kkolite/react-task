import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import CardPage from '../pages/CardPage';
import Cards from '../pages/Cards';
import Error from '../pages/Error';
import Navbar from './Navbar';

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Navigate to="/about" replace />} />
        <Route path="about" element={<About />} />
        <Route path="cards" element={<Cards />} />
        <Route path="cards/:icao" element={<CardPage />} />
      </Route>
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default NavRoutes;
