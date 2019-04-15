import React, { Component } from "react";

class Button extends Component {
  handleClick = e => {
    console.log(e);
    //this.setState(({ counter }) => ({ counter: ++counter }));
  };

  render() {
    return <button onClick={this.handleClick}>+</button>;
  }
}
export default Button;
