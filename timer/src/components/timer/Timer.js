import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time:0
    }
  }
  
  componentDidMount() {
  setInterval(() => this.setState({
      time : this.state.time + 1
    }), 1000);
  }

  componentWillUnmount() {
   console.log(this.state.time)
  }
  
  render () {
    return (
      <div data-testid="timer">
        {this.state.time}
      </div>
    );
  }
}

export default Timer;

