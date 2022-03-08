const button = document.querySelector('button');
const popup = document.querySelector('.popup-back');
const closeButton = document.querySelector('.popup-exit');

button.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});