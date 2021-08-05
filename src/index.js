import './style.css';
import {
  getGame, refreshPage, submit,
} from './displayScores';

const displayResult = () => {
  const ul = document.getElementById('scores');
  const li = document.createElement('li');
  ul.append(li);

  getGame();
  refreshPage();
  document.getElementById('Refresh').addEventListener('click', refreshPage);
  document.getElementById('submit').addEventListener('click', submit);
};

document.addEventListener('DOMContentLoaded', displayResult);