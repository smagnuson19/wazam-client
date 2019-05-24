import axios from 'axios';


export const ROOT_URL = 'https://stream.watsonplatform.net/speech-to-text/api';
export const API_KEY = 'SuvOyQHqci1puJHIPgcs8aQDE9h0TEkrUJKZkwFsw7Xt';

export const ActionTypes = {
  FETCH_SONGS: 'FETCH_SONGS',
};

export function postRecording(recordingURL) {
  axios.post(`${ROOT_URL}/v1/recognize`, {
    apikey: `${API_KEY}`,
    data: 'Flintstone',
  }, { headers: 'Content-Type: audio/mv3' })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
