'use script'

const categoriesEl = document.querySelector('#categories'); 
const list = categoriesEl.children;
const listLength = categoriesEl.children.length;
console.log(`Number of categories: ${listLength}`);

const arr = [...list]

arr.forEach(element => {
    console.log(`Category: ${element.querySelector(`h2`).textContent}`);
    console.log(`Elements:${element.querySelector(`ul`).children.length}`);
}
);


