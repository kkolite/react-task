import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cards from './pages/Cards';
import Error from './pages/Error';
import About from './pages/About';
import Card from './components/Card';
import MyInput from './components/UI/input/MyInput';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardsList from './components/CardsList';
import Form from './pages/Form';
import UserList from './components/UserList';
import UserForm from './components/form/UserForm';
import { IPost } from './data/types';

const mockValue = {
  id: '123',
  urls: { small: 'qwerty' },
  user: { name: 'Alex' },
};

const mockPost = {
  name: 'Name',
  date: '2022-11-07',
  region: 'us',
  radio: 'true',
  file: '',
};

const mockSetSearch = (str: string) => {
  console.log(str);
};

const mockSetPost = (obj: IPost) => {
  obj;
};

describe('About page', () => {
  it('render about page', () => {
    render(<About />);
    expect(screen.getAllByText(/About/));
  });
});

describe('Error page', () => {
  it('render error page', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/Oops! We did not find/i)).toBeInTheDocument();
  });
});

describe('Cards page', () => {
  it('render input with placeholder', () => {
    render(<Cards />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).not.toBeRequired();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('render airline card', () => {
    render(<Cards />);
    expect(screen.findByAltText('logo'));
    expect(screen.findByText('Fleet size'));
    expect(screen.findByText(/iata/i));
    expect(screen.findByText(/icao/i));
  });

  it('Save to local storage', () => {
    const page = render(<Cards />);
    const input: HTMLInputElement = screen.getByRole('textbox');
    localStorage.setItem('value', 'abracadabra');
    input.value = 'Test';
    setTimeout(() => {
      page.unmount();
      expect(localStorage.getItem('value')).toEqual('Test');
    }, 600);
  });
});

describe('Card list', () => {
  it('Empty list', () => {
    render(<CardsList list={[]} isLoading={false} />);
    expect(screen.getByText(/oops/i)).toBeInTheDocument();
  });
  it('Render list', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardsList list={[mockValue]} isLoading={false} />}></Route>
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/Alex/i)).toBeInTheDocument();
  });
});

describe('Card', () => {
  it('render card', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card photo={mockValue} />}></Route>
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/Alex/i)).toBeInTheDocument();
  });
});

describe('Navbar', () => {
  it('Navbar', () => {
    render(<App />);
    expect(screen.getByText(/cards/i)).toBeInTheDocument();
  });
});

describe('My Input', () => {
  it('Placeholder', () => {
    render(<MyInput setSearch={mockSetSearch} value="value" />);
    expect(screen.getByPlaceholderText(/search/i)).toHaveAttribute('type');
  });
});

describe('Form page', () => {
  it('Render form', () => {
    render(<Form />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  it('Render list of posts', () => {
    render(<UserList postList={[mockPost]} />);
    expect(screen.getByText(/2022-11-07/i)).toBeInTheDocument();
  });
  it('Handle submit', () => {
    render(<UserForm setPost={mockSetPost} />);
    const nameInput: HTMLInputElement = screen.getByLabelText(/name/i);
    const dateInput: HTMLInputElement = screen.getByLabelText(/date/i);
    const fileInput: HTMLInputElement = screen.getByLabelText(/photo/i);
    const checkInput: HTMLInputElement = screen.getByRole('checkbox');
    const button = screen.getByRole('button');

    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });

    nameInput.value = 'Name';
    dateInput.value = '2022-02-02';
    checkInput.checked = true;
    const event = { target: { files: file } };
    fireEvent.change(fileInput, event);

    button.click();
    expect(checkInput).toBeChecked();
  });
});
