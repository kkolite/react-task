interface IValidate {
  regex: RegExp;
  el: HTMLInputElement;
}

export default function (arr: IValidate[]) {
  const boolArr = arr.map(({ regex, el }) => {
    el.style.borderColor = '';
    if (el.value.match(regex)) {
      return true;
    }
    el.style.borderColor = 'red';
    return false;
  });
  return boolArr.every((el) => el);
}
