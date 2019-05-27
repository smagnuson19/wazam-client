import axios from 'axios';


export const ROOT_URL = 'https://localhost.com/5000';

export const ActionTypes = {
  FETCH_SONGS: 'FETCH_SONGS',
};

export function postRecording(recordingURL) {
  axios.post(`${ROOT_URL}/music`, {
    payload: recordingURL,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
