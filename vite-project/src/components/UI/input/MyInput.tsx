import classes from './MyInput.module.css'
import { Component } from 'react';
import Airlines from '../../../API/Airlines';

/*class MyInput extends Component {
  //static isActive: NodeJS.Timeout | null

  change(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    console.log(value);

    if (MyInput.isActive) {
      clearTimeout(MyInput.isActive);
      MyInput.isActive = null;
    };
    MyInput.isActive = setTimeout(async () => {
      const list = await Airlines.name(value);
      this.setState({list}, () => console.log(this.state));
    }, 500);
  }

  render() {
    return (
      <div>
        <input className={classes.myInput} type="text" placeholder="Search..." onChange={this.change.bind(this)}/>
      </div>
    );
  }
}*/

interface IProps {
  setSearch: (str: string) => void,
  value?: string
}

const MyInput = ({setSearch, value}: IProps) => {
  return (
    <input className={classes.myInput} type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} defaultValue={value}/>
  );
};

export default MyInput;