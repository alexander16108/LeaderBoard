import './style.css';
import sendData from './POST.js';
import json from './makeJSON.js';
import getUser from './GET.js';
import remove from './remove.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wwkGIA4V1TgaiFdJxS1PX0cI73nUXzQQnx5UI2Pc/scores';

const submitScore = document.getElementById('submit');

submitScore.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('clientName').value;
  const score = document.getElementById('clientScore').value;
  if (name.length > 0 && score.length > 0) {
    sendData(json(name, score));
    document.getElementById('clientName').value = '';
    document.getElementById('clientScore').value = '';
  }
});

getUser(url);

const reload = document.getElementById('Refresh');
reload.addEventListener('click', () => {
  remove();
  getUser(url);
});