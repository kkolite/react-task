import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cards from './pages/Cards';
import Error from './pages/Error';
import CardPage from './pages/CardPage';
import About from './pages/About';
import Card from './components/Card';
import MyInput from './components/UI/input/MyInput';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Airlines from './API/Airlines';
import CardsList from './components/CardsList';

interface IStore {
  [index: string]: string
}

const mockValue = {
  iata: '',
  icao: '',
  name: '',
  logo_url: '',
  fleet: {
    '1': 2,
  },
};

const mockSetSearch = (str: string) => {
  console.log(str);
};

const mockCurrentPage = () => {console.log('')}

describe('Fetch airlines', () => {
  it('Get correct data by ICAO code', async () => {
    const data = await Airlines.icao('bru');
    expect(data[0].name).toEqual('Belavia');
  });
  it('Get correct data by name', async () => {
    const data = await Airlines.name('belavia');
    expect(data[0].icao).toEqual('BRU');
  });
})

describe('About page', () => {
  it('render about page', () => {
    render(<About currentPage={mockCurrentPage}/>);
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
    render(<Cards currentPage={mockCurrentPage}/>);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).not.toBeRequired();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('render airline card', () => {
    render(<Cards currentPage={mockCurrentPage}/>);
    expect(screen.findByAltText('logo'));
    expect(screen.findByText('Fleet size'));
    expect(screen.findByText(/iata/i));
    expect(screen.findByText(/icao/i));
  });

  it('Change and search', async() => {
    const mockCards = new Cards({currentPage: mockCurrentPage});
    mockCards.change('Bel');
    setTimeout(() => mockCards.change('Belavia'), 10);

    setTimeout(() => {
      const list = mockCards.state.list;
      const str = mockCards.state.str;
      expect(str).toEqual('Belavia');

      if (!list) return;
      expect(list[0].name).toEqual('Belavia');
    }, 1500);
  })

  it('Save to local storage', () => {
    const page = render(<Cards currentPage={mockCurrentPage}/>);
    localStorage.setItem('value', 'abracadabra');
    page.unmount();
    expect(localStorage.getItem('value')).toEqual('');
  })
});

describe('Card list', () => {
  it('Empty list', () => {
    render(<CardsList list={[]}/>);
    expect(screen.getByText(/oops/i)).toBeInTheDocument();
  })
  it('Render list', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardsList list={[mockValue]}/>}></Route>
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/icao/i)).toBeInTheDocument();
  })
})

describe('Card page', () => {
  it('render card page', () => {
    render(<CardPage />);
    expect(screen.getByText(/wait/i)).toBeInTheDocument();
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
