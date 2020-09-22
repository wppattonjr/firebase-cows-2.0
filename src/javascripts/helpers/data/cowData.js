import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

// STUDENTS: Refactor this to use new Promise syntax
const getCows = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/cows.json`).then((response) => {
    const demCows = response.data;
    const cows = [];
    if (demCows) {
      Object.keys(demCows).forEach((cowId) => {
        cows.push(demCows[cowId]);
      });
    }
    resolve(cows);
  }).catch((error) => reject(error));
});

export default { getCows };
