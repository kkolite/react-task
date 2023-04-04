import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { UserForm } from './UserForm';
import { act } from 'react-dom/test-utils';

const mockStore = configureStore([]);
const store = mockStore({});

describe('Form page', () => {
  it('Handle submit', async () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );

    const nameInput: HTMLInputElement = await screen.findByLabelText(/name/i);
    const dateInput: HTMLInputElement = await screen.findByLabelText(/date/i);
    const fileInput: HTMLInputElement = await screen.findByLabelText(/photo/i);
    const checkInput: HTMLInputElement = await screen.findByRole('checkbox');
    const button = await screen.findByRole('button');

    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });

    nameInput.value = 'Name';
    dateInput.value = '2022-02-02';
    checkInput.checked = true;
    const event = { target: { files: file } };
    fireEvent.change(fileInput, event);
    button.click();

    await act(() => {
      expect(checkInput).toBeChecked();
    });
  });
});
