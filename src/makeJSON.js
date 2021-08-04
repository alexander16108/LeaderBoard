const json = (name, score) => {
  score = Number(score);
  const client = {
    client: name,
    score,
  }
  return client;
};

export default json;