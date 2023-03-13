import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import Cards from "./pages/Cards";
import Error from "./pages/Error";
import CardPage from "./pages/CardPage";
import About from "./pages/About";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import MyInput from "./components/UI/input/MyInput";
import App from "./App";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

const mockValue = {
  iata:'',
  icao:'',
  name: '',
  logo_url: '',
  fleet: {
    '1': 2
  }
}

const mockSetSearch = (str: string) => {};

describe('About page', () => {
  it ('render about page', () => {
    render(<About/>);
    expect(screen.getAllByText(/About/));
  })
});

describe('Error page', () => {
  it ('render error page', () => {
    render(<Error/>);
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  })
});

describe('Cards page', () => {
  it('render input with placeholder', () => {
    render(<Cards/>);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).not.toBeRequired();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
  it('render airline card', () => {
    render(<Cards/>);
    expect(screen.findByAltText('logo'));
    expect(screen.findByText('Fleet size'));
    expect(screen.findByText(/iata/i));
    expect(screen.findByText(/icao/i));
  })
})

describe('Card page', () => {
  it ('render card page', () => {
    render(<CardPage/>);
    expect(screen.getByText(/wait/i)).toBeInTheDocument();
  })
})

describe('Card', () => {
  it ('render card', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card airline={mockValue}/>}></Route>
        </Routes>
      </BrowserRouter>
       
    );
    screen.debug();
    expect(screen.getByText(/icao/i)).toBeInTheDocument();
  })
})

describe('Navbar', () => {
  it ('Navbar', () => {
    render(<App/>);
    expect(screen.getByText(/cards/i)).toBeInTheDocument();
  })
})

describe('My Input', () => {
  it ('Placeholder', () => {
    render(<MyInput setSearch={mockSetSearch} value='value' />);
    expect(screen.getByPlaceholderText(/search/i)).toHaveAttribute('type');
  })
})
