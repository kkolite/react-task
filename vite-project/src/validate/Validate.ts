import { IRadio } from '../data/types';
import DateValidate from './DateValidate';
import ImgValidate from './ImgValidate';

interface IValidate {
  regex?: RegExp;
  el: HTMLInputElement | HTMLSelectElement;
  errorLabel: HTMLLabelElement;
}

export default function (arr: IValidate[], radio: IRadio) {
  const radioCheck = radio.arr.includes(true);
  console.log(radioCheck, radio.errorLabel);

  radio.errorLabel.textContent = radioCheck ? '' : 'Error!';
  const boolArr = arr.map(({ regex, el, errorLabel }) => {
    errorLabel.textContent = '';

    if (el instanceof HTMLSelectElement) {
      const result = !!el.value.length;
      errorLabel.textContent = result ? '' : 'Error!';
      return result;
    }
    if (!regex) {
      const result = el.checked;
      errorLabel.textContent = result ? '' : 'Error!';
      return el.checked;
    }

    if (el.value.match(regex)) {
      if (el.type === 'date') {
        return DateValidate(el, errorLabel);
      }
      if (el.type === 'file') {
        return ImgValidate(el, errorLabel);
      }
      return true;
    }
    errorLabel.textContent = 'Error!';
    return false;
  });
  const result = boolArr.every((el) => el);
  return result && radioCheck;
}
