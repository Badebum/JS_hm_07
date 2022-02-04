const mainBoxDivRef = document.querySelector('#boxes');
const createDivBtn = document.querySelector('[data-action="render"]');
const destroyDivBtn = document.querySelector('[data-action="destroy"]');
const input = document.querySelector('#controls input');

const onInputChange = e => {
  input.setAttribute('count', Number(e.currentTarget.value));
};

input.addEventListener('input', onInputChange);

let baseBoxSize = 30;

const onCreateBoxes = () => {
  let countBox = Number(input.getAttribute('count'));
  for (let i = 0; i < countBox; i++) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    baseBoxSize += 10;
    const newBox = document.createElement('div');
    newBox.style.background = `#${randomColor}`;
    newBox.style.width = baseBoxSize + 'px';
    newBox.style.height = baseBoxSize + 'px';
    newBox.style.margin = '10px';
    newBox.classList.add('new-box');
    mainBoxDivRef.append(newBox);
  }
};

createDivBtn.addEventListener('click', onCreateBoxes);

const onDestroyBoxes = () => {
  const allBoxes = document.querySelectorAll('.new-box');

  for (let box of allBoxes) {
    mainBoxDivRef.removeChild(box);
  }

  baseBoxSize = 30;
};

destroyDivBtn.addEventListener('click', onDestroyBoxes);
