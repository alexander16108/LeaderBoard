import './style.css';
import sendData from './POST';
import json from './makeJSON';
import getUser from './GET';
import remove from './remove';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wwkGIA4V1TgaiFdJxS1PX0cI73nUXzQQnx5UI2Pc/scores';

const submitScore = document.getElementById('submitInput');

submitScore.addEventListener('click', (event) => {
  event.preventDefault();
  const name = document.getElementById('name-input').value;
  const score = document.getElementById('number-input').value;
  if (name.length > 0 && score.length > 0) {
    sendData(makeJSON(name, score));
    document.getElementById('name-input');
    document.getElementById('number-input');
  }
});

getUser(url);

const reload = document.getElementById('Refresh-page');
reload.addEventListener('click', () => {
  remove();
  getUser(url);
});