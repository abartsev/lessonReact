import React, { Component, Fragment } from "react";
import ReactDOM from 'react-dom'


class  MyPortal extends Component{
  el = document.createElement('div');

  componentDidMount(){
    document.body.appendChild(this.el);
  }
  
  componentWillUnmount(){
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
class App extends Component {
 state ={
   counter: 0
 }
 handleClick = () => {
   this.setState(({counter})=>({
    counter: ++counter,
   }))
 }
  render() {

    return (
      <div onClick={this.handleClick}>
      <p>Clicks: {this.state.counter}</p>
        <span>Text</span>
        <MyPortal>
          <div>Test</div>
          <button >+</button>
        </MyPortal>

      </div>
    );
  }

}

export default App;
