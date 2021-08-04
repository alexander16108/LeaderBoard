import axios from 'axios';

const sendData = (data) => {
  axios
  .post(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/',
      data,
    )
    .then((res) => res.data);
};

export default sendData;