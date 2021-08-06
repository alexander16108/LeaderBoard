import './style.css';
import {
  getGame, refreshPage, submit,
} from './displayScores';

const displayResult = () => {
  const ul = document.getElementById('scores');
  const li = document.createElement('li');
  // const div = document.createElement('div');
  // div.classList.add('contain');
  // const pop = document.createElement('p')
  // pop.innerText = 'input  has been added';
  // pop.id = 'displayElement';
  ul.append(li);
  // div.append(ul)

  getGame();
  refreshPage();
  document.getElementById('Refresh').addEventListener('click', refreshPage);
  document.getElementById('submit').addEventListener('click', submit);
};

document.addEventListener('DOMContentLoaded', displayResult);