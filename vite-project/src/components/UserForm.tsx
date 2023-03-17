import React, { Component } from 'react';
import { IInput, IInputObj, IPost } from '../data/types';
import Validate from '../hoocks/Validate';

interface IProps {
  setPost: (obj: IPost) => void;
}

class UserForm extends Component<IProps> {
  inputName: React.RefObject<HTMLInputElement> = React.createRef();
  inputDate: React.RefObject<HTMLInputElement> = React.createRef();
  inputCheck: React.RefObject<HTMLInputElement> = React.createRef();
  inputSelect: React.RefObject<HTMLSelectElement> = React.createRef();
  submitButton: React.RefObject<HTMLButtonElement> = React.createRef();
  submitStatus: React.RefObject<HTMLLabelElement> = React.createRef();
  inputRadio: React.RefObject<HTMLInputElement> = React.createRef();
  inputFile: React.RefObject<HTMLInputElement> = React.createRef();
  imgFile: React.RefObject<HTMLImageElement> = React.createRef();
  setPost: (obj: IPost) => void;

  constructor(props: IProps) {
    super(props);
    this.setPost = props.setPost;
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();    
    const submitStatus = this.submitStatus.current;
    const submitButton = this.submitButton.current;
    if (!submitStatus || !submitButton) return;

    const elObj = {
      name: {
        el: this.inputName.current,
        regex: /^[a-z0-9_-]{3,15}$/,
      },
      date: {
        el: this.inputDate.current,
        regex: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
      },
      img: {
        el: this.inputFile.current,
        regex: /[\S\s]+[\S]+/,
      }
    } as IInputObj;

    const addObj = {
      checkbox: this.inputCheck.current?.checked.toString(),
      region: this.inputSelect.current?.value,
      radio: this.inputRadio.current?.checked.toString()
    } as IPost;
    
    const elArr = Object.values(elObj);
    if (!Validate(elArr)) {
      this.afterInvalid(submitButton, elArr);
      return;
    }
    
    const inputfile = this.inputFile.current;
    if (!inputfile?.files) return;

    this.createPost(elObj, addObj, inputfile.files);
    this.afterValid(submitButton, submitStatus, elArr);
  }

  handleImg() {
    const preview = this.imgFile.current;
    const input = this.inputFile.current;

    if (!input || !preview) return;
    if (!input.files) return;

    const reader = new FileReader();
    const file = input.files[0];

    reader.onloadend = function () {
      preview.src = reader.result as string;
    }

    if (!file) {
      preview.src = ''
      return;
    }

    reader.readAsDataURL(file);
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

  createPost(obj: IInputObj, addObj: IPost, files: FileList) {
    const post: IPost = {...addObj}
    for (let key in obj) {
      if (obj[key].el.type === 'file') continue;
      post[key] = obj[key].el.value
    }

    const reader = new FileReader();       
    const file = files[0];
    reader.onloadend = () => {
      post.file = reader.result as string;
      this.setPost(post);
    }
    reader.readAsDataURL(file);
  }

  removeDisable() {
    if (!this.submitButton.current) return;    
    this.submitButton.current.disabled = false;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="form">
        <label>
          Name, 3-15 symbols:
          <input
            type="text"
            name=""
            id="name"
            ref={this.inputName}
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
            onChange={this.removeDisable.bind(this)}
          />
        </label>
        <label>
          Check
          <input
            type="checkbox"
            name=""
            id="check"
            ref={this.inputCheck}
            value="qqq"
            onChange={this.removeDisable.bind(this)}
          />
        </label>
        <label>
          Choose smth
          <select name="" id="" ref={this.inputSelect}>
            <option value="by">BY</option>
            <option value="ru">RU</option>
            <option value="ua">UA</option>
          </select>
        </label>
        <fieldset id="group">
          <label>
            Yes
            <input type="radio" name="group" id="" value={'1'} ref={this.inputRadio}/>
          </label>
          <label>
            No
            <input type="radio" name="group" id="" value={'2'} defaultChecked/>
          </label>
        </fieldset>
        <label>
          Photo
          <input 
            type="file" 
            accept="image/*" 
            ref={this.inputFile} 
            onChange={this.handleImg.bind(this)} 
          />
        </label>
        <img src="" alt="" ref={this.imgFile} height="200"/>
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
