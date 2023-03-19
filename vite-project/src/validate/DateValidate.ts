export default function (el: HTMLInputElement) {
  const date = new Date(el.value);
  const currentDate = new Date();
  const result = date.getTime() < currentDate.getTime();
  el.style.outline = result ? '' : '1px solid red';
  return result;
}
