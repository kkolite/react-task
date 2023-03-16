import React, { Component } from 'react';
import Validate from '../hoocks/Validate';

interface IProps {
  create: (str: string, date: string) => void;
}

class UserForm extends Component<IProps> {
  inputName: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  submitStatus: React.RefObject<HTMLLabelElement>;
  create: (str: string, date: string) => void;

  constructor(props: IProps) {
    super(props);
    this.create = props.create;
    this.inputName = React.createRef();
    this.inputDate = React.createRef();
    this.submitStatus = React.createRef();
  }

  handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const inputName = this.inputName.current;
    const inputDate = this.inputDate.current;
    const submitStatus = this.submitStatus.current;
    if (!inputName || !inputDate || !submitStatus) return;

    const nameValue = inputName.value;
    const dateValue = inputDate.value;

    const checkArr = [
      {
        regex: /^[a-z0-9_-]{3,15}$/,
        el: inputName,
      },
      {
        regex: /^[a-z0-9_-]{3,15}$/,
        el: inputDate,
      },
    ];

    if (!Validate(checkArr)) return;

    this.create(nameValue, dateValue);
    [inputDate, inputName].forEach((el) => (el.value = ''));

    submitStatus.textContent = 'Success!';
    setTimeout(() => (submitStatus.textContent = ''), 3000);
  }

  render() {
    return (
      <form>
        <label>
          Name, 3-15 symbols:
          <input
            type="text"
            name=""
            id="name"
            ref={this.inputName}
            onFocus={(e) => (e.target.style.borderColor = '')}
          />
        </label>
        <label>
          Date of Birth
          <input
            type="date"
            name=""
            id="date"
            ref={this.inputDate}
            onFocus={(e) => (e.target.style.borderColor = '')}
          />
        </label>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        <label ref={this.submitStatus} />
      </form>
    );
  }
}

export default UserForm;
