import './style.css';

window.addEventListener('load', () => {
  const ol = document.querySelector('ordered-score');
  new Array(6).fill(1).forEach((_, index) => {
    const li = document.createElement('li');
    li.innerText = `Name: ${index}`;
    ol.appendChild(li);
  });
});