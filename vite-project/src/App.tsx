import { createBrowserRouter, Navigate, Route, RouterProvider, Routes } from 'react-router-dom';
import { EPages } from './data/pages';
import { About, Cards, Form, Error, Navbar } from './pages';
import { createStaticRouter,  } from 'react-router-dom/server';

const routerArr = [
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
]

export const App = () => {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path={`/${EPages.ABOUT}`} element={<About/>}/>
        <Route path={`/${EPages.CARDS}`} element={<Cards/>}/>
        <Route path={`/${EPages.FORM}`} element={<Form/>}/>
        <Route path="/" element={<Navigate to="/about" replace/>}/>
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
    
  );
};

export default App;
