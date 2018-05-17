const mainContainer = document.querySelectorAll('.theme')[0];

mainContainer.addEventListener('click', handleThemeUpdate);

function handleThemeUpdate() {
  switch (event.target.value) {
    case 'dark':
      // setProperty('#000', '#fff');
      mainContainer.className = 'theme dark';
      break;

    case 'calm':
      // setProperty('#B3E5FC', '#37474F');
      mainContainer.className = 'theme calm';
      break;

    case 'light':
      // setProperty('#f9f9f9', '#2c2c2c');
      mainContainer.className = 'theme light';
      break;
  }

  function setProperty(bgColor, txtColor) {
    mainContainer.style.setProperty('--bg', bgColor);
    mainContainer.style.setProperty('--bg-text', txtColor);
  }
}