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
      const list = await Airlines.name(str);
      this.setState({list}, () => console.log(this.state));
    }, 500);
  }

  render() {
    return (
      <div>
        <MyInput setSearch={this.change.bind(this)}/>
        <CardsList list={this.state ? this.state.list : []}/>
      </div>
    );
  }
}

export default Cards;