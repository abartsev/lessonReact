import React, { Component, Fragment } from "react";
import Button from "./components/button";
import Form from "./components/form";
import PropTypes from "prop-types";
import LoadingHOC from "./HOC/LoadingHOC";
//import {createStore} from 'redux';

// const reducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));
// const increment = () => ({ type: 'INCREMENT' });
// store.dispatch(increment());
// export const Counter = ({ counter = 0 }) => {
//   return <h1>{`Counter ${counter}`}</h1>;
// };

// const ValidationMsg = ({ val }) => {
//   if (val >= 10) {
//     return <h2>Grate than 10</h2>;
//   } else {
//     return (
//       <h3>
//         Less than <em>10</em>
//       </h3>
//     );
//   }
// };

// const Tab1 = () => <h1>Text of tab1</h1>;

// const Tab2 = () => <h1>Text of tab2</h1>;

// const Tab3 = () => <h1>Text of tab3</h1>;

// const people = ["Jack", "Max", "Leo", "Alex"];
// const TABS_BTN = [
//   {
//     dataName: 1,
//     title: "Tab1",
//     icon: "+"
//   },
//   {
//     dataName: 2,
//     title: "Tab2",
//     icon: "-"
//   },
//   {
//     dataName: 3,
//     title: "Tab3",
//     icon: "*"
//   }
// ];
class AppComponentUI extends Component {
  render() {
    return <div>{this.props.data.hello}</div>;
  }
}

const AppComponent = LoadingHOC("data")(AppComponentUI);

class App extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.updateState({
      hello: "hello"
    });
  }
  updateState = data => {
    setTimeout(() => {
      this.setState({
        data
      });
    }, 3000);
  };
  //   state = {
  //     activeTab: 1
  //   };

  //   handleTab = e => {
  //     this.setState({
  //       activeTab: +e.target.getAttribute("data-name")
  //     });
  //   };

  render() {
    // const { activeTab } = this.state;
    return (
      <Fragment>
        <AppComponent data={this.state.data} />
        {/* <Form /> */}
        {/* {TABS_BTN.map(({ dataName, title }, i) => (
          <button key={i} data-name={dataName} onClick={this.handleTab}>
            {title}
          </button>
        ))}

        {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3 />}
        <div>
          {`Active tab is: ${
            activeTab === 1 ? "first" : activeTab === 2 ? "second" : "third"
          }`}
        </div>
        <ul>
          {people.map((elem, i) => (
            <li key={i}>{elem}</li>
          ))}
        </ul> */}
      </Fragment>
    );
  }

  // static propTypes = {
  //   children: PropTypes.element
  // };
  // static defaultProps = {
  //   children: null
  // };
  // state = {
  //   counter: 0
  // };
  // handleClick = e => {
  //   console.log(e);
  //   this.setState(({ counter }) => ({ counter: ++counter }));
  // };
  // render() {
  //   const { counter } = this.state;
  //   const { children } = this.props;

  //   return (
  //     <div className="App">
  //       <header className="App-header">{counter}</header>
  //       {children}
  //       <Button onClick={this.handleClick} />
  //     </div>
  //   );
  // }
}

export default App;
