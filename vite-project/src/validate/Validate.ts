import DateValidate from "./DateValidate";

interface IValidate {
  regex?: RegExp;
  el: HTMLInputElement;
}

export default function (arr: IValidate[]) {
  const boolArr = arr.map(({ regex, el }) => {
    el.style.outline = '';
    
    if (!regex) {
      const result = el.checked;
      el.style.outline = result ? '' : '1px solid red';
      return el.checked;
    }

    if (el.value.match(regex)) {
      if (el.type === 'date') {
        DateValidate(el);
      }
      return true;
    }
    el.style.outline = '1px solid red';
    return false;
  });
  const result = boolArr.every((el) => el);
  return result;
}
