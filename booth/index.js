const root = document.documentElement;
const range = document.querySelector('.booth-slider');

range.addEventListener('input', handleSlider);

function handleSlider(e) {
  const value = e.target.value;
  root.style.setProperty('--slider', value);
}

const inputsContainer = document.querySelector('.color-boxes');
inputsContainer.addEventListener('input', handleInputChange);

function handleInputChange(e) {
  const value = e.target.value;
  let inputId = e.target.parentNode.id;
  let inputBg = `--bg-${inputId}`;
  root.style.setProperty(inputBg, value);
}