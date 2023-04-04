import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { mockValue } from '../../../tests/mocks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const store = mockStore({});

describe('Card', () => {
  it('render card', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Card photo={mockValue} />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Alex/i)).toBeInTheDocument();
  });
});
