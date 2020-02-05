import React from "react";
import './Button.css';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = { toggled: true }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState( { toggled: ! this.state.toggled})
  }

  render() {
    return (
      <button
         data-testid="button" 
         className = {this.state.toggled ? "toggled" : "untoggled"} 
         onClick = {this.handleClick}
      >
      
      {this.props.children ? this.props.children : "Click here"}
      </button>);
  }

}


export default Button;
