import React, { Component, Fragment } from "react";

const TitleContext = React.createContext();

const LevelThree = () => (
 // eslint-disable-next-line no-unused-expressions
 <TitleContext.Consumer>
   { title => <h1>{title}</h1>}
 </TitleContext.Consumer>
)
const LevelTwo = () => <LevelThree />
const LevelOne = () => <LevelTwo />

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
      <TitleContext.Provider value="simple title" >
      <LevelOne/>
      </TitleContext.Provider>
    );
  }

}

export default App;
