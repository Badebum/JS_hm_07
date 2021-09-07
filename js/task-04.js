const counterRef = document.querySelector('#counter');
const valuevRef = document.querySelector('#value');
const BtnIncrementRef = document.querySelector('[data-action="increment"]');
const BtnDecrementRef = document.querySelector('[data-action="decrement"]');

BtnIncrementRef.addEventListener('click', onIncrement);
BtnDecrementRef.addEventListener('click', onDecrement);

let counterValue = 0;

function onIncrement() {
  counterValue += 1;
  valuevRef.textContent = counterValue;
}

function onDecrement() {
  counterValue -= 1;
  valuevRef.textContent = counterValue;
}
