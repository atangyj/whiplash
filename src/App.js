import React from 'react';
import ReactDOM from 'react-dom';
import clap from 'clap.wav';


export class DrumPad extends React.Component {
  render(){
    return(
      <div>
        <span>Clap</span>
        <audio>
          <source src={clap} type="audio/wav">
        </audio>
      </div>

    )
  }
}
