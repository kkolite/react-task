import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import { EPages } from './data/pages';
import About from './pages/About';
import Cards from './pages/Cards';
import Error from './pages/Error';
import Form from './pages/Form';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Navigate to={`/${EPages.ABOUT}`} replace />,
        },
        {
          path: EPages.ABOUT,
          element: <About />,
        },
        {
          path: EPages.CARDS,
          element: <Cards />,
        },
        {
          path: EPages.FORM,
          element: <Form />,
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
