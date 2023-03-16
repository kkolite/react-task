import { Component } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import { EPages } from './data/pages';
import { INullProps } from './data/types';
import About from './pages/About';
import Cards from './pages/Cards';
import Error from './pages/Error';

class App extends Component<INullProps, { page: string }> {
  constructor(props: INullProps) {
    super(props);
    this.state = { page: '' };
  }

  currentPage() {
    const path = location.pathname.split('/');
    const page = path[1];
    if (page) this.setState({ page });
  }

  render() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Navbar page={this.state.page} />,
        children: [
          {
            index: true,
            element: <Navigate to={`/${EPages.ABOUT}`} replace />,
          },
          {
            path: EPages.ABOUT,
            element: <About currentPage={this.currentPage.bind(this)} />,
          },
          {
            path: EPages.CARDS,
            element: <Cards currentPage={this.currentPage.bind(this)} />,
          }
        ]
      },
      {
        path: '/*',
        element: <Error />
      }
    ])
    return (
      <RouterProvider router={router} />
    );
  }
}

export default App;
