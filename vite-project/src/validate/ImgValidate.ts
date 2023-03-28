export default function (el: HTMLInputElement, errorLabel: HTMLLabelElement) {
  const files = el.files as FileList;
  const result = files[0].type.includes('image');
  errorLabel.textContent = result ? '' : 'Error!';
  return result;
}
