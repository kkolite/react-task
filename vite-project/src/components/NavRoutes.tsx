import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Cards from '../pages/Cards';
import Error from '../pages/Error';

const NavRoutes = () => {
  return (
    <Routes>
        {/*<Route path="/posts" element={<Posts/>}/>
        <Route path="/posts/:id" element={<PostPage/>}/>*/}
        <Route path="/about" element={<About/>}/>
        <Route path="/cards" element={<Cards/>}/>
        <Route path="/" element={<Navigate to="/about" replace/>}/>
        <Route path="/*" element={<Error />} />
      </Routes>
  );
};

export default NavRoutes;