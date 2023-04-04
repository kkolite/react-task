import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardsList } from './CardsList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { mockValue } from '../../../tests/mocks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Card list', () => {
  it('Empty list', () => {
    const initialState = {
      cards: {
        cards: [],
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <CardsList />
      </Provider>
    );
    expect(screen.getByText(/oops/i)).toBeInTheDocument();
  });

  it('Render list', () => {
    const initialState = {
      cards: {
        cards: [mockValue],
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CardsList />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Alex/i)).toBeInTheDocument();
  });
});
