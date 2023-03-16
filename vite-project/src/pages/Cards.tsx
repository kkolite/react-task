import MyInput from '../components/UI/input/MyInput';
import CardsList from '../components/CardsList';
import { Component } from 'react';
import Airlines from '../API/Airlines';
import { IAirline } from '../data/types';

interface IProps {
  currentPage: () => void;
}

class Cards extends Component<IProps, { list: IAirline[] | null; str: string }> {
  static isActive: NodeJS.Timeout | null;

  constructor(props: IProps) {
    super(props);
    props.currentPage();
    this.state = { 
      list: null,
      str: localStorage.getItem('value') || '' 
    };

    addEventListener('beforeunload', () => {
      this.saveToLocalStorage();
    })
  }

  change(str: string) {
    if (Cards.isActive) {
      clearTimeout(Cards.isActive);
      Cards.isActive = null;
    }
    Cards.isActive = setTimeout(async () => {
      this.setState({ list: null, str });
      const list = await Airlines.name(str || 'airlines');
      this.setState({ list });
    }, 500);
  }

  saveToLocalStorage() {
    const str = this.state.str;
    localStorage.setItem('value', str);
  }

  componentDidMount() {
    const str = localStorage.getItem('value');
    if (str) this.change(str);
  }

  componentWillUnmount() {
    this.saveToLocalStorage();
  }

  render() {
    return (
      <div className="cards__page">
        <MyInput setSearch={this.change.bind(this)} value={localStorage.getItem('value') || ''} />
        <CardsList list={this.state ? this.state.list : null} />
      </div>
    );
  }
}

export default Cards;
