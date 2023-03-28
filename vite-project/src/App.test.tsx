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
import UserForm from './components/UserForm';
import { IPost } from './data/types';
import DateValidate from './validate/DateValidate';

const mockValue = {
  iata: '',
  icao: '',
  name: '',
  logo_url: '',
  fleet: {
    '1': 2,
  },
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

const mockCurrentPage = () => {
  console.log('');
};

const mockSetPost = (obj: IPost) => {
  obj;
};

describe('About page', () => {
  it('render about page', () => {
    render(<About currentPage={mockCurrentPage} />);
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
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});

describe('Cards page', () => {
  it('render input with placeholder', () => {
    render(<Cards currentPage={mockCurrentPage} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).not.toBeRequired();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('render airline card', () => {
    render(<Cards currentPage={mockCurrentPage} />);
    expect(screen.findByAltText('logo'));
    expect(screen.findByText('Fleet size'));
    expect(screen.findByText(/iata/i));
    expect(screen.findByText(/icao/i));
  });

  it('Change and search', async () => {
    const mockCards = new Cards({ currentPage: mockCurrentPage });
    mockCards.change('Bel');
    setTimeout(() => mockCards.change('Belavia'), 10);

    setTimeout(() => {
      const list = mockCards.state.list;
      const str = mockCards.state.str;
      expect(str).toEqual('Belavia');

      if (!list) return;
      expect(list[0].name).toEqual('Belavia');
    }, 1500);
  });

  it('Save to local storage', () => {
    const page = render(<Cards currentPage={mockCurrentPage} />);
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
    render(<CardsList list={[]} />);
    expect(screen.getByText(/oops/i)).toBeInTheDocument();
  });
  it('Render list', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardsList list={[mockValue]} />}></Route>
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/icao/i)).toBeInTheDocument();
  });
});

describe('Card', () => {
  it('render card', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card airline={mockValue} />}></Route>
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/icao/i)).toBeInTheDocument();
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
    render(<Form currentPage={mockCurrentPage} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  it('Set new post', () => {
    const formPage = new Form({ currentPage: mockCurrentPage });
    formPage.setPost(mockPost);
    expect(formPage.state.postList.length).toEqual(1);
  });
  it('Render list of posts', () => {
    render(<UserList postList={[mockPost]} />);
    expect(screen.getByText('Date: 2022-11-07')).toBeInTheDocument();
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
  it('Validate date', () => {
    const date = {} as HTMLInputElement;
    const label = {} as HTMLLabelElement;
    date.value = '2022-02-02';
    expect(DateValidate(date, label)).toBeTruthy();
  });
});
