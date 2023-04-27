import { Navigate, Route, Routes } from 'react-router-dom';
import { EPages } from './data/pages';
import { About, Cards, Form, Error, Navbar } from './pages';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={`/${EPages.ABOUT}`} element={<About />} />
        <Route path={`/${EPages.CARDS}`} element={<Cards />} />
        <Route path={`/${EPages.FORM}`} element={<Form />} />
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
