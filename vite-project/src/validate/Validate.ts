import DateValidate from './DateValidate';

interface IValidate {
  regex?: RegExp,
  el: HTMLInputElement,
  errorLabel: HTMLLabelElement
}

export default function (arr: IValidate[]) {
  const boolArr = arr.map(({ regex, el, errorLabel }) => {
    errorLabel.textContent = '';

    if (!regex) {
      const result = el.checked;
      errorLabel.textContent = result ? '' : 'Error!';
      return el.checked;
    }

    if (el.value.match(regex)) {
      if (el.type === 'date') {
        return DateValidate(el, errorLabel);
      }
      return true;
    }
    errorLabel.textContent = 'Error!';
    return false;
  });
  const result = boolArr.every((el) => el);
  return result;
}
