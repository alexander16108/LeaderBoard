
const remove = () => {
  const ul = document.getElementById('');
  let child = ul.lastElementChild;
  while (child) {
    ul.removeChild(child);
    child = ul.lastElementChild;
  }
};

export default remove;