const categoriesRef = document.querySelector('#categories');
const itemCategoriesRef = document.querySelectorAll('.item');

console.log(`В списке ${itemCategoriesRef.length} категорий`);

const allListCategories = itemCategoriesRef.forEach(titel => {
  console.log(`Категория: ${titel.querySelector('h2').textContent}`);
  console.log(`Количество элементов ${titel.querySelectorAll('li').length}`);
});
