import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Cards, Error, About, Form } from '../pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/index';

describe('About page', () => {
  it('render about page', () => {
    render(<About />);
    expect(screen.getAllByText(/About/));
  });
});

describe('Error page', () => {
  it('render error page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Oops! We did not find/i)).toBeInTheDocument();
  });
});

describe('Cards page', () => {
  it('render input with placeholder', () => {
    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).not.toBeRequired();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('render airline card', () => {
    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );
    expect(screen.findByAltText('logo'));
    expect(screen.findByText('Fleet size'));
    expect(screen.findByText(/iata/i));
    expect(screen.findByText(/icao/i));
  });
});

describe('Form page', () => {
  it('Render form', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
