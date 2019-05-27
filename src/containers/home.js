import React, { Component } from 'react';

import { ReactMic } from 'react-mic';
import axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: false,
    };
    this.recordingToggle = this.recordingToggle.bind(this);
    this.onStop = this.onStop.bind(this);
  }

  onStop(recordedBlob) {
    console.log('recordedBlob is: ', String(recordedBlob.blobURL));
    this.postRecording(recordedBlob);
  }

  postRecording(recording) {
    const formData = new FormData();
    formData.append('Blob', recording.blob);

    axios({
      url: 'http://localhost:5000/music',
      method: 'POST',
      data: formData,
      headers: {
        enctype: 'multipart/form-data',
      },
    }).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });
  }


  recordingToggle() {
    this.setState(prevState => ({
      audio: !prevState.audio,
    }));
  }

  render() {
    return (
      <div className="wrapper">
        <div className="boundingBox">
          <div className="innerBox"
            onClick={this.recordingToggle}
            role="button"
            tabIndex={0}
          >
            <ReactMic
              record={this.state.audio}
              className="sound-wave"
              onStop={this.onStop}
              strokeColor="#000000"
              backgroundColor="#FF4081"
            />

            <p>
              {' '}
              {this.state.audio ? 'Stop' : 'Wazam It!'}
            </p>

          </div>
        </div>
        <p> Select a file to upload </p>
      </div>
    );
  }
}


// react-redux glue -- outputs Container that knows how to call actions
// new way to connect with react router 4
export default Home;
