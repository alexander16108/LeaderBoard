const displayResult = (user) => {
  const ul = document.getElementById('scoreList');

  const li = document.createElement('li');
  li.classList.add('table');
  li.innerHTML = `
  ${user.user}: ${user.score}
  `;
  ul.appendChild(li);
};
export default displayResult;