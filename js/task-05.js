const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', onEditInputName);

function onEditInputName(event) {
  outputNameRef.textContent = event.target.value;

  const { value } = event.target;
  if (!value) {
    outputNameRef.textContent = 'незнакомец';
  }
}
