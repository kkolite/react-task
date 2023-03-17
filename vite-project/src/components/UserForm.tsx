import React, { Component } from 'react';
import { IInput, IInputObj, IPost } from '../data/types';
import Validate from '../hoocks/Validate';

interface IProps {
  setPost: (obj: IPost) => void;
}

class UserForm extends Component<IProps> {
  inputName: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  submitButton: React.RefObject<HTMLButtonElement>;
  submitStatus: React.RefObject<HTMLLabelElement>;
  setPost: (obj: IPost) => void;

  constructor(props: IProps) {
    super(props);
    this.setPost = props.setPost;
    this.inputName = React.createRef();
    this.inputDate = React.createRef();
    this.submitStatus = React.createRef();
    this.submitButton = React.createRef();
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const submitStatus = this.submitStatus.current;
    const submitButton = this.submitButton.current;
    const elObj = {
      name: {
        el: this.inputName.current,
        regex: /^[a-z0-9_-]{3,15}$/,
      },
      date: {
        el: this.inputDate.current,
        regex: /^[a-z0-9_-]{3,15}$/,
      }
    } as IInputObj;

    if (!submitStatus || !submitButton) return;
    
    const elArr = Object.values(elObj);
    if (!Validate(elArr)) {
      this.afterInvalid(submitButton, elArr);
      return;
    }

    this.createPost(elObj);
    this.afterValid(submitButton, submitStatus, elArr);
  }

  afterValid(button: HTMLButtonElement, status: HTMLLabelElement, arr: IInput[]) {
    arr.forEach((input) => {
      input.el.value = '';
      input.el.onchange = this.removeDisable.bind(this);
    });
    button.disabled = true;
    status.textContent = 'Success!';
    setTimeout(() => (status.textContent = ''), 3000);
  }

  afterInvalid(button: HTMLButtonElement, arr: IInput[]) {
    button.disabled = true;
    arr.forEach((input) => {
      input.el.onchange = () => Validate(arr, button);
    })
  }

  createPost(obj: IInputObj) {
    const post: IPost = {}
    for (let key in obj) {
      post[key] = obj[key].el.value
    }
    this.setPost(post);
  }

  removeDisable() {
    if (!this.submitButton.current) return;    
    this.submitButton.current.disabled = false;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name, 3-15 symbols:
          <input
            type="text"
            name=""
            id="name"
            ref={this.inputName}
            onFocus={(e) => (e.target.style.borderColor = '')}
            onChange={this.removeDisable.bind(this)}
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
            onChange={this.removeDisable.bind(this)}
          />
        </label>
        <button 
          ref={this.submitButton}
          disabled={true}
        >Submit</button>
        <label ref={this.submitStatus} />
      </form>
    );
  }
}

export default UserForm;
