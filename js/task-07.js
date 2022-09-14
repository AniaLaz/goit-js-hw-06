const input =  document.querySelector('#font-size-control');
const spanText =  document.querySelector('#text');

input.value = Number(input.attributes.min.value);

input.addEventListener('input', onInputChenge);

function onInputChenge() {
        spanText.style.fontSize =  input.value + 'px';       
}

