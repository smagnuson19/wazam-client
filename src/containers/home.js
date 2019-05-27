import React, { Component } from 'react';

import { ReactMic } from 'react-mic';
import axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: false,
      results: false,
      recordingData: '',
    };
    this.recordingToggle = this.recordingToggle.bind(this);
    this.redoToggle = this.redoToggle.bind(this);
    this.onStop = this.onStop.bind(this);
  }

  onStop(recordedBlob) {
    console.log('recordedBlob is: ', String(recordedBlob.blobURL));
    this.postRecording(recordedBlob);
    this.setState(prevState => ({
      results: !prevState.results,
    }));
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
      this.setState({ recordingData: response });
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

  redoToggle() {
    this.setState(prevState => ({
      results: !prevState.results,
      recordingData: '',
    }));
  }

  displaySongs() {
    console.log(this.state.recordingData);
    if (this.state.recordingData === '') {
      return (
        <div className="songBox">
          <div className="headerBox">
            <p>
              {' '}
              {'Wazaming.....'}
            </p>
          </div>
        </div>
      );
    } else if (this.state.recordingData.data === 'No tracks matched, please try again.') {
      return (
        <div className="songBox">
          <div className="headerBox">
            <p>
              {' '}
              {'No tracks matched, please try again.'}
            </p>
          </div>
          <div className="redoBox"
            onClick={this.redoToggle}
            role="button"
            tabIndex={0}
          >
            <p>
              {' '}
              {'Wazam it again!'}
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="songBox">
          <div className="headerBox">
            <p>
              {' '}
              {'Top Results'}
            </p>
          </div>
          <div className="song">
            <p>
              {' '}
              {'1. '}
              <img src={this.state.recordingData.data[0].image} alt="Logo" width="50" height="50" />
              <a href={this.state.recordingData.data[0].spotify}>{this.state.recordingData.data[0].title}</a>
              {' by '}
              {this.state.recordingData.data[0].artist}
            </p>
          </div>
          <div className="song">
            <p>
              {'2. '}
              <img src={this.state.recordingData.data[1].image} alt="Logo" width="50" height="50" />
              <a href={this.state.recordingData.data[1].spotify}>{this.state.recordingData.data[1].title}</a>
              {' by '}
              {this.state.recordingData.data[1].artist}
            </p>
          </div>
          <div className="song">
            <p>
              {'3. '}
              <img src={this.state.recordingData.data[2].image} alt="Logo" width="50" height="50" />
              <a href={this.state.recordingData.data[2].spotify}>{this.state.recordingData.data[2].title}</a>
              {' by '}
              {this.state.recordingData.data[2].artist}
            </p>
          </div>
          <div className="redoBox"
            onClick={this.redoToggle}
            role="button"
            tabIndex={0}
          >
            <p>
              {' '}
              {'Wazam it again!'}
            </p>
          </div>
        </div>
      );
    }
  }

  render() {
    if (this.state.results === false) {
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
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <div className="boundingBox">
            {this.displaySongs()}
          </div>
        </div>
      );
    }
  }
}


// react-redux glue -- outputs Container that knows how to call actions
// new way to connect with react router 4
export default Home;
