import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
//import CardPage from '../pages/CardPage';
import Cards from '../pages/Cards';
import Error from '../pages/Error';
import Navbar from './Navbar';
import { Component } from 'react';

class NavRoutes extends Component<unknown, { page: string }> {
  constructor(props: unknown) {
    super(props);
    this.state = { page: '' };
  }

  currentPage() {
    const path = location.pathname.split('/');
    const page = path[1];
    if (page) this.setState({ page });
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Navbar page={this.state.page} />}>
          <Route index element={<Navigate to="/about" replace />} />
          <Route path="about" element={<About currentPage={this.currentPage.bind(this)} />} />
          <Route path="cards" element={<Cards currentPage={this.currentPage.bind(this)} />} />
          {/*<Route path="cards/:icao" element={<CardPage />} />*/}
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    );
  }
}

export default NavRoutes;
