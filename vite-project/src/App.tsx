import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { EPages } from './data/pages';
import { About, Cards, Form, Error, Navbar } from './pages';

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
