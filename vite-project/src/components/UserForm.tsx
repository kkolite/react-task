import React, { Component } from 'react';
import { IInput, IInputObj, IPost } from '../data/types';
import Validate from '../validate/Validate';

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
  form: React.RefObject<HTMLFormElement> = React.createRef();
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
        regex: /^[a-z0-9_-]{3,15}$/,
      },
      date: {
        el: this.inputDate.current,
        regex: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
      },
      img: {
        el: this.inputFile.current,
        regex: /[\S\s]+[\S]+/,
      },
      check: {
        el: this.inputCheck.current,
      },
    } as IInputObj;

    const addData = {
      region: this.inputSelect.current?.value,
      radio: this.inputRadio.current?.checked.toString(),
    } as IPost;

    const arrData = Object.values(data);

    if (!Validate(arrData)) {
      this.afterInvalid(arrData);
      return;
    }

    const inputfile = this.inputFile.current;
    if (!inputfile?.files) return;

    this.createPost(data, addData, inputfile.files);
    this.afterValid(submitStatus, arrData);
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
    };

    if (!file) {
      preview.src = '';
      return;
    }

    reader.readAsDataURL(file);
  }

  afterValid(status: HTMLLabelElement, arr: IInput[]) {
    const prevImg = this.imgFile.current;
    const check = this.inputCheck.current;
    if (!prevImg || !check) return;
    prevImg.src = '';
    this.form.current?.reset();

    status.textContent = 'Success!';
    setTimeout(() => (status.textContent = ''), 3000);
  }

  afterInvalid(arr: IInput[]) {
    arr.forEach((input) => {
      input.el.onchange = () => Validate(arr);
    });
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
        <label>
          Name, 3-15 symbols:
          <input type="text" name="" className="form__control" id="name" ref={this.inputName} />
        </label>
        <label>
          Date of Birth
          <input type="date" name="" className="form__control" id="date" ref={this.inputDate} />
        </label>
        <label>
          Choose your region
          <select name="" id="" ref={this.inputSelect} className="form__control">
            <option value="by">BY</option>
            <option value="ru">RU</option>
            <option value="ua">UA</option>
          </select>
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
              ref={this.inputRadio}
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
              defaultChecked
            />
          </label>
        </fieldset>
        <label>
          Photo
          <input
            type="file"
            accept="image/*"
            ref={this.inputFile}
            className="form__control"
            onChange={this.handleImg.bind(this)}
          />
        </label>
        <img src="" alt="" ref={this.imgFile} className="user-post__img" />
        <label>
          I consent to my personal data
          <input
            type="checkbox"
            name=""
            className="form__control"
            id="check"
            ref={this.inputCheck}
            value="qqq"
          />
        </label>
        <button ref={this.submitButton} className="form__submit">
          Submit
        </button>
        <label ref={this.submitStatus} />
      </form>
    );
  }
}

export default UserForm;
