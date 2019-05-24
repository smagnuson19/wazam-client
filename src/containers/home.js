import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ReactMic } from 'react-mic';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: false,
    };
    this.recordingToggle = this.recordingToggle.bind(this);
  }


  // onData(recordedBlob) {
  //   console.log('chunk of real-time data is: ', recordedBlob);
  // }

  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
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
export default withRouter(connect()(Home));
