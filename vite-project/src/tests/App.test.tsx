import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MyInput } from '../components/UI';
import App from '../App';
import configureStore from 'redux-mock-store';
import { mockValue } from './mocks';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);
const initialState = {
  cards: {
    isVisible: false,
    cards: [mockValue],
  },
  users: {
    cards: [],
  },
};
const store = mockStore(initialState);

describe('Navbar', () => {
  it('Navbar', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText(/cards/i)).toBeInTheDocument();
  });
});

describe('My Input', () => {
  it('Placeholder', () => {
    render(
      <Provider store={store}>
        <MyInput />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/search/i)).toHaveAttribute('type');
  });
});
