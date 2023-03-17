interface IValidate {
  regex: RegExp;
  el: HTMLInputElement;
}

export default function (arr: IValidate[], button?: HTMLButtonElement) {
  const boolArr = arr.map(({ regex, el }) => {
    el.style.borderColor = '';
    if (el.value.match(regex)) {
      return true;
    }
    el.style.borderColor = 'red'
    return false;
  });
  const result = boolArr.every((el) => el);
  if (button) button.disabled = !result;
  return result;
}
