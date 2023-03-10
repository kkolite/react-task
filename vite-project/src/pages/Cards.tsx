import MyInput from "../components/UI/input/MyInput";
import CardsList from "../components/CardsList";

/*const Cards = () => {
  return (
    <div>
      <MyInput />
      <CardsList list={[]}/>
    </div>
  );
};*/

//export default Cards;

import { Component } from 'react';
import Airlines from "../API/Airlines";
import { IAirline } from "../data/types";

class Cards extends Component<{}, { list: IAirline[] }> {
  static isActive: NodeJS.Timeout | null

  change(str: string) {
    if (Cards.isActive) {
      clearTimeout(Cards.isActive);
      Cards.isActive = null;
    };
    Cards.isActive = setTimeout(async () => {
      const savedStr = str || 'airlines';
      localStorage.setItem('value', savedStr);
      const list = await Airlines.name(savedStr);
      this.setState({list}, () => console.log(this.state));
    }, 500);
  }

  componentDidMount() {
    console.log('Start!!!');
    const str = localStorage.getItem('value');
    if (str) this.change(str);
  }


  render() {
    return (
      <div className="cards__page">
        <MyInput 
          setSearch={this.change.bind(this)} 
          value={localStorage.getItem('value') || ''}
        />
        <CardsList list={this.state ? this.state.list : []}/>
      </div>
    );
  }
}

export default Cards;