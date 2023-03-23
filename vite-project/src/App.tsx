import { useState } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import { EPages } from './data/pages';
import About from './pages/About';
import Cards from './pages/Cards';
import Error from './pages/Error';
import Form from './pages/Form';

const App = () => {
  const [page, setPage] = useState<string>('');

  const currentPage = () => {
    const path = location.pathname.split('/');
    const page = path[1];
    if (page) setPage(page);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar page={page} />,
      children: [
        {
          index: true,
          element: <Navigate to={`/${EPages.ABOUT}`} replace />,
        },
        {
          path: EPages.ABOUT,
          element: <About currentPage={currentPage} />,
        },
        {
          path: EPages.CARDS,
          element: <Cards currentPage={currentPage} />,
        },
        {
          path: EPages.FORM,
          element: <Form currentPage={currentPage} />,
        },
      ],
    },
    {
      path: '/*',
      element: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
