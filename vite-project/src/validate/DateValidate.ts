export default function (el: HTMLInputElement, errorLabel: HTMLLabelElement) {
  const date = new Date(el.value);
  const currentDate = new Date();
  const result = date.getTime() < currentDate.getTime();
  errorLabel.textContent = result ? '' : 'Error!';
  return result;
}
