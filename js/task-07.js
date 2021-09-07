const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', onSizeStr);

function onSizeStr(elem) {
  elem.preventDefault();
  textRef.style.fontSize = `${inputRef.value}px`;
}
