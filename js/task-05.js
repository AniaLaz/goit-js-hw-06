const refs =
{   
    input: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}
refs.input.addEventListener ('input', onInputChenge);

function onInputChenge(event) {
    console.log(event.currentTarget.value);
    refs.nameOutput.textContent = event.currentTarget.value.trim();
    if (event.currentTarget.value===""){
        refs.nameOutput.textContent = "Anonymous"
    }
}