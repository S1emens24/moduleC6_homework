const width = window.screen.width;
const height = window.screen.height;

const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
   alert(`Размер экрана: ширина = ${width}, высота = ${height} пикселей`);
});