
const buttonDecrementEl = document.querySelector('button[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('button[data-action="increment"]');
let valueEl = document.querySelector('#value');

let counterValue = 0;

buttonDecrementEl.addEventListener('click', () => {
    valueEl.textContent= `${(counterValue -=1)}`
       });
buttonIncrementEl.addEventListener('click', () => {
    valueEl.textContent= `${(counterValue +=1)}`
    });

