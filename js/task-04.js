const counterRef = document.querySelector('#counter');
const valueRef = document.querySelector('#value');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const btnDecrementRef = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

btnIncrementRef.addEventListener('click', onIncrement);
btnDecrementRef.addEventListener('click', onDecrement);

function onIncrement() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function onDecrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}
