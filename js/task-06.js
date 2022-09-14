const inputEl = document.querySelector("#validation-input")
const inputLength = Number(inputEl.getAttribute('data-length'))
console.log(inputEl);
console.log(inputLength);

inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);
inputEl.addEventListener('input', onInputChenge);

function onInputFocus() {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
}

function onInputBlur(event) {
   console.log(event.currentTarget.value.length);
   console.log(inputLength);
   if (event.currentTarget.value.trim().length === inputLength){
    inputEl.classList.add('valid')
   } else 
   inputEl.classList.add('invalid')  
}

function onInputChenge(event) {
    console.log(event.currentTarget.value.trim());
}

