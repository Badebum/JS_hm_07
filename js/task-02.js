const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.querySelector('#ingredients');

const liRef = ingredients.map(text => {
  const liRef = document.createElement('li');
  liRef.classList.add('text');
  liRef.textContent = text;

  return liRef;
});

ulRef.append(...liRef);
