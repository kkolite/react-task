import React, { Component } from 'react';

interface IProps {
  create: (str: string, date: string) => void
}
  
class UserForm extends Component<IProps> {
  inputName: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  create: (str: string, date: string) => void;

  constructor(props: IProps) {
    super(props);
    this.create = props.create;
    this.inputName = React.createRef();
    this.inputDate = React.createRef();
  }

  handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (this.inputName.current && this.inputDate.current)
    this.create(this.inputName.current.value, this.inputDate.current.value)
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="" id="name" ref={this.inputName} />
        </label>
        <label>
          Date of Birth
          <input type="date" name="" id="date" ref={this.inputDate}/>
        </label>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    );
  }
}
  
export default UserForm;