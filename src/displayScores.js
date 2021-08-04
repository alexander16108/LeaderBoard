const displayResult = (user) => {
  const ul = document.getElementById('score');

  const li = document.createElement('li');
  li.classList.add('table');

  const Text = document.createElement('p');
  Text.innerHTML = `${user.user}: ${user.score}`;

  li.appendChild(Text);
  ul.appendChild(li);
};

export default displayResult;