import React from 'react';


const padStyle = {
  border: '1px solid black'
}

export class DrumPad extends React.Component {
  constructor(props){
    super(props);
    this.state = { isPlay: 'played'};
    this.audio = React.createRef();
    this.handlePlay = this.handlePlay.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.removeClass = this.removeClass.bind(this);
  }

  playAudio(){
    this.audio.current.play();
  }

  removeClass(){
    this.setState({isPlay:'played'});
  }

  handlePlay(){
    this.setState({isPlay: 'playing'});
    this.playAudio();
    setTimeout(()=> this.removeClass(),100);
  }

  render(){
    return(
      <div onClick = {this.handlePlay} style={padStyle} className = {this.state.isPlay}>
        <span>{this.props.padName}</span>
        <audio ref={this.audio}>
          <source src={this.props.sound} type="audio/wav" />
        </audio>
      </div>

    )
  }
}
