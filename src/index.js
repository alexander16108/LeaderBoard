import './style.css';
import sendData from './POST';
import json from './makeJSON';
import getUser from './GET';
import remove from './remove';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const submitScore = document.getElementById('submit');

submitScore.addEventListener('click', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('number').value;
  if (name.length > 0 && score.length > 0) {
    sendData(json(name, score));
    document.getElementById('name');
    document.getElementById('number');
  }
});

getUser(url);

const reload = document.getElementById('Refresh');
reload.addEventListener('click', () => {
  remove();
  getUser(url);
});