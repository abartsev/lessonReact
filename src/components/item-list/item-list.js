import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service';
import './item-list.css';
import Spinner from '../spinner';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null
  }

  componentDidMount() {
    this.swapiService.getAllPeople()
      .then((peopleList) => this.setState({
        peopleList
      }))
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList)
      return <Spinner />
    return (
      <ul>
        {peopleList.map(elem =>
          <li>{elem.name}</li>
        )

        }
      </ul>
    )
  }
}
