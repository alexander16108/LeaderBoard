import './style.css';
import {
  getGame, refreshPage, submit,
} from './displayScores'

const displayResult = () => {
  const ul = document.getElementById('scoreList');
  const li = document.createElement('li');
  li.classList.add('table');
  // li.innerHTML = `

  // `;
  ul.append(li);

  getGame();
  refreshPage();
  document.getElementById('Refresh').addEventListener('click', refreshPage);
  document.getElementById('submit').addEventListener('click', submit);
};

document.addEventListener('DOMContentLoaded', displayResult)