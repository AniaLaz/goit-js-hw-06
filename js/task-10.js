const inputEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('[data-create]')
const buttonDestroyEl = document.querySelector('[data-destroy]')
const divBoxesEl = document.querySelector('#boxes');

console.dir(divBoxesEl);

buttonCreateEl.addEventListener('click', onCreateBoxes);
buttonDestroyEl.addEventListener('click', OnDestroyBoxes);
buttonDestroyEl.addEventListener('click', onCleanInput);

const randomHexColor = getRandomHexColor();

function onCreateBoxes(amount) {
  amount = inputEl.value;
 
  const box =[];

  for (let i = 0; i < amount; i+=1) {
    let size = 30+i*10+'px';
    const div = document.createElement('div');
    div.style.width=`${size}`;
    div.style.height=`${size}`;
    div.style.backgroundColor=`${randomHexColor}`;

    box.push(div);  
  }
  divBoxesEl.append(...box);
};

function OnDestroyBoxes() {
  divBoxesEl.innerHTML='';
};

function onCleanInput(){
  inputEl.value = ''
};

function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 };

