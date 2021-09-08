// const inputTextRef = document.querySelector('#validation-input');
// const inputLengthRef = inputTextRef.dataset.length;

// inputTextRef.addEventListener('blur', onInputBlur);

// inputTextRef.addEventListener('focus', onInputFocus);

// function validate(str) {
//   if (str.length == inputLengthRef) return str;
// }

// function onInputBlur(event) {
//   const { value } = event.target;
//   if (!validate(value)) {
//     inputTextRef.classList.add('invalid');
//     inputTextRef.classList.add('valid');
//   }
// }

// function onInputFocus(event) {
//   event.target.classList.remove('invalid');
//   event.target.classList.add('valid');
// }

const inputTextRef = document.querySelector('#validation-input');
const inputLengthRef = inputTextRef.dataset.length;

inputTextRef.addEventListener('blur', onInputBlur);
inputTextRef.addEventListener('focus', onInputFocus);

function validate(str) {
  if (str.length == inputLengthRef) return str;
}

function onInputBlur(event) {
  const { value } = event.target;
  if (!validate(value)) {
    inputTextRef.classList.add('invalid');
    inputTextRef.classList.add('valid');
  }
}
function onInputFocus(event) {
  event.target.classList.remove('invalid');
  event.target.classList.add('valid');
}
