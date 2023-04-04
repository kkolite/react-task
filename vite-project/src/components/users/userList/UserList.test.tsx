import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserList } from './UserList';
import { mockPost } from '../../../tests/mocks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const initialState = {
  users: {
    cards: [mockPost],
  },
};
const store = mockStore(initialState);

describe('User list', () => {
  it('Render list of posts', () => {
    render(
      <Provider store={store}>
        <UserList />
      </Provider>
    );
    expect(screen.getByText(/2022-11-07/i)).toBeInTheDocument();
  });
});
