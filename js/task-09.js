  const bodyEl = document.querySelector('body');
  const buttonEl = document.querySelector('.change-color');
  const colorEl = document.querySelector('.color');

  buttonEl.addEventListener('click', onChangeColor);

  function onChangeColor(event) { 
    // bodyEl.backgroundColor = getRandomHexColor();
    const RandomHexColor = getRandomHexColor()
    console.dir(bodyEl.style.backgroundColor=RandomHexColor);
      colorEl.textContent = RandomHexColor;
  }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
