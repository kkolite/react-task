import React, { Component } from 'react';
import { IInputObj, IPost, IRadio } from '../data/types';
import Validate from '../validate/Validate';

interface IProps {
  setPost: (obj: IPost) => void;
}

class UserForm extends Component<IProps> {
  form: React.RefObject<HTMLFormElement> = React.createRef();
  inputName: React.RefObject<HTMLInputElement> = React.createRef();
  inputDate: React.RefObject<HTMLInputElement> = React.createRef();
  inputCheck: React.RefObject<HTMLInputElement> = React.createRef();
  inputSelect: React.RefObject<HTMLSelectElement> = React.createRef();
  inputRadioOne: React.RefObject<HTMLInputElement> = React.createRef();
  inputRadioTwo: React.RefObject<HTMLInputElement> = React.createRef();
  inputFile: React.RefObject<HTMLInputElement> = React.createRef();
  submitButton: React.RefObject<HTMLButtonElement> = React.createRef();
  submitStatus: React.RefObject<HTMLLabelElement> = React.createRef();
  nameError: React.RefObject<HTMLLabelElement> = React.createRef();
  dateError: React.RefObject<HTMLLabelElement> = React.createRef();
  selectError: React.RefObject<HTMLLabelElement> = React.createRef();
  radioError: React.RefObject<HTMLLabelElement> = React.createRef();
  fileError: React.RefObject<HTMLLabelElement> = React.createRef();
  checkError: React.RefObject<HTMLLabelElement> = React.createRef();
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

    const data = {
      name: {
        el: this.inputName.current,
        errorLabel: this.nameError.current,
        regex: /^[a-zA-Z0-9_-]{3,15}$/,
      },
      date: {
        el: this.inputDate.current,
        errorLabel: this.dateError.current,
        regex: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
      },
      value: {
        el: this.inputSelect.current,
        errorLabel: this.selectError.current,
      },
      img: {
        el: this.inputFile.current,
        errorLabel: this.fileError.current,
        regex: /[\S\s]+[\S]+/,
      },
      check: {
        el: this.inputCheck.current,
        errorLabel: this.checkError.current,
      },
    } as IInputObj;

    const addData = {
      region: this.inputSelect.current?.value,
      radio: this.inputRadioOne.current?.checked.toString(),
    } as IPost;

    const arrData = Object.values(data);
    const radioObj = {
      arr: [this.inputRadioOne.current?.checked, this.inputRadioTwo.current?.checked],
      errorLabel: this.radioError.current,
    } as IRadio;

    if (!Validate(arrData, radioObj)) return;

    const inputfile = this.inputFile.current;
    if (!inputfile?.files) return;

    this.createPost(data, addData, inputfile.files);
    this.afterValid(submitStatus);
  }

  afterValid(status: HTMLLabelElement) {
    const check = this.inputCheck.current;
    if (!check) return;
    this.form.current?.reset();

    status.textContent = 'Success!';
    setTimeout(() => (status.textContent = ''), 3000);
  }

  createPost(obj: IInputObj, addObj: IPost, files: FileList) {
    const post: IPost = { ...addObj };
    for (const key in obj) {
      if (obj[key].el.type === 'file') continue;
      post[key] = obj[key].el.value;
    }

    const reader = new FileReader();
    const file = files[0];
    reader.onloadend = () => {
      post.file = reader.result as string;
      this.setPost(post);
    };
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="form" ref={this.form}>
        <label className="form__label">
          Name, 3-15 symbols:
          <input type="text" name="" className="form__control" id="name" ref={this.inputName} />
          <label ref={this.nameError} className="error__label"></label>
        </label>
        <label className="form__label">
          Date of Birth
          <input type="date" name="" className="form__control" id="date" ref={this.inputDate} />
          <label ref={this.dateError} className="error__label"></label>
        </label>
        <label className="form__label">
          Choose your region
          <select name="" id="" ref={this.inputSelect} className="form__control">
            <option value=""></option>
            <option value="by">BY</option>
            <option value="ru">RU</option>
            <option value="ua">UA</option>
          </select>
          <label ref={this.selectError} className="error__label"></label>
        </label>
        <fieldset id="group" className="form__radio-container">
          Relocation?
          <label>
            Yes
            <input
              className="form__control"
              type="radio"
              name="group"
              id=""
              value={'1'}
              ref={this.inputRadioOne}
            />
          </label>
          <label>
            No
            <input
              className="form__control"
              type="radio"
              name="group"
              id=""
              value={'2'}
              ref={this.inputRadioTwo}
            />
          </label>
          <label ref={this.radioError} className="error__label"></label>
        </fieldset>
        <label className="form__label">
          Photo
          <input type="file" accept="image/*" ref={this.inputFile} className="form__control" />
          <label ref={this.fileError} className="error__label"></label>
        </label>
        <label className="form__label">
          I consent to my personal data
          <input
            type="checkbox"
            name=""
            className="form__control"
            id="check"
            ref={this.inputCheck}
            value="qqq"
          />
          <label ref={this.checkError} className="error__label"></label>
        </label>
        <button ref={this.submitButton} className="form__submit">
          Submit
        </button>
        <label ref={this.submitStatus} className="form__success" />
      </form>
    );
  }
}

export default UserForm;
