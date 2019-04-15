import React, { Component, Fragment } from "react";
import Title from './components/title'

const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';


class App extends Component {
  state = {
    searhQuery: "",
    result: {}
  }

  componentDidMount(){
    const { searhQuery } = this.state;

    fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searhQuery}`)
      .then(res=> res.json())
      .then(result => this.setNews(result))
      .catch(error => error)
  }

  setNews = result => {
    this.setState({result});
    console.log(this.state.result);
  }
  render() {
    return (
      <div>
      
      </div>
    );
  }

}

export default App;
