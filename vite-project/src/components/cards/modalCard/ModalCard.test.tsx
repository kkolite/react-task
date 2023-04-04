import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ModalCard } from './ModalCard';
import { mockValue } from '../../../tests/mocks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MyModal } from '../../UI';

const mockStore = configureStore([]);
const initialState = {
  cards: {
    isVisible: true,
    modal: mockValue,
  },
};
const store = mockStore(initialState);

describe('Modal card', () => {
  it('render modal', () => {
    render(
      <Provider store={store}>
        <MyModal>
          <ModalCard />
        </MyModal>
      </Provider>
    );
    expect(screen.getByText(/Desc/i)).toBeInTheDocument();
  });
});
