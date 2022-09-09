const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients'); 


// const elements = ingredients.map(
//   ingredient => {
//     const listEl = document.createElement('li');
//     listEl.classList.add('item');
//     listEl.textContent = ingredient;
//     console.log(ingredient);
//       console.log(listEl);
//       return listEl
//   }
// );
// ingredientsEl.append(...elements);



const makeIngredients = options =>{
  return options.map (
    option => {
          const listEl = document.createElement('li');
          listEl.classList.add('item');
          listEl.textContent = option;
          console.log(option);
          console.log(listEl);
          return listEl;
        });
};

const elements = makeIngredients(ingredients);
ingredientsEl.append(...elements);









