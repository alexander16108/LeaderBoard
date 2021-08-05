const displayResult = (user) => {
  const ul = document.getElementById('score-List');

  const li = document.createElement('li');
  li.classList.add('table');

  const p = document.createElement('p');
  p.innerHTML = `
  ${user.user}: ${user.score}
  `;

  li.appendChild(p);
  ul.appendChild(li);
};
export default displayResult;